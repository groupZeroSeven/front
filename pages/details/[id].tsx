import { ButtonBig } from '@/src/components/button-big';
import { ButtonMedium } from '@/src/components/button-medium';
import { Header } from '@/src/components/header';
import { LoadContext } from '@/src/contexts/loadingContext';
import { UserContext } from '@/src/contexts/userContext';
import { iCreateComment } from '@/src/interfaces/adverts';
import { iComment } from '@/src/interfaces/user';
import { schemaCreateComment } from '@/src/schemas/createComment';
import { api } from '@/src/services/api';
import { MainDetailsStyle, ProfileContainer } from '@/src/styles/details';
import {
  Body_1_400,
  Body_2_400,
  Body_2_500,
  Details,
  Heading_6_600,
  Heading_7_500,
} from '@/src/styles/global';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { EditCommentModal } from '@/src/components/Modals/Edit Comment';
import { DeleteCommentModal } from '@/src/components/Modals/Delete Comment';
import { ProfilePic } from '@/src/components/ProfilePic';

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { setLoad } = React.useContext(LoadContext);

  const { user, setDetailAnnouncement, detailAnnouncement, isEditCommentModal, setIsEditCommentModal, isDeleteCommentModal, setIsDeleteCommentModal, comments, setComments } =
    React.useContext(UserContext);
 
  const [commentSelectedId, setCommentSelectedId] = React.useState<string>("")

  React.useEffect(() => {
    setLoad(true);
    if (id) {
      const getAnnouncement = async () => {
        try {
          const { data } = await toast.promise(
            api.get(`api/anoucements/${id}`),
            { pending: 'Waiting...' },
            { autoClose: 6000 }
          );

          setDetailAnnouncement(data);
        } catch (error: any) {
          console.log(error.response.data.message);
          toast.error(error.response.data.message, {
            position: 'bottom-right',
            autoClose: 5000,
          });
        } finally {
          setLoad(false);
        }
      };

      getAnnouncement();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, id]);

  React.useEffect(() => {
    const res = async () => {
      try {
        const {data} = await api.get(`api/${id}/comments/`)
        const filterdComments = data.filter((comment: iComment) => comment.announcement.id === id) 
        setComments(filterdComments)
      } catch (err) {
        console.log(err)
      }
    }
    res()
  }, [isEditCommentModal, isDeleteCommentModal])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCreateComment>({
    resolver: yupResolver(schemaCreateComment),
  });

  const handleSubmitFunction = async (data: iCreateComment) => {
    const token = localStorage.getItem('token');
    try {
      const res = await api.post(`api/${id}/comments/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success('Comentário criado com sucesso!', {
        theme: 'dark',
      })
      setComments([res.data, ...comments!]);
    } catch (err) {
      toast.error('Não foi possível criar o comentário', {
        theme: 'dark',
      });
    }
  }
  const time = (advertTime: string) => {
    const date = new Date(advertTime);
    const now = new Date();
    const timeDiffInMilliseconds = now.getTime() - date.getTime();
    const timeDiffInSeconds = Math.floor(timeDiffInMilliseconds / 1000);
    const timeDiffInMinutes = Math.floor(timeDiffInSeconds / 60);
    const timeDiffInHours = Math.floor(timeDiffInMinutes / 60);

    if (timeDiffInHours >= 24) {
      const timeDiffInDays = Math.floor(timeDiffInHours / 24);
      return timeDiffInDays + (timeDiffInDays === 1 ? " dia atrás" : " dias atrás");
    } else if (timeDiffInHours >= 1) {
      return timeDiffInHours + (timeDiffInHours === 1 ? " hora atrás" : " horas atrás");
    } else if (timeDiffInMinutes >= 1) {
      return timeDiffInMinutes + (timeDiffInMinutes === 1 ? " minuto atrás" : " minutos atrás");
    } else {
      return "há menos de 1 minuto";
    }
  }
  const toLogin = () => {
    if (!user) {
      router.push("/login")
    }
  }
  const editCommentModal = (commentId: string) => {
    setCommentSelectedId(commentId)
    setIsEditCommentModal(true)
  }

  const deleteCommentModal = (commentId: string) => {
    setCommentSelectedId(commentId)
    setIsDeleteCommentModal(true)
  } 

  return (
    <>
      <Header />
      {isEditCommentModal && <EditCommentModal commentId={commentSelectedId}/>}
      {isDeleteCommentModal && <DeleteCommentModal commentId={commentSelectedId}/>}
      <MainDetailsStyle>
        <div className="container">
          <span>
            {detailAnnouncement && (
              <span>
                <div className="menu-one">
                  <section className="img-default">
                    <Image
                      src={`${detailAnnouncement?.banner}`}
                      alt="Car"
                      width={294}
                      height={253}
                    />
                  </section>

                  <section className="info-car">
                    <Heading_6_600>
                      {`${detailAnnouncement?.brand} - ${detailAnnouncement?.model}`}
                    </Heading_6_600>
                    <div>
                      <Details href="#">{detailAnnouncement?.year}</Details>
                      <Details href="#">{detailAnnouncement?.mileage}</Details>
                    </div>
                    <Heading_7_500>{`R$: ${detailAnnouncement?.price}`}</Heading_7_500>
                    <span>
                      <ButtonMedium
                        bgColor="var(--color-brand-1)"
                        fontColor="var(--color-whiteFixed)"
                        borderColor="var(--color-brand-1)"
                      >
                        Comprar
                      </ButtonMedium>
                    </span>
                  </section>

                  <section className="description">
                    <Heading_6_600>Descrição</Heading_6_600>
                    <Body_1_400>{detailAnnouncement?.description}</Body_1_400>
                  </section>
                </div>

                <div className="menu-two">
                  <section className="photo-car">
                    <Heading_6_600>Fotos</Heading_6_600>
                    <ul>
                      {detailAnnouncement.images?.map((el, i) => (
                        <li key={i}>
                          <Image
                            src={el.url}
                            alt="Fotos"
                            width={95}
                            height={55}
                          />
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="profile">
                    <ProfilePic user={detailAnnouncement.user!.name} isLarge={true}/>
                    <Heading_6_600>
                      {detailAnnouncement.user?.name}
                    </Heading_6_600>
                    <Body_1_400>
                      {detailAnnouncement.user?.description}
                    </Body_1_400>
                    <div
                      onClick={() =>
                        router.push(`/seller/${detailAnnouncement.user?.id}`)
                      }
                    >
                      <ButtonBig
                        bgColor="var(--color-grey-0)"
                        fontColor="var(--color-whiteFixed)"
                        borderColor="var(--color-grey-0)"
                      >
                        Ver todos anuncios
                      </ButtonBig>
                    </div>
                  </section>
                </div>
              </span>
            )}
            <span>
              <div className="menu-three">
                <section className="commits">
                  <Heading_6_600>Comentários</Heading_6_600>
                  <ul>
                    {comments?.map((el, i) => (
                      <li key={i}>
                        {
                          el.user.id === user?.id ? (
                          <div className="containerIcons">
                          <button onClick={() => editCommentModal(el.id)}>
                            <EditIcon fontSize="medium"/>
                          </button>
                          <button onClick={() => deleteCommentModal(el.id)}>
                            <DeleteIcon fontSize="medium"/>
                          </button>
                        </div> ) : null
                        }
                        
                        <div>
                        <ProfileContainer>
                          <ProfilePic user={el.user.name} isLarge={false}/>
                          <Body_2_500>{el.user.name}</Body_2_500>
                        </ProfileContainer>
                          <Image
                            src="/image/ellipse.png"
                            alt="Ellipse"
                            width={4}
                            height={4}
                          ></Image>
                          <p>{time(el.createdAt)}</p>
                          {el.is_updated ? <p>(editado)</p> : null}
                        </div>
                        <Body_2_400>{el.text}</Body_2_400>
                      </li>
                    ))}
                  </ul>
                </section>

                <form className="commit" onSubmit={handleSubmit(handleSubmitFunction)}>
                  {user ? (
                    <ProfileContainer>
                      <ProfilePic user={user.name} isLarge={false}/>
                      <Body_2_500>{user.name}</Body_2_500>
                    </ProfileContainer>
                  ): null}
                  <textarea placeholder="Carro muito confortável, foi uma ótima experiência de compra..." id='text' {...register('text')}></textarea>
                  <span>
                    <button
                    type={user ? 'submit' : 'button'}
                    onClick={toLogin}
                    style={user ? {backgroundColor: "var(--color-brand-1)", cursor: "pointer"} : {backgroundColor: "var(--color-grey-5)"}}
                    >
                      Comentar
                    </button>
                  </span>
                  {/* <div>
                    <button>Gostei muito!</button>
                    <button>Incrível</button>
                    <button>Recomendarei para meus amigos!</button>
                  </div> */}
                </form>
              </div>
            </span>
          </span>
        </div>
      </MainDetailsStyle>
    </>
  );
}
