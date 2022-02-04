import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f0f5;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  img {
    width: 70%;
    height: auto;
    object-fit: cover;
  }
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  padding: 2rem 0;

  h6 {
    font-size: 1.4rem;
  }

  h1 {
    color: var(--purple-color);
  }

  span {
    font-size: 1.4rem;
  }

  button {
    display: flex;
    align-items: center;
    border: 0;
    background: #6332F6;
    cursor: pointer;
    transition: opacity 0.25s ease-in-out;

    span {
      padding: 0 1rem;
      color: #fafafa;
    }

    div {
      height: 4.4rem;
      width: 5.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5rem;
      color: #fafafa;
    }

    &:hover {
      opacity: 0.85;
    }
  }
`;
