import { createGlobalStyle } from "styled-components";
const GlopalStyle = createGlobalStyle`
:root{
  --primary-color:#FBA30D;
  --secound-color:#2A2E33;
  --background-color: #e7e7e7e6;
  //#e7e7e7e6 #f1f1f1ed
  --background-opacity:#7070706b;
  --succes-color:#17a563;
  --danger-color:#b3170d;
  --font: #8d8d8d;
  --font-opacity:#b9b9b9;
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
::-webkit-scrollbar {
  width: 10px;
}
 
::-webkit-scrollbar-track {
  background-color: var(--background-opacity);
}
 
::-webkit-scrollbar-thumb {
  background-color: var(--secound-color);
  outline: 1px solid slategrey;
}
}



`

export default GlopalStyle