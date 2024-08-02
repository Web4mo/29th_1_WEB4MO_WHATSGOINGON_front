import { useNavigate } from "react-router-dom";

export const useGotoRetest = () => {
  const navigate = useNavigate();
  return () => navigate("/analy");
};

export const useGotoSignUp = () => {
  const navigate = useNavigate();
  return () => navigate("/auth/sign-up");
};

export const useGotoHome2 = () => {
  const navigate = useNavigate();
  return () => navigate("/main/main_2");
};
export const useGotoHome3 = () => {
  const navigate = useNavigate();
  return () => navigate("/main/main_3");
};
export const useGotoHome4 = () => {
  const navigate = useNavigate();
  return () => navigate("/main/main_4");
};

export const useGotoScrap = () => {
  const navigate = useNavigate();
  return () => navigate("/scrap");
};
