import React, {FC} from "react";
import {IButton} from "../../types/Types";
import s from "../Stories/Story/Story.module.scss";

const Button: FC<IButton> = (
    {
        styleClassName,
        type,
        clickHandler,
        children
    }
) => {
    let className = [];

    if (styleClassName) {
        className.push(s['button-inline'], styleClassName);
    } else {
        className.push(s['button-inline']);
    }
    return (
        <button className={className.join(' ')}
                onClick={clickHandler}
                type={type}>
            {children}
        </button>
    );
};

export default Button;