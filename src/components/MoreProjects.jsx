import {
  ArrowUpRight,
  Github,
} from "lucide-react";

import {
  moreProjects,
} from "../data/portfolioData";

export default function MoreProjects() {

  return (
    <section className="more-builds container">

      <div className="more-builds-heading">

        <span className="section-kicker">
          MORE BUILDS
        </span>

        <h2>
          Smaller projects,
          kept intentionally compact.
        </h2>

      </div>

      <div className="more-build-grid">

        {moreProjects.map(
          (project) => (

            <article
              key={project.title}
            >

              <div>

                <span>
                  SIDE PROJECT
                </span>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {
                    project.description
                  }
                </p>

                <div>

                  {project.technologies.map(
                    (tech) => (
                      <small
                        key={tech}
                      >
                        {tech}
                      </small>
                    )
                  )}

                </div>

              </div>

              {project.github ? (

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                </a>

              ) : (

                <ArrowUpRight
                  size={18}
                />

              )}

            </article>

          )
        )}

      </div>

    </section>
  );
}