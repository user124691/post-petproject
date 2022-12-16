import React from 'react'
import MyButton from './UI/button/MyButton'
import { useNavigate } from 'react-router-dom'

export default function PostItem({post, number, deletePost}) {
    const router = useNavigate()

    return(
            <div className="post">
                <div className="post_content">
                    <strong>{post.id}. {post.name}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => router('/posts/' + post.id)}>Open</MyButton>
                    <MyButton onClick={() => deletePost(post)}>Delete</MyButton>
                </div>
            </div>
    )
}