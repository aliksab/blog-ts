import styled from "styled-components";
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";


const HeaderContent = styled.header`
    width: 90%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 1rem 0;
`;
const Logo = styled.div`
    display: flex;
`;
const CircleLogo = styled.div`
    border: 2px solid;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border-color: #ee5626 #ee5626 #35109f #35109f;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--color-text);
    font-size: 36px;
    font-weight: bold;
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
const LogoText = styled.div`
    margin-left: 9px;
    color: var(--color-text);
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
`;
const ButtomMenu = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;
const ModeSwitcher = styled.label`
    color: var(--color-text);
    cursor: pointer;
    text-transform: capitalize;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    ${Input} {
        opacity: 0;
        width: 0;
        height: 0;
      }
`;
const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #201F1F;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 34px;

    &::before {
        position: absolute;
        content: "";
        height: 40px;
        width: 40px;
        left: 0px;
        bottom: 4px;
        top: 0;
        bottom: 0;
        margin: auto 0;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        box-shadow: 0 0px 15px #2020203d;
        background: white url('https://i.ibb.co/FxzBYR9/night.png');
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 50%;
    }

    ${Input}:checked + & {
        background-color: #f9f4ec;
    }

    ${Input}:checked + &::before {
        -webkit-transform: translateX(24px);
        -ms-transform: translateX(24px);
        transform: translateX(24px);
        background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
        background-repeat: no-repeat;
        background-position: center;
    }

    ${Input}:focus + & {
        box-shadow: 0 0 1px #f9f4ec;
    }

    ${Input}:disabled + & {
        pointer-events: none;
        background: #f9f4ec;
    }
`;
// const SidebarUL = styled.ul`
//     display: flex;
//     justify-content: justify-between;
// `
// const SidebarLI = styled.li`
//     display: block;
//     padding: 4em;
//     list-style: none;
// `
const SidebarUL = styled.ul`
border-radius: 25px;
height: fit-content;
display: inline-flex;
-webkit-backdrop-filter: blur(10px);
backdrop-filter: blur(10px);  
align-items: center;
padding: 0 10px;
`
const SidebarLI = styled.li`
list-style: none;
color: white;
font-family: sans-serif;
font-weight: bold;
padding: 12px 16px;
margin: 0 8px;
position: relative;
cursor: pointer;
white-space: nowrap;
&::before {
    content: " ";
    position: absolute;
    top: 0;
    left:0;
    height:100%;
    width: 100%;
    z-index:-1;
    transition: .2s;
    border-radius: 25px;
}
    &:hover {
        &::before {
            background: linear-gradient(to bottom, #f9f4ec, #ac9f8b);
                box-shadow: 0px 1px 10px 0px black;
                transform: scale(1.0);
        }
        color: black;
}
}
` 
const NavSpan = styled.a`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  color: var(--color-text);
  @media (min-width: 768px) {    
    margin: 0px 10px;
  }
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
    const routes = [
        {
            path: "/",
            name: "Главная"
        },
        {
            path: "/users",
            name: "Пользователи"
        }
    ];
    const isAdmin = false;
    return (
        <HeaderContent>
            <Logo>
                <CircleLogo>#</CircleLogo>
                <LogoText>ТЕХНОБЛОГ</LogoText>
            </Logo>
 
            <ButtomMenu>
                {isAdmin && 
                    <SidebarUL>
                        {routes.map(route =>                    
                            <SidebarLI  key={route.name}>
                                <NavLink
                                    to={route.path}
                                    // className={({ isActive }) =>
                                    //     isActive
                                    //         ? baseStyle + activeStyle
                                    //         : baseStyle
                                    // }
                                >
                                    <NavSpan>
                                        {route.name}
                                    </NavSpan>
                                </NavLink>
                            </SidebarLI>
                        )}
                    </SidebarUL>
                }

                <ModeSwitcher>
                    <Input
                        type="checkbox"
                        onChange={toggleTheme}
                    />
                    <Slider />
                </ModeSwitcher>
                <Circle>
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                </Circle>
            </ButtomMenu>
        </HeaderContent>
    );
};

export default Header;
