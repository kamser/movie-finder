import './searchErrors.css'

export function SearchErrors({errors}){
    return (
        <>
            {   errors?.length > 0  
                ? (<ul className='error'>
                {
                    errors?.map((error, index) => (<li key={`${error}-${index}`}>{error}</li>))
                }
                </ul>)
                : null
            }
        </>
    )
}