import { useState, useEffect } from "react"
import styled from "styled-components";
import { number } from "yup";

const FooterContent = styled.footer`
    width: 90%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 1rem 0;
    position: absolute;
    left: 5%;
    bottom: 0;
`;

const Footer = () => {
    const [city, setCity] = useState('');
    const [temper, setTemper] = useState(0);
    const [weather, setWeather] = useState('');
    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=a4b7ef10aa5bff7ea5255cf9e9946d2c')        
        .then((res) => res.json())
        .then(({name, main, weather}) => {
            setCity(name);
            setTemper(Math.round(main.temp));
            setWeather(weather[0].description);
            console.log("name", name);
            console.log("main", main);
            console.log("weather", weather);
        })
    }, [])
    
    return (
        <FooterContent>
            <>
                ТЕХНОБЛОГ{" "}, {new Date().toLocaleString('ru', { day: "numeric", month: "long", year: "numeric"})}
            </>
            <div>
                Погода в городе {city}{": "}
                {temper}°C, {weather}
            </div>
        </FooterContent>
    );
}
 
export default Footer;