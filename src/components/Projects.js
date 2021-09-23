import React from "react";
import { Dimmer, Loader, Image, Segment, Card } from "semantic-ui-react";
import ProjectCard from "./ProjectCard";
import dayjs from "dayjs";

import "../styles/css/projects.css";

const Projects = ({ projects, props }) => {
  console.log({projects})
  return (
    <div className="all-projects-container">
      {projects ? (
        <Card.Group centered>
          {projects.sort((a, b) => dayjs(a.created_at).isBefore(dayjs(b.created_at)) ? 1 : -1 ).map((project) => (
            <ProjectCard props={props} key={project.id} project={project} />
          ))}
        </Card.Group>
      ) : (
        <Segment id="spinner">
          <Dimmer active>
            <Loader inverted>Loading</Loader>
          </Dimmer>
          <Image src="" />
        </Segment>
      )}
    </div>
  );
};

export default Projects;
