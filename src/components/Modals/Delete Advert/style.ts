import styled from "styled-components";

export const StyledDeleteAdvertModal = styled.div`
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
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 20px;
    border-radius: 8px;
  }
`