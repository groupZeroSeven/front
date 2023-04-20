import { CreateAdvertModal } from '@/src/components/Modals/Create Advert';
import { EditAdvertModal } from '@/src/components/Modals/Edit Advert';
import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { ProfileAdvertiser } from '@/src/components/profile';
import { LoadContext } from '@/src/contexts/loadingContext';
import { UserContext } from '@/src/contexts/userContext';
import { api } from '@/src/services/api';
import { DashboardStyle } from '@/src/styles/dashboard';
import {
  Body_1_400,
  Body_2_400,
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

  const [advertSelected, setAdvertSelected] = React.useState<string>();

  React.useEffect(() => {
    setLoad(true);

    const token: string | null = localStorage.getItem('token');

    if (!token) return userLogout();

    const getAnnouncement = async () => {
      try {
        const { data } = await toast.promise(
          api.get(`/api/anoucements`, {
            headers: { Authorization: `Bearer ${token}` },
          }),
          {}
        );

        setMyAnnouncement(data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function editAdvert(id: string) {
    setAdvertSelected(id);
    setIsEditAdvertModal(true);
  }

  return (
    <>
      {isCreateAdvertModal && <CreateAdvertModal />}
      <Header />
      {isEditAdvertModal && <EditAdvertModal id={advertSelected} />}
      <DashboardStyle>
        <aside>
          <Image
            src={'/image/profile.png'}
            alt="Profile"
            width={104}
            height={104}
          />
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

        <ul>
          {myAnnouncement &&
            myAnnouncement.map((el) => (
              <ProductCardStyled key={el.id}>
                <div className="img">
                  <Image src={el.banner} alt="Photo" width="250" height="140" />
                </div>
                <Heading_7_600>{`${el.brand} - ${el.model}`}</Heading_7_600>
                <Body_2_400>{el.description}</Body_2_400>
                <ProfileAdvertiser
                  imgProfile="/image/profile.png"
                  nameProfile={user?.name}
                />
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
                        editAdvert(el.id);
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
            ))}
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
