import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  
body {
  min-height: 100vh;

  font-family: 'Secular One', sans-serif;
  background-color: #fff;
  background-image: linear-gradient(180deg, #5D5FEF 0%, #843CE0 100%);
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
