import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import sonicLogo from "./../assets/images/sonic.svg";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2016 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faApple} />}
          >
            <h3 className="vertical-timeline-element-title">Undisclosed</h3>
            <h4 className="vertical-timeline-element-subtitle">Apple Inc.</h4>
            <p>
              Voice Processing, Python Automation, Workflow Optimization,
              Cross-Functional Collaboration
              <br />
              <br />
              <blockquote>"We are lucky to have him on our team."</blockquote>
              <cite>Greg Townsend, Director & Team Lead @ Apple Inc.</cite>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              μMaster of Science (μM.S.), Statictics & Data Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Pasadena, CA</h4>
            <p>
              Undertaking this program in preparation for a remote part-time
              M.S. in Data Science, commencing in 2025.
            </p>
            <p>
              Relevant Coursework: Probability, Statistics, Machine Learning,
              Deep Learning, Data Analysis
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Science (B.S.), Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Pasadena, CA</h4>
            <p>Summa Cum Laude | GPA: 4.00, President’s List</p>
            <p>
              Relevant Coursework: Python, SQL, Calculus, Descriptive
              Statistics, Statistical Inference, Data Structures & Algorithms,
              Software Engineering
              <blockquote>
                "Richard's consistent pursuit of knowledge and his exceptional
                ability to grasp and synthesize complex material demonstrate a
                level of academic maturity that is truly commendable."
              </blockquote>
              <cite>Ugochukwu Chinonso Okolie, PhD</cite>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Associate of Science (A.S.), Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Pasadena, CA</h4>
            <p>High Honors | GPA: 4.00, President’s List</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Development Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SALT</h4>
            <p>
              Frontend Development, Code Reviews, User Database Management, Team
              Leadership, Content Creation
              <blockquote>
                "It is rare to find such a broad set of talents in one person."
              </blockquote>
              <cite>Tom Moran, Team Lead @ Lumen</cite>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Development Bootcamp
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              School of Applied Technology
            </h4>
            <p>
              Test Driven Full Stack Development
              <blockquote>
                "Richard is a skilled programmer and a valuable asset in any
                software development team."
              </blockquote>
              <cite>Marcus Hammarberg, Team Lead @ SALT</cite>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2017"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={
              <img
                src={sonicLogo}
                alt="Sonic Icon"
                style={{ width: "100%", height: "90%", paddingTop: "10%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Data Analyst & Localization QA
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SEGA Europe</h4>
            <p>
              Data Cleaning, Localization QA, SQL, Stakeholder Collaboration,
              User Experience Improvement
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
