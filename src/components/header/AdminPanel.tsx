import styled from "styled-components";
import { NavLink } from "react-router-dom";


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
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {    
    margin: 0px 10px;
  }
`

const AdminPanel = () => {
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
    return (
        <SidebarUL>
            {routes.map(route =>                    
                <SidebarLI  key={route.name}>
                    <NavLink
                        to={route.path}
                    >
                        <NavSpan>
                            {route.name}
                        </NavSpan>
                    </NavLink>
                </SidebarLI>
            )}
        </SidebarUL>
    );
}
 
export default AdminPanel;