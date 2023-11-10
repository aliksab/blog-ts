export const addUser = (login: string, password: string) => 
    fetch('http://localhost:3005/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
            login,
            password,
            registed_at: new Date().toLocaleString('ru'),
            role_id: 2
        })
    })