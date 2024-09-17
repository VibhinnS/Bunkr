import zod from "zod"

const signin = zod.object({
    username: zod.string(),
    email: zod.string(),
    password: zod.string()
})

export { signin }