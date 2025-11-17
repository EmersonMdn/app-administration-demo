import axios from 'axios';
import { axiosInstance } from 'sysone-endpoints-demo'

class PowerBIService {
    constructor() {
        this.clientId = process.env.REACT_APP_CLIENT_ID;
        this.tenantId = process.env.REACT_APP_TENANT_ID;
        this.clientSecret = process.env.REACT_APP_CLIENT_SECRET;
        this.scope = 'https://analysis.windows.net/powerbi/api/.default';
        this.authority =
            `https://login.microsoftonline.com/${this.tenantId}/oauth2/v2.0/token`;
    }

    async getAccessToken() {
        try {
            const params = new URLSearchParams();
            params.append('client_id', this.clientId);
            params.append('client_secret', this.clientSecret);
            params.append('scope', this.scope);
            params.append('grant_type', 'client_credentials');
            const response = await axios.post(this.authority, params, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            });
            return response.data.access_token;
        } catch (error) {
            console.error('Error obteniendo token:', error);
            throw error;
        }
    }

    async getEmbedConfig() {
        try {
            const accessToken = await this.getAccessToken();
            console.log("🚀 ~ PowerBIService ~ getEmbedConfig ~ accessToken:", accessToken)
            const workspaceId = process.env.REACT_APP_WORKSPACE_ID;
            const reportId = process.env.REACT_APP_REPORT_ID;

            return {
                accessToken,
                embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${reportId}&groupId=${workspaceId}`,
                embedToken: accessToken,
                reportId: reportId,
            };
        } catch (error) {
            console.error('Error obteniendo configuración de embed:', error);
            throw error;
        }
    }
}

export default new PowerBIService();