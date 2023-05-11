import styled from "styled-components";

export const StyledEditAdvertModal = styled.div`
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
        .containerInput{
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`