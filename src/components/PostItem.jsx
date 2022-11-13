import React from 'react'
import MyButton from './UI/button/MyButton'

export default function PostItem({post, number, deletePost}) {
    return(
            <div className="post">
                <div className="post_content">
                    <strong>{post.id}. {post.name}</strong>
                    <div>
                        {post.body}
                    </div>
                </div>
                <div>
                    <MyButton onClick={() => deletePost(post)}>Delete</MyButton>
                </div>
            </div>
    )
}