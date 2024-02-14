import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout"
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs">
            <Route index element={<Blogs />} />
            <Route path=":blogId" element={<BlogDetail />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);