import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

import {
  profile,
} from "../data/portfolioData";

export default function Contact() {

  return (
    <section
      id="contact"
      className="contact-section container"
    >

      <div className="contact-card">

        <div>

          <span className="section-kicker">
            06 / CONTACT
          </span>

          <h2>
            Have a problem involving
            AI, retrieval or full-stack
            engineering?
          </h2>

          <p>
            I am interested in opportunities
            where I can build intelligent
            features that have to work as
            real software—not just demos.
          </p>

        </div>

        <div className="contact-actions">

          <a
            className="contact-primary"
            href={
              `mailto:${profile.email}`
            }
          >

            <Mail size={17} />

            Email me

            <ArrowUpRight
              size={15}
            />

          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >

            <Linkedin size={17} />

            LinkedIn

          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >

            <Github size={17} />

            GitHub

          </a>

        </div>

      </div>

    </section>
  );
}