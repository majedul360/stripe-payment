import Pay from "./Pay";
import PaySuccessful from "./PaySuccessful";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Pay />} />
      <Route path="/successful" element={<PaySuccessful />} />
    </Routes>
  );
}

export default App;
