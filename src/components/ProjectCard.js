const ProjectCard = ({ projectInformation }) => {
    return (
        <div className="projectOne">
            <div className="projectPicture">
                <a><img src={projectInformation.projectPicture} className="image" alt="project"></img></a>
            </div>
            <div className="projectTools">
                <p>{projectInformation.projectTools}</p>
            </div>
            <div className="projectDescription">
                <h4 className="projectTitle">{projectInformation.projectTitle}</h4>
                <p>{projectInformation.projectDescription}</p>
            </div>
            <div className="projectLinks">
                <a className="gitHub" href={projectInformation.githubLink}>GitHub</a>
            </div>
        </div>
    )
}
export default ProjectCard