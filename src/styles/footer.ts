import styled from 'styled-components';

export const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-grey-0);
  color: var(--color-whiteFixed);
  width: 100%;
  height: 30rem;

  & > button {
    background-color: var(--color-grey-1);
    color: var(--color-whiteFixed);
    font-size: 2rem;
    width: 5rem;
    height: 5rem;
    border: 1px solid transparent;
    border-radius: 5px;
  }

  @media screen and (min-width: 720px) {
    flex-direction: row;
    height: 10rem;
    justify-content: space-around;
  }
`;
