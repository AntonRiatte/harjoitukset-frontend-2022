import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MainComponent from "./MainComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default App;
