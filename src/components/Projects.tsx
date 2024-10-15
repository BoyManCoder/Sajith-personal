import { useState } from "react";
import { Row, Modal, Button } from "react-bootstrap";

interface Experience {
    title: string;
    description: string;
    longDescription?: string; // Optional long description
    imgSrc: string;
    category: string;
}

function Projects() {
    const [key, setKey] = useState<string>('project1');
    const [tabVisibility, setTabVisibility] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Experience | null>(null);

    const handleClickTab = (project: Experience) => {
        setSelectedProject(project);
        setTabVisibility(true);
    };

    const handleCloseModal = () => {
        setTabVisibility(false);
        setSelectedProject(null);
    };

    const experiences: Experience[] = [
      {
          title: "Task Management App",
          description: "A simple task management application.",
          longDescription: "This task management application developed using React.js and Firebase allows users to create, update, and delete tasks in real time. It features user authentication and a responsive design.",
          imgSrc: "https://via.placeholder.com/200", // Placeholder image
          category: "Projects"
      },
      {
          title: "E-commerce Website",
          description: "An e-commerce website built with Node.js.",
          longDescription: "This e-commerce website supports authentication, product listing, and cart functionality. It uses Node.js for the server and MongoDB for data storage, providing a seamless shopping experience.",
          imgSrc: "https://via.placeholder.com/200", // Placeholder image
          category: "Projects"
      },
      {
          title: "Software Developer Internship",
          description: "Interned as a software developer.",
          longDescription: "During my internship at XYZ Corp, I contributed to various web applications, improving my skills in both front-end and back-end development while working in a collaborative environment.",
          imgSrc: "https://via.placeholder.com/200", // Placeholder image
          category: "Work Experience"
      },
      {
          title: "Research Assistant",
          description: "Assisted in academic research.",
          longDescription: "As a research assistant, I collaborated with a team to conduct experiments and analyze data related to machine learning algorithms, enhancing my analytical and research skills.",
          imgSrc: "https://via.placeholder.com/200", // Placeholder image
          category: "Work Experience"
      },
      // Add more experiences as needed
  ];
  

    const filteredExperiences = experiences.filter(exp => {
        if (key === 'project1') return exp.category === 'Work Experience';
        if (key === 'project2') return exp.category === 'Projects';
        return false;
    });

    return (
        <div className="container mt-5">
            <h2>Experience</h2>
            <div className="tabs">
                <ul className="nav nav-tabs mb-3 experience-nav " id="projects-tabs">
                    <li className="nav-item">
                        <a className={`nav-link ${key === 'project1' ? 'active' : ''}`} onClick={() => setKey('project1')}>
                            Work Experience
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className={`nav-link ${key === 'project2' ? 'active' : ''}`} onClick={() => setKey('project2')}>
                            Projects
                        </a>
                    </li>
                </ul>

                <div className="tab-content">
                    {filteredExperiences.length > 0 && (
                        <div className="tab-pane fade show active p-3">
                            <Row>
                                {filteredExperiences.map((experience, index) => (
                                    <div className="col-md-4 main-card" key={index}>
                                        <div className="card project-card">
                                            <img src={experience.imgSrc} className="card-img-top main-card" alt={experience.title} />
                                            <div className="card-body">
                                                <h5 className="card-title">{experience.title}</h5>
                                                <p className="card-text">{experience.description}</p>
                                                <Button variant="primary" onClick={() => handleClickTab(experience)}>View Project</Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Row>
                        </div>
                    )}
                </div>
            </div>

            <Modal show={tabVisibility} onHide={handleCloseModal}>
                <div className="project-pop"> 
                <Modal.Header closeButton>
                    <Modal.Title>{selectedProject ? selectedProject.title : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProject ? (
                        <>
                            <img src={selectedProject.imgSrc} className="img-fluid img-pop" alt={selectedProject.title} />
                            <p>{selectedProject.longDescription}</p>
                        </>
                    ) : null}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                </Modal.Footer></div>
            </Modal>
        </div>
    );
}

export default Projects;
