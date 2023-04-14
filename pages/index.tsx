import { ButtonBig } from "@/src/components/button-big";
import { Filter } from "@/src/components/filter";
import { Footer } from "@/src/components/footer";
import { Header } from "@/src/components/header";
import { CreateAdvertModal } from "@/src/components/Modals/Create Advert";
import { EditAdvertModal } from "@/src/components/Modals/Edit Advert";
import { ProductCard } from "@/src/components/ProductCard";
import { AdvertsContext } from "@/src/contexts/advertsContext";
import { BannerStyled, MainStyled } from "@/src/styles/containers";
import { Button_big_text, Heading_1_700, Heading_2_600 } from "@/src/styles/global";
import { useContext, useEffect, useState} from "react"

export default function Home() {
    const [isCreateAdvertModal, setIsCreateAdvertModal] = useState<boolean>(false)
    const [isEditAdvertModal, setIsEditAdvertModal] = useState<boolean>(false)
    const [advertSelected, setAdvertSelected] = useState<string>()
    const { adverts, getAdverts } = useContext(AdvertsContext)

    const advert = 	{
      "id": "834f811b-6436-4e9e-b96f-cd6f765c50f9",
      "brand": "Fiat",
      "banner": "aaaaaaaaaa",
      "model": "aaaaaaaaaa",
      "year": "22",
      "fuel": "aaaaaaaa",
      "mileage": 22,
      "color": "aaaaaaa",
      "price": "22.00",
      "description": "aaaaaaa",
      "is_bargain": false,
      "is_published": true,
      "created_at": "2023-04-13T22:26:25.606Z",
      "updated_at": "2023-04-13T22:41:32.095Z"
    }

    function editAdvert(id : string){
      setAdvertSelected(id)
      setIsEditAdvertModal(true)
    }

 
    useEffect(()=>{
      getAdverts()
    },[isEditAdvertModal, isCreateAdvertModal])
  
  return (
    <>
        {isCreateAdvertModal ? (
          <CreateAdvertModal setIsCreateAdvertModal={setIsCreateAdvertModal}/>
        ) : null
        }
        {isEditAdvertModal ? (
          <EditAdvertModal setIsEditAdvertModal={setIsEditAdvertModal} id={advertSelected}/>
        ) : null
        }
      <Header/>
      <BannerStyled>
        <Heading_1_700>Motors Shop</Heading_1_700>
        <Heading_2_600>A melhor Plataforma de anúncios de carros do país</Heading_2_600>
      </BannerStyled>
      <MainStyled>
        <aside>
          <Filter/>
        </aside>
        <div>
          <div>
            <Button_big_text style={{backgroundColor: "var(--color-grey-0)", color: "var(--color-whiteFixed)", border: "transparent"}} onClick={() => setIsCreateAdvertModal(true)}>Criar anuncio</Button_big_text>
          </div>
          <ul>
            {adverts?.map((advert : any) =>{
              return(
              <>
                <button id={advert.id} onClick={(()=>{editAdvert(advert.id)})}>
                  <ProductCard img={advert.banner}
                    title={`${advert.brand} - ${advert.model}`}
                    desc={advert.description}
                    imageProfile="/image/profile.png"
                    nameProfile="Samuel Pereira"
                    km={advert.mileage}
                    age={advert.year}
                    price={`R$: ${advert.price}`}/>
                </button>
              </>)
            })}
          </ul>
          <div className="filterbutton">
            <ButtonBig  bgColor="var(--color-brand-2)" fontColor="var(--color-whiteFixed)" borderColor="var(--color-brand-2)">Filtros</ButtonBig>
          </div>
        </div>

      </MainStyled>
      <Footer/>
    </>
  )
}
