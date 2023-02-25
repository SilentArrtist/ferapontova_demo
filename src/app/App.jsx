import { Route, Routes } from "react-router-dom";
import { Album } from "../pages/Album";
import { Contact } from "../pages/Contact";
import { Info } from "../pages/Info";
import { Layout } from "../widgets/Layout";
import "./styles/styles.scss"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Album />} />
          <Route path="info" element={<Info />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<div>NOT FOUND!</div>} />
      </Routes >
    </>
  );
}

export default App;
