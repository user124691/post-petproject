import { useState } from 'react'

export const useFetch = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    
    async function fetching(){
        try{
            setIsLoading(true)
            await callback()
        }catch(e){
            setError(e.message)
        }finally{
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}