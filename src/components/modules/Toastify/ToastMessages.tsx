import { ToastContainer, TypeOptions, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const getToastType = (type: ToastType) => {
  switch (type) {
    case "SUCCESS":
      return toast.TYPE.SUCCESS;
    case "ERROR":
      return toast.TYPE.ERROR;
    case "INFO":
      return toast.TYPE.INFO;
  }
};

type ToastType = "SUCCESS" | "ERROR" | "INFO";

const showToastMessage = (type: ToastType, message: string) => {
  const typeOfToast: TypeOptions = getToastType(type);

  return toast(message, { type: typeOfToast });
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
