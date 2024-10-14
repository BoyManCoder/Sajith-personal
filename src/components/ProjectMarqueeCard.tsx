interface Props{
    projectName: string,
    projectIMG: string,
    projectDesc: string,    
}

function ProjectMarqueeCard({projectName, projectIMG, projectDesc}: Props){
    return(
        <>
        <div className="marquee-card">
            <div className="marquee-overlay">
                <img src={projectIMG}/>
            </div>
            <div className="marquee-text">
                <h1>{projectName}</h1>
                <p>{projectDesc}</p>
            </div>
            </div>
            </>
    )

}

export default ProjectMarqueeCard