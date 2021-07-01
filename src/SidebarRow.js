import { Icon } from '@material-ui/core';
import React from 'react';
import './SidebarRow.css';
const SidebarRow = ({title,Icon}) => {
    return (
        <div className="sidebar_row">
            <Icon />
            <h2>{title}</h2>
        </div>
    );
};

export default SidebarRow;