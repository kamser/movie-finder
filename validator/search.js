import validator from 'zod'

const searchSchema = validator.object(
    {
        userSearch: validator.string()
                                .min(1, 'This field can not be empty')
                                .regex(/^[A-Za-z0-9 ]+$/, 'This field must be a word or a sentence')
    }
)

export function validateSearch({userSearch}){
    return searchSchema.safeParse({userSearch})
}