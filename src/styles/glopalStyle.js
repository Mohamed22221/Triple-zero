import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
:root{
  --primary-color:#FBA30D;
  --secound-color:#2A2E33;
  --background-color:  #e5e5e5;
  --background-opacity:#7070706b;
  --succes-color:#198754;
  --danger-color:#F32013
  --font: #505050;
  --orange-color: #FF6947;
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