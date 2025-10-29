import React from "react";
import { useTranslation } from "../../../contexts/translationContext"; 
import Home from '../../pages/home/Home'

export default function RouteComponent({ m, parents }) {
  const { t } = useTranslation();

  // Aquí puedes agregar lógica para renderizar diferentes tipos de componentes
  // basados en el tipo de menú o ruta
  const renderComponent = () => {
    switch (m.code) {
      case "LINK_ONE_ADMINISTRATION_MODULE":
        return <Home />
      default:
        return <div>Default Component for {m.code}</div>;
    }
  };

  return (
    <div>
      <h1>{t(m.labelCode)}</h1>
      {renderComponent()}
    </div>
  );
}
