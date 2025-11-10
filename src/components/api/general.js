import axios from "axios";

const supersetUrl = "https://data-dev.sysone.com";
const supersetApiUrl = supersetUrl + "/api/v1";

export const superset_get_dashboards = async (accessToken) => {
    if (!accessToken) {
        throw new Error("No se proporcionó un token de acceso");
    }

    const response = await axios.get(`${supersetApiUrl}/dashboard/`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
};