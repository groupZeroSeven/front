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
    max-width: 52rem;
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 2.0rem;
    border-radius: 0.8rem;
  }
`