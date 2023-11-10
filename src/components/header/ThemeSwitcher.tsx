import styled from "styled-components";

const Input = styled.input`
  height: 0;
  width: 0;
  opacity: 0;
  z-index: -1;
`;
const ModeSwitcher = styled.label`
    color: var(--color-text);
    margin: 1rem;
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

const ThemeSwitcher = ({toggleTheme}: {toggleTheme? :React.ChangeEventHandler}) => {
    return (
        <ModeSwitcher>
            <Input
                type="checkbox"
                onChange={toggleTheme}
            />
            <Slider />
        </ModeSwitcher>
    );
}
 
export default ThemeSwitcher;