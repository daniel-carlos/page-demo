import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
// import DocsPage from "@/pages/docs";
// import PricingPage from "@/pages/pricing";
// import BlogPage from "@/pages/blog";
// import AboutPage from "@/pages/about";
import RankingPage from "./pages/platformListPage";
import BannerPage from "./pages/banner";
import BlogPage from "./pages/blog";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<RankingPage />} path="/ranking" />
      <Route element={<BannerPage />} path="/banner" />
      <Route element={<BlogPage />} path="/blog" />
      {/* <Route element={<DocsPage />} path="/docs" />
      <Route element={<PricingPage />} path="/pricing" />
      <Route element={<AboutPage />} path="/about" /> */}
    </Routes>
  );
}

export default App;
