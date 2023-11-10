import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoContainer from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import AdminPanel from "./AdminPanel";


const HeaderContent = styled.header`
    width: 90%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 1rem 0;
`;

const Circle = styled.div`
    border: 2px solid;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--color-text);
    margin-left: 9px;
    cursor: pointer;
`;

const ButtomMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;


const Username = styled.h3`
  margin: 1rem;
`



const Header = () => {
    const navigate = useNavigate();
    const backButton = () => {
        navigate(-1)
    }
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light")
    useEffect(() => {
        document.body.setAttribute("data-theme", theme)
    }, [theme]);

    const isAdmin = false;
    const isLoggedIn = false;
    return (
        <HeaderContent>
            <LogoContainer/>
 
            <ButtomMenu>
                {isAdmin && <AdminPanel/>}

                <ThemeSwitcher toggleTheme={toggleTheme} />

               
                {isLoggedIn ? (
                    <>
                        <Username>Your Login</Username>
                        <Circle>
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                        </Circle> 
                    </>
                ) : (
                    <Link to={'/login'}>
                        Вход
                    </Link>
                )
                }
            </ButtomMenu>
        </HeaderContent>
    );
};

export default Header;
