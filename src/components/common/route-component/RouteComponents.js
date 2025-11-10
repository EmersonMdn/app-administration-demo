import React from "react";
import { useTranslation } from "../../../contexts/translationContext";
import Home from '../../pages/home/Home'

export default function RouteComponent({ m, parents, ...restProps }) {
  const { t } = useTranslation();

  const renderComponent = () => {
    switch (m.code) {
      case "LINK_ONE_ADMINISTRATION_MODULE":
        return <Home {...restProps} />
      default:
        return <div>Default Component for {m.code}</div>;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
}
