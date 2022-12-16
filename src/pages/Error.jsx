import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error(){
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/posts")
        }, 1000)
    }, [])

    return(
        <div style={{color: "red"}}>
            <h2>Page Not Found</h2>
        </div>
    )
}