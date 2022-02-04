import styled from "styled-components";

export const Container = styled.div`
  background: #6332F6;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 3rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  h1 {
    color: #fafafa;
    font-size: 2.4rem;
  }
`;

export const HeaderBody = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
    width: 5rem;
    cursor: pointer;
    transition: background 0.25s ease-in-out;
    border: 0;
    border-radius: 0.25rem;
    background: #fafafa;

    &:hover {
      background: #f0f0f5;
    }
  }

  span {
    font-size: 1.6rem;
    color: #fafafa;
  }
`;

export const SearchInput = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #fafafa;
  border-radius: 0.25rem;

  input {
    width: 40rem;
    height: 100%;
    border: 0;
    outline: 0;
    padding: 0 0 0 1.2rem;
    color: #aaa;
    font-size: 1.4rem;
    background: #fafafa;

    &::placeholder {
      color: #aaa;
    }
  }

  button {
    font-size: 0;
    height: 5rem;
    width: 5rem;
    border: 0;
    background: none;
    cursor: pointer;
    transition: opacity 0.25s ease-in-out;

    &:hover {
     opacity: 0.75;
    }
  }

  @media(max-width: 850px) {
    display: none;
  }
`;