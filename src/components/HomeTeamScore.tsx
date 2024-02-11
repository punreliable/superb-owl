import './HomeTeamScore.scss'
import chiefsLogo from '../assets/logo-chiefs.svg'
import footballLogo from '../assets/football-wide-black.svg'
const HomeTeamScore = () => {
const team = {
	name: "Kansas City Chiefs",
}

	return(
		<div className="homeTeam">
			<div className="homeTeam-left">

				<h3>{team.name}</h3>
				<div className="logoWrapper">
					<img src={footballLogo} className="football" alt="Picture a Football" />
					<img src={chiefsLogo} className="logo" alt="Chiefs logo" />
				</div>
			</div>

			<div className="homeTeam-right score">
			<h2>00</h2>
			</div>
			
		</div>

	)
}
export default HomeTeamScore