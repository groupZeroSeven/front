import styled from 'styled-components';

export const HeaderStyled = styled.header`
  border-bottom: 2px solid #dee2e6;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > img {
    padding: 2.7rem 1.6rem;
  }
  > nav {
    background-color: var(--color-grey-7);
    .computer {
      display: none;
    }
    .computerSpan {
      display: none;
    }
    > div {
      position: relative;
      background-color: var(--color-grey-8);
      > svg {
        padding-right: 2.9rem;
        cursor: pointer;
      }
      > span {
        width: 100vw;
        position: absolute;
        top: 3.5rem;
        right: 0;
        background-color: var(--color-whiteFixed);
        > div {
          display: flex;
          flex-direction: column;
          gap: 4.4rem;
          padding: 1.2rem;
        }
      }
    }
    > span {
    }
  }
  @media (min-width: 768px) {
    > img {
      padding: 2.7rem 6rem;
    }
    > nav {
      background-color: var(--color-grey-7);
      border-left: 2px solid var(--color-grey-6);
      .mobile {
        display: none;
      }
      .computer {
        display: block;
        display: flex;
        flex-direction: row;
        padding: 1.6rem 6rem;
        gap: 4.4rem;
      }
      .computerSpan {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
        padding: 2.2rem;
        width: 20rem;
        position: absolute;
        right: 0;
        background-color: var(--color-grey-9);
        border-radius: 0.4rem;
      }
    }
  }
`;
