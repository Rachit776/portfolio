import React, { useEffect, useState } from "react";
import WorksItems from "./WorksItems";
import { projectsData, projectsNav } from "./Data";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name.toLowerCase() === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category.toLowerCase() === item.name.toLowerCase()
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (category, index) => {
    setItem({ name: category });
    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((navItem, index) => (
          <span
            key={index}
            onClick={() => handleClick(navItem.name, index)}
            className={`${active === index ? "active-work" : ""} work__item`}
          >
            {navItem.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => (
          <WorksItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Works;
