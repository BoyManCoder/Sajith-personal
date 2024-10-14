import { useState } from "react";
import { Row } from "react-bootstrap";

function Projects() {
    const [key, setKey] = useState('project1'); // Using React hook to manage active tab

    // Combined project data with categories
    const experiences = [
        {
            title: "Task Management App",
            description: "A simple task management application developed using React.js and Firebase for real-time data storage.",
            imgSrc: "path/to/image1.jpg",
            category: "Projects"
        },
        {
            title: "E-commerce Website",
            description: "An e-commerce website built with Node.js, Express, and MongoDB that includes authentication, product listing, and cart functionality.",
            imgSrc: "path/to/image2.jpg",
            category: "Projects"
        },
        {
            title: "Software Developer Internship",
            description: "Interned as a software developer at XYZ Corp, contributing to various web applications.",
            imgSrc: "path/to/image3.jpg",
            category: "Work Experience"
        },
        {
            title: "Research Assistant",
            description: "Assisted in academic research related to machine learning algorithms.",
            imgSrc: "path/to/image4.jpg",
            category: "Work Experience"
        },
        {
          title: "Research Assistant",
          description: "Assisted in academic research related to machine learning algorithms.",
          imgSrc: "path/to/image4.jpg",
          category: "Work Experience"
        },
        {
        title: "Research Assistant",
        description: "Assisted in academic research related to machine learning algorithms.",
        imgSrc: "path/to/image4.jpg",
        category: "Work Experience"
      },
        // Add more experiences as needed
    ];

    // Filter experiences based on the selected category
    const filteredExperiences = experiences.filter(exp => {
        if (key === 'project1') return exp.category === 'Work Experience';
        if (key === 'project2') return exp.category === 'Projects';
        if (key === 'project3') return exp.category === 'Academic Extracurriculars';
        return false;
    });

    return (
      <div className="container mt-5">
        <h2>Experience</h2>
        <div className="tabs">
          <ul className="nav nav-tabs mb-3 experience-nav " id="projects-tabs">
            <li className="nav-item">
              <a
                className={`nav-link ${key === 'project1' ? 'active' : ''}`}
                onClick={() => setKey('project1')}
              >
                Work Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${key === 'project2' ? 'active' : ''}`}
                onClick={() => setKey('project2')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${key === 'project3' ? 'active' : ''}`}
                onClick={() => setKey('project3')}
              >
                Academic Extracurriculars
              </a>
            </li>
          </ul>

          <div className="tab-content">
            {filteredExperiences.length > 0 && (
              <div className="tab-pane fade show active p-3">
                <Row>
                  {filteredExperiences.map((experience, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                      <div className="card project-card">
                        <img src={experience.imgSrc} className="card-img-top" alt={experience.title} />
                        <div className="card-body">
                          <h5 className="card-title">{experience.title}</h5>
                          <p className="card-text">{experience.description}</p>
                          <a href="#" className="btn btn-primary">View Project</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Row>
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default Projects;
