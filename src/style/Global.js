import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
    scroll-behavior: smooth;
}

html {
    font-family: sans-serif;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
body {
    background-color: ${({theme}) => theme.colors.background };//hsl(0, 0%, 100%);
    color: hsl(0, 1%, 16%);
    font-family: monospace;
    overflow-x: hidden;    
}
a {
    color : ${({theme}) => theme.colors.text };
}
a:hover{
    color : ${({theme}) => theme.colors.text };
}
.s-layout {
    display: flex;
    width: 100%;
    min-height: calc(100vh-90px);   
    color : ${({theme}) => theme.colors.background };     
}
  
.s-layout__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;    
    color : ${({theme}) => theme.colors.text };  
}
  
  
.s-sidebar__trigger {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 4em;
    height: 4em;    
}
  
.s-sidebar__trigger > i {
    display: inline-block;
    margin: 1.5em 0 0 1.5em;
    color: ${({theme}) => theme.colors.text };
}
  
.s-sidebar__nav {
    position: fixed;
    top: calc(0+60px);
    left: -15em;
    overflow: hidden;
    transition: all 0.3s ease-in;
    width: 15em;
    height: 100%;
    background: ${({theme}) => theme.colors.header };
    color: rgba(255, 255, 255, 0.7);
}
  
.s-sidebar__nav:hover,
.s-sidebar__nav:focus,
.s-sidebar__trigger:focus + .s-sidebar__nav,
.s-sidebar__trigger:hover + .s-sidebar__nav {
    left: 0;
}
  
.s-sidebar__nav ul {
    position: absolute;
    top: 4em;
    left: 0;
    margin: 0;
    padding: 0;
    width: 15em;
}
  
.s-sidebar__nav ul li {
    width: 100%;
}
  
.s-sidebar__nav-link {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 4em;
}
  
.s-sidebar__nav-link em {
    position: absolute;
    top: 50%;
    left: 4em;
    transform: translateY(-50%);
}
  
.s-sidebar__nav-link:hover {
    background : ${({theme}) => theme.colors.quoteBgc }    
}
  
.s-sidebar__nav-link > i {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 4em;
    height: 4em;
}
  
  .s-sidebar__nav-link > i::before {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  /* Mobile First */
  @media (min-width: 42em) {
    .s-layout__content {
      margin-left: 4em;
    }  
    /* Sidebar */
    .s-sidebar__trigger {
      width: 4em;
    }
  
    .s-sidebar__nav {
      width: 4em;
      left: 0;
    }
  
    .s-sidebar__nav:hover,
    .s-sidebar__nav:focus,
    .s-sidebar__trigger:hover + .s-sidebar__nav,
    .s-sidebar__trigger:focus + .s-sidebar__nav {
      width: 15em;
    }
  }
  
  @media (min-width: 68em) {
    .s-layout__content {
      margin-left: 15em;
    }
  
    /* Sidebar */
    .s-sidebar__trigger {
      display: none;
    }
  
    .headerNav {
      margin-left: 15em;
    }
  
    .s-sidebar__nav {
      width: 15em;
    }
  
    .s-sidebar__nav ul {
      top: 1.3em;
    }
  }
  
 

  // theme buttons color
.light {
    background-color: hsl(0, 0%, 93%);
}
.dark {
    background-color: hsl(0, 0%, 20%);
}
.blue {
    background-color: hsl(195, 53%, 79%);
}
.green {
    background-color: hsl(150, 80%, 15%);
}
.brown {
    background-color: hsl(39, 70%, 50%);
}
.pink {
    background-color: hsl(350, 100%, 88%);
}
  
  // active theme
.active{
    border: 3px solid hsl(0, 0%, 87%);
}
`;