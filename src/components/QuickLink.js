import React from "react"
import { Link } from "gatsby";

export default function QuickLink(props) {
    return (
        <Link href={props.href} 
            className="quick-link" 
            onClick={(e)=>{e.preventDefault();props.onClick()}}
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
        </Link>
    );
}