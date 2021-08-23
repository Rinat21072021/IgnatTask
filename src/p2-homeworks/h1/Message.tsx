import React from 'react'
import s from './Message.module.css'
type MessagePropsType={
    avatar:string
    name:string
    message: string
    time:string
}
export function Message(props:MessagePropsType) {
    return (
        <div >
            <div className={s.ramka} >
                <div className={s.name}>{props.name}</div>
                <div className={'message'}>{props.message}</div>
                <div className={s.time} >{props.time}</div>
            </div>
            <img className={s.img} src={props.avatar}/>
        </div>
    )
}

