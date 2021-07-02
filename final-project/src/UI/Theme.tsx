import React from "react";
import styled from "styled-components";
import { initialTheme } from "../shared/context/ThemeContext";
import { useTheme } from "../shared/hooks/useTheme";

export interface ThemeProps {
  [key: string]: any;
}

const Div = styled.div<ThemeProps>`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;
const Theme: React.FC = ({ children }) => {
  const { theme, handleTheme } = useTheme();

  return (
    <Div theme={initialTheme[theme]}>
      <div style={{ paddingTop: "75px" }}>
        <label htmlFor="">Theme</label>
        <select
          name="select"
          onChange={(e) =>
            handleTheme && handleTheme(e.target.value as "dark" | "light")
          }
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
      </div>

      {children}
    </Div>
  );
};

export default Theme;
