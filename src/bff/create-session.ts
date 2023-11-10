export const createSession = (roleId: number) => {
    const removeComment:any = () => {
        console.log("Delete");
    }
    const session: any = {
        logout() {
            Object.keys(session).forEach((key) => {
                delete session[key]
            })

        },
    }

    switch (roleId) {
        case 0:
            session.removeComment
            break;
    
        default:
            break;
    }
    return session
}