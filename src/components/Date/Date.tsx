import React from "react";
import './Date.css'

type DateProps={
    className?: string;
    text?:string
}

export const Date=(props:DateProps)=>{
    return (
        <div className="Date__div">
        <p className="Date__text"> {props.text}</p>
        </div>
    )
}