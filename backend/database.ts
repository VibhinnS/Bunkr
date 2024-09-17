import zod from "zod"

const signup = zod.object({
    username: zod.string(),
    email: zod.string(),
    password: zod.string()
})

const signin = zod.object({
    username: zod.string(),
    password: zod.string()
})

export { signin, signup }