import styled, { css } from "styled-components";

const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  color: #fff;
  background-color: #4361ee;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: red;
  }

  // tangkap props variant
  background-color: ${function (props) {
    if (props.variant) {
      return props.theme.colors[props.variant];
    } else {
      return props.theme.colors.primary;
    }
  }};

  // tangkap props full
  ${(props) => {
    return (
      props.full &&
      css`
        width: 100%;
        display: block;
      `
    );
  }};

  // tangkap props size
  ${(props) => {
    if (props.size) {
      return props.theme.size[props.size];
    } else {
      return props.theme.size.md;
    }
  }};
`;
export default Button;
