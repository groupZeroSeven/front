import styled from "styled-components";

export const StyledEditAddresModal = styled.div`
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
    border-radius: 0.8rem;
    margin: 1rem;
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

    p {
      margin: 1rem;
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
      margin: 1rem 1rem;
     }

     form > div {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin: 1rem 0rem;
     }

     form > div > div > input{
        width: 90%;
        
       }

     form > div > .doubleInput{
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0rem 0rem;

      @media screen and (min-width: 720px) {
        width: 45%;
        justify-content: flex-start;
      }
     }

     form > div > div > .save{
      width: 100%;
      color: var(--color-whiteFixed);
      background-color: var(--color-brand-1);
      font-family: var(--font-inter);
      font-weight: 600;
      font-size: 1.6rem;
      border: none;
     }

     form > div > div > .exit{
      width: 100%;
      padding: 0rem 4rem;
      color: var(--color-grey-2);
      background-color: var(--color-grey-6);
      font-family: var(--font-inter);
      font-weight: 600;
      font-size: 1.6rem;
      border: none;
     }

     form > .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
     }

     form > .buttons > .buttons_exit {
        width: 35%;
        margin: 0rem 1rem;
     }

     form > .buttons > .buttons_save {
      width: 55%;
      margin: 0rem 1rem 0rem 1rem;
   }
    }
  }
`