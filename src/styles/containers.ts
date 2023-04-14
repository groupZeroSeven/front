import styled from "styled-components";

export const BannerStyled = styled.div
`
    height: 62.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    text-align: center;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%), url("/image/banner.png");
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;

    @media screen and (min-width: 720px){
        justify-content: center;
    }

    & > h1 {
        color: var(--color-grey-10);
        font-family: var(--font-lexend);
        font-weight: 500;
        font-size: 3.2rem;
        margin-top: 10rem;

        @media screen and (min-width: 720px){
            font-weight: 700;
            font-size: 4.4rem;
            margin-top: 0rem;
        }
    }

    & > h2 {
        margin-top: 3rem;
        color: var(--color-grey-10);
        font-family: var(--font-lexend);
        font-weight: 500;
        font-size: 2.4rem;

        @media screen and (min-width: 720px){
            font-weight: 600;
            font-size: 3.6rem;
        }
    }
`

export const MainStyled = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: 720px){
        align-items: flex-start;
    }

    & > aside{
        display: none;
        @media screen and (min-width: 720px){
            display: block;
        }
    }

    & > div{
        width: 80%;
        @media screen and (min-width: 720px){
            display: flex;
            flex-direction: column;
            align-content: center;
            justify-content: flex-start;
            align-items: center;
        }
    }

    & > div> div{
        margin: 3rem 5rem;
        @media screen and (min-width: 720px){
            width: 20rem;
            margin: 1rem 5rem;
        }
    }

    & > div> ul{
        margin: 5rem 0rem;
        display: flex;
        overflow: auto;

        @media screen and (min-width: 720px){
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            justify-content: center;
            width: 100%;
            margin: 1rem 0rem;
        }
    }

    & > div> ul::-webkit-scrollbar { 
        display: none;
      }

    & > div > ul > button{
        margin: 0em 1em;
        border: none;

        @media screen and (min-width: 720px){
            margin: 1em;
        }
    }

    & > div > .filterbutton{
        @media screen and (min-width: 720px){
            display: none;
        }
    }

    @media screen and (min-width: 720px){
        display: flex;
        width: 100%;
    }
`

export const FilterStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 5rem 2rem;

    & > ul > h4{
        margin: 1em 0em;
    }

    & > ul > li{
        color: var(--color-grey-3);
        margin: 0.5rem 1rem;
        font-family: var(--font-lexend);
        font-weight: 500;
        font-size: 2rem;
    }

    & > form{
        margin: 2rem 1rem 0rem 1rem;
    }

    & > form > h4{
        margin: 0rem 0rem 1.5rem 0rem;
    }

    & > form > div{
        display: flex;
        width: 70%;
        justify-content: flex-start;
    }

    & > form > div > input{
        width: 30%;
        height: 2rem;
        margin: 0rem 2rem 0rem 0rem;
        background-color: var(--color-grey-5);
        border: none;
        padding: 1rem;
    }

    & > div {
        @media screen and (min-width: 720px){
            display: none
        }
    }
`