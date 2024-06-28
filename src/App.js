import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import IframePage from "./scenes/pavodki";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import "react-widgets/styles.css";
import LoginPage from "./scenes/auth";
import ProtectedRoute from "./scenes/auth/ProtectedRoute";
import DivisionsPage from "./scenes/divisions";
import MainLayout from "./layout/MainLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import withRole from "./utils/withRole";
<<<<<<< HEAD

=======
>>>>>>> 53571871c2d56cc44bd37d5e3e21ef91f3f22484
const queryClient = new QueryClient();

function App() {
  const [theme, colorMode] = useMode();

  const ProtectedIframePage = withRole(IframePage, ["flood", "contact-center"]);
  const ProtectedDashboard = withRole(Dashboard, ["contact-center"]);
  const ProtectedDivisionsPage = withRole(DivisionsPage, ["flood"]);
<<<<<<< HEAD
=======
  // console.log(ProtectedDashboard);
>>>>>>> 53571871c2d56cc44bd37d5e3e21ef91f3f22484

  return (
    <QueryClientProvider client={queryClient}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
<<<<<<< HEAD
          {/* Включаем компонент для сохранения текущей страницы */}
=======
>>>>>>> 53571871c2d56cc44bd37d5e3e21ef91f3f22484
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<MainLayout />}>
              <Route element={<ProtectedRoute requiredRoles={["flood"]} />}>
                <Route path="/" element={<ProtectedIframePage />} />
              </Route>
              <Route path="ekc">
                <Route path="dashboard" element={<ProtectedDashboard />} />
<<<<<<< HEAD
=======

>>>>>>> 53571871c2d56cc44bd37d5e3e21ef91f3f22484
                <Route path="table" element={<ProtectedDivisionsPage />} />
              </Route>
            </Route>
            {/* <Route path="*" element={<h2>404 - Not Found</h2>} /> */}
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
