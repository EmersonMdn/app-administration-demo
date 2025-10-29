import React from "react";
import { useTranslation } from "../../../contexts/translationContext";

export default function RouteComponent({ m, parents }) {
  const { t } = useTranslation();

  // Aquí puedes agregar lógica para renderizar diferentes tipos de componentes
  // basados en el tipo de menú o ruta
  const renderComponent = () => {
    switch (m.code) {
      case "ADMINISTRATION_ADMIN":
        return <div>Administration Admin Component</div>;
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
