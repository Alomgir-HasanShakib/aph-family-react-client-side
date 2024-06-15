import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/authcontext/Authentication";

const axiosSecure = axios.create({
  baseURL: "https://aphfamily-alomgir-hasanshakibs-projects.vercel.app",
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("aph-token");
      config.headers.authorization = `aph-token ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  // interceptors 401 and 403 status
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const status = err.response.status;

      // for 401 and 403 logout user and move to the use to the login page

      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(err)
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
