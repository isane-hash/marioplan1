import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{ project.title }</span>
        <p>Posted by Isane</p>
        <p className="gray-text">31 January, 1am</p>
      </div>
    </div>
  )
}

export default ProjectSummary;