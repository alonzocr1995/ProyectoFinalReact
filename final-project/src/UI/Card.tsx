import styled from "styled-components";

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  background-color: #3d3c3c;
  color: #fdfdfd;
  margin: 5rem auto;
  width: 50rem;
  max-width: 95%;
  text-align: center;

  & img {
    width: 250px;
    height: 250px;
  }
`;

// const Card = () => {
//   return <div></div>;
// };

export default Card;
