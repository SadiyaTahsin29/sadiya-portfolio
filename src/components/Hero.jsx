import {
  ArrowDownRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import KnowledgeGraph
  from "./KnowledgeGraph";

import { profile }
  from "../data/portfolioData";

export default function Hero() {

  return (
    <section
      id="graph"
      className="hero-section"
    >

      <div className="hero-inner">

        <div className="hero-profile">

          <p className="hero-eyebrow">
            FULL STACK × GENAI
          </p>

          <h1 className="hero-name">

            <span>
              Sadiya
            </span>

            <span className="gradient-name">
              Tahsin Ansari
            </span>

          </h1>

          <p className="hero-positioning">
            {profile.headline}
          </p>

          <div className="hero-location">

            <MapPin size={15} />

            {profile.location}

          </div>

          <p className="hero-intro">
            {profile.description}
          </p>

          <div className="hero-actions">

            <a
              href="#projects"
              className="primary-button"
            >

              Explore my work

              <ArrowDownRight
                size={16}
              />

            </a>

            <a
              href="/Sadiya-Tahsin-Ansari-Resume.pdf"
              className="secondary-button"
              target="_blank"
              rel="noreferrer"
            >

              <Download size={15} />

              Resume

            </a>

          </div>

          <div className="hero-socials">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={17} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={17} />
            </a>

            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
            >
              <Mail size={17} />
            </a>

          </div>

        </div>

        <div className="hero-network">

          <KnowledgeGraph />

        </div>

        <aside className="graph-help">

          <span className="graph-help-label">
            HOW TO READ THIS
          </span>

          <h3>
            Skills connect to evidence.
          </h3>

          <p>
            The graph is not a skill
            cloud. Technologies connect
            to the projects where I used
            them.
          </p>

          <p className="graph-example">

            RAG
            <span>→</span>
            Athena AI

          </p>

          <p className="graph-example">

            React
            <span>→</span>
            DilSeCurated

          </p>

          <small>
            Select a node to highlight
            related evidence.
          </small>

        </aside>

      </div>

    </section>
  );
}