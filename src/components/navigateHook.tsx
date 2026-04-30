import { useNavigate } from "react-router-dom";

/**
 * Hook para navegação e scroll suave
 *
 * Uso em um <a>:
 * const handleScroll = useScroll();
 * <a href="#" onClick={(e) => { e.preventDefault(); handleScroll("section-id"); }}>
 *   Link
 * </a>
 */
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
