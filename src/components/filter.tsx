import { useContext, useEffect, useState } from "react"
import { iAdvert } from "../interfaces/adverts"
import { FilterStyled } from "../styles/containers"
import { Button_brand2, Button_disable, Heading_4_600, Heading_6_500, Heading_7_500 } from "../styles/global"
import { AdvertsContext } from "../contexts/advertsContext"
import { apiKars } from "../services/api"
import {iModel} from "../interfaces/adverts"

export interface iFilterProps {
  setIsFilterModal: React.Dispatch<React.SetStateAction<boolean>>
  isFilterModal: boolean;
}
export const Filter = ({setIsFilterModal, isFilterModal}: iFilterProps) => {
  const { adverts, setFilteredAdverts, brands, filteredAdverts } = useContext(AdvertsContext);
  
  const models = ["Civic", "Corolla", "Cruze", "Fit", "Gol", "Ka", "Onix"]
  const colors = ["Azul", "Branco", "Cinza", "Prata", "Preto", "Verde"]
  const years = ["2022", "2021", "2018", "2015", "2013", "2012", "2010"]
  const fuels = ["Flex", "Híbrido", "Elétrico"]

  const [listBrands, setListBrands] = useState<string[]>(brands)
  const [listModels, setListModels] = useState<string[]>(models)
  const [listColors, setListColors] = useState<string[]>(colors)
  const [listYears, setListYears] = useState<string[]>(years)
  const [listFuels, setListFuels] = useState<string[]>(fuels)

  const [markedBrand, setMarkedBrand] = useState<string>("")
  const [markedModel, setMarkedModel] = useState<string>("")
  const [markedColor, setMarkedColor] = useState<string>("")
  const [markedYear, setMarkedYear] = useState<string>("")
  const [markedFuel, setMarkedFuel] = useState<string>("")

  const [isMinPrice, setIsMinPrice] = useState<boolean>(false)
  const [isMaxPrice, setIsMaxPrice] = useState<boolean>(false)

  const [isMinKm, setIsMinKm] = useState<boolean>(false)
  const [isMaxKm, setIsMaxKm] = useState<boolean>(false)
  const handleBrandMarked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setMarkedBrand(event.currentTarget.value);
    setListBrands([event.currentTarget.value])
  };

  const handleModelMarked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setMarkedModel(event.currentTarget.value);
    setListModels([event.currentTarget.value])
  };

  const handleColorMarked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setMarkedColor(event.currentTarget.value);
    setListColors([event.currentTarget.value])
  };

  const handleYearMarked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setMarkedYear(event.currentTarget.value);
    setListYears([event.currentTarget.value])
  };

  const handleFuelMarked = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setMarkedFuel(event.currentTarget.value);
    setListFuels([event.currentTarget.value])
  };

  const resetFilter = () => {
    setFilteredAdverts(adverts)
    setMarkedBrand("")
    setMarkedModel("")
    setMarkedColor("")
    setMarkedFuel("")
    setMarkedYear("")
    setListBrands(brands)
    setListModels(models)
    setListColors(colors)
    setListYears(years)
    setListFuels(fuels)
    setIsMaxPrice(false)
    setIsMinPrice(false)
    setIsMaxKm(false)
    setIsMinKm(false)
  }

  const filterLister = (filterAdverts: iAdvert[]) => {
    const colorList = filterAdverts.map((car) => (car.color.split(" ")[0].toLocaleLowerCase()))
    const yearList = filterAdverts.map((car) => (car.year))
    const fuelList = filterAdverts.map((car) => (car.fuel))

    const uniqueColorArr = colorList.filter((elem: string, index: number, self: string[]) => {
      return index === self.indexOf(elem);
    });
    const uniqueYearArr = yearList.filter((elem: string, index: number, self: string[]) => {
      return index === self.indexOf(elem);
    });
    const uniqueFuelArr = fuelList.filter((elem: string, index: number, self: string[]) => {
      return index === self.indexOf(elem);
    });

    const upperColor = uniqueColorArr.map((colorName) => (`${colorName.split(" ")[0][0].toUpperCase()}${colorName.split(" ")[0].slice(1).toLowerCase()}`))
    
    setListColors(upperColor);
    setListYears(uniqueYearArr);
    setListFuels(uniqueFuelArr);
  }
  const filterModel = (list: iModel[], filterAdverts: iAdvert[]) => {
    const modelsList = list.map((model: iModel) => (model.name.split(" ")[0]))

    const uniqueModelArr = modelsList.filter((elem: string, index: number, self: string[]) => {
      return index === self.indexOf(elem);
    });

    const coincidenceList = []
    for (let i = 0; i < filterAdverts.length; i++) {
      if (uniqueModelArr.includes(filterAdverts[i].model.split(" ")[0])) {
        coincidenceList.push(filterAdverts[i].model)
      }
    }
    const upperName = coincidenceList.map((modelName) => (`${modelName.split(" ")[0][0].toUpperCase()}${modelName.split(" ")[0].slice(1).toLowerCase()}`))
    const uniqueModels = upperName.filter((elem: string, index: number, self: string[]) => {
      return index === self.indexOf(elem);
    })
    setListModels(uniqueModels);
  }
  useEffect(() => {
    const res = async () => {
      try {
        const { data } = await apiKars.get(
          `/cars?brand=${markedBrand.toLocaleLowerCase()}`
        );
        if (adverts) {
          const filterAdverts = adverts.filter((advert) => (advert.brand === markedBrand))
          filterModel(data, filterAdverts)
          filterLister(filterAdverts)
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (markedBrand !== '') {
      res();
      if (filteredAdverts) {
        const filter = filteredAdverts.filter((advert) => (advert.brand === markedBrand))
       
        setFilteredAdverts(filter)
        
    } 
      if (!filteredAdverts && adverts) {
        const filter = adverts.filter((advert) => (advert.brand === markedBrand))
        
        setFilteredAdverts(filter)
      
      }
    }
  }, [markedBrand])

  useEffect(() => {
    if (markedModel !== '') {
      if (filteredAdverts) {
        const filter = filteredAdverts.filter((advert) => {
          if (advert.model.includes(markedModel.toLocaleLowerCase())) {
            return advert
          }
        })
        
        setFilteredAdverts(filter)
        filterLister(filteredAdverts)
    } 
    if (!filteredAdverts && adverts) {
      const filter = adverts.filter((advert) => {
        if (advert.model.includes(markedModel.toLocaleLowerCase())) {
          return advert
        }
      })
      
      setFilteredAdverts(filter)
      filterLister(adverts)
    }
    }
  
  }, [markedModel])

  useEffect(() => {
    if (markedColor !== '') {
      if (filteredAdverts) {
        const filter = filteredAdverts.filter((advert) => (advert.color.toLocaleLowerCase() === markedColor.toLocaleLowerCase()))
        
        setFilteredAdverts(filter)
        filterLister(filteredAdverts)
      } 
      if (!filteredAdverts && adverts) {
        const filter = adverts.filter((advert) => (advert.color.toLocaleLowerCase() === markedColor.toLocaleLowerCase()))
        
          setFilteredAdverts(filter)
          filterLister(adverts)
    }
    }
  
  }, [markedColor])

  useEffect(() => {
    if (markedYear !== '') {
      if (filteredAdverts) {
        const filter = filteredAdverts.filter((advert) => (advert.year === markedYear))
        
        setFilteredAdverts(filter)
        
        filterLister(filteredAdverts)
      } 
      if (!filteredAdverts && adverts) {
        const filter = adverts.filter((advert) => (advert.year === markedYear))
       
        setFilteredAdverts(filter)
        filterLister(adverts)
      }
    }
  }, [markedYear])

  useEffect(() => {
    if (markedFuel !== '') {
      if (filteredAdverts) {
        const filter = filteredAdverts.filter((advert) => (advert.fuel === markedFuel))
        
        setFilteredAdverts(filter)
        
        filterLister(filteredAdverts)
      } 
      if (!filteredAdverts && adverts) {
        const filter = adverts.filter((advert) => (advert.fuel === markedFuel))
        
        setFilteredAdverts(filter)
        filterLister(adverts)
      }
    }
  }, [markedFuel])


  const sortMinPrice = () => {
    setIsMinPrice(true)
    if (filteredAdverts) {
      const sort = [...filteredAdverts].sort(((a, b) => +a.price - +b.price))
      setFilteredAdverts(sort)
    }
    if (!filteredAdverts && adverts) {
      const sort = adverts.sort(((a, b) => +a.price - +b.price))
      setFilteredAdverts(sort)
    }
    if (isMaxPrice === true) {
      setIsMaxPrice(false)
    }
  }

  const sortMaxPrice = () => {
    setIsMaxPrice(true)
    if (filteredAdverts) {
      const sort = [...filteredAdverts].sort(((a, b) => +b.price - +a.price))
      setFilteredAdverts(sort)
    }
    if (!filteredAdverts && adverts) {
      const sort = adverts.sort(((a, b) => +b.price - +a.price))
      setFilteredAdverts(sort)
    }
    if (isMinPrice === true) {
      setIsMinPrice(false)
    }
  }

  const sortMinKm = () => {
    setIsMinKm(true)
    if (filteredAdverts) {
      const sort = [...filteredAdverts].sort(((a, b) => a.mileage - b.mileage))
      setFilteredAdverts(sort)
    }
    if (!filteredAdverts && adverts) {
      const sort = adverts.sort(((a, b) => a.mileage - b.mileage))
      setFilteredAdverts(sort)
    }
    if (isMaxKm === true) {
      setIsMaxKm(false)
    }
  }
  const sortMaxKm = () => {
    setIsMaxKm(true)
    if (filteredAdverts) {
      const sort = [...filteredAdverts].sort(((a, b) => b.mileage - a.mileage))
      setFilteredAdverts(sort)
    }
    if (!filteredAdverts && adverts) {
      const sort = adverts.sort(((a, b) => b.mileage - a.mileage))
      setFilteredAdverts(sort)
    }
    if (isMinKm === true) {
      setIsMinKm(false)
    }
  }
    return(
        <>
            <FilterStyled>
              {isFilterModal ? 
              <div className="head">
                <Heading_7_500>Filtro</Heading_7_500>
                <button onClick={() => setIsFilterModal(false)}>x</button>
              </div> : null}
                <ul>
                <Heading_4_600>Marca</Heading_4_600>
                    {
                      listBrands.map((brand) => (
                        <li key={brand}><button value={brand} onClick={handleBrandMarked}><Heading_6_500>{brand}</Heading_6_500></button></li>
                      ))
                    }
                </ul>
                <ul>
                    <Heading_4_600>Modelo</Heading_4_600>
                    {
                      listModels.map((model) => (
                        <li key={model}><button value={model} onClick={handleModelMarked} ><Heading_6_500>{model}</Heading_6_500></button></li>
                      ))
                    }
                </ul>
                <ul>
                    <Heading_4_600>Cor</Heading_4_600>
                    {
                      listColors.map((color) => (
                        <li key={color}><button value={color} onClick={handleColorMarked} ><Heading_6_500>{color}</Heading_6_500></button></li>
                      ))
                    }
                   
                </ul>

                <ul>
                    <Heading_4_600>Ano</Heading_4_600>
                    {
                      listYears.map((year) => (
                        <li key={year}><button value={year} onClick={handleYearMarked} ><Heading_6_500>{year}</Heading_6_500></button></li>
                      ))
                    }
                </ul>

                <ul>
                    <Heading_4_600>Combustivel</Heading_4_600>
                    {listFuels.map((fuel) => (
                      <li key={fuel}><button value={fuel} onClick={handleFuelMarked} ><Heading_6_500>{fuel}</Heading_6_500></button></li>
                    ))}
                </ul>
                <form>
                    <Heading_4_600>KM</Heading_4_600>
                    <div>
                        <Button_disable onClick={(event) => {
                          event.preventDefault(); 
                          sortMinPrice()}}
                          style={isMinPrice ? {backgroundColor: "var(--color-brand-1)", color: "white"} : {backgroundColor: "var(--color-grey-5)"}}
                          >Minimo</Button_disable>
                        <Button_disable onClick={(event) => {
                          event.preventDefault();
                          sortMaxPrice()}}
                          style={isMaxPrice ? {backgroundColor: "var(--color-brand-1)", color: "white"} : {backgroundColor: "var(--color-grey-5)"}}
                          >Máximo</Button_disable>
                    </div>
                </form>
                <form>
                    <Heading_4_600>Preço</Heading_4_600>
                    <div>
                        <Button_disable onClick={(event) => {
                          event.preventDefault(); 
                          sortMinKm()}}
                          style={isMinKm ? {backgroundColor: "var(--color-brand-1)", color: "white"} : {backgroundColor: "var(--color-grey-5)"}}
                          >Minimo</Button_disable>
                        <Button_disable onClick={(event) => {
                          event.preventDefault();
                          sortMaxKm()}}
                          style={isMaxKm ? {backgroundColor: "var(--color-brand-1)", color: "white"} : {backgroundColor: "var(--color-grey-5)"}}
                          >Máximo</Button_disable>
                    </div>
                </form>

                <div className="containerButtons">
                  <Button_brand2 onClick={resetFilter}>Limpar filtros</Button_brand2>
                  {isFilterModal ? <Button_brand2 onClick={() => setIsFilterModal(false)}>Ver anuncios</Button_brand2> : null}
                </div>
                
            </FilterStyled>
        </>
    )
}