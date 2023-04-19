import { CreateAdvertModal } from '@/src/components/Modals/Create Advert';
import { ProductCard } from '@/src/components/ProductCard';
import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { LoadContext } from '@/src/contexts/loadingContext';
import { UserContext } from '@/src/contexts/userContext';
import { api } from '@/src/services/api';
import { DashboardStyle } from '@/src/styles/dashboard';
import {
  Body_1_400,
  Button_big_text,
  Details,
  Heading_5_600,
  Heading_6_600,
} from '@/src/styles/global';
import Image from 'next/image';
import React from 'react';
import { toast } from 'react-toastify';

export default function Dashboard() {
  const { setLoad } = React.useContext(LoadContext);

  const {
    isCreateAdvertModal,
    setIsCreateAdvertModal,
    user,
    userLogout,
    setMyAnnouncement,
    myAnnouncement,
  } = React.useContext(UserContext);

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
          {
            pending: 'Waiting...',
            success: 'Successfully recovered data.',
          },
          {
            autoClose: 6000,
          }
        );

        setMyAnnouncement(data);
      } catch (e: any) {
        toast.error(e.response.data.message, {
          position: 'bottom-right',
          autoClose: 5000,
        });
      } finally {
        setTimeout(() => setLoad(false), 1000);
      }
    };

    getAnnouncement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isCreateAdvertModal && <CreateAdvertModal />}
      <Header />
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
              <ProductCard
                key={el.id}
                img={el.banner}
                title={`${el.brand} - ${el.model}`}
                desc={el.description}
                imageProfile="/image/profile.png"
                nameProfile={user?.name}
                km={el.mileage}
                age={el.year}
                price={`R$: ${el.price}`}
              />
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
