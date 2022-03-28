import ThemeProvider from "providers/ThemeProvider";
import Layout from "ui/Layout";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="App">Hello</div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
