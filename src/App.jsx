import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  // Loading süresi
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Loading ekranı
  if (loading) {
    return <Loader />;
  }

  // Ana site
  return <Home />;
}

export default App;
