import styled from "styled-components";
import COLORS from "../../common/theme/colors";
import TYPO from "../../common/theme/typo"

export const HomeContainer = styled.div`
  padding: 24px;
  background: #f0f2f5;
  min-height: 100vh;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 24px;
`;

export const StatCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const StatIcon = styled.div`
  font-size: 32px;
  margin-bottom: 16px;
  color: ${props => props.color || '#1890ff'};
`;

export const StatValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #262626;
  margin-bottom: 8px;
`;

export const StatTitle = styled.div`
  font-size: 14px;
  color: #8c8c8c;
`;


export const Sections = styled.div`
	flex: 4 0%;
	padding: 48px 50px;
`;

export const Glossaries = styled.div`
	flex: 6 0%;
	background-color: ${COLORS.BACK};
	padding: 120px 50px;
`;

export const Introductory = styled(TYPO.H3)`
	padding-top: 10px;
	color: ${COLORS.SECONDARY};
	font-weight: 200;
`;

export const CardContainer = styled.div`
	display: flex;
	background-color: transparent;
	flex-direction: row;
	width: 100%;
	flex-wrap: wrap;
	height: fit-content;
	gap: 1rem;
`;

export const DasboardBody = styled.div`
	transform: translateY(-5rem);
	padding: 0 50px;
`

export const Header = styled.div`
	background-color: ${COLORS.BACK};
	height: 200px;
	width: 100%;
	position: relative;
	padding: 48px 50px;
`;

export const Body = styled.div`
	background-color: transparent;
	transform: translateY(-5rem);
	height: 100%;
	padding: 0 50px;
`;