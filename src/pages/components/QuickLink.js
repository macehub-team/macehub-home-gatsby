import React from "react"

export default function QuickLink(props) {
    return (
        <a href={props.href} 
            className="quick-link" 
            {...(props.newTab===true)?{target:"_blank",rel:"noreferrer"}:{}} >

            <div className="row">
            <div className="col-3 text-center">
                <img src={props.thumb} alt={props.thumbAlt} />
            </div>
            <div className="col-9">
                <b>{props.label}</b>
                {props.subLabel}
            </div>	
            </div>
        </a>
    );
}