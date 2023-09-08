import Header from "./components/core/Header"
import { Routes, Route } from "react-router-dom";
import { HomePage, AboutPage, ContactPage, ServicePage, ProjectPage, PageNotFound } from "./pages/index"

const App = () => {
  return (
    <div>
      <Header />
      <Routes>


        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="*" element={<PageNotFound />} />



      </Routes>
    </div>
  )
}

export default App