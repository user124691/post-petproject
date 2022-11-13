import React from 'react';
import PostItem from "./PostItem";
import {CSSTransition, TransitionGroup} from 'react-transition-group'

const PostList = ({posts, deletePost}) => {
    if(!posts.length){
        return (
            <h1 style={{display: "flex", justifyContent: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }

    return(
        <div>
            <TransitionGroup>
                {posts.map((item, index) => 
                    <CSSTransition
                        key={item.id}
                        timeout={500}
                        classNames="post"
                    >
                        <PostItem deletePost={deletePost} number={index + 1} post={item}></PostItem>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );
};

export default PostList;

