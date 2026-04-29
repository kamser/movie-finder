import validator from 'zod'

const movieSchema = validator.object({
    id: validator.string()
                .startsWith("tt")
                .min(9)
                .nonempty()
    , title: validator.string()
                    .minLength(3)
                    .max(50)
    , year: validator.number()
                        .int('Must be a whole number.')
                        .max(2026)
                        .min(1850)
    , image: validator.string()
                        .httpUrl()
})

export function validateMovie({movie}){
    return movieSchema.safeParse(movie)
}

export function partialValidateMovie({movie}){
    return movieSchema.partial().safeParse(movie)
}
