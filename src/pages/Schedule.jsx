import "./Schedule.css";

const SEASON = "2026";

const GAMES = [
  {
    week: 1,
    date: "Mar 17",
    day: "Tue",
    time: "7:00 PM",
    opponent: "NYC Brownstone",
    field: "DeWitt Clinton Park (Field 1)",
    home: false,
    type: "regular",
    result: { w: true, score: "10–3" },
  },
  {
    week: 2,
    date: "Mar 24",
    day: "Tue",
    time: "8:30 PM",
    opponent: "The Javi's",
    field: "East River Park (Field 1)",
    home: true,
    type: "regular",
    result: { w: true, score: "11–2" },
  },
  {
    week: 3,
    date: "Apr 6",
    day: "Mon",
    time: "6:15 PM",
    opponent: "The Mewers",
    field: "Central Park (Great Lawn - Field 1)",
    home: false,
    type: "regular",
    result: { w: true, score: "9–5" },
  },
  {
    week: 4,
    date: "Apr 20",
    day: "Mon",
    time: "6:15 PM",
    opponent: "Inglorious Batters",
    field: "Central Park (Great Lawn - Field 1)",
    home: true,
    type: "regular",
    result: { w: false, score: "1–0", forfeit: true },
  },
  {
    week: 5,
    date: "Apr 28",
    day: "Tue",
    time: "8:00 PM",
    opponent: "The Teeballers",
    field: "Harlem River Park (Field 1)",
    home: false,
    type: "regular",
    result: { w: true, score: "10–0" },
  },
  {
    week: 6,
    date: "May 4",
    day: "Mon",
    time: "7:30 PM",
    opponent: "The Fellas",
    field: "Randall's Island (Field 46)",
    home: false,
    type: "regular",
    result: { w: false, score: "1–0", forfeit: true },
  },
  {
    week: 7,
    date: "May 12",
    day: "Tue",
    time: "7:00 PM",
    opponent: "Consigli",
    field: "Harlem River Park (Field 1)",
    home: true,
    type: "regular",
    result: { w: false, score: "6–7" },
  },
  {
    week: 8,
    date: "May 18",
    day: "Mon",
    time: "6:30 PM",
    opponent: "Chula Vista",
    field: "Central Park (Great Lawn - Field 2)",
    home: true,
    type: "regular",
    result: { w: true, score: "8–2" },
  },
  {
    week: 10,
    date: "Jun 2",
    day: "Tue",
    time: "9:00 PM",
    opponent: "The Fellas",
    field: "Harlem River Park (Field 2)",
    home: true,
    type: "playoff",
    result: null,
  },
];

function ResultBadge({ result }) {
  if (!result) return <span className="badge badge--upcoming">Upcoming</span>;
  if (result.forfeit) {
    return (
      <span className={`badge ${result.w ? "badge--win" : "badge--loss"}`}>
        {result.w ? "W" : "L"} {result.score}{" "}
        <span className="badge-forfeit">forfeit</span>
      </span>
    );
  }
  return (
    <span className={`badge ${result.w ? "badge--win" : "badge--loss"}`}>
      {result.w ? "W" : "L"} {result.score}
    </span>
  );
}

export default function Schedule() {
  const regularGames = GAMES.filter((g) => g.type === "regular");
  const wins = regularGames.filter((g) => g.result?.w).length;
  const losses = regularGames.filter((g) => g.result && !g.result.w).length;

  return (
    <main className="page-wrapper">
      <div className="container">
        <header className="sched-header">
          <h1 className="section-heading">Schedule</h1>

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
              <span className="record-num">{wins + losses}</span>
              <span className="record-label">Played</span>
            </div>
          </div>
        </header>

        <div className="divider" />

        <div className="sched-table-wrap">
          <table className="sched-table">
            <thead>
              <tr>
                <th>Wk</th>
                <th>Date</th>
                <th>Time</th>
                <th>Opponent</th>
                <th>Field</th>
                <th>H/A</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              {GAMES.map((g, i) => (
                <>
                  {g.type === "playoff" && (
                    <tr key={`playoff-divider`} className="row--playoff-header">
                      <td colSpan={7}>
                        <span className="playoff-label">🏆 Playoffs</span>
                      </td>
                    </tr>
                  )}
                  <tr
                    key={i}
                    className={[
                      g.result ? "row--played" : "",
                      g.type === "playoff" ? "row--playoff" : "",
                    ].join(" ")}
                  >
                    <td className="cell--week">{g.week}</td>
                    <td className="cell--date">
                      <span className="cell-day">{g.day}</span>
                      <span className="cell-date-num">{g.date}</span>
                    </td>
                    <td className="cell--time">{g.time}</td>
                    <td className="cell--opponent">{g.opponent}</td>
                    <td className="cell--field">{g.field}</td>
                    <td className="cell--ha">
                      <span
                        className={`ha-badge ${g.home ? "ha-badge--home" : "ha-badge--away"}`}
                      >
                        {g.home ? "H" : "A"}
                      </span>
                    </td>
                    <td className="cell--result">
                      <ResultBadge result={g.result} />
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
