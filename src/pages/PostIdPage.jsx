import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useState } from 'react'
import PostServise from '../API/PostServise'
import Loader from '../components/UI/loader/Loader'

export default function PostIdPage(){
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchByPostId, isLoading, error] = useFetch(async () => {
        const response = await PostServise.getById(params.id)
        setPost(response.data)
    })

    useEffect(() => {
        fetchByPostId(params.id)
    }, [])

    return(
        <div>
            <h1>This post ID is: {params.id}</h1>
            <div>
                {isLoading ? <Loader/> : <div>{post.id} {post.title}</div>}
            </div>
        </div>
    )
}