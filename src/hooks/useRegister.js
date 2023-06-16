// dummy data will be changed later

import { API } from "services/api";
import { showAlert } from "store/features/alertSlice";
import { useDispatch } from "react-redux";

const useRegister = () => {
  const dispatch = useDispatch();

  const registerUser = async (data) => {
    try {
      const response = await API.post(`/user/register/`, {
        emailAddress: data?.email,
        firstName: data?.name && data.name.split(" ")?.[0],
        lastName: data?.name && data.name.split(" ")?.[1],
        password: data?.password,
        country: data?.country,
      });
      if (response.data) {
        dispatch(showAlert(["success", "Signup Successful"]));
        return {
          data: response?.data?.data,
          failed: false,
        };
      }
    } catch (err) {
      if (!err.response.data.errors.emailAddress) {
        dispatch(showAlert(["error", "Enter full Name"]));
      } else if (!err.response.data.errors.lastName) {
        dispatch(showAlert(["info", "User with this email already exist"]));
      } else {
        dispatch(showAlert(["info", "User with this email already exist"]));
        setTimeout(() => {
          dispatch(showAlert(["info", "Enter full Name."]));
        }, 2000);
      }
    }
  };

  return {
    registerUser,
  };
};
export default useRegister;
