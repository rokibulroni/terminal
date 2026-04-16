import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Dashboard } from "@/pages/Dashboard";
import { CategoryPage } from "@/pages/CategoryPage";
import { ToolPage } from "@/components/tool/ToolPage";
import { FavoritesPage } from "@/pages/Favorites";
import { AboutPage } from "@/pages/About";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicy";
import { TermsPage } from "@/pages/Terms";
import { ContactPage } from "@/pages/Contact";
import { HowToUsePage } from "@/pages/HowToUse";
import { DisclaimerPage } from "@/pages/Disclaimer";
import PracticePage from "@/pages/PracticePage";
import { ScrollToTop } from "@/components/ScrollToTop";
import NotFound from "./pages/NotFound";

import { ContributePage } from "@/pages/Contribute";
import { LicensePage } from "@/pages/License";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner
        position="bottom-center"
        toastOptions={{
          style: {
            background: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--foreground))',
          },
        }}
      />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/tool/:category/:tool" element={<ToolPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/how-to-use" element={<HowToUsePage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/contribute" element={<ContributePage />} />
            <Route path="/license" element={<LicensePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
