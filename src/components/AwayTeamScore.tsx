import logo49ers from '../assets/logo-49ers.svg'
import footballLogo from '../assets/football-wide-black.svg'
import './AwayTeamScore.scss'
const AwayTeamScore = () => {
const team = {
	name: "San Francisco 49ers",
}

	return(
		<div className="awayTeam">
			<div className="awayTeam-left score">
				<h2>00</h2>
			</div>
			<div className="awayTeam-right">
				<h3>{team.name}</h3>
				<div className="logoWrapper">
					<img src={footballLogo} className="football" alt="Picture a Football" />
					<img src={logo49ers} className="logo" alt="Chiefs logo" />
				</div>
			</div>
		</div>
	)
}
export default AwayTeamScore