import React from "react"

export default function OpportunityBox(props) {
    return (
        <div className="opportunity-box">
            <div className="d-flex align-items-center">
                <img src={props.thumb} className="opp-thumb" alt={props.title}/>
                <div>
                    <h4 className="opp-title">{props.title}</h4>
                    <h6 className="opp-sub-title">{props.subTitle}</h6>
                </div>
            </div>
            <p className="opp-desc">
                {props.description}
            </p>            
            {
                (props.details ?? []).map(detail=>{
                    return ([
                        <h5>
                            {detail.title} &nbsp;
                            {detail.icon?<i className={detail.icon}></i>:null}
                        </h5>
                        ,
                        <p dangerouslySetInnerHTML={{__html: detail.data.replace(/\n/g, "<br />")}} />
                    ])
                })
            }
            <div className="opp-links">
                {
                    (props.links ?? []).map(item=>
                        <OpportunityBoxLink
                            title={item.title}
                            subTitle={item.subTitle}
                            icon={item.icon}
                            link={item.link}
                            />
                    )
                }
            </div>
        </div>
    );
}

function OpportunityBoxLink(props) {
    return (
        <a href={props.link}>
            <i className={props.icon+" opp-link-icon"}></i>
            <i className="fa fa-chevron-right opp-right-icon"></i>
            <span className="opp-link-label">{props.title}</span>
            {
                props.subTitle?
                <span className="opp-link-sub">{props.subTitle}</span>
                :null
            }
        </a>
    );
}