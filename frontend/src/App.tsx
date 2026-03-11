import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import ComponentsPage from "./pages/ComponentsPage";
import ComponentDetailPage from "./pages/ComponentDetailPage";
import TemplatesPage from "./pages/TemplatesPage";
import TemplateDetailPage from "./pages/TemplateDetailPage";
import NotFound from "./pages/NotFound";
import Hero from "./pages/Hero";
import Mypages from "./pages/Mypages";
import PageDetails from "./pages/PageDetails";
import Pages from "./pages/Pages";
import About from "./pages/About";

// Auth
import { AuthProvider, useAuth } from "./context/AuthContext";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const queryClient = new QueryClient();

// Protected Route wrapper
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, token } = useAuth();
  return user || token ? <>{children}</> : <Navigate to="/signin" />;
};

const AppRoutes = () => (
  <Routes>
    {/* ── Existing Routes (unchanged) ── */}
    <Route path="/"               element={<Index />} />
    <Route path="/components"     element={<ComponentsPage />} />
    <Route path="/components/:id" element={<ComponentDetailPage />} />
    <Route path="/templates"      element={<TemplatesPage />} />
    <Route path="/templates/:id"  element={<TemplateDetailPage />} />
    <Route path="/hero"           element={<Hero />} />
    <Route path="/mypages"        element={<Mypages />} />
    <Route path="/pages/:id"      element={<PageDetails />} />
    <Route path="/pages"          element={<Pages />} />
    <Route path="/about"          element={<About />} />

    {/* ── New Auth Routes ── */}
    <Route path="/signin"         element={<Signin />} />
    <Route path="/signup"         element={<Signup />} />
    <Route path="/dashboard"      element={
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    } />

    {/* ── 404 (keep at bottom) ── */}
    <Route path="*"               element={<NotFound />} />
  </Routes>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;