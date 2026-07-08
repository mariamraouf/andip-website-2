"use client";

import React from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Instagram, 
  Twitter, 
  Linkedin,
  Calendar as CalendarIcon
} from "lucide-react";
import { cn } from "@/lib/utils";
import { showSuccess } from "@/utils/toast";

interface Post {
  id: string;
  title: string;
  platform: "instagram" | "twitter" | "linkedin";
  time: string;
  date: number; // Day of month
}

const initialPosts: Post[] = [
  { id: "1", title: "UI Design Trends 2025", platform: "instagram", time: "10:00 AM", date: 12 },
  { id: "2", title: "Why React 19 is awesome", platform: "twitter", time: "2:30 PM", date: 14 },
  { id: "3", title: "Career growth in tech", platform: "linkedin", time: "9:00 AM", date: 14 },
  { id: "4", title: "Hummingbird Launch Day!", platform: "instagram", time: "5:00 PM", date: 18 },
  { id: "5", title: "Vite vs Webpack in 2025", platform: "twitter", time: "11:15 AM", date: 22 },
];

export default function ContentCalendar() {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  const [posts, setPosts] = React.useState<Post[]>(initialPosts);
  const [selectedDay, setSelectedDay] = React.useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [newPostTitle, setNewPostTitle] = React.useState("");
  const [newPostPlatform, setNewPostPlatform] = React.useState<"instagram" | "twitter" | "linkedin">("instagram");
  const [newPostTime, setNewPostTime] = React.useState("12:00 PM");

  // Simple calendar generation for current month
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDayIndex }, (_, i) => i);

  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle || selectedDay === null) return;

    const newPost: Post = {
      id: Date.now().toString(),
      title: newPostTitle,
      platform: newPostPlatform,
      time: newPostTime,
      date: selectedDay
    };

    setPosts([...posts, newPost]);
    setNewPostTitle("");
    setIsModalOpen(false);
    showSuccess(`Successfully scheduled post for Day ${selectedDay}!`);
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram": return <Instagram className="h-3.5 w-3.5 text-pink-500" />;
      case "twitter": return <Twitter className="h-3.5 w-3.5 text-cyan-500" />;
      case "linkedin": return <Linkedin className="h-3.5 w-3.5 text-blue-600" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800">Content Calendar</h2>
          <p className="text-sm text-gray-500">Plan, schedule, and organize your social media pipeline</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              setSelectedDay(new Date().getDate());
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-md shadow-pink-100 hover:opacity-95 transition-opacity"
          >
            <Plus className="h-4 w-4" />
            Schedule Post
          </button>
        </div>
      </div>

      {/* Calendar Grid Container */}
      <div className="bg-white rounded-2xl border border-pink-50 shadow-sm overflow-hidden">
        {/* Month Selector */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-pink-50 bg-pink-50/20">
          <div className="flex items-center gap-2">
            <CalendarIcon className="h-5 w-5 text-pink-500" />
            <span className="font-bold text-gray-800">
              {currentMonth.toLocaleString("default", { month: "long", year: "numeric" })}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-pink-50 rounded-lg text-gray-600 transition-colors">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-pink-50 rounded-lg text-gray-600 transition-colors">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Days of Week Header */}
        <div className="grid grid-cols-7 text-center py-3 border-b border-pink-50 bg-gray-50/50 text-xs font-bold text-gray-500">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 auto-rows-[120px] divide-x divide-y divide-pink-50/50">
          {/* Empty cells for offset */}
          {emptyDays.map((_, i) => (
            <div key={`empty-${i}`} className="bg-gray-50/30"></div>
          ))}

          {/* Actual Days */}
          {days.map((day) => {
            const dayPosts = posts.filter(p => p.date === day);
            const isToday = day === new Date().getDate();

            return (
              <div 
                key={day} 
                onClick={() => {
                  setSelectedDay(day);
                  setIsModalOpen(true);
                }}
                className={cn(
                  "p-2 flex flex-col justify-between hover:bg-pink-50/20 transition-colors cursor-pointer group relative",
                  isToday && "bg-pink-50/10"
                )}
              >
                <span className={cn(
                  "text-xs font-bold flex items-center justify-center w-6 h-6 rounded-full",
                  isToday ? "bg-pink-500 text-white" : "text-gray-700 group-hover:text-pink-600"
                )}>
                  {day}
                </span>

                {/* Scheduled Posts for this day */}
                <div className="space-y-1 overflow-y-auto max-h-[80px] mt-1 scrollbar-none">
                  {dayPosts.map((post) => (
                    <div 
                      key={post.id} 
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent opening add modal
                        showSuccess(`Viewing: ${post.title}`);
                      }}
                      className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-pink-50 border border-pink-100 text-[10px] font-semibold text-gray-700 truncate hover:bg-pink-100/50 transition-colors"
                    >
                      {getPlatformIcon(post.platform)}
                      <span className="truncate">{post.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Schedule Post Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-pink-100 animate-scale-up">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Schedule Post for Day {selectedDay}
            </h3>
            <form onSubmit={handleAddPost} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Post Title / Topic</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 10 UI Design Tips"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Platform</label>
                  <select 
                    value={newPostPlatform}
                    onChange={(e) => setNewPostPlatform(e.target.value as any)}
                    className="w-full px-3 py-2 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm bg-white"
                  >
                    <option value="instagram">Instagram</option>
                    <option value="twitter">Twitter/X</option>
                    <option value="linkedin">LinkedIn</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Time</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. 5:00 PM"
                    value={newPostTime}
                    onChange={(e) => setNewPostTime(e.target.value)}
                    className="w-full px-3 py-2 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm font-semibold text-gray-500 hover:bg-gray-50 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl shadow-md shadow-pink-100 hover:opacity-95 transition-opacity"
                >
                  Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}