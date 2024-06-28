import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

function SaveCurrentPage() {
  const location = useLocation();

  useEffect(() => {
    // Сохранение текущего пути в cookie
    Cookies.set("currentPage", location.pathname, { expires: 1 }); // Сохраняет cookie на 1 день
  }, [location]);

  return null; // Компонент не рендерит ничего
}

export default SaveCurrentPage;
