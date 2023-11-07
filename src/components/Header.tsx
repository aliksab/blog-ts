import styled from "styled-components";

const HeaderContent = styled.header`
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
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
    color: #282828;
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
    color: #282828;
    margin-left: 9px;
`;
const LogoText = styled.div`
    margin-left: 9px;
    color: #ee5626;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
`;
const ButtomMenu = styled.div`
    display: flex;
`;

const Header = () => {
    return (
        <HeaderContent>
            <Logo>
                <CircleLogo>#</CircleLogo>
                <LogoText>ТЕХНОБЛОГ</LogoText>
            </Logo>
            <ButtomMenu>
                <Circle>
                    <i className="fa fa-arrow-left" aria-hidden="true"></i>
                </Circle>
                <Circle>
                    <i className="fa fa-users" aria-hidden="true"></i>
                </Circle>
                <Circle>
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                </Circle>
            </ButtomMenu>
        </HeaderContent>
    );
};

export default Header;
