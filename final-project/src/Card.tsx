import styled from "styled-components";

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  background-color: #ffffff;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;

  & input {
    width: 100%;
  }

  & img {
    width: 250px;
    height: 250px;
  }
`;

// const Card = () => {
//   return <div></div>;
// };

export default Card;
