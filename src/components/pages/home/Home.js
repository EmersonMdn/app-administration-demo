import React, { useEffect, useState } from "react";
import Layout from "../../common/layout";
import { useTranslation } from "../../../contexts/translationContext";
import { openNotificationWithIcon, TYPE } from "../../../utils/notificationToast";
import { superset_get_dashboards } from "../../api/general";

const Home = () => {
  const { t } = useTranslation();

  // <-- STATES -->
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDashboards = async () => {
      try {
        setLoading(true);
        const authToken = localStorage.getItem("auth_token"); // Obtener el token

        const response = await superset_get_dashboards(authToken);
        console.log("response", response);

        const formattedDashboards = response?.result
          ?.map((d) => ({
            id: d.id || "",
            slug: d.slug || "",
            name: getName(d.slug) || "",
            tags: d?.tags?.map((t) => ({
              name: t?.name.toLowerCase().replace(/\s+/g, ""),
            })),
          }));

        console.log("formattedDashboards", formattedDashboards);


      } catch (err) {
        console.error("ERROR FETCHING DASHBOARD", err);
        openNotificationWithIcon(TYPE.ERROR, err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboards();
  }, []);


  return (
    <Layout>
      <Layout.Header>
        <Layout.Title>Panel de Administración</Layout.Title>
      </Layout.Header>
      <Layout.Main>


      </Layout.Main>
    </Layout>
  );
};

export default Home;
