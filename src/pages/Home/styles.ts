import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

export const ProductList = styled.div`
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
  gap: 1.6rem;
`;