import { Heading_4_600, Heading_6_500 } from "../styles/global"

export const Filter = () => {

    return(
        <>
            <div>
                <ul>
                    <Heading_4_600>Marca</Heading_4_600>
                    <li><Heading_6_500>General Motors</Heading_6_500></li>
                    <li><Heading_6_500>Fiat</Heading_6_500></li>
                    <li><Heading_6_500>Ford</Heading_6_500></li>
                    <li><Heading_6_500>Honda</Heading_6_500></li>
                    <li><Heading_6_500>Porche</Heading_6_500></li>
                    <li><Heading_6_500>Volswagen</Heading_6_500></li>
                </ul>

                <ul>
                    <Heading_4_600>Modelo</Heading_4_600>
                    <li><Heading_6_500>Civic</Heading_6_500></li>
                    <li><Heading_6_500>Corolla</Heading_6_500></li>
                    <li><Heading_6_500>Cruze</Heading_6_500></li>
                    <li><Heading_6_500>Fiat</Heading_6_500></li>
                    <li><Heading_6_500>Gol</Heading_6_500></li>
                    <li><Heading_6_500>Ka</Heading_6_500></li>
                    <li><Heading_6_500>Onix</Heading_6_500></li>
                    <li><Heading_6_500>Porsche 718</Heading_6_500></li>
                </ul>

                <ul>
                    <Heading_4_600>Cor</Heading_4_600>
                    <li><Heading_6_500>Azul</Heading_6_500></li>
                    <li><Heading_6_500>Branca</Heading_6_500></li>
                    <li><Heading_6_500>Cinza</Heading_6_500></li>
                    <li><Heading_6_500>Prata</Heading_6_500></li>
                    <li><Heading_6_500>Preta</Heading_6_500></li>
                    <li><Heading_6_500>Verde</Heading_6_500></li>
                </ul>

                <ul>
                    <Heading_4_600>Ano</Heading_4_600>
                    <li><Heading_6_500>2022</Heading_6_500></li>
                    <li><Heading_6_500>2021</Heading_6_500></li>
                    <li><Heading_6_500>2018</Heading_6_500></li>
                    <li><Heading_6_500>2015</Heading_6_500></li>
                    <li><Heading_6_500>2013</Heading_6_500></li>
                    <li><Heading_6_500>2012</Heading_6_500></li>
                    <li><Heading_6_500>2010</Heading_6_500></li>
                </ul>

                <ul>
                    <Heading_4_600>Combustivel</Heading_4_600>
                    <li><Heading_6_500>Diesel</Heading_6_500></li>
                    <li><Heading_6_500>Etanol</Heading_6_500></li>
                    <li><Heading_6_500>Gasolina</Heading_6_500></li>
                    <li><Heading_6_500>Flex</Heading_6_500></li>
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
            </div>
        </>
    )
}