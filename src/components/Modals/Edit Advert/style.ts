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
  .modal {
    max-width: 520px;
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