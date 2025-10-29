import React from "react";
import { Card, Row, Col, Statistic, Button } from "antd";
import { UserOutlined, SettingOutlined, DatabaseOutlined, SecurityScanOutlined } from "@ant-design/icons";
import Layout from "../../common/layout";
import { useTranslation } from "../../../contexts/translationContext";

const Home = () => {
  const { t } = useTranslation();

  const statistics = [
    {
      title: "Usuarios Activos",
      value: 1128,
      icon: <UserOutlined style={{ fontSize: 24, color: "#1890ff" }} />,
      color: "#1890ff"
    },
    {
      title: "Configuraciones",
      value: 45,
      icon: <SettingOutlined style={{ fontSize: 24, color: "#52c41a" }} />,
      color: "#52c41a"
    },
    {
      title: "Bases de Datos",
      value: 12,
      icon: <DatabaseOutlined style={{ fontSize: 24, color: "#faad14" }} />,
      color: "#faad14"
    },
    {
      title: "Seguridad",
      value: 98,
      icon: <SecurityScanOutlined style={{ fontSize: 24, color: "#f5222d" }} />,
      color: "#f5222d"
    }
  ];

  return (
    <Layout>
      <Layout.Header>
        <Layout.Title>Panel de Administración</Layout.Title>
      </Layout.Header>
      <Layout.Main>
        <Layout.Body>
          <Layout.Breadcrumb>
            <Layout.BreadcrumbItem>Inicio</Layout.BreadcrumbItem>
            <Layout.BreadcrumbSeparator />
            <Layout.BreadcrumbItem>Administración</Layout.BreadcrumbItem>
          </Layout.Breadcrumb>
          
          <Row gutter={[16, 16]}>
            {statistics.map((stat, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <Card>
                  <Statistic
                    title={stat.title}
                    value={stat.value}
                    prefix={stat.icon}
                    valueStyle={{ color: stat.color }}
                  />
                </Card>
              </Col>
            ))}
          </Row>

          <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
            <Col xs={24} lg={12}>
              <Card title="Acciones Rápidas" size="small">
                <Row gutter={[8, 8]}>
                  <Col span={12}>
                    <Button type="primary" block>
                      Gestionar Usuarios
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button block>
                      Configuración
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button block>
                      Reportes
                    </Button>
                  </Col>
                  <Col span={12}>
                    <Button block>
                      Seguridad
                    </Button>
                  </Col>
                </Row>
              </Card>
            </Col>
            <Col xs={24} lg={12}>
              <Card title="Actividad Reciente" size="small">
                <div style={{ textAlign: "center", padding: "20px 0" }}>
                  <p>No hay actividad reciente</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Layout.Body>
      </Layout.Main>
    </Layout>
  );
};

export default Home;
