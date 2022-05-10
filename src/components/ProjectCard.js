const ProjectCard = ({ projectInformation }) => {
    return (
        <div className="projectOne">
            <div className="projectPicture">
                <a><img src={projectInformation.projectPicture} className="image" alt="project"></img></a>
            </div>
            <div className="projectWrapper">
                <div className="projectDescriptionWrapper">
                    <div className="projectTools">
                        <p>{projectInformation.projectTools}</p>
                    </div>
                    <div className="projectDescription">
                        <h4 className="projectTitle">{projectInformation.projectTitle}</h4>
                        <p>{projectInformation.projectDescription}</p>
                    </div>
                </div>
                <div className="projectLinks">
                    <div>{projectInformation.projectLink && <a className="projectLink" href={projectInformation.projectLink}>Visit</a>}</div>
                    <div>{projectInformation.githubLink && <a className="projectLink" href={projectInformation.githubLink}>GitHub</a>}</div>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard