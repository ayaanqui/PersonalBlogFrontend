import React from 'react';

const post = (props) => {
  return (
    <div className="col-sm-6">
      <div className="card mb-3">
        <svg className="bd-placeholder-img card-img-top" width="100%" height="100" role="img"><title>Placeholder</title><rect width="100%" height="100%" fill={ "#" + Math.floor(Math.random()*15777110).toString(16) }></rect></svg>

        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.summary}</p>
          
          { props.tags.map(value => { 
            return (
              <span className="badge badge-secondary mr-1 font-weight-normal" style={{cursor: "pointer"}}>{ value.name }</span>
            )
           }) }
        </div>
      </div>
    </div>
  )
};

export default post;