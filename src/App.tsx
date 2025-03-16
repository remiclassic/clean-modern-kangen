
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FAQs from "./pages/FAQs";
import UserManual from "./pages/UserManual";
import WaterResearch from "./pages/WaterResearch";
import Testimonials from "./pages/Testimonials";
import BusinessOpportunity from "./pages/BusinessOpportunity";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import AboutMatthieu from "./pages/AboutMatthieu";
import { EngagementToaster } from "./components/EngagementToaster";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/user-manual" element={<UserManual />} />
          <Route path="/water-research" element={<WaterResearch />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/business-opportunity" element={<BusinessOpportunity />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/about-matthieu" element={<AboutMatthieu />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <EngagementToaster />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
