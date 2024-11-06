import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
  faRProject,
  faAws,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
  "SQL",
  "Tableau",
  "Power BI",
  "Excel",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Jupyter",
];

const labelsSecond = ["Python", "SQL"];

const labelsThird = [
  "Azure",
  "AWS",
  "SQL",
  "Snowflake",
  "Airflow",
  "Docker",
  "Git",
  "Databricks",
  "linux",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faChartSimple} size="3x" />
            <h3>Data Analytics & Statistics</h3>
            <p>
              With expertise in data Analytics and statistics, I excel at
              analyzing complex datasets to inform business decisions. My
              background in computer science and professional experience at
              companies like Apple has equipped me to solve real-world problems
              with data-driven insights.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Data Science & Machine Learning</h3>
            <p>
              I possess experience in developing predictive models and deploying
              machine learning algorithms. My educational background, including
              an advanced Statistics and Data Science Micromasters at MIT, along
              with hands-on projects, enables me to extract insights and create
              data-driven solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faAws} size="3x" />
            <h3>Data Engineering & Cloud Solutions</h3>
            <p>
              From setting up data pipelines to managing ETL processes, I ensure
              seamless data flow and integration to support BI and analytics. I
              specialize in using cloud solutions like Azure and AWS to
              architect robust systems for data management and reporting.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
