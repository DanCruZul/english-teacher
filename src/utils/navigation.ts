export const scrollToSection = (sectionId: string) => {
  const id = sectionId.replace("#", "");

  // Si estamos en una ruta diferente a "/", primero navegamos al home
  if (window.location.pathname !== "/") {
    window.location.href = `/#${id}`;
    return;
  }

  // Pequeño timeout para asegurar que los elementos están montados
  setTimeout(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 100);
};

// Función auxiliar para verificar si estamos en la página principal
export const isHomePage = () => {
  return window.location.pathname === "/";
};
