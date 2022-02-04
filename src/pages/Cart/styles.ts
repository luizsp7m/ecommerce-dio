import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const CartList = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 3rem;

  display: flex;
  flex-direction: column;
  gap: 3.8rem;

  a {
    font-size: 1.6rem;
    text-decoration: none;
    color: #fafafa;
    transition: opacity 0.25s ease-in-out;

    &:hover {
      opacity: 0.75;
    }
  }
`;

export const CardListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #fafafa;
    font-size: 2.2rem;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem;
    border: 0;
    border-radius: 0.25rem;
    cursor: pointer;
    color: #eb4d4b;
    transition: opacity 0.25s ease-in-out;

    &:hover {
      opacity: 0.85;
    }
  }
`;

export const CardListBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const CardListFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  h1 {
    color: #fafafa;
    font-size: 1.8rem;
  }
`;
