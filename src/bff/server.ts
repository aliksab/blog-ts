import { addUser } from "./add-user";
import { getUser } from "./get-user";
import { createSession } from "./create-session";

export const server = {
    async authorize(authLogin: string, authPassword: string) {
        const user = await getUser(authLogin);

        if (!user) {
            return {
                error: "Такой пользователь не найден",
                res: null
            };
        }

        if (authPassword !== user.password) {
            return {
                error: "Неверный пароль",
                res: null
            };
        }
        return {
            error: null,
            res: createSession(user.role_id)
        }
    },
    async register(regLogin: string, regPassword: string) {
        const user = await getUser(regLogin);

        if (user) {
            return {
                error: "Такой пользователь уже существует",
                res: null
            };
        }
        addUser(regLogin, regPassword);

        return {
            error: null,
            res: createSession(user.role_id)
        }
    }
}