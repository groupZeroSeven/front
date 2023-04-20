import styled from 'styled-components';

export const MainDetailsStyle = styled.main`
  background-color: var(--color-brand-1);
  height: 51.6rem;
  > div {
    display: flex;
    flex-direction: column;
    > span {
      > span {
        display: flex;
        flex-direction: column;
        gap: 1.7rem;
        padding: 4.5rem 1.2rem;
        > div {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.7rem;
          padding: 4.5rem 1.2rem;
        }
      }
      > div {
        display: flex;
        flex-direction: column;
        gap: 1.7rem;
        padding: 4.5rem 1.2rem;
      }
      .img-default {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-grey-10);
        border-radius: 0.4rem;
        min-height: 35.5rem;
      }
      .info-car {
        line-height: 2.5rem;
        background-color: var(--color-grey-10);
        border-radius: 0.4rem;
        padding: 4.4rem 2.8rem 2.8rem 2.8rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2.4rem;
        > div {
          display: flex;
          gap: 1.2rem;
        }
        > span {
          width: 10rem;
        }
      }
      .description {
        display: flex;
        flex-direction: column;
        gap: 3.2rem;
        background-color: var(--color-grey-10);
        border-radius: 0.4rem;
        padding: 3.6rem 2.8rem;
        line-height: 28px;
      }

      .photo-car {
        background-color: var(--color-grey-10);
        border-radius: 0.4rem;
        padding: 3.6rem 2.8rem 3.6rem 4.4rem;
        > ul {
          display: flex;
          gap: 5rem 0.5rem;
          flex-wrap: wrap;
          margin-top: 3.2rem;
          > li {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 9rem;
            height: 9rem;
            background-color: var(--color-grey-7);
            border-radius: 4px;
          }
        }
      }

      .profile {
        background-color: var(--color-grey-10);
        border-radius: 0.4rem;
        padding: 4rem 2.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.8rem;
        > p {
          text-align: justify;
        }
        > div {
          width: 20.6rem;
        }
      }

      .commits {
        background-color: var(--color-grey-10);
        border-radius: 0.4rem;
        padding: 3.6rem 2.8rem;
        > h6 {
          margin-bottom: 2.8rem;
        }
        > ul {
          display: flex;
          flex-direction: column;
          gap: 4.4rem;
          > li {
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
            > div {
              display: flex;
              align-items: center;
              gap: 0.8rem;
              > p {
                font-family: var(--font-inter);
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                color: #868e96;
              }
            }
            > p {
              text-align: justify;
              line-height: 24px;
            }
          }
        }
      }

      .commit {
        background-color: var(--color-grey-10);
        border-radius: 0.4rem;
        padding: 3.6rem 2.8rem;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        > textarea {
          width: 90%;
          height: 12.8rem;
          border: 0.15rem solid #e9ecef;
          border-radius: 0.4rem;
          padding: 1.6rem;
          line-height: 2.6rem;
          font-family: var(--font-inter);
          font-weight: 400;
          font-size: 1.6rem;
        }
        > span {
          width: 10.8rem;
        }
        > div {
          display: flex;
          flex-wrap: wrap;
          gap: 2.4rem 0.8rem;
          > p {
            background: #e9ecef;
            border-radius: 24px;
            padding: 5px 12px;
            color: #868e96;
            font-family: var(--font-inter);
            font-weight: 500;
            font-size: 12px;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    > div {
      > span {
        > span {
          display: flex;
          flex-direction: row;
          .menu-one {
            max-width: 752px;
          }
          .menu-two {
            max-width: 440px;
          }
          .menu-three {
            max-width: 752px;
          }
        }
      }
    }
  }
`;
