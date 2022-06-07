import React from 'react'
import "./SidebarRow.css"
import { Avatar } from "@material-ui/core";

// function sidebarRow(props) {
    // if you want to pass a component as a prop we have use capital letter
function sidebarRow({href,src,Icon,title}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {/* {href && <Avatar href={href}/>} */}
            {Icon && <Icon/>}
            <h4>{title}</h4>

        </div>
    )
}

export default sidebarRow
