import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalLayout from "./components/GlobalLayout";
import Index from "./pages/Index";
import Search from "./pages/Search";
import Deals from "./pages/Deals";
import Analytics from "./pages/Analytics";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GlobalLayout><Index /></GlobalLayout>} />
          <Route path="/search" element={<GlobalLayout><Search /></GlobalLayout>} />
          <Route path="/deals" element={<GlobalLayout><Deals /></GlobalLayout>} />
          <Route path="/analytics" element={<GlobalLayout><Analytics /></GlobalLayout>} />
          <Route path="/contact" element={<GlobalLayout><Contact /></GlobalLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<GlobalLayout><NotFound /></GlobalLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
