import React, { createContext, useContext, useEffect, useState } from "react";

const StylesContext = createContext();

export function useStyles() {
	return useContext(StylesContext);
}

export function updateColors(newStyles) {
	Object.keys(newStyles).forEach((key) => {
		const cssKey = `--${key}`;
		const cssValue = newStyles[key];
		document.body.style.setProperty(cssKey, cssValue);
	});
}

export function StylesProvider({ children }) {
	return <StylesContext.Provider value={{}}>{children}</StylesContext.Provider>;
}
