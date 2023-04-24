import { useContext, useEffect, useState } from "react"
import { iAdvert } from "../interfaces/adverts"
import { FilterStyled } from "../styles/containers"
import { Heading_4_600, Heading_6_500 } from "../styles/global"
import { ButtonBig } from "./button-big"
import { AdvertsContext } from "../contexts/advertsContext"

export const Filter = () => {
  const { adverts, setFilteredAdverts, brands, filteredAdverts } = useContext(AdvertsContext);

  const [markedBrand, setMarkedBrand] = useState<string>("")
  const [markedModel, setMarkedModel] = useState<string>("")
  const [markedColor, setMarkedColor] = useState<string>("")
  const [markedYear, setMarkedYear] = useState<string>("")
  const [markedFuel, setMarkedFuel] = useState<string>("")

  const models = ["Civic", "Corolla", "Cruze", "Fit", "Gol", "Ka", "Onix"]
  const colors = ["Azul", "Branco", "Cinza", "Prata", "Preto", "Verde"]
  const years = ["2022", "2021", "2018", "2015", "2013", "2012", "2010"]
  const fuels = ["Flex", "Híbrido", "Elétrico"]

  const handleBrandMarked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setMarkedBrand(event.currentTarget.value);
  };

  const handleModelMarked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setMarkedModel(event.currentTarget.value);
  };

  const handleColorMarked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setMarkedColor(event.currentTarget.value);
  };

  const handleYearMarked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setMarkedYear(event.currentTarget.value);
  };

  const handleFuelMarked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setMarkedFuel(event.currentTarget.value);
  };

  const resetFilter = () => {
    setFilteredAdverts(null)
    setMarkedBrand("")
    setMarkedModel("")
    setMarkedColor("")
    setMarkedFuel("")
    setMarkedYear("")
  }

  useEffect(() => {
    if (filteredAdverts) {
      const filter = filteredAdverts.filter((advert) => (advert.brand === markedBrand))
      if (filter.length > 0) {
        setFilteredAdverts(filter)
      }
  } 
  if (!filteredAdverts && adverts) {
    const filter = adverts.filter((advert) => (advert.brand === markedBrand))
    if (filter.length > 0) {
      setFilteredAdverts(filter)
    }
  }
  }, [markedBrand])

  useEffect(() => {
    if (filteredAdverts) {
      const filter = filteredAdverts.filter((advert) => {
        if (advert.model.includes(markedModel.toLocaleLowerCase())) {
          return advert
        }
      })
      if (filter.length > 0) {
        setFilteredAdverts(filter)
      }
  } 
  if (!filteredAdverts && adverts) {
    const filter = adverts.filter((advert) => {
      if (advert.model.includes(markedModel.toLocaleLowerCase())) {
        return advert
      }
    })
    if (filter.length > 0) {
      setFilteredAdverts(filter)
    }
  }
  
  }, [markedModel])

  useEffect(() => {
    if (filteredAdverts) {
      const filter = filteredAdverts.filter((advert) => (advert.color.toLocaleLowerCase() === markedColor.toLocaleLowerCase()))
      if (filter.length > 0) {
        setFilteredAdverts(filter)
      }
    } 
    if (!filteredAdverts && adverts) {
      const filter = adverts.filter((advert) => (advert.color.toLocaleLowerCase() === markedColor.toLocaleLowerCase()))
      if (filter.length > 0) {
        setFilteredAdverts(filter)
      }
  }
  
  }, [markedColor])

  useEffect(() => {
    if (filteredAdverts) {
      const filter = filteredAdverts.filter((advert) => (advert.year === markedYear))
      if (filter.length > 0) {
        setFilteredAdverts(filter)
      }
    } 
    if (!filteredAdverts && adverts) {
      const filter = adverts.filter((advert) => (advert.year === markedYear))
      if (filter.length > 0) {
        setFilteredAdverts(filter)
      }
    }
  }, [markedYear])

  useEffect(() => {
    if (filteredAdverts) {
      const filter = filteredAdverts.filter((advert) => (advert.fuel === markedFuel))
      if (filter.length > 0) {
        setFilteredAdverts(filter)
      }
    } 
    if (!filteredAdverts && adverts) {
      const filter = adverts.filter((advert) => (advert.fuel === markedFuel))
      if (filter.length > 0) {
        setFilteredAdverts(filter)
      }
    }
  }, [markedFuel])
    return(
        <>
            <FilterStyled>
                <ul>
                <Heading_4_600>Marca</Heading_4_600>
                    {
                      brands.map((brand) => (
                        <li key={brand}><button value={brand} onClick={handleBrandMarked} style={markedBrand === brand ? {backgroundColor: "red"} : {backgroundColor: "blue"}}><Heading_6_500>{brand}</Heading_6_500></button></li>
                      ))
                    }
                </ul>
                <ul>
                    <Heading_4_600>Modelo</Heading_4_600>
                    {
                      models.map((model) => (
                        <li key={model}><button value={model} onClick={handleModelMarked} style={markedModel === model ? {backgroundColor: "red"} : {backgroundColor: "blue"}}><Heading_6_500>{model}</Heading_6_500></button></li>
                      ))
                    }
                </ul>
                <ul>
                    <Heading_4_600>Cor</Heading_4_600>
                    {
                      colors.map((color) => (
                        <li key={color}><button value={color} onClick={handleColorMarked} style={markedColor === color ? {backgroundColor: "red"} : {backgroundColor: "blue"}}><Heading_6_500>{color}</Heading_6_500></button></li>
                      ))
                    }
                   
                </ul>

                <ul>
                    <Heading_4_600>Ano</Heading_4_600>
                    {
                      years.map((year) => (
                        <li key={year}><button value={year} onClick={handleYearMarked} style={markedYear === year ? {backgroundColor: "red"} : {backgroundColor: "blue"}}><Heading_6_500>{year}</Heading_6_500></button></li>
                      ))
                    }
                </ul>

                <ul>
                    <Heading_4_600>Combustivel</Heading_4_600>
                    {fuels.map((fuel) => (
                      <li key={fuel}><button value={fuel} onClick={handleFuelMarked} style={markedFuel === fuel ? {backgroundColor: "red"} : {backgroundColor: "blue"}}><Heading_6_500>{fuel}</Heading_6_500></button></li>
                    ))}
                </ul>
                <form>
                    <Heading_4_600>KM</Heading_4_600>
                    <div>
                        <input placeholder="Minimo"></input>
                        <input placeholder="Maximo"></input>
                    </div>
                </form>
                <form>
                    <Heading_4_600>Preço</Heading_4_600>
                    <div>
                        <input placeholder="Minimo"></input>
                        <input placeholder="Maximo"></input>
                    </div>
                </form>
                <button onClick={resetFilter}>Zerar filtros</button>
                 <div>
                    <ButtonBig   bgColor="var(--color-brand-2)" fontColor="var(--color-whiteFixed)" borderColor="var(--color-brand-2)">Ver anuncios</ButtonBig>
                </div>
            </FilterStyled>
        </>
    )
}