import React from "react";
import s from './style.less'

export interface InputProps {

}


export const Input : React.FC<InputProps> = () =>{
    return (
        <input className={s.demo}/>
    )
}
