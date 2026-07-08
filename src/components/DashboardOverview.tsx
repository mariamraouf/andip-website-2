"use client";

import React from "react";
import { 
  TrendingUp, 
  Users, 
  Share2, 
  MessageSquare, 
  ArrowUpRight, 
  ArrowDownRight,
  Sparkles,
  Instagram,
  Twitter,
  Linkedin
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from "recharts";

const performanceData = [
  { name: "Mon", Twitter: 2400, Instagram: 4000, LinkedIn: 1800 },
  { name: "Tue", Twitter: 1398, Instagram: 3000, LinkedIn: 2200 },
  { name: "Wed", Twitter: 9800, Instagram: 2000, LinkedIn: 2900 },
  { name: "Thu", Twitter: 3908, Instagram: 2780, LinkedIn: 2000 },
  { name: "Fri", Twitter: 4800, Instagram: 1890, LinkedIn: 2181 },
  { name: "Sat", Twitter: 3800, Instagram: 2390, LinkedIn: 2500 },
  { name: "Sun", Twitter: 4300, Instagram: 3490, LinkedIn: 2100 },
];

const platformDistribution = [
  { name: "Instagram", value: 45, color: "#EC4899" },
  { name: "Twitter/X", value: 30, color: "#06B6D4" },
  { name: "LinkedIn", value: 25, color: "#3B82F6" },
];

export default function DashboardOverview() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 p-8 text-white shadow-xl shadow-pink-100">
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-black/10 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 max-w-xl space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-amber-200" />
            AI-Powered Content Suite
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Welcome back, Sarah!
          </h2>
          <p className="text-pink-50 text-sm md:text-base leading-relaxed">
            Your scheduled posts are performing 18% better this week. Let's keep the momentum going with some fresh AI-generated ideas!
          </p>
        </div>
      </div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stat 1 */}
        <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-pink-50 rounded-xl text-pink-500">
              <Users className="h-6 w-6" />
            </div>
            <span className="flex items-center gap-0.5 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="h-3 w-3" />
              12.4%
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-extrabold text-gray-800">45.2K</h3>
            <p className="text-sm text-gray-500 font-medium mt-1">Total Followers</p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-purple-50 rounded-xl text-purple-500">
              <TrendingUp className="h-6 w-6" />
            </div>
            <span className="flex items-center gap-0.5 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="h-3 w-3" />
              8.2%
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-extrabold text-gray-800">189.4K</h3>
            <p className="text-sm text-gray-500 font-medium mt-1">Total Impressions</p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-amber-50 rounded-xl text-amber-500">
              <Share2 className="h-6 w-6" />
            </div>
            <span className="flex items-center gap-0.5 text-xs font-bold text-red-600 bg-red-50 px-2 py-1 rounded-full">
              <ArrowDownRight className="h-3 w-3" />
              1.5%
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-extrabold text-gray-800">12.8K</h3>
            <p className="text-sm text-gray-500 font-medium mt-1">Total Shares</p>
          </div>
        </div>

        {/* Stat 4 */}
        <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm hover:shadow-md transition-all duration-200">
          <div className="flex justify-between items-start">
            <div className="p-3 bg-blue-50 rounded-xl text-blue-500">
              <MessageSquare className="h-6 w-6" />
            </div>
            <span className="flex items-center gap-0.5 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
              <ArrowUpRight className="h-3 w-3" />
              24.1%
            </span>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-extrabold text-gray-800">4.2K</h3>
            <p className="text-sm text-gray-500 font-medium mt-1">Comments & Replies</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Performance Chart */}
        <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm lg:col-span-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Engagement Growth</h3>
              <p className="text-xs text-gray-500">Weekly breakdown across active platforms</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-pink-500">
                <span className="w-2.5 h-2.5 rounded-full bg-pink-500"></span> Instagram
              </span>
              <span className="flex items-center gap-1.5 text-cyan-500">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span> Twitter/X
              </span>
              <span className="flex items-center gap-1.5 text-blue-500">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> LinkedIn
              </span>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorInsta" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#EC4899" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#EC4899" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTwitter" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" />
                <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} tickLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #FCE7F3" }} />
                <Area type="monotone" dataKey="Instagram" stroke="#EC4899" strokeWidth={2} fillOpacity={1} fill="url(#colorInsta)" />
                <Area type="monotone" dataKey="Twitter" stroke="#06B6D4" strokeWidth={2} fillOpacity={1} fill="url(#colorTwitter)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Platform Distribution */}
        <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Platform Share</h3>
            <p className="text-xs text-gray-500 mb-6">Distribution of audience engagement</p>
          </div>
          <div className="h-48 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={platformDistribution} layout="vertical" margin={{ top: 0, right: 10, left: -10, bottom: 0 }}>
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#4B5563" fontSize={12} tickLine={false} />
                <Tooltip contentStyle={{ borderRadius: "12px", border: "1px solid #FCE7F3" }} />
                <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={16}>
                  {platformDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2 mt-4">
            {platformDistribution.map((platform) => (
              <div key={platform.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-gray-600 font-medium">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }}></span>
                  {platform.name}
                </span>
                <span className="font-bold text-gray-800">{platform.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity & Top Performing */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performing Posts */}
        <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Top Performing Posts</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-pink-50/30 transition-colors">
              <div className="p-2.5 bg-pink-100 text-pink-600 rounded-xl">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-800 truncate">5 Tips for Designing Stunning UI Dashboards...</p>
                <p className="text-xs text-gray-500">Instagram • 2 hours ago</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-green-600">+4.2k</p>
                <p className="text-xs text-gray-400">Likes</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-pink-50/30 transition-colors">
              <div className="p-2.5 bg-blue-100 text-blue-600 rounded-xl">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-800 truncate">Why micro-interactions are the secret to user retention...</p>
                <p className="text-xs text-gray-500">LinkedIn • 1 day ago</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-green-600">+1.8k</p>
                <p className="text-xs text-gray-400">Shares</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-pink-50/30 transition-colors">
              <div className="p-2.5 bg-cyan-100 text-cyan-500 rounded-xl">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-800 truncate">Vite + React is still the absolute best stack in 2025. Change my mind.</p>
                <p className="text-xs text-gray-500">Twitter/X • 2 days ago</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-green-600">+850</p>
                <p className="text-xs text-gray-400">Retweets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Tips / Insights */}
        <div className="bg-gradient-to-br from-purple-900 to-indigo-950 p-6 rounded-2xl text-white flex flex-col justify-between">
          <div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-500/30 text-xs font-semibold text-purple-200 border border-purple-500/20">
              Hummingbird Insight
            </span>
            <h3 className="text-xl font-bold mt-3 mb-2">Best Time to Post Today</h3>
            <p className="text-purple-200 text-sm leading-relaxed">
              Based on your audience activity, posting on <strong className="text-amber-300">Instagram at 5:00 PM</strong> will likely yield 25% higher engagement than usual.
            </p>
          </div>
          <div className="mt-6 pt-4 border-t border-purple-800/50 flex items-center justify-between">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-purple-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="" />
              <img className="w-8 h-8 rounded-full border-2 border-purple-900 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="" />
              <img className="w-8 h-8 rounded-full border-2 border-purple-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="" />
            </div>
            <span className="text-xs text-purple-300 font-medium">Active audience: 12.4k users online</span>
          </div>
        </div>
      </div>
    </div>
  );
}