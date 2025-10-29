import styled from "styled-components";

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
