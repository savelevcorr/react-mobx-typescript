import React from "react";

import {Columns} from "../../../types/Types";
import s from "./StoriesHeader.module.scss";

const StoriesHeader = ({columns}: Columns) => (
    <div className={s['stories-header']}>
        {Object.keys(columns).map(key => (
            <span key={key} style={{width: columns[key].width}}>{columns[key].label}</span>
        ))}
    </div>
);

export default StoriesHeader;