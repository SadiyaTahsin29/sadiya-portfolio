import {
  BrainCircuit,
} from "lucide-react";

export default function Footer() {

  return (
    <footer className="footer container">

      <div className="footer-brand">

        <BrainCircuit
          size={19}
        />

        <span>
          SADIYA TAHSIN ANSARI
        </span>

      </div>

      <p>
        Designed around evidence,
        retrieval and the connection
        between what I know and what
        I have built.
      </p>

      <small>
        © {new Date().getFullYear()}
      </small>

    </footer>
  );
}