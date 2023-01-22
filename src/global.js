import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
    font-family: 'Poppins';
  }  
  
  .header-img {
    background: url(${({ theme }) => theme.header});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  
    max-width: 100%;
    padding: 10rem 0;
  }

  .new-content,
  .todo-list,
  footer {
    background: ${({ theme }) => theme.lists};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  .container {
    justify-self: center;
    justify-content: center;
  
    width: 40rem;
    margin: -13rem 1rem 2rem 1rem;
  }`;
