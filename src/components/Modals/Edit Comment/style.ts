import styled from "styled-components";

export const StyledEditCommentModal = styled.div`
background-color: rgba(18, 18, 20, 0.5);  
position: fixed;
inset: 0;
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
z-index: 1000;
  .modal {
    max-width: 52rem;
    background-color: white;
    width: 100%;
    border-radius: 0.8rem;
  }
  .head {
      display: flex;
      justify-content: space-between;
      padding: 1.8rem;
  }
  form {
      margin: 0 auto;
      width: 90%;
      input {
        width: 90%;
        display: flex;
        flex-direction: column;
      }
  }
`