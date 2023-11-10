import { getUsers } from "./get-users";

export const getUser = async (loginToFind: string) =>  {
    const users = await getUsers();
    return users.find(({ login }: {login?: string}) => login === loginToFind);
}
