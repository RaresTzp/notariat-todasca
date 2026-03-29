"use client";

export default function Logo({ size = 48, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="100" cy="100" r="96" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Inner circle */}
      <circle cx="100" cy="100" r="78" stroke="currentColor" strokeWidth="1" fill="none" />

      {/* Curved text top: "BIROU NOTARIAL INDIVIDUAL" */}
      <defs>
        <path id="topArc" d="M 30,100 a 70,70 0 1,1 140,0" />
        <path id="bottomArc" d="M 170,100 a 70,70 0 1,1 -140,0" />
      </defs>

      {/* Top arc text */}
      <text fill="#B8941E" className="tracking-widest">
        <textPath
          href="#topArc"
          startOffset="50%"
          textAnchor="middle"
          style={{ fontSize: "11.5px", letterSpacing: "0.18em", fontFamily: "Inter, sans-serif", fontWeight: 500 }}
        >
          BIROU NOTARIAL INDIVIDUAL
        </textPath>
      </text>

      {/* Center text */}
      <text
        x="100"
        y="92"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontSize: "22px", fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" }}
      >
        Todașcă
      </text>
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontSize: "18px", fontFamily: "'Instrument Serif', Georgia, serif", fontStyle: "italic" }}
      >
        Mihaela-Iuliana
      </text>
    </svg>
  );
}
