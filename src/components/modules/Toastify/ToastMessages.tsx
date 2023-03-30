import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const getToastType = (type: ToastType) => {
  switch (type) {
    case "SUCCESS":
      return toast.TYPE.SUCCESS;
    case "ERROR":
      return toast.TYPE.ERROR;
    case "INFO":
      return toast.TYPE.INFO;
    default:
      throw new Error("invalid toast message type");
  }
};

type ToastType = "SUCCESS" | "ERROR" | "INFO";

const showToastMessage = (type: ToastType, message: string) => {
  const typeOfToast = getToastType(type);
  return toast[typeOfToast](message);
};

const ToastMessage = () => (
  <ToastContainer
    position="bottom-center"
    autoClose={2500}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />
);

export default ToastMessage;
export { showToastMessage };
