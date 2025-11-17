import React, { useEffect } from "react";
import "./index.css";
import "antd/dist/antd.css";
import { TranslationProvider } from "./contexts/translationContext";
import { MenuProvider } from "./contexts/menuContext";
import { axiosInstance } from "sysone-endpoints-demo";
import { ActionsProvider } from "./contexts/actionsContext";
import Main from "./components/Main";
import { DeviceProvider } from "./contexts/deviceContext";
import { StylesProvider, updateColors } from "./contexts/stylesContext";

export default ({ history, menu }) => {
	const token = localStorage.getItem("auth_token");
	const roles = localStorage.getItem("auth_roles");
	const tenant = localStorage.getItem("auth_tenant");
	const userid = localStorage.getItem("user_id");
	const xApiKey = localStorage.getItem("x-api-key");
	const styles = localStorage.getItem("styles");

	axiosInstance.interceptors.request.use(
		(config) => {
			config.baseURL = process.env.REACT_APP_API_BASE_URL;
			config.headers.Authorization = `Bearer ${token}`;
			config.headers["X-Tenant"] = tenant;
			config.headers["X-User"] = userid;
			config.headers["X-Api-Key"] = xApiKey;
			config.params = {
				...config.params,
				// roles,
			};
			return config;
		},
		(error) => {
			return Promise.reject(error);
		}
	);

	updateColors(styles);

	useEffect(() => { console.log("MENUS DESDE ADMIN", menu) })


	return (
		<TranslationProvider initialData={menu.labels}>
			<MenuProvider initialData={menu}>
				<ActionsProvider initialData={menu}>
					<DeviceProvider>
						<StylesProvider>
							<Main history={history} />
						</StylesProvider>
					</DeviceProvider>
				</ActionsProvider>
			</MenuProvider>
		</TranslationProvider>
	);
};
