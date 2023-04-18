import styled from 'styled-components';

export const StyledCreateAdvertModal = styled.div`
background-color: rgba(18, 18, 20, 0.5);
position: fixed;
inset: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
z-index: 500;
  .modal {
    max-width: 52rem;
    max-height: 95vh;
    background-color: white;
    width: 100%;
    overflow: auto;
    border-radius: 8px;
    ::-webkit-scrollbar {
      width: 0.5em;
      height: 0.5em;
    }
    ::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-track {
      background-color: rgba(0, 0, 0, 0);
    }
    .head {
      display: flex;
      justify-content: space-between;
      padding: 1.8rem;
    }
    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .info {
        width: 90%;
        margin: 0 auto;
        align-self: self-start;
        margin-bottom: 2.4rem;
      }
      .formSingleInput {
        width: 90%;
        display: flex;
        flex-direction: column;
      }
      .formDoubleInput {
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        .containerInput {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;
export const StyledInput = styled.input`
  margin: 0.8rem 0;
  padding: 1.2rem 0.8rem;
  border: 0.15rem solid var(--color-grey-7);
  border-radius: 0.4rem;
  width: 95%;
  ::placeholder {
    font-family: var(--font-inter);
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

export const StyledSelect = styled.select`
  margin: 0.8rem 0;
  padding: 1.2rem 0.8rem;
  border: 0.15rem solid var(--color-grey-7);
  border-radius: 0.4rem;
  width: 95%;
  ::placeholder {
    font-family: var(--font-inter);
    font-weight: 400;
    font-size: 1.6rem;
  }
`
export const StyledButtonImg = styled.button`
  cursor: pointer;
  margin-top: 1.0rem;
  margin-bottom: 1.0rem;
  background-color: var(--color-brand-4);
  border: 0.15rem solid var(--color-brand-4);
  padding: 1.2rem 2.0rem;
  color: var(--color-brand-1);
  border-radius: 0.4rem;
  font-family: Inter;
  font-size: 1.4rem;
  font-weight: 600;
`;
export const StyledDivButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.0rem;
  margin-bottom: 2.0rem;
  button {
    cursor: pointer;
    width: 48%;
    border: 0.15rem solid;
    padding: 1.2rem 2.8rem;
    border-radius: 0.4rem;
    font-family: Inter;
    font-size: 1.4rem;
    font-weight: 600;
  }
  .cancel {
    border-color: var(--color-grey-6);
    background-color: var(--color-grey-6);
    color: var(--color-grey-2);
    transition: all 0.5s ease-in-out;
    :hover {
      background-color: var(--color-grey-2);
      color: var(--color-brand-4);
    }
  }
  .confirm {
    border-color: var(--color-brand-3);
    background-color: var(--color-brand-3);
    color: var(--color-brand-4);
    transition: all 0.5s ease-in-out;
    :hover {
      background-color: var(--color-brand-1);
    }
  }
  .delete {
    background-color: var(--color-alert-2);
    border: 0.15rem solind var(--color-alert-2);
    color: var(--color-alert-1);
    transition: all 0.5s ease-in-out;
    :hover {
      background-color: var(--color-alert-1);
      color: var(--color-brand-4);
    }
  }
`;
export const StyledButtonClose = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-weight: 500;
  font-family: Inter;
  font-size: 1.6rem;
  color: var(--color-grey-4);
  transition: all 0.5s ease-in-out;
  :hover {
    color: var(--color-grey-2);
  }
`;
