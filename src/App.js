import SideBar from "./components/bars/SideBar";
import Home from "./pages/Home"
import styled from "styled-components"
function App() {
  return (
    <StyleApp>
      <SideBar />
      <Home />
    </StyleApp>

  );
}
const StyleApp = styled.div`
display: flex;
width: 100%;

`
export default App;
