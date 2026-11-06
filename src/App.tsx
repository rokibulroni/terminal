import { type ReactNode } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { QueryClientProvider, type QueryClient } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Layout } from '@/components/layout/Layout';
import { ScrollToTop } from '@/components/ScrollToTop';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';
import { Dashboard } from '@/pages/Dashboard';
import { CategoryPage } from '@/pages/CategoryPage';
import { ToolPage } from '@/components/tool/ToolPage';
import { FavoritesPage } from '@/pages/Favorites';
import { AboutPage } from '@/pages/About';
import { PrivacyPolicyPage } from '@/pages/PrivacyPolicy';
import { TermsPage } from '@/pages/Terms';
import { ContactPage } from '@/pages/Contact';
import { HowToUsePage } from '@/pages/HowToUse';
import { DisclaimerPage } from '@/pages/Disclaimer';
import { ContributePage } from '@/pages/Contribute';
import { LicensePage } from '@/pages/License';
import { GuidesPage } from '@/pages/Guides';
import { GuidePage } from '@/pages/Guide';
import { GlossaryPage } from '@/pages/Glossary';
import { DevelopersPage } from '@/pages/Developers';
import { AgentsPage } from '@/pages/Agents';
import PracticePage from '@/pages/PracticePage';
import NotFound from '@/pages/NotFound';

export function AppRoutes() {
  const { pathname } = useLocation();
  return (
    <Layout>
      <ErrorBoundary resetKey={pathname}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/tool/:category/:tool" element={<ToolPage />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guide/:slug" element={<GuidePage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="/practice" element={<PracticePage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/how-to-use" element={<HowToUsePage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/license" element={<LicensePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </Layout>
  );
}

/** Providers shared by the browser entry and the prerenderer. The router is supplied by the caller. */
export function AppProviders({ client, children }: { client: QueryClient; children: ReactNode }) {
  return (
    <QueryClientProvider client={client}>
      <TooltipProvider delayDuration={300}>
        <Toaster position="bottom-center" />
        <ScrollToTop />
        {children}
      </TooltipProvider>
    </QueryClientProvider>
  );
}
