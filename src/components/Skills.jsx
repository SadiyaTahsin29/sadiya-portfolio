import {
  ArrowRight,
} from "lucide-react";

import {
  skills,
} from "../data/portfolioData";

const evidenceMap = {

  Python:
    "Athena + Resume Analyzer",

  "React.js":
    "DilSeCurated + Flipkart",

  Django:
    "DilSeCurated",

  RAG:
    "Athena AI",

  LangChain:
    "Athena AI",

  "OpenAI API":
    "Athena + Resume Analyzer",

  NLP:
    "Resume Analyzer",

  MySQL:
    "DilSeCurated",

};

export default function Skills() {

  return (
    <section
      id="skills"
      className="skills-section container"
    >

      <div className="skills-heading">

        <span className="section-kicker">
          05 / TECHNICAL TOOLKIT
        </span>

        <h2>
          Skills connected
          to where I used them.
        </h2>

      </div>

      <div className="skills-evidence-grid">

        {Object.entries(
          skills
        ).map(
          ([group, items]) => (

            <article
              key={group}
            >

              <h3>
                {group}
              </h3>

              <div>

                {items.map(
                  (skill) => (

                    <div
                      className="skill-evidence"
                      key={skill}
                    >

                      <strong>
                        {skill}
                      </strong>

                      {evidenceMap[
                        skill
                      ] ? (

                        <span>

                          <ArrowRight
                            size={11}
                          />

                          {
                            evidenceMap[
                              skill
                            ]
                          }

                        </span>

                      ) : (

                        <small>
                          Toolkit
                        </small>

                      )}

                    </div>

                  )
                )}

              </div>

            </article>

          )
        )}

      </div>

    </section>
  );
}