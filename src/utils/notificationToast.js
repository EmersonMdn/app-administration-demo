import { notification } from "antd";

export const showNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
    placement: "topRight",
    duration: 4.5,
  });
};

export const showSuccess = (message, description) => {
  showNotification("success", message, description);
};

export const showError = (message, description) => {
  showNotification("error", message, description);
};

export const showWarning = (message, description) => {
  showNotification("warning", message, description);
};

export const showInfo = (message, description) => {
  showNotification("info", message, description);
};
