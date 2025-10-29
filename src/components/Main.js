import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import { useMenu } from "../contexts/menuContext";
import { useActions } from "../contexts/actionsContext";
import { useTranslation } from "../contexts/translationContext";
import Routes from "./common/routes/Routes";

export default function Main({ history }) {
	const { menu, routes, ready } = useMenu();
	const { actions } = useActions();
	const { translations } = useTranslation();

	if (!menu || !routes || !actions || !translations)
		return <div>Loading...</div>;

	return (
		<Router history={history}>
			<Switch>{Routes(routes)}</Switch>
		</Router>
	);
}
