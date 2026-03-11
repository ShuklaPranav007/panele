import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComponentsPage from "./pages/ComponentsPage";
import ComponentDetailPage from "./pages/ComponentDetailPage";
import TemplatesPage from "./pages/TemplatesPage";
import TemplateDetailPage from "./pages/TemplateDetailPage";
import NotFound from "./pages/NotFound";
import Hero from "./pages/Hero";
import Mypages from "./pages/Mypages";
import PageDetails from "./pages/PageDetails";
import { heroes } from "./data/herodata";
import Pages from "./pages/Pages";
import { components } from "./data/pages";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/components/:id" element={<ComponentDetailPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/templates/:id" element={<TemplateDetailPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/mypages" element={<Mypages />} />
          <Route path="/pages/:id" element={<PageDetails  />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
