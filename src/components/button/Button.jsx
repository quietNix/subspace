import "./Button.scss"
import React from "react";

function Button({ children, className, link = '' }) {
    return (
        <a
            href={"/#/" + link}
            className={"btn__primary typo__heading-h2 typo__heading-h2--white " + className}
        >
            {children}
        </a>
    )
}

export default Button;






