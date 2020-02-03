import React from 'react'

const ProjectDetails = (props) => {
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - { id }</span>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis libero maxime velit sunt. Consectetur provident consequuntur qui id laudantium sapiente. Nobis assumenda deleniti, corrupti nulla incidunt magnam quod animi error!</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Isane</div>
          <div>31 January, 1am</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails
