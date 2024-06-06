import { useState } from "react";
import BuscarPorId from "./components/BuscarPorId/BuscarPorId";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BuscarPorId />
    </>
  );
}

export default App;
