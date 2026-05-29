import './Schedule.css'

// ─── Edit your schedule here ─────────────────────────────────────
const SEASON = '2026'

const GAMES = [
  // { date: 'May 4',  day: 'Mon', time: '6:30 PM', opponent: 'The Rascals',    field: 'Field 2', home: true,  result: null },
  // { date: 'May 11', day: 'Mon', time: '7:00 PM', opponent: 'Pitch Please',   field: 'Field 1', home: false, result: { w: true,  score: '8–5' } },
  // { date: 'May 18', day: 'Mon', time: '7:00 PM', opponent: 'Ctrl Alt Defeat', field: 'Field 3', home: true,  result: { w: false, score: '3–6' } },
]

// Sample placeholder rows so the page looks alive on first load
const PLACEHOLDER_GAMES = [
  { date: 'TBD', day: '—', time: '—', opponent: 'Add your games above', field: '—', home: true, result: null },
]

const rows = GAMES.length > 0 ? GAMES : PLACEHOLDER_GAMES

function ResultBadge({ result }) {
  if (!result) return <span className="badge badge--upcoming">Upcoming</span>
  return (
    <span className={`badge ${result.w ? 'badge--win' : 'badge--loss'}`}>
      {result.w ? 'W' : 'L'} {result.score}
    </span>
  )
}

export default function Schedule() {
  const wins   = GAMES.filter(g => g.result?.w).length
  const losses = GAMES.filter(g => g.result && !g.result.w).length
  const played = wins + losses

  return (
    <main className="page-wrapper">
      <div className="container">

        {/* Heading */}
        <header className="sched-header">
          <p className="tag">Season {SEASON}</p>
          <h1 className="section-heading">
            Schedule
          </h1>

          {/* Record strip */}
          <div className="record-strip">
            <div className="record-item">
              <span className="record-num">{wins}</span>
              <span className="record-label">Wins</span>
            </div>
            <div className="record-divider" />
            <div className="record-item">
              <span className="record-num">{losses}</span>
              <span className="record-label">Losses</span>
            </div>
            <div className="record-divider" />
            <div className="record-item">
              <span className="record-num">{played}</span>
              <span className="record-label">Played</span>
            </div>
          </div>
        </header>

        <div className="divider" />

        {/* Table */}
        <div className="sched-table-wrap">
          <table className="sched-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Opponent</th>
                <th>Field</th>
                <th>Home/Away</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((g, i) => (
                <tr key={i} className={g.result ? 'row--played' : ''}>
                  <td className="cell--date">
                    <span className="cell-day">{g.day}</span>
                    <span className="cell-date-num">{g.date}</span>
                  </td>
                  <td className="cell--time">{g.time}</td>
                  <td className="cell--opponent">{g.opponent}</td>
                  <td className="cell--field">{g.field}</td>
                  <td className="cell--ha">
                    <span className={`ha-badge ${g.home ? 'ha-badge--home' : 'ha-badge--away'}`}>
                      {g.home ? 'Home' : 'Away'}
                    </span>
                  </td>
                  <td className="cell--result">
                    <ResultBadge result={g.result} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  )
}
