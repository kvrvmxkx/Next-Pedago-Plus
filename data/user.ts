const users = [
    {
        email: "jhon@email.com",
        password: "password"
    },
    {
        email: "bob@email.com",
        password: "password"
    },
    {
        email: "max@email.com",
        password: "password"
    },
]

export const getUserByEmail = (email:string | unknown) => {
    const found = users.find(user => user.email === email)
    return found
}