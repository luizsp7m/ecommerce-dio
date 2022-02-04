import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  gap: 1.6rem;
  color: #fafafa;

  img {
    height: 10rem;
    width: 10rem;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  div.product-information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  div.amount-controller {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    span {
      font-size: 1.4rem;
      font-weight: normal;
    }

    button {
      height: 3.2rem;
      width: 3.2rem;
      border: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: opacity 0.25s ease-in-out;
      background: #fafafa;

      &:hover {
        opacity: 0.75;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }
  }

  span {
    font-size: 1.6rem;
  }

  button {
    justify-self: center;
    font-size: 0;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border: 0;
    background: 0;
    cursor: pointer;
  }
`;