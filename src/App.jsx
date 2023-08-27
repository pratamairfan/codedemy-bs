import { Routes, Route } from "react-router";
import {
  Home,
  Faq,
  Kelas,
  SyaratKetentuan,
  Testimonial,
} from "pages";

import {
  NavbarComponent,
  FooterComponent,
} from "components";

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kelas" element={<Kelas />} />
        <Route
          path="/testimonial"
          element={<Testimonial />}
        />
        <Route path="/faq" element={<Faq />} />
        <Route
          path="/syaratketentuan"
          element={<SyaratKetentuan />}
        />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;
