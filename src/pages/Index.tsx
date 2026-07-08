"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import DashboardOverview from "@/components/DashboardOverview";
import ContentCalendar from "@/components/ContentCalendar";
import AICaptionGenerator from "@/components/AICaptionGenerator";
import PostManager from "@/components/PostManager";
import { MadeWithDyad } from "@/components/made-with-dyad";

export default function Index() {
  const [activeTab, setActiveTab] = React.useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview />;
      case "calendar":
        return <ContentCalendar />;
      case "ai-writer":
        return <AICaptionGenerator />;
      case "posts":
        return <PostManager />;
      case "analytics":
        return <DashboardOverview />; // Reusing dashboard for detailed analytics view
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50/30 via-white to-purple-50/20 flex flex-col lg:flex-row">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:p-10 overflow-y-auto max-h-screen space-y-8">
        {renderContent()}
        
        {/* Footer */}
        <div className="pt-8 border-t border-pink-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 font-medium">
            &copy; 2025 Hummingbird Content Suite. All rights reserved.
          </p>
          <MadeWithDyad />
        </div>
      </main>
    </div>
  );
}