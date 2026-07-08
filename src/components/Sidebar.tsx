"use client";

import React from "react";
import { 
  LayoutDashboard, 
  Calendar, 
  Sparkles, 
  FileText, 
  Settings, 
  TrendingUp,
  Feather,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "calendar", label: "Content Calendar", icon: Calendar },
    { id: "ai-writer", label: "AI Caption Writer", icon: Sparkles },
    { id: "posts", label: "Scheduled Posts", icon: FileText },
    { id: "analytics", label: "Detailed Analytics", icon: TrendingUp },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between bg-white border-b border-pink-100 px-4 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-amber-400 p-2 rounded-xl text-white shadow-md shadow-pink-200">
            <Feather className="h-5 w-5 animate-pulse" />
          </div>
          <span className="font-bold text-xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Hummingbird
          </span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-600 hover:bg-pink-50 rounded-lg transition-colors"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar Container */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-pink-50 flex flex-col justify-between transition-transform duration-300 lg:translate-x-0 lg:static lg:h-screen",
        isOpen ? "translate-x-0 pt-16 lg:pt-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="px-6 py-6 flex flex-col gap-8">
          {/* Logo (Desktop only) */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="bg-gradient-to-tr from-pink-500 via-purple-500 to-amber-400 p-2.5 rounded-2xl text-white shadow-lg shadow-pink-100">
              <Feather className="h-6 w-6" />
            </div>
            <div>
              <h1 className="font-extrabold text-2xl bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 bg-clip-text text-transparent tracking-tight">
                Hummingbird
              </h1>
              <p className="text-xs text-gray-400 font-medium">Content Suite</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group",
                    isActive 
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-100" 
                      : "text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                  )}
                >
                  <Icon className={cn(
                    "h-5 w-5 transition-transform duration-200 group-hover:scale-110",
                    isActive ? "text-white" : "text-gray-400 group-hover:text-pink-500"
                  )} />
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-pink-50 bg-gradient-to-b from-transparent to-pink-50/30">
          <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-pink-50/50 transition-colors cursor-pointer">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                alt="User Avatar" 
                className="w-10 h-10 rounded-full object-cover border-2 border-pink-200"
              />
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-gray-800 truncate">Sarah Jenkins</p>
              <p className="text-xs text-gray-500 truncate">Content Director</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}