import { useNavigate } from "react-router-dom";

export const useGotoRetest = () => {
  const navigate = useNavigate();
  return () => navigate("/analy");
};

export const useGotoSignUp = () => {
  const navigate = useNavigate();
  return () => navigate("/auth/sign-up");
};

export const useGotoHome = () => {
  const navigate = useNavigate();
  return () => navigate("/main/articles");
};
