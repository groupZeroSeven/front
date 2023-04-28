import styled from "styled-components";

export const StyledEditUserModal = styled.div`
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
    border-radius: 0.8rem,;
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
      align-items: flex-start
      width: 100%;
      }
     form > label {
      margin: 1rem;
     }

     form > input {
      width: 90%;
      margin: 0rem 1rem;
     }

     form > div {
      width: 95%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 3rem 1rem;
     }

     form > div > div{
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: 0.5rem 0rem;
     }

     form > div > div > .remove{
      width: 50%;
      margin: 0rem 0.5rem;
      color: var(--color-alert-1);
      background-color: var(--color-alert-2);
      font-family: var(--font-inter);
      font-weight: 600;
      font-size: 1.6rem;
      border: none;
     }

     form > div > div > .save{
      width: 50%;
      margin: 0rem 0.5rem;
      color: var(--color-whiteFixed);
      background-color: var(--color-brand-1);
      font-family: var(--font-inter);
      font-weight: 600;
      font-size: 1.6rem;
      border: none;
     }

     form > div > div > .exit{
      width: 100%;
      margin: 0rem 0.5rem;
      color: var(--color-grey-2);
      background-color: var(--color-grey-6);
      font-family: var(--font-inter);
      font-weight: 600;
      font-size: 1.6rem;
      border: none;
     }
    }
  }
`