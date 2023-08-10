import style from './collapse.module.scss'
import React, { useEffect, useState } from "react";

interface ICollapse {
    backgroundColor?: string
    title: string
    content: string
}

export const Collapse = ({backgroundColor, title, content}: ICollapse) => {
    const [ isBodyOpened, setIsBodyOpened ] = useState(false)
    const handleOnClickHeader = () => {
        setIsBodyOpened(!isBodyOpened)
    }
    return (
        <>
            <div className={style.collapseContainer}>
                <div className={`${style.collapseHeader} flex justify-between ${isBodyOpened && style.open}`} onClick={handleOnClickHeader}>
                    <span>{ title }</span>
                    <span>{isBodyOpened ? "▽" : "▷" }</span>
                </div>
                {isBodyOpened &&                 
                    <div className={`${style.collapseBody}`}>
                        { content }
                    </div>
                }
            </div>
        </>
    )
}