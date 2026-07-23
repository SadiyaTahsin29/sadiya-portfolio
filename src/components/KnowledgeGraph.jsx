import { useState } from "react";

const nodes = [

  {
    id: "sadiya",
    label: "SADIYA\nTAHSIN ANSARI",
    x: 50,
    y: 50,
    type: "identity",
  },

  {
    id: "rag",
    label: "RAG",
    x: 25,
    y: 20,
    type: "ai",
  },

  {
    id: "python",
    label: "Python",
    x: 75,
    y: 19,
    type: "language",
  },

  {
    id: "react",
    label: "React.js",
    x: 77,
    y: 74,
    type: "fullstack",
  },

  {
    id: "athena",
    label: "ATHENA\nAI",
    x: 24,
    y: 48,
    type: "project",
    projectId: "athena",
  },

  {
    id: "resume",
    label: "RESUME\nANALYZER",
    x: 27,
    y: 80,
    type: "project",
    projectId:
      "resume-analyzer",
  },

  {
    id: "dilse",
    label: "DILSE\nCURATED",
    x: 75,
    y: 49,
    type: "project",
    projectId:
      "dilsecurated",
  },

];

const edges = [

  ["sadiya", "rag"],
  ["sadiya", "python"],
  ["sadiya", "react"],

  ["rag", "athena"],
  ["python", "athena"],
  ["python", "resume"],

  ["react", "dilse"],

  ["athena", "resume"],
  ["dilse", "react"],

];

const satellites = [

  {
    label: "LangChain",
    x: 8,
    y: 10,
    parent: "rag",
  },

  {
    label: "Vector Search",
    x: 8,
    y: 30,
    parent: "rag",
  },

  {
    label: "Embeddings",
    x: 10,
    y: 40,
    parent: "rag",
  },

  {
    label: "OpenAI API",
    x: 15,
    y: 62,
    parent: "athena",
  },

  {
    label: "NLP",
    x: 11,
    y: 88,
    parent: "resume",
  },

  {
    label: "Streamlit",
    x: 42,
    y: 92,
    parent: "resume",
  },

  {
    label: "Django",
    x: 91,
    y: 39,
    parent: "dilse",
  },

  {
    label: "MySQL",
    x: 92,
    y: 57,
    parent: "dilse",
  },

  {
    label: "REST APIs",
    x: 90,
    y: 67,
    parent: "dilse",
  },

  {
    label: "Node.js",
    x: 88,
    y: 88,
    parent: "react",
  },

];

export default function KnowledgeGraph() {

  const [active, setActive] =
    useState(null);

  const getNode = (id) =>
    nodes.find(
      (node) =>
        node.id === id
    );

  const connected = new Set();

  if (active) {

    connected.add(active);

    edges.forEach(
      ([a, b]) => {

        if (a === active)
          connected.add(b);

        if (b === active)
          connected.add(a);

      }
    );

    satellites.forEach(
      (item) => {

        if (
          item.parent === active
        ) {
          connected.add(
            item.parent
          );
        }

      }
    );

  }

  const handleNode = (node) => {

    setActive(
      active === node.id
        ? null
        : node.id
    );

    if (node.projectId) {

      setTimeout(() => {

        document
          .getElementById(
            `project-${node.projectId}`
          )
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

      }, 250);

    }

  };

  return (
    <div className="knowledge-map">

      <div className="knowledge-stars" />

      <svg
        className="knowledge-lines"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >

        {edges.map(
          ([from, to]) => {

            const a =
              getNode(from);

            const b =
              getNode(to);

            const highlighted =
              !active ||
              active === from ||
              active === to;

            return (

              <line
                key={`${from}-${to}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                className={
                  highlighted
                    ? "evidence-edge"
                    : "evidence-edge edge-muted"
                }
              />

            );

          }
        )}

        {satellites.map(
          (item) => {

            const parent =
              getNode(
                item.parent
              );

            return (

              <line
                key={item.label}
                x1={parent.x}
                y1={parent.y}
                x2={item.x}
                y2={item.y}
                className="satellite-edge"
              />

            );

          }
        )}

      </svg>

      {nodes.map(
        (node) => {

          const dimmed =
            active &&
            !connected.has(
              node.id
            );

          return (

            <button
              key={node.id}
              className={`
                evidence-node
                node-${node.type}
                ${
                  dimmed
                    ? "node-dimmed"
                    : ""
                }
                ${
                  active === node.id
                    ? "node-active"
                    : ""
                }
              `}
              style={{
                left:
                  `${node.x}%`,
                top:
                  `${node.y}%`,
              }}
              onClick={() =>
                handleNode(node)
              }
            >

              {node.label
                .split("\n")
                .map((line) => (

                  <span key={line}>
                    {line}
                  </span>

                ))}

            </button>

          );

        }
      )}

      {satellites.map(
        (item) => {

          const dimmed =
            active &&
            active !==
              item.parent &&
            !connected.has(
              item.parent
            );

          return (

            <div
              key={item.label}
              className={`
                graph-satellite
                ${
                  dimmed
                    ? "satellite-muted"
                    : ""
                }
              `}
              style={{
                left:
                  `${item.x}%`,
                top:
                  `${item.y}%`,
              }}
            >

              <span />

              {item.label}

            </div>

          );

        }
      )}

    </div>
  );
}