import React from "react"

export default function TeamMember(props) {
    return (
        <div className="team-member">
            <span className="team-member-photo">
                <img src={props.photo} alt={props.name}  />
            </span>
            <h5 className="team-member-name">{props.name}</h5>
            <span className="team-member-title">{props.title}</span>
            <span className="team-member-batch">{props.batch}</span>
            { props.linkedin && 
                <a href={props.linkedin} className="team-member-linkedin"> <i className="fab fa-linkedin"></i></a>
            }
        </div>
    );
}