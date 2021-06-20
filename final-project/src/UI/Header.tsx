import styled from "styled-components";

interface IHeader {
  show: boolean;
}

const Header = styled.nav<IHeader>`
  position: fixed;
  top: 0;
  padding: 20px;
  height: 30px;
  width: 100%;
  z-index: 1;

  /* Animations */
  transition-timing-function: ease-in;
  transition: all 0.5s;

  background-color: ${(props) => (props.show ? "#fff" : "#000")};

  .nav__contents {
    display: flex;
    justify-content: space-between;
  }

  .nav__logo {
    position: fixed;
    top: 10px;
    left: 0;
    width: 80px;
    object-fit: contain;
    padding-left: 20px;
    cursor: pointer;
  }

  .nav__avatar {
    cursor: pointer;
    position: fixed;
    right: 20px;
    width: 30px;
  }
`;
export default Header;

// import styled from "styled-components";

// const Nav = styled.nav`
//   .nav {
//     position: fixed;
//     top: 0;
//     padding: 20px;
//     height: 30px;
//     width: 100%;
//     z-index: 1;

//     /* Animations */
//     transition-timing-function: ease-in;
//     transition: all 0.5s;
//   }
//   .nav__black {
//     background-color: #000;
//   }

//   .nav__contents {
//     display: flex;
//     justify-content: space-between;
//   }

//   .nav__logo {
//     position: fixed;
//     top: 10px;
//     left: 0;
//     width: 80px;
//     object-fit: contain;
//     padding-left: 20px;
//     cursor: pointer;
//   }

//   .nav__avatar {
//     cursor: pointer;
//     position: fixed;
//     right: 20px;
//     width: 30px;
//   }
// `;
// export default Nav;
