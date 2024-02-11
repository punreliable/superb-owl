import HomeTeamScore from "./HomeTeamScore"
import AwayTeamScore from "./AwayTeamScore"
import './Scoreboard.scss'

const Scoreboard = () => {
return(
<div className="scoreboard">
<HomeTeamScore />
<AwayTeamScore />
</div>)
}

export default Scoreboard
