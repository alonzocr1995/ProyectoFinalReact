import styled from "styled-components";

const Row = styled.div`
  color: white;
  margin-left: 20px;

  & section {
    display: flex;
    padding: 20px;
    overflow-y: hidden;
    overflow-x: scroll;
  }

  & section::-webkit-scrollbar {
    display: none;
  }

  & section div {
    border: 1px solid #222121;
    border-radius: 5px;
    margin: 10px;
    text-align: center;
  }

  & section div div {
    display: flex;
  }

  & img {
    max-height: 250px;

    /* max-height: 100px; */
    object-fit: contain;
    margin-right: 10px;
    width: 100%;
    transition: transform 450ms;
  }

  & img:hover {
    /* transform: scale(1.08); */
    transform: scale(1.09);
    cursor: pointer;

    opacity: 1;
  }
`;

export default Row;
