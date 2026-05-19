import { useState, useRef, useEffect } from "react"

import { validateSearch } from '../../validator/search.js'

export function useSearch(){
  const [search, updateSearch] = useState('')
  const [errors, setErrors] = useState([])
  const firstTime = useRef(true)

  useEffect(()=> {
    if(firstTime.current){
      firstTime.current = search === ''
      return
    }

    const validatorResult = validateSearch({search})

    if(validatorResult.success) {
      setErrors([])
      return
    }

    const newIssues = validatorResult.error.issues.map( (issue) => issue.message)

    console.log(newIssues)

    setErrors([...newIssues])

  }, [search])

  return {search, updateSearch, errors}
}