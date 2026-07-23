import {
  AlertCircle,
} from "lucide-react";

import {
  experience,
} from "../data/portfolioData";

export default function Experience() {

  return (
    <section
      id="experience"
      className="experience-section"
    >

      <div className="container">

        <div className="experience-heading">

          <div>

            <span className="section-kicker">
              04 / EXPERIENCE
            </span>

            <h2>
              Roles matter.
              <br />
              What I shipped matters more.
            </h2>

          </div>

          <p>
            This section is structured around
            contribution rather than job-title
            collection. Missing claims are
            deliberately marked instead of
            invented.
          </p>

        </div>

        <div className="experience-list">

          {experience.map(
            (item) => (

              <article
                key={
                  `${item.company}-${item.role}`
                }
              >

                <div className="experience-number">
                  {item.number}
                </div>

                <div className="experience-role">

                  <span>
                    {item.date}
                  </span>

                  <h3>
                    {item.role}
                  </h3>

                  <p>
                    {item.company}
                  </p>

                </div>

                <div className="experience-contribution">

                  <span>
                    CONTRIBUTION EVIDENCE
                  </span>

                  <ul>

                    {item.contributions.map(
                      (contribution) => (

                        <li
                          key={
                            contribution
                          }
                        >
                          {contribution}
                        </li>

                      )
                    )}

                  </ul>

                  {item.needsVerification && (

                    <small>

                      <AlertCircle
                        size={12}
                      />

                      Replace placeholders
                      with verified work
                      before publishing.

                    </small>

                  )}

                </div>

                <div className="experience-stack">

                  {item.stack.map(
                    (tech) => (

                      <span key={tech}>
                        {tech}
                      </span>

                    )
                  )}

                </div>

              </article>

            )
          )}

        </div>

      </div>

    </section>
  );
}