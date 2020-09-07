import React from "react"

export default function SectionTitle(props) {
    return (
        <h2 className="section-title" style={{marginBottom:props.marginBottom}}>
            {props.title}<span className="title-end">{props.titleEnd}</span>
        </h2>
    );
}