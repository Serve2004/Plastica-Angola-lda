import { useNavigate } from "react-router-dom";

export function useScroll() {
  const navigate = useNavigate();

  function handleScroll(id: string) {
    navigate("/");

    setTimeout(() => {
      const element = document.getElementById(id);

      element?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }

  return handleScroll;
}
