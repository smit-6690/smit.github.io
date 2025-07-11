import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.avif';
import mock8 from '../assets/images/mock8.png';
import mock09 from '../assets/images/mock09.avif';
import mock10 from '../assets/images/mock10.avif';
import '../assets/styles/Project.scss';

const projectData = [
    {
        link: "https://github.com/smit-6690/Uber-Ride-Simulation",
        img: mock10,
        title: "Uber Ride Simulation",
        desc: "An object-oriented simulation of Uber ride-sharing operations. The project models realistic scenarios of drivers and passengers interacting over time, matching requests, completing rides, and generating statistics — all from the command line.",
        tech: "Node.js · Express.js · Kafka · REST APIs · MySQL · MongoDB · Redis · Docker · Kubernetes · Apache JMeter · JSON · MicroServices Architecture · ML · GUI · Authentication · Validation · SQL/NoSQL · API Design"
    },
    {
        link: "https://github.com/smit-6690/Traffic-Congestion-using-Big-Data",
        img: mock09,
        title: "Traffic Congestion Analysis - Pipeline and Dashboard",
        desc: "This project ingests and analyzes real-time plus historical traffic data to identify congestion patterns across urban street networks...",
        tech: "Python · Apache Spark · Apache Kafka · Dask · Hive/HBase · Grafana · Tableau · Big Data Analytics"
    },
    {
        link: "https://github.com/smit-6690/Resume-Ranking-Interview-Question-Generator",
        img: mock8,
        title: "Resume Ranking & Interview Question Generator",
        desc: "An end-to-end ML app for resume ranking and tailored interview question generation...",
        tech: "FastAPI · Next.js · TypeScript · TailwindCSS · OpenAI · LangChain · MongoDB · Azure"
    },
    {
        link: "https://github.com/smit-6690/NeuraQuiz",
        img: mock07,
        title: "NeuraQuiz – Intelligent Quiz Web App",
        desc: "AI-based quiz generator adapting to the user’s learning style and pace.",
        tech: "Gemini 1.5 Pro · OpenAI Whisper · PyPDF2 · Pillow · Streamlit · Pyngrok · Python"
    }
];

function Project() {
    const firstFourProjects = projectData.slice(0, 4);

    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {firstFourProjects.map((project, index) => (
                    <div className="project" key={index}>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <img src={project.img} className="zoom" alt="thumbnail" width="100%" />
                        </a>
                        <a href={project.link} target="_blank" rel="noreferrer">
                            <h2>{project.title}</h2>
                        </a>
                        <p>{project.desc}</p>
                        <p><strong>Tech Stack:</strong> {project.tech}</p>
                    </div>
                ))}
            </div>

            <div className="see-all-button">
                <a href="https://github.com/smit-6690" target="_blank" rel="noreferrer">
                    <button>See All Projects</button>
                </a>
            </div>
        </div>
    );
}

export default Project;
