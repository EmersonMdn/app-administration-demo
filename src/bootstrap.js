import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";
import startup from "./utils/startup.json";
import { createRoot } from "react-dom/client";

const mount = (
	el,
	{ onSignIn, onNavigate, defaultHistory, initialPath, menu }
) => {
	const container = el
	const root = createRoot(container)
	const history =
		defaultHistory ||
		createMemoryHistory({
			initialEntries: [initialPath],
		});

	if (onNavigate) {
		history.listen(onNavigate);
	}

	root.render(
		<App onSignIn={onSignIn} history={history} menu={menu} />
	);

	return {
		onParentNavigate({ pathname: nextPathname }) {
			const { pathname } = history.location;

			if (pathname !== nextPathname) {
				history.push(nextPathname);
			}
		},
	};
};

if (process.env.NODE_ENV === "development") {
	// localStorage.setItem("auth_tenant", "sysone");
	const devRoot = document.getElementById("_app-administration-dev-root");
	if (devRoot) {
		mount(devRoot, { defaultHistory: createBrowserHistory(), menu: startup });
	}
}

export { mount };
