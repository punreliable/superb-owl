import './HomeTeamScore.scss'
const HomeTeamScore = () => {
const team = {
	name: "Kansas City Chiefs",
}

	return(
		<div className="homeTeam">
			<h1>{team.name}</h1>
			<h2>00</h2>
		</div>

	)
}
export default HomeTeamScore