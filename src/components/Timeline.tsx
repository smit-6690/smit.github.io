import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jun 2023 - May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer, HowFly IT</h3>
            <h4 className="vertical-timeline-element-subtitle">Ahmedabad, India</h4>
            <p>
             Led backend and cloud initiatives including microservices architecture, serverless deployments, and API integrations on AWS. Focused on scalability, cost efficiency, and CI/CD pipelines. 
            </p>
            <p>
              Full-stack Web Development, AWS, Docker, CI/CD, Agile Methodologies, FastAPI, GraphQL, Github Actions, API, Microservices
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - May 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer Intern, Co3 Labs</h3>
            <h4 className="vertical-timeline-element-subtitle">Dubai, UAE</h4>
            <p>
            Built real-time crypto tracking apps and dApps using Flutter and Electron. Integrated blockchain and wallet features with Web3.js and enhanced cross-platform performance.
            </p>
            <p>
              Flutter, Dart, Electron.js, Web3.js, REST API, Smart Contracts, Firebase, Figma
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2021 - Aug 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title"> Data Science Intern, Sannibh Technologies</h3>
            <h4 className="vertical-timeline-element-subtitle">Vadodara, India</h4>
            <p>
             Created ML pipelines for customer segmentation and churn prediction using Spark and XGBoost. Delivered insights via Power BI dashboards. 
            </p>
            <p>
              Python, Apache Spark, XGBoost, DBSCAN, ETL, Power BI, Pandas, Scikit-Learn
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;