import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  > section {
    width: 100%;

    div {
      width: 100%;  
    }

    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    @media (max-width: 1024px) {
      gap: 1rem;
    }

    @media (max-width: 640px) {
      flex-direction: column;
      margin-top: 5rem;
      gap: 2rem;

      > section > div {
        height: auto;
      }
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;

    padding-top: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    transition: 0.5s;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 1.7rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 1.3rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.3rem;
      font-weight: 300;
      margin-bottom: 1rem;
      line-height: 30px;
      text-align: justify;
    }
  }

  &:hover > div {
    filter: brightness(1.3);
    transform: translateY(-20px);
  }

  &:nth-child(2) > div {
    margin-top: 4rem;
  }

  @media (max-width: 1024px) {
    > div {
      height: auto;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.9rem;
      }
    }
  }

  @media (max-width: 640px) {
    > div {
      height: auto;
      padding: 2rem;

      h1 {
        font-size: 1.7rem;
      }

      h2 {
        font-size: 1.3rem;
      }

      p {
        font-size: 1rem;
      }
    }

    &:hover > div {
      transform: translateY(0);
    }

    &:nth-child(2) > div {
      margin-top: 0;
    }
  }

  @media (max-width: 400px) {
    > div {
      h1 {
        font-size: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.7rem;
      }
    }
  }
`;
