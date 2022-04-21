import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
:root{
  --primary-color:#FBA30D;
  --secound-color:#2A2E33;
  --background-color: #f3f3f3e6;
  //#f1f1f1 #f1f1f1ed
  --background-opacity:#7070706b;
  --succes-color:#17a563;
  --danger-color:#b3170d;
  --font: #8d8d8d;
  --orange-color: #FF6947;
  --white-color:#fff;
} 
*{
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Cairo', sans-serif;
  margin: 0;
  padding: 0;
   
}

html {
  scroll-behavior: smooth;
}

body{
  font-family: 'Almarai', sans-serif;
  background-color: var(--background-color);
}



`

export default GlopalStyle