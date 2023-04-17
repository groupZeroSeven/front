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
    max-width: 520px;
    max-height: 100%;
    background-color: white;
    width: 100%;
    .head {
      display: flex;
      justify-content: space-between;
      padding: 18px;
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
        margin-bottom: 24px;
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
  margin: 8px 0;
  padding: 12px 8px;
  border: 1.5px solid var(--color-grey-7);
  border-radius: 4px;
  width: 95%;
  ::placeholder {
    font-family: var(--font-inter);
    font-weight: 400;
    font-size: 1.6rem;
  }
`;
export const StyledButtonImg = styled.button`
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: var(--color-brand-4);
  border: 1.5px solid var(--color-brand-4);
  padding: 12px 20px;
  color: var(--color-brand-1);
  border-radius: 4px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
`;
export const StyledDivButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 20px;
  button {
    cursor: pointer;
    width: 48%;
    border: 1.5px solid;
    padding: 12px 28px;
    border-radius: 4px;
    font-family: Inter;
    font-size: 14px;
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
    border: 1.5px solind var(--color-alert-2);
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
  font-size: 16px;
  color: var(--color-grey-4);
  transition: all 0.5s ease-in-out;
  :hover {
    color: var(--color-grey-2);
  }
`;
