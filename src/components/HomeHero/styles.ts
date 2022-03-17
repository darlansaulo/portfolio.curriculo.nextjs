import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;

  > div {
    flex: 4;
    width: 50%;
  }

  > span > img {
    flex: 1;
  }

  @media (max-width: 1280px) {
    > span > img {
      width: 30rem;
    }

    > div {
      flex: 1;
    }
  }
  @media (max-width: 1024px) {
    > span > img {
      width: 22rem;
    }
  }

  @media (max-width: 640px) {
    margin-top: 2rem;
    flex-direction: column-reverse;
    > div {
      width: 100%;
    }
  }
`;

export const CodeItem = styled.section`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24.3rem;
  align-self: flex-start;
  transition: 1s;

  &:nth-child(3) {
    ul {
      display: flex;
      justify-content: space-between;
      a {
       color: #fff;
      }
    }
  }

  &:hover {
    filter: brightness(1.8);
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }
  div.purple {
    color: #c38cdd;
  }

  div.textMargin2 {
    margin-left: 2rem;
  }

  span.textMargin1 {
    margin-left: 1rem;
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3;
  }

  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }

  @media (max-width: 1280px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const InfoContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > section:nth-child(even) {
    align-self: flex-end ;
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 1.88rem;
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 1280px) {
    h1 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 1.77rem;
    }
  }
  @media (max-width: 640px) {
    h1 {
      font-size: 1.58rem;
      text-align: center;
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 1.26rem;
      text-align: center;
    }
  }
`;


export const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  img.fontClass {
    mask-image: linear-gradient(to top, transparent 5%, black 50%);
    
  }

  > svg:nth-child(7) {
    order: -1;
  }
  > svg:nth-child(5) {
    order: -2;
  }
  > svg:nth-child(10) {
    order: -3;
  }
  > svg:nth-child(9) {
    order: -4;
  }
  > svg:nth-child(6) {
    order: -5;
  }
  > svg:nth-child(4) {
    order: -6;
  }

  @media (max-width: 640px) {
    margin-top: 1rem;
  }
`;
