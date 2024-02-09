import { toast } from "react-toastify";

const useToast = () => {
  const show = (message: string) => {
    toast(message);
  };

  return { show };
};

export default useToast;
