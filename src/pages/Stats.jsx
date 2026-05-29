import { useState } from "react";
import "./Stats.css";

const ROSTER = [
  {
    number: 1,
    name: "Sam Gubernikoff",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 2,
    name: "Evan Birnbaum",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 4,
    name: "Jack Okeefe",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 7,
    name: "Jordan Fishbach",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 8,
    name: "Josh Herman",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 10,
    name: "Brandon Friedman",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 16,
    name: "Charles Schwartz",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 19,
    name: "Mason Brooks",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 21,
    name: "Ben Mitchell",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 24,
    name: "Eric Mallow",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 25,
    name: "Kenny Rothman",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 33,
    name: "Dan Gould",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 67,
    name: "Mason Leib",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: 3,
    name: "Phin Bauer",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: "—",
    name: "Matt Miller",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
  {
    number: "—",
    name: "Cory Levine",
    captain: false,
    retired: false,
    ab: 0,
    hits: 0,
    rbi: 0,
    runs: 0,
    hr: 0,
  },
];

const RETIRED = [
  { number: 5, name: "Reid Karp" },
  { number: 6, name: "Jared Fried" },
  { number: 69, name: "Jacob Price" },
];

function calcAvg(hits, ab) {
  if (!ab) return "—";
  return "." + String(Math.round((hits / ab) * 1000)).padStart(3, "0");
}

const statsSorted = [...ROSTER].sort((a, b) => {
  if (typeof a.number === "number" && typeof b.number === "number")
    return a.number - b.number;
  if (typeof a.number === "number") return -1;
  return 1;
});

const TABS = ["Roster", "Batting Stats"];

export default function Stats() {
  const [tab, setTab] = useState("Roster");

  return (
    <main className="page-wrapper">
      <div className="container">
        <header className="stats-header">
          <h1 className="section-heading">
            Stats &amp; <em>Roster</em>
          </h1>
        </header>

        <div className="divider" />

        <div className="tabs">
          {TABS.map((t) => (
            <button
              key={t}
              className={`tab ${tab === t ? "tab--active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── Roster Tab ── */}
        {tab === "Roster" && (
          <>
            <div className="roster-grid">
              {statsSorted.map((p, i) => (
                <div
                  key={i}
                  className={`player-card ${p.captain ? "player-card--captain" : ""}`}
                >
                  <div className="player-card__number">
                    {typeof p.number === "number" ? `#${p.number}` : p.number}
                  </div>
                  <div className="player-card__info">
                    <p className="player-card__name">
                      {p.name}
                      {p.captain && <span className="captain-badge">C</span>}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Retired */}
            <div className="retired-section">
              <p className="retired-label">Retired Numbers</p>
              <div className="retired-grid">
                {RETIRED.map((p, i) => (
                  <div key={i} className="retired-card">
                    <span className="retired-card__number">#{p.number}</span>
                    <span className="retired-card__name">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* ── Batting Stats Tab ── */}
        {tab === "Batting Stats" && (
          <div className="stats-table-wrap">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Player</th>
                  <th title="At Bats">AB</th>
                  <th title="Hits">H</th>
                  <th title="RBI">RBI</th>
                  <th title="Runs">R</th>
                  <th title="Home Runs">HR</th>
                  <th title="Batting Average">AVG</th>
                </tr>
              </thead>
              <tbody>
                {statsSorted.map((p, i) => (
                  <tr key={i}>
                    <td className="cell--num">{p.number}</td>
                    <td className="cell--name">
                      {p.name}
                      {p.captain && <span className="captain-badge">C</span>}
                    </td>
                    <td>{p.ab || "—"}</td>
                    <td>{p.hits || "—"}</td>
                    <td>{p.rbi || "—"}</td>
                    <td>{p.runs || "—"}</td>
                    <td>{p.hr || "—"}</td>
                    <td className="cell--avg">{calcAvg(p.hits, p.ab)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
