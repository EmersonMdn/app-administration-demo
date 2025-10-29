import styled from "styled-components";

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background: #001529;
  padding: 0 24px;
  display: flex;
  align-items: center;
  height: 64px;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
`;

export const Aside = styled.aside`
  background: #fff;
  border-right: 1px solid #f0f0f0;
  width: 200px;
  min-width: 200px;
`;

export const Body = styled.div`
  flex: 1;
  padding: 24px;
  background: #f0f2f5;
`;

export const Title = styled.h1`
  color: #fff;
  margin: 0;
  font-size: ${props => props.mobile ? '18px' : '20px'};
  font-weight: 600;
`;

export const Breadcrumb = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const BreadcrumbItem = styled.span`
  color: #666;
  font-size: 14px;
`;

export const BreadcrumbSeparator = styled.span`
  color: #999;
  margin: 0 8px;
`;
