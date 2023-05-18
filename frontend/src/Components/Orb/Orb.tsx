import { keyframes, styled } from 'styled-components';
import useWindowSize from '../../utils/useWindowSize';

type Props = {};

function Orb() {
	const { width, height } = useWindowSize();

	const moveOrb = keyframes`
		0%{
			transform: translate(0, 0);
		}
		50%{
			transform: translate(${width / 1.2}px, ${height / 2}px)
		}
		100%{
			transform: translate(0, 0);
		}
	`;

	const OrbStyled = styled.div`
		width: 70vh;
		height: 70vh;
		position: absolute;
		border-radius: 50%;
		margin-left: -37vh;
		margin-top: -37vh;
		background: linear-gradient(180deg, #f56692 0%, #f2994a 100%);
		filter: blur(400px);
		animation: ${moveOrb} 14s alternate linear infinite;
	`;

	return <OrbStyled></OrbStyled>;
}

export default Orb;
