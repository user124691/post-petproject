import React from 'react'
import cl from './MyModal.module.css'

export default function MyModal({children, ...props}){
    const rootClasses = [cl.myModal]
    if(props.visible){
        rootClasses.push(cl.active)
    }


    return(
        <div className={rootClasses.join(" ")} onClick={() => props.setVisible(false)}>
            <div className={cl.myModalContent} onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

