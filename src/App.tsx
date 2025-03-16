
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <EngagementToaster />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
