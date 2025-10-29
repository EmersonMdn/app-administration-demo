import React from "react";
import { Spin } from "antd";
import { Container, StyledSpinner } from "./styles";

export default ({ text }) => {
	return (
		<Container>
			<StyledSpinner viewBox="0 0 100 100">
				<circle
					className="path"
					cx="50"
					cy="50"
					r="35"
					fill="none"
					strokeWidth="4"
				/>
			</StyledSpinner>
			{text && <div>{text}</div>}
		</Container>
	);
};
