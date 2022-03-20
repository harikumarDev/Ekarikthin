import { Store } from "react-notifications-component";

export const notification = {
  title: "Title",
  message: "Msg",
  type: "success",
  insert: "top",
  container: "top-right",
  animationIn: ["animate__animated", "animate__fadeIn"],
  animationOut: ["animate__animated", "animate__fadeOut"],
  dismiss: {
    duration: 5000,
    onScreen: true,
    showIcon: true,
  },
};

export const notifyError = (message) => {
  Store.addNotification({
    ...notification,
    title: "Error",
    message,
    type: "danger",
  });
};

export const notifySuccess = (message) => {
  Store.addNotification({
    ...notification,
    title: "Success",
    message,
    type: "success",
  });
};

export const notifyInfo = (message) => {
  Store.addNotification({
    ...notification,
    title: "Info",
    message,
    type: "info",
  });
};
