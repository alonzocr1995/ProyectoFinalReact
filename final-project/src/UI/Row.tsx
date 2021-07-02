import styled from "styled-components";
import { ThemeProps } from "./Theme";

const Row = styled.div<ThemeProps>`
  /* color: ${(props) => props.theme.color}; */
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
    border: none;
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
