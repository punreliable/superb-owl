import styled from 'styled-components'
import getCurrentYear from '../services/getCurrentYear'

const Header = () => {

	return(
		<header>
			<HeaderHeadline className="header">
				SuperbOwl {getCurrentYear()}
			</HeaderHeadline>
		</header>
	)

}

export default Header

export const HeaderHeadline = styled.h1`
	font-size: .8rem;
`