import React, { useState, useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { Spin, Alert } from 'antd';
import PowerBIService from '../../../services/powerbiService'
import { openNotificationWithIcon, TYPE } from '../../../utils/notificationToast'

const PowerBIReport = () => {
    const [embedConfig, setEmbedConfig] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadReport = async () => {
            try {
                setLoading(true);
                setError(null);

                const config = await PowerBIService.getEmbedConfig();
                setEmbedConfig(config);

            } catch (err) {
                console.error('Error cargando embed de Power BI:', err);
                setError(err.message || 'Error al cargar el tablero de Power BI');
                openNotificationWithIcon(TYPE.ERROR, 'Error', 'No se pudo cargar el tablero de Power BI');
            } finally {
                setLoading(false);
            }
        };
        loadReport();
    }, []);

    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '600px'
            }}>
                <Spin size="large" tip="Cargando tablero de Power BI..." />
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ padding: '20px' }}>
                <Alert
                    message="Error al cargar Power BI"
                    description={error}
                    type="error"
                    showIcon
                />
            </div>
        );
    }

    if (!embedConfig) {
        return (
            <div style={{ padding: '20px' }}>
                <Alert
                    message="Configuración no disponible"
                    description="No se pudo obtener la configuración del tablero"
                    type="warning"
                    showIcon
                />
            </div>
        );
    }

    const embedSettings = {
        type: 'report',
        tokenType: models.TokenType.Aad,
        accessToken: embedConfig.accessToken,
        embedUrl: embedConfig.embedUrl,
        id: embedConfig.reportId,
        settings: {
            panes: {
                filters: {
                    expanded: false,
                    visible: true
                },
                pageNavigation: {
                    visible: true
                }
            },
            background: models.BackgroundType.Transparent,
            layoutType: models.LayoutType.Custom,
            customLayout: {
                displayOption: models.DisplayOption.FitToWidth
            }
        }
    };

    return (
        <div
            className="powerbi-container"
            style={{
                height: '800px',
                width: '100%',
                border: '1px solid #d9d9d9',
                borderRadius: '4px',
                overflow: 'hidden'
            }}
        >
            <PowerBIEmbed
                embedConfig={embedSettings}
                eventHandlers={
                    new Map([
                        ['loaded', function () {
                            console.log('Power BI embed cargado correctamente');
                        }],
                        ['rendered', function () {
                            console.log('Power BI embed renderizado correctamente');
                        }],
                        ['error', function (event) {
                            console.error('Error en Power BI embed:', event.detail);
                        }]
                    ])
                }
                cssClassName="powerbi-report"
                getEmbeddedComponent={(embeddedReport) => {
                    window.report = embeddedReport;
                }}
            />
        </div>
    );
};

export default PowerBIReport;