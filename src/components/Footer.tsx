import styled from 'styled-components'
import getCurrentYear from '../services/getCurrentYear'
const Footer = () => {
	return(
	<footer>
		<FooterHeadline>&copy;{getCurrentYear()} Punreliable</FooterHeadline>
	</footer>
	)
}

export default Footer

export const FooterHeadline = styled.p`
font-size: .8rem;
padding: 0;
`