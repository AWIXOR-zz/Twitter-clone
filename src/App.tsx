import ThemeProvider from "providers/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "routes";
import Layout from "ui/Layout";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
