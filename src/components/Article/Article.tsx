import React from "react";
import './Article.css'

type ArticleProps={
    className?: string;
    text?:string
}
export const Article =(props:ArticleProps) => {
    return (
        <div className="Article__div">
            <p className="Article__text"> {props.text}</p>
        </div>
    )
}