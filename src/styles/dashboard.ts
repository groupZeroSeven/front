import styled from 'styled-components';

export const DashboardStyle = styled.main`
  background-color: var(--color-brand-1);
  width: 100%;
  padding-top: 6.5rem;
  max-height: 33rem;
  > aside {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    margin: 1.6rem;
    background-color: var(--color-grey-10);
    border-radius: 4px;
    padding: 4rem 2.9rem;
  }
  > ul {
    margin: 1.6rem;
    display: flex;
    overflow: auto;
    gap: 5rem;
    margin-bottom: 9.5rem;
  }
  > div {
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.4rem;
    .pageAtt {
      color: var(--color-grey-3);
    }
    .next {
      opacity: 0.5;
      color: var(--color-grey-3);
    }
  }

  @media (min-width: 768px) {
    > aside {
      margin: 1.6rem 18rem;
    }
    > ul {
      flex-wrap: wrap;
      overflow: hidden;
      margin: 0 10.3rem;
      margin-bottom: 9.5rem;
      justify-content: center;
    }
    > div {
      flex-direction: row;
    }
  }
`;
