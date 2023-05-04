import { FooterStyled } from "../styles/footer"
import { Body_2_400 } from "../styles/global"

export const Footer = () => {
    return(
        <>
        <FooterStyled>
            <img src='/image/Motors shop.png' alt="Logo footer"/>
            <Body_2_400>© 2022 -  Todos os direitos reservados.</Body_2_400>
            <button>^</button>
        </FooterStyled>
        </>
    )
}