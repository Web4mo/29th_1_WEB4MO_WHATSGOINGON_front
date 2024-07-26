import { useNavigate } from "react-router-dom";

export const useGotoRetest = () => {
  const navigate = useNavigate();
  return () => navigate("/analy");
};

export const useGotoSignUp = () => {
  const navigate = useNavigate();
  return () => navigate("/auth/sign-up");
};
