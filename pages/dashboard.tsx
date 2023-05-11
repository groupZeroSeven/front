import { ConfirmModal } from '@/src/components/Modals/Confirm';
import { CreateAdvertModal } from '@/src/components/Modals/Create Advert';
import { EditAdvertModal } from '@/src/components/Modals/Edit Advert';
import { ProfilePic } from '@/src/components/ProfilePic';
import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { AdvertsContext } from '@/src/contexts/advertsContext';
import { LoadContext } from '@/src/contexts/loadingContext';
import { UserContext } from '@/src/contexts/userContext';
import { IUserAnnouncement } from '@/src/interfaces/user';
import { api } from '@/src/services/api';
import { DashboardStyle } from '@/src/styles/dashboard';
import { ProfileContainer } from '@/src/styles/details';
import { Heading_1_700 } from '@/src/styles/global';
import { Heading_2_600 } from '@/src/styles/global';
import {
  Body_1_400,
  Body_2_400,
  Body_2_500,
  Button_big_text,
  Button_medium_text,
  Details,
  Heading_5_600,
  Heading_6_600,
  Heading_7_500,
  Heading_7_600,
  ProductCardStyled,
} from '@/src/styles/global';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const route = useRouter();

  const { setLoad } = React.useContext(LoadContext);

  const {
    isCreateAdvertModal,
    setIsCreateAdvertModal,
    user,
    userLogout,
    setMyAnnouncement,
    myAnnouncement,
    isEditAdvertModal,
    setIsEditAdvertModal,
    setDetailAnnouncement,
  } = React.useContext(UserContext);

  const { isConfirmModal } = React.useContext(AdvertsContext);

  const [advertSelected, setAdvertSelected] =
    React.useState<IUserAnnouncement>();

  React.useEffect(() => {
    setLoad(true);

    const token: string | null = localStorage.getItem('token');

    if (!token) return userLogout();

    if (user) {
      const getAnnouncement = async () => {
        try {
          const { data } = await toast.promise(
            api.get(`/api/anoucementUser/${user?.id}`, {
              headers: { Authorization: `Bearer ${token}` },
            }),
            {}
          );

          setMyAnnouncement(data.data.annoucements);
        } catch (e: any) {
          toast.error(e.response.data.message, {
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
  }, [user]);

  function editAdvert(advert: any) {
    setAdvertSelected(advert);
    setIsEditAdvertModal(true);
  }

  return (
    <>
      {isCreateAdvertModal && <CreateAdvertModal />}
      {isConfirmModal && (
        <ConfirmModal
          title="Seu anúncio foi criado com sucesso!"
          message="Agora você poderá ver seus negócios crescendo em grande escala"
        />
      )}
      <Header />
      {isEditAdvertModal && <EditAdvertModal id={advertSelected?.id} />}
      <DashboardStyle>
        { user &&
          <aside>
            <ProfilePic user={user!.name} isLarge={true}/>
            <span style={{ display: 'flex', gap: '9px', alignContent: 'center' }}>
              <Heading_6_600>{user?.name}</Heading_6_600>
              <Details href="">
                {user?.is_seller ? 'Anunciante' : 'Client'}
              </Details>
            </span>
            <Body_1_400>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta rem
              consectetur at, esse expedita eos eius id deleniti voluptas amet
              nobis explicabo maxime sit culpa, blanditiis temporibus ratione,
              placeat animi?
            </Body_1_400>
            <div style={{ maxWidth: '160px' }}>
              <Button_big_text
                style={{
                  backgroundColor: 'var(--color-grey-10',
                  color: 'var(--color-brand-1)',
                  border: '1px solid var(--color-brand-1)',
                }}
                onClick={(event: any) => {
                  event.preventDefault();
                  setIsCreateAdvertModal(true);
                }}
              >
                Criar anuncio
              </Button_big_text>
            </div>
          </aside>
        }

        <ul>
          {myAnnouncement && myAnnouncement.length > 0 ?
            myAnnouncement.map((el) => (
              <ProductCardStyled key={el.id}>
                <div className="img">
                  <Image src={el.banner} alt="Photo" width="250" height="140" />
                </div>
                <Heading_7_600>{`${el.brand} - ${el.model}`}</Heading_7_600>
                <Body_2_400>{el.description}</Body_2_400>
                <ProfileContainer>
                  <ProfilePic user={user!.name} isLarge={false}/>
                  <Body_2_500>{user?.name}</Body_2_500>
                </ProfileContainer>
                <span>
                  <Details href="">{el.mileage}</Details>
                  <Details href="">{el.year}</Details>
                  <Heading_7_500>{`R$: ${el.price}`}</Heading_7_500>
                </span>
                {user?.is_seller && (
                  <div className="buttons">
                    <Button_medium_text
                      style={{
                        backgroundColor: 'var(--color-grey-7)',
                        color: 'var(--color-grey-1)',
                        borderColor: 'var(--color-grey-1)',
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        editAdvert(el);
                      }}
                    >
                      Editar
                    </Button_medium_text>

                    <Button_medium_text
                      style={{
                        backgroundColor: 'var(--color-grey-7)',
                        color: 'var(--color-grey-0)',
                        borderColor: 'var(--color-grey-1)',
                      }}
                      onClick={(event) => {
                        event.preventDefault();
                        setDetailAnnouncement(el);
                        route.push(`/details/${el.id}`);
                      }}
                    >
                      Ver detalhes
                    </Button_medium_text>
                  </div>
                )}
              </ProductCardStyled>
            )) : 
              <Heading_2_600>Você ainda não possui anúncios</Heading_2_600>
            }
        </ul>
        <div>
          <Heading_5_600>
            <span className="pageAtt">1</span>{' '}
            <span className="next">de 2</span>
          </Heading_5_600>
          <Heading_5_600
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'var(--color-brand-2)',
              cursor: 'pointer',
            }}
          >
            Seguinte {'>'}
          </Heading_5_600>
        </div>
        <Footer />
      </DashboardStyle>
    </>
  );
}