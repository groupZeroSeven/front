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

  const { isCreateAdvertModal, isEditAdvertModal } =
    React.useContext(UserContext);

  const [isFilterModal, setIsFilterModal] = useState<boolean>(false);

  const { adverts, getAdverts, filteredAdverts } = useContext(AdvertsContext);

  useEffect(() => {
    getAdverts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditAdvertModal, isCreateAdvertModal]);

  return (
    <>
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
