import { ToastContainer as Container } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const ToastContainer = () => {
  return (
    <Container
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      draggable
      closeButton={true}
      theme="light"
    />
  );
};
