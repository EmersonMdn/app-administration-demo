import React, { createContext, useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

const DeviceContext = createContext();

export function useDevice() {
	return useContext(DeviceContext);
}

export function DeviceProvider({ children }) {
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });

	return (
		<DeviceContext.Provider value={{ isTabletOrMobile, isPortrait }}>
			{children}
		</DeviceContext.Provider>
	);
}
