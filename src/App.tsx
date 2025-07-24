import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./screens/HomePage";
import QuotePage from "./screens/QuotePage/QuotePage";
import ExpertsPage from "./screens/ExpertsPage/ExpertsPage";
import Certifications from "./screens/Certifications/Certifications";
import { Services } from "./screens/Services/Services";
import { Projects } from "./screens/Projects/Projects";
import { ProjectDetails } from "./screens/ProjectDetails/ProjectDetails";
import { Testimonials } from "./screens/Testimonials/Testimonials";
import { Contact } from "./screens/Contact/Contact";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/get-a-quote" element={<Layout><QuotePage /></Layout>} />
        <Route path="/experts" element={<Layout><ExpertsPage /></Layout>} />
        <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/projects" element={<Layout><Projects /></Layout>} />
        <Route path="/projects/:id" element={<Layout><ProjectDetails /></Layout>} />
        <Route path="/testimonials" element={<Layout><Testimonials /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
