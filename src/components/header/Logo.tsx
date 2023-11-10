import { Link } from "react-router-dom";
import styled from "styled-components";

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
const LogoText = styled.div`
    margin-left: 9px;
    color: var(--color-text);
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
`;

const LogoContainer = () => {
    return (
        <Link to={"/"}>
            <Logo>
                <CircleLogo>#</CircleLogo>
                <LogoText>ТЕХНОБЛОГ</LogoText>
            </Logo>
        </Link>

    );
}
 
export default LogoContainer;