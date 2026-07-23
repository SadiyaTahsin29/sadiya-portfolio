import {
  Binary,
  BrainCircuit,
  ArrowLeftRight,
} from "lucide-react";

export default function Philosophy() {

  return (
    <section
      id="about"
      className="philosophy-section container"
    >

      <div className="section-index">
        01 / HOW I THINK
      </div>

      <div className="philosophy-header">

        <div>

          <span className="section-kicker">
            ENGINEERING PHILOSOPHY
          </span>

          <h2>
            Structure on one side.
            <br />
            Meaning on the other.
          </h2>

        </div>

        <p>
          Most of my work sits between
          conventional software engineering
          and systems that need to understand
          unstructured information.
        </p>

      </div>

      <div className="philosophy-map">

        <article>

          <Binary size={28} />

          <span>
            STRUCTURED ENGINEERING
          </span>

          <h3>
            Build systems that behave
            predictably.
          </h3>

          <p>
            Interfaces, APIs, application
            logic, databases and production
            workflows.
          </p>

          <div>
            React
            <b>•</b>
            Django
            <b>•</b>
            MERN
            <b>•</b>
            SQL
          </div>

        </article>

        <div className="philosophy-bridge">

          <ArrowLeftRight size={27} />

          <span>
            I BUILD HERE
          </span>

        </div>

        <article>

          <BrainCircuit size={28} />

          <span>
            UNSTRUCTURED INFORMATION
          </span>

          <h3>
            Help software find meaning,
            not just exact matches.
          </h3>

          <p>
            Retrieval, embeddings, semantic
            search, context assembly and
            LLM-generated responses.
          </p>

          <div>
            RAG
            <b>•</b>
            LangChain
            <b>•</b>
            Vector Search
            <b>•</b>
            LLMs
          </div>

        </article>

      </div>

    </section>
  );
}