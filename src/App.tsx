import styled from "styled-components";
import routes from "./routes";
import Header from "./components/header/Header";
import { useLocation, useRoutes} from "react-router-dom"
import Footer from "./components/Footer";

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
    
`;


function App() {
    const location = useLocation();
    const isLoggedIn = true;
    const elements = useRoutes(routes(isLoggedIn, location));
    return (
        <Blog>
            <Header />
            {elements}
            <Footer />
        </Blog>
    );
}

export default App;
