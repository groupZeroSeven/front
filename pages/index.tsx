import { ButtonBig } from "@/src/components/button-big";
import { Filter } from "@/src/components/filter";
import { Header } from "@/src/components/header";
import { ProductCard } from "@/src/components/ProductCard";
import { AdvertsContext } from "@/src/contexts/advertsContext";
import { Heading_1_700, Heading_2_600 } from "@/src/styles/global";
import { useContext, useEffect, useState} from "react"

export default function Home() {
    const { adverts, getAdverts } = useContext(AdvertsContext)
    useEffect(()=>{
      getAdverts()
    },[])
  
  return (
    <>
      <Header/>
      <div>
        <div>
          <img></img>
        </div>
        <Heading_1_700>Motors Shop</Heading_1_700>
        <Heading_2_600>A melhor Plataforma de anúncios de carros do país</Heading_2_600>
      </div>
      <div>
        <aside>
          <Filter/>
        </aside>
        <div>
          <div>
            <ButtonBig bgColor="--color-grey-0" fontColor="--color-whiteFixed" borderColor="transparent">Criar anuncio</ButtonBig>
          </div>
          <ul>
            {adverts?.map((advert : any) =>{
              return(
              <>
                <button>
                  <ProductCard img={advert.banner}
                    title={`${advert.brand} - ${advert.model}`}
                    desc={advert.description}
                    imageProfile="/public/image/profile.png"
                    nameProfile="Samuel Pereira"
                    km={advert.mileage}
                    age={advert.year}
                    price={advert.price} />
                </button>
              </>)
            })}
          </ul>
        </div>
      </div>

    </>
  )
}
