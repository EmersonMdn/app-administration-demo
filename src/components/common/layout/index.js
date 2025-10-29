import React from "react";
import {
	Main,
	Inner,
	Header,
	Title,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbSeparator,
	Aside,
	Body,
} from "./styles";
import { useDevice } from "../../../contexts/deviceContext";

const Layout = ({ children, ...restProps }) => (
	<Inner {...restProps}>{children}</Inner>
);

export default Layout;

Layout.Header = ({ children, ...restProps }) => {
	return <Header {...restProps}>{children}</Header>;
};

Layout.Main = ({ children, ...restProps }) => {
	return <Main {...restProps}>{children}</Main>;
};

Layout.Aside = ({ children, ...restProps }) => {
	return <Aside {...restProps}>{children}</Aside>;
};

Layout.Breadcrumb = ({ children, ...restProps }) => {
	return <Breadcrumb {...restProps}>{children}</Breadcrumb>;
};

Layout.BreadcrumbItem = ({ children, ...restProps }) => {
	return <BreadcrumbItem {...restProps}>{children}</BreadcrumbItem>;
};

Layout.BreadcrumbSeparator = ({ children, ...restProps }) => {
	return <BreadcrumbSeparator {...restProps}>/</BreadcrumbSeparator>;
};

Layout.Title = ({ children, ...restProps }) => {
	const { isTabletOrMobile } = useDevice();
	return (
		<Title mobile={isTabletOrMobile} {...restProps}>
			{children}
		</Title>
	);
};

Layout.Body = ({ children, ...restProps }) => {
	return <Body {...restProps}>{children}</Body>;
};
