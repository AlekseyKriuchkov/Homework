import React from 'react'
import s from './Message.module.css'

// нужно создать правильный тип вместо any
type MessageProps = {
    message: MessagePropsType
}

export type MessagePropsType = {
    id: number,
    user: UserPropsType,
    message: MessageTypeS,
}
type UserPropsType = {
    avatar: string,
    name: string,
}
type MessageTypeS = {
    text: string,
    time: string,
}
// нужно отобразить приходящие данные
export const Message = (props:MessageProps) => {
    return (
        <div id={'hw1-message-' + props.message.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={props.message.user.avatar} alt="bla bla"
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.message.id} className={s.name}>
                        {props.message.user.name}
                    </div>
                    <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
                        {props.message.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.message.id} className={s.time}>
                {props.message.message.time}
            </div>
        </div>
    )
}


