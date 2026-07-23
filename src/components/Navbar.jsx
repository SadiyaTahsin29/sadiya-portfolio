import {
  BrainCircuit,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] =
    useState(false);

  const links = [
    ["Graph", "graph"],
    ["Work", "projects"],
    ["Experience", "experience"],
    ["Skills", "skills"],
    ["About", "about"],
    ["Contact", "contact"],
  ];

  return (
    <header className="navbar">

      <a
        className="brand"
        href="#graph"
        aria-label="Sadiya portfolio home"
      >

        <span className="brand-icon">
          <BrainCircuit size={25} />
        </span>

        <span>
          <strong>SADIYA</strong>
          <small>PORTFOLIO</small>
        </span>

      </a>

      <button
        className="menu-button"
        onClick={() =>
          setOpen(!open)
        }
        aria-label="Toggle navigation"
        aria-expanded={open}
      >

        {open ? (
          <X size={20} />
        ) : (
          <Menu size={20} />
        )}

      </button>

      <nav
        className={
          open
            ? "nav-links nav-open"
            : "nav-links"
        }
      >

        {links.map(
          ([label, id]) => (

            <a
              key={id}
              href={`#${id}`}
              onClick={() =>
                setOpen(false)
              }
            >
              {label}
            </a>

          )
        )}

      </nav>

    </header>
  );
}