import {
  Award,
  GraduationCap,
} from "lucide-react";

import {
  certifications,
  profile,
} from "../data/portfolioData";

export default function Credentials() {

  return (
    <section className="credentials-section">

      <div className="container credentials-grid">

        <article>

          <div className="credential-icon">
            <GraduationCap
              size={24}
            />
          </div>

          <span>
            EDUCATION
          </span>

          <h3>
            {profile.education}
          </h3>

          <p>
            {profile.college}
          </p>

          <div className="education-meta">

            <span>
              {profile.years}
            </span>

            <span>
              CGPA{" "}
              {profile.cgpa}
            </span>

          </div>

        </article>

        <div className="certification-panel">

          <div className="certification-title">

            <Award size={21} />

            <div>

              <span>
                SUPPORTING SIGNALS
              </span>

              <h3>
                Certifications
              </h3>

            </div>

          </div>

          <div className="certification-list">

            {certifications.map(
              (cert) => (

                <article
                  key={cert.title}
                >

                  <strong>
                    {cert.title}
                  </strong>

                  <span>
                    {cert.provider}
                  </span>

                </article>

              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}