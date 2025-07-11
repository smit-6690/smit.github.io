import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C++",
    "Java",
    "C#",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman",
    "FastAPI",
    "Node.js",
    "Next.js",
    "MongoDB",
    "Rest API",
    "GraphQL",
    "Tailwind CSS"
    
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "GCP",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
    "Kubernetes",
    "Jenkins",
    "Terraform",
    "CI/CD"
    
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
    "LLMs",
    "GenAI",
    "ChatGPT",
    "RAG",
    "Vector Databases",
    "AI/ML",
    "Transformers",
    "NLP",
    "TensorFlow",
    "PyTorch"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I develop dynamic and scalable web applications using modern full-stack technologies like React, FastAPI, and Flask. With strong experience across the SDLC, I specialize in crafting responsive UIs, integrating APIs, and deploying cloud-ready backend services.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I build cloud-native, containerized microservices with automated CI/CD pipelines. I’ve architected solutions using AWS Lambda, Docker, Kubernetes, and GitHub Actions, enabling efficient deployment and reduced system downtime.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>I integrate Generative AI and LLMs into applications to automate tasks, enhance user interaction, and generate insights. I’ve used OpenAI, LangChain, and Vector DBs like Qdrant to build intelligent GenAI systems with real-world use cases.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;