import { useState } from 'react'
import './Stats.css'

// ─── Edit your roster and stats here ─────────────────────────────
const ROSTER = [
  // {
  //   number: 7,
  //   name: 'Jane Doe',
  //   position: 'SS',
  //   ab: 24,    // at-bats
  //   hits: 9,
  //   rbi: 5,
  //   runs: 6,
  //   hr: 1,
  //   avg: null, // leave null — computed automatically
  // },
]

function calcAvg(hits, ab) {
  if (!ab) return '.000'
  return '.' + String(Math.round((hits / ab) * 1000)).padStart(3, '0')
}

const sorted = [...ROSTER].sort((a, b) => (b.hits / b.ab || 0) - (a.hits / a.ab || 0))

const PLACEHOLDER_ROSTER = [
  { number: '—', name: 'Add players in Stats.jsx', position: '—', ab: 0, hits: 0, rbi: 0, runs: 0, hr: 0 },
]

const rows = ROSTER.length > 0 ? sorted : PLACEHOLDER_ROSTER

const TABS = ['Roster', 'Batting Stats']

export default function Stats() {
  const [tab, setTab] = useState('Roster')

  return (
    <main className="page-wrapper">
      <div className="container">

        <header className="stats-header">
          <p className="tag">2026 Season</p>
          <h1 className="section-heading">
            Stats &amp; <em>Roster</em>
          </h1>
        </header>

        <div className="divider" />

        {/* Tabs */}
        <div className="tabs">
          {TABS.map(t => (
            <button
              key={t}
              className={`tab ${tab === t ? 'tab--active' : ''}`}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {/* ── Roster Tab ── */}
        {tab === 'Roster' && (
          <div className="roster-grid">
            {rows.map((p, i) => (
              <div key={i} className="player-card">
                <div className="player-card__number">#{p.number}</div>
                <div className="player-card__info">
                  <p className="player-card__name">{p.name}</p>
                  <p className="player-card__pos">{p.position}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Batting Stats Tab ── */}
        {tab === 'Batting Stats' && (
          <div className="stats-table-wrap">
            <table className="stats-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Player</th>
                  <th>Pos</th>
                  <th title="At Bats">AB</th>
                  <th title="Hits">H</th>
                  <th title="RBI">RBI</th>
                  <th title="Runs">R</th>
                  <th title="Home Runs">HR</th>
                  <th title="Batting Average">AVG</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((p, i) => (
                  <tr key={i}>
                    <td className="cell--num">{p.number}</td>
                    <td className="cell--name">{p.name}</td>
                    <td className="cell--pos">{p.position}</td>
                    <td>{p.ab}</td>
                    <td>{p.hits}</td>
                    <td>{p.rbi}</td>
                    <td>{p.runs}</td>
                    <td>{p.hr}</td>
                    <td className="cell--avg">{calcAvg(p.hits, p.ab)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </main>
  )
}
