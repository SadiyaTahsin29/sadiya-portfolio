import {
  ArrowRight,
  Search,
  Sparkles,
} from "lucide-react";

import {
  useState,
} from "react";

import {
  projects,
} from "../data/portfolioData";

const suggestedQuestions = [
  "What has Sadiya built with RAG?",
  "Where has she used React?",
  "Show me her Python projects",
  "What full-stack systems has she built?",
];

function searchPortfolio(query) {

  const q =
    query
      .toLowerCase()
      .trim();

  if (!q)
    return [];

  return projects
    .map((project) => {

      const text = [
        project.title,
        project.subtitle,
        project.category,
        project.problem,
        project.role,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase();

      const words =
        q
          .replace(
            /[^a-z0-9+#. ]/g,
            " "
          )
          .split(/\s+/)
          .filter(
            (word) =>
              word.length > 2
          );

      const score =
        words.reduce(
          (total, word) =>
            total +
            (
              text.includes(word)
                ? 1
                : 0
            ),
          0
        );

      return {
        project,
        score,
      };

    })
    .filter(
      (item) =>
        item.score > 0
    )
    .sort(
      (a, b) =>
        b.score - a.score
    )
    .slice(0, 3);
}

export default function AskPortfolio() {

  const [query, setQuery] =
    useState("");

  const [results, setResults] =
    useState([]);

  const [searched, setSearched] =
    useState(false);

  function runSearch(
    value = query
  ) {

    setQuery(value);

    setResults(
      searchPortfolio(value)
    );

    setSearched(true);
  }

  return (
    <section className="ask-section">

      <div className="container">

        <div className="ask-layout">

          <div className="ask-copy">

            <span className="section-kicker">
              02 / RETRIEVE EVIDENCE
            </span>

            <h2>
              Ask my portfolio.
            </h2>

            <p>
              Search my work the same way
              I think about retrieval:
              start with a question and
              surface the most relevant
              evidence.
            </p>

            <small>
              Current version: local
              evidence retrieval from
              structured portfolio data.
              It does not pretend to be
              an LLM backend.
            </small>

          </div>

          <div className="ask-interface">

            <form
              className="portfolio-search"
              onSubmit={(event) => {

                event.preventDefault();

                runSearch();

              }}
            >

              <Search size={19} />

              <input
                value={query}
                onChange={(event) =>
                  setQuery(
                    event.target.value
                  )
                }
                placeholder="What has Sadiya built with RAG?"
                aria-label="Search portfolio evidence"
              />

              <button
                type="submit"
                aria-label="Search"
              >

                <ArrowRight
                  size={18}
                />

              </button>

            </form>

            <div className="suggested-questions">

              {suggestedQuestions.map(
                (question) => (

                  <button
                    key={question}
                    onClick={() =>
                      runSearch(
                        question
                      )
                    }
                  >
                    {question}
                  </button>

                )
              )}

            </div>

            {searched && (

              <div className="retrieval-results">

                <div className="retrieval-label">

                  <Sparkles
                    size={14}
                  />

                  RETRIEVED EVIDENCE

                </div>

                {results.length ? (

                  results.map(
                    ({ project }) => (

                      <article
                        key={project.id}
                      >

                        <div>

                          <span>
                            {
                              project.category
                            }
                          </span>

                          <h3>
                            {
                              project.title
                            }
                          </h3>

                          <p>
                            {
                              project.role
                            }
                          </p>

                        </div>

                        <a
                          href={
                            `#project-${project.id}`
                          }
                        >
                          View evidence
                          <ArrowRight
                            size={14}
                          />
                        </a>

                      </article>

                    )
                  )

                ) : (

                  <p className="no-results">

                    No strong evidence match
                    found. Try RAG, Python,
                    React, Django, resume or
                    e-commerce.

                  </p>

                )}

              </div>

            )}

          </div>

        </div>

      </div>

    </section>
  );
}