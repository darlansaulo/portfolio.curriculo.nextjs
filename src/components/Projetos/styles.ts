import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1024px) {
      gap: 2rem;
    }
  }

  > .button-style {
    background: ${({ theme }) => theme.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: 0.5s;
    cursor: pointer;

    a {
      text-transform: uppercase;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
    }

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }

    @media (max-width: 640px) {
      padding: 0.5rem;
      a {
        font-size: 1rem;
      }
    }
  }
`;

export const ProjetoContainer = styled.div`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section {
      > div.text {
        right: -13rem;
      }

      .overlay {
        opacity: 0.7;
      }
    }

    > button > a {
      color: ${({ theme }) => theme.primary};
    }
  }

  > button {
    width: 12rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;

    a {
      color: #fff;
      font-size: 2rem;
      font-weight: 300;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      transition: 0.5s;
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    position: relative;

    .overlay {
      opacity: 0.4;
      transition: 0.5s;
    }

    > div.text {
      position: absolute;
      top: 10rem;
      right: -10rem;
      transition: 0.5s;
      width: fit-content;

      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 2.5rem;
        text-shadow: -4px 5px 22px #11172b;
      }

      h2 {
        color: ${({ theme }) => theme.secondary};
        font-size: 2rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #11172b;
      }
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 0rem 5rem 3rem 0;
    }

    > section div.text {
      text-align: right;
      left: -10rem;
    }

    &:hover {
      > section {
        div.text {
          left: -15rem;
        }
      }
    }
  }

  @media (max-width: 1280px) {
    > section {
      width: 40rem;
    }
  }

  @media (max-width: 1024px) {
    &:hover {
      > section {
        div.text {
          left: 1rem;
        }
      }
    }

    > section {
      width: 100%;
      > div.text {
        left: 1rem;
        top: 1rem;
      }
    }

    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
        width: 100%;

        > div.text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }
      > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        > section {
          div.text {
            left: 1rem;
          }
        }
      }
    }
  }
  @media (max-width: 640px) {
    height: 17rem;
  }
  @media (max-width: 400px) {
    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }

    > section > div.text {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1rem;
      }
    }
  }
`;
