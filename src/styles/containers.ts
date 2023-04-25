import styled from 'styled-components';

export const BannerStyled = styled.div`
  height: 62.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.29) 0%,
      #000000 100%
    ),
    url('/image/banner.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (min-width: 720px) {
    justify-content: center;
  }

  & > h1 {
    color: var(--color-grey-10);
    font-family: var(--font-lexend);
    font-weight: 500;
    font-size: 3.2rem;
    margin-top: 10rem;

    @media screen and (min-width: 720px) {
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

    @media screen and (min-width: 720px) {
      font-weight: 600;
      font-size: 3.6rem;
    }
  }
`;

export const MainStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 720px) {
    align-items: flex-start;
  }

  & > aside {
    display: none;
    @media screen and (min-width: 720px) {
      display: block;
    }
  }

  & > div {
    width: 80%;
    @media screen and (min-width: 720px) {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
    }
  }

  & > div > div {
    margin: 3rem 5rem;
    @media screen and (min-width: 720px) {
      width: 20rem;
      margin: 1rem 5rem;
    }
  }

  & > div > ul {
    margin: 5rem 0rem;
    display: flex;
    overflow: auto;

    @media screen and (min-width: 720px) {
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      width: 100%;
      margin: 1rem 0rem;
    }
  }

  & > div > ul::-webkit-scrollbar {
    display: none;
  }

  & > div > ul > button {
    margin: 0em 1em;
    border: none;

    @media screen and (min-width: 720px) {
      margin: 1em;
    }
  }

  & > div > .filterbutton {
    @media screen and (min-width: 720px) {
      display: none;
    }
  }

  @media screen and (min-width: 720px) {
    display: flex;
    width: 100%;
  }
`;

export const FilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 5rem 2rem;

  & > ul > h4 {
    margin: 1em 0em;
  }

  & > ul > li {
    color: var(--color-grey-3);
    margin: 0.5rem 1rem;
    font-family: var(--font-lexend);
    font-weight: 500;
    font-size: 2rem;
  }

  & > form {
    margin: 2rem 1rem 0rem 1rem;
  }

  & > form > h4 {
    margin: 0rem 0rem 1.5rem 0rem;
  }

  & > form > div {
    display: flex;
    justify-content: flex-start;
  }

  & > form > div > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 2rem;
    margin: 0rem 2rem 1rem 0rem;
    background-color: var(--color-grey-5);
    border: none;
    padding: 1.5rem;
  }

  & > div {
    @media screen and (min-width: 720px) {
      display: none;
    }
  }
  & > form {
    margin: 2rem 1rem 0rem 1rem;
  }

  & > div > h4 {
    margin: 0rem 0rem 1.5rem 0rem;
  }

  & > div > div {
    display: flex;
    width: 70%;
    justify-content: flex-start;
  }

  & > div {
    @media screen and (min-width: 720px) {
      display: none;
    }
  }
`;

export const LoginStyled = styled.main`
  background-color: var(--color-grey-7);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 720px) {
    height: 90vh;
  }
  & > div {
    margin: 5rem 1rem;
    border-radius: 0.5rem;
    background-color: var(--color-whiteFixed);
    padding: 5rem 3rem;

    @media screen and (min-width: 720px) {
      width: 35rem;
    }
  }

  & > div > form {
    margin: 3rem 0rem;
  }

  & > div > form > input {
    margin: 0.8rem 0rem 2rem 0rem;
  }

  & > div > form > .lostPassword {
    margin: 1rem 2.5rem 3rem 0rem;
    display: flex;
    align-items: end;
    justify-content: end;
  }

  & > div > div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    text-align: center;
    height: 10rem;
  }
`;

export const RegisterStyled = styled.main`
  background-color: var(--color-grey-7);
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 720px) {
    height: 155vh;
  }

  & > div {
    margin: 5rem 1rem;
    border-radius: 0.5rem;
    background-color: var(--color-whiteFixed);
    padding: 5rem 3rem;

    @media screen and (min-width: 720px) {
      width: 35rem;
    }
  }

  & > div > form {
    margin: 3rem 0rem;
  }

  & > div > form > p {
    margin: 0.8rem 0rem 2rem 0rem;
  }

  & > div > form > div > p {
    margin: 0.8rem 0rem 2rem 0rem;
  }

  & > div > form > input {
    margin: 0.8rem 0rem 2rem 0rem;
  }
`;

export const StyledAdress = styled.div`
  margin: 0.8rem 0rem 2rem 0rem;

  & > div {
    display: flex;
    justify-content: space-between;
    margin: 0rem;
  }
  & > div > div {
    width: 45%;
  }
`;

export const StyledCheckbox = styled.label`
  position: relative;
  width: 42%;
  height: 5rem;
  margin: 0rem 1rem 1rem 1rem;
  float: left;
  border: 1px solid var(--color-grey-0);
  border-radius: 0.5rem;
  color: var(--color-grey-0);
  font-family: var(--font-inter);
  font-weight: 600;
  font-size: 1.6rem;
  box-sizing: border-box;

  & > div {
    width: 100%;
    height: 4.8rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 25px;
    transition: 0.5s ease;
    background-color: var(--color-grey-10);
  }

  & > input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 0.5rem;
    height: 4.8rem;
    opacity: 0;
    cursor: pointer;
  }

  input[type='checkbox']:checked ~ div {
    background-color: var(--color-brand-1);
    color: var(--color-whiteFixed);
  }
`;
