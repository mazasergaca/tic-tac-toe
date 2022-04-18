import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
body {
  height: 100vh;
  background: radial-gradient(
    circle,
    rgba(3, 0, 47, 1) 0%,
    rgba(27, 95, 90, 1) 45%,
    rgba(30, 54, 139, 1) 100%
  );
    color: #000;
}

ul {
  list-style: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
