import styled from 'styled-components'

const Header = () => {

	return(
		<header>
			<HeaderHeadline className="header">
				Superb Owl
			</HeaderHeadline>
		</header>
	)

}

export default Header

export const HeaderHeadline = styled.h1`
	font-size: .8rem;
`