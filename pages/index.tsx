import { ConfirmModal } from '@/src/components/Modals/Confirm';
import { CreateAdvertModal } from '@/src/components/Modals/Create Advert';
import { EditAdvertModal } from '@/src/components/Modals/Edit Advert';
import { ProductCard } from '@/src/components/ProductCard';
import { Filter } from '@/src/components/filter';
import { Footer } from '@/src/components/footer';
import { Header } from '@/src/components/header';
import { AdvertsContext } from '@/src/contexts/advertsContext';
import { UserContext } from '@/src/contexts/userContext';
import { BannerStyled, MainStyled } from '@/src/styles/containers';
import {
  Button_brand,
  Heading_1_700,
  Heading_2_600,
} from '@/src/styles/global';
import { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react';

export default function Home() {
  const router = useRouter();

  const {
    isCreateAdvertModal,
    setIsCreateAdvertModal,
    isEditAdvertModal,
    setIsEditAdvertModal,
  } = React.useContext(UserContext);

  const [advertSelected, setAdvertSelected] = useState<string>();
  const [isFilterModal, setIsFilterModal] = useState<boolean>(false);

  const { adverts, getAdverts, isConfirmModal, filteredAdverts } =
    useContext(AdvertsContext);

  function editAdvert(id: string) {
    setAdvertSelected(id);
    setIsEditAdvertModal(true);
  }

  useEffect(() => {
    getAdverts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditAdvertModal, isCreateAdvertModal]);

  return (
    <>
      {isConfirmModal && <ConfirmModal message="Criado" title="Sucesso!" />}
      {isCreateAdvertModal && <CreateAdvertModal />}
      {isEditAdvertModal && <EditAdvertModal id={advertSelected} />}
      <Header />
      <BannerStyled>
        <Heading_1_700>Motors Shop</Heading_1_700>
        <Heading_2_600>
          A melhor Plataforma de anúncios de carros do país
        </Heading_2_600>
      </BannerStyled>
      <MainStyled>
        {isFilterModal ? (
          <div className="modalFilter">
            <Filter
              setIsFilterModal={setIsFilterModal}
              isFilterModal={isFilterModal}
            />
          </div>
        ) : null}
        <aside>
          <Filter
            setIsFilterModal={setIsFilterModal}
            isFilterModal={isFilterModal}
          />
        </aside>
        <div>
          <ul>
            {filteredAdverts
              ? filteredAdverts.map((advert: any, i: any) => (
                  <button
                    key={i}
                    id={advert.id}
                    onClick={() => router.push(`details/${advert.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <ProductCard
                      img={advert.banner}
                      title={`${advert.brand} - ${advert.model}`}
                      desc={advert.description}
                      imageProfile="/image/profile.png"
                      nameProfile="Samuel Pereira"
                      km={advert.mileage}
                      age={advert.year}
                      price={`R$: ${advert.price}`}
                    />
                  </button>
                ))
              : null}
            {adverts
              ? !filteredAdverts
                ? adverts.map((advert: any, i: any) => (
                    <button
                      key={i}
                      id={advert.id}
                      onClick={() => {
                        editAdvert(advert.id);
                      }}
                    >
                      <ProductCard
                        img={advert.banner}
                        title={`${advert.brand} - ${advert.model}`}
                        desc={advert.description}
                        imageProfile="/image/profile.png"
                        nameProfile="Samuel Pereira"
                        km={advert.mileage}
                        age={advert.year}
                        price={`R$: ${advert.price}`}
                      />
                    </button>
                  ))
                : null
              : null}
          </ul>
          <div className="filterbutton">
            <Button_brand onClick={() => setIsFilterModal(true)}>
              Filtros
            </Button_brand>
          </div>
        </div>
      </MainStyled>
      <Footer />
    </>
  );
}
