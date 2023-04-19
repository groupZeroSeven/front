import styled from "styled-components";

export const StyledConfirmModal = styled.div`
background-color: rgba(18, 18, 20, 0.5);
position: fixed;
inset: 0;
width: 100%;
height: 100%;
display: flex;
align-items: flex-start;
justify-content: center;
z-index: 500;
padding-top: 8rem;
.modal {
  max-width: 52rem;
  max-height: 95vh;
  background-color: white;
  border-radius: 8px;
  width: 90%;
  .head {
    display: flex;
    justify-content: space-between;
    padding: 1.8rem;
  }
  .body {
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
`