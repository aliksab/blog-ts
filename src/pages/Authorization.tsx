import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";
import styled from "styled-components";


const authFormSchema = yup.object().shape({
    login: yup
        .string()
        .required("Заполните логин")
        .matches(/^\w+$/, "Неверно заполнен логин. Допускаются только буквы и цифры")
        .min(3, "Неверный логин. Минимум 3 символа")
        .max(15, "Неверный логин. Максимум 15 символов"),
    password: yup
        .string()
        .required("Заполните пароль")
        .matches(/^[w#%]+$/, "Неверно заполнен пароль. Допускаются буквы, цифры и знаки # %")
        .min(6, "Неверный пароль. Минимум 6 символа")
        .max(30, "Неверный пароль. Максимум 30 символов"),
})

const AuthorizationContainer = ({ className }: {className?: any}) => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            login: "",
            password: ""
        },
        resolver: yupResolver(authFormSchema)
    })
    const [serverError, setServerError] = useState('');
    const onSubmit = ({ login, password }: {login? : string, password?: string}) => {
        console.log(login);
        console.log(password);
    };
    const formError = errors?.login?.message || errors?.password?.message
    const errorMessage = formError || serverError;
    return (
        <div className={className}>
            <h2>Авторизация</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Логин.." {...register("login")} />
                <input type="password" placeholder="Пароль.." {...register("password")} />
                <button type="submit" disabled={!!formError}>Войти</button>
                {errorMessage && <div>{errorMessage}</div>}
            </form>
            Первый раз? 
        </div>
    );
}

export const Authorization = styled(AuthorizationContainer)`
    display: flex;
    align-items: center;
    flex-direction: column;

    & > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20%;
        
        & > input {
            width:100%;
            height:3rem;
            border-radius:3px;
            margin:5px 0;          }
          input[type="text"]:focus, input[type="password"]:focus {
            border:1px solid var(--color-text);
            box-shadow:none;
          }         
          input[type="text"]{
            background:transparent; 
            border:2px solid #22272d;
            color:$button;
          }
          input[type="password"]{
            background:transparent; 
            border:2px solid #22272d;
            color:$button;
          }
        & > button {
            width:100%;
            height:2rem;
            margin:5px 0;  
            border:2px solid #22272d;
            padding:7px 15px;
            border-radius:3px;
            font-size:0.8em;
            cursor:pointer; 
            background: none;

            &:hover {
                transform: scale(1.05);
              }
        }
    }
`