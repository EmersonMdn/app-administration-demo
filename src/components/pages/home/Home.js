import React, { useEffect, useState } from "react";
import { Select, Spin } from "antd";
import Layout from "../../common/layout";
import { useTranslation } from "../../../contexts/translationContext";
import { openNotificationWithIcon, TYPE } from "../../../utils/notificationToast";
import { superset_get_dashboards } from "../../api/general";
import PowerBIReport from "../../common/powerbi/PowerBIEmbed";

const { Option } = Select;

const Home = () => {
  const { t } = useTranslation();

  // <-- STATES -->
  const [loading, setLoading] = useState(false);
  const [dashboards, setDashboards] = useState([]);
  const [selectedDashboard, setSelectedDashboard] = useState(null);

  return (
    <Layout>
      <Layout.Header>
        <Layout.Title>Panel de Administración - Power BI</Layout.Title>
      </Layout.Header>
      <Layout.Main>

        <PowerBIReport />


      </Layout.Main>
    </Layout>
  );
};

export default Home;