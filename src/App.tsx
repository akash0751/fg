import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import WelcomeFeatures from "./pages/WelcomeFeatures";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import Profile from "./pages/Profile";
import Rewards from "./pages/Rewards";
import Notifications from "./pages/Notifications";
import Challenges from "./pages/Challenges";
import SubmitProof from "./pages/SubmitProof";
import Achievements from "./pages/Achievements";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome-features" element={<WelcomeFeatures />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/submit-proof" element={<SubmitProof />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/user-profile" element={<UserProfile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
