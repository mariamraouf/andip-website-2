"use client";

import React from "react";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Search, 
  Filter, 
  MoreVertical, 
  Trash2, 
  CheckCircle, 
  Clock,
  AlertCircle
} from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface ScheduledPost {
  id: string;
  title: string;
  caption: string;
  platform: "instagram" | "twitter" | "linkedin";
  status: "scheduled" | "published" | "failed";
  date: string;
  time: string;
}

const initialScheduledPosts: ScheduledPost[] = [
  {
    id: "1",
    title: "UI Design Trends 2025",
    caption: "Exploring the future of user interfaces. Gradients, micro-interactions, and minimalist layouts are taking over! ✨ #UIUX #Design",
    platform: "instagram",
    status: "scheduled",
    date: "Oct 24, 2025",
    time: "10:00 AM"
  },
  {
    id: "2",
    title: "Why React 19 is awesome",
    caption: "React 19 is bringing game-changing features like Server Actions and improved document metadata support. What are you most excited for? 🚀",
    platform: "twitter",
    status: "published",
    date: "Oct 22, 2025",
    time: "2:30 PM"
  },
  {
    id: "3",
    title: "Career growth in tech",
    caption: "To grow as a software engineer, focus on communication and system design just as much as writing code. Here is my journey... 💼",
    platform: "linkedin",
    status: "scheduled",
    date: "Oct 25, 2025",
    time: "9:00 AM"
  },
  {
    id: "4",
    title: "Hummingbird Launch Day!",
    caption: "We are officially live! Hummingbird is the ultimate high-speed content suite for creators and teams. Try it now! 🕊️✨",
    platform: "instagram",
    status: "failed",
    date: "Oct 20, 2025",
    time: "5:00 PM"
  }
];

export default function PostManager() {
  const [posts, setPosts] = React.useState<ScheduledPost[]>(initialScheduledPosts);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [platformFilter, setPlatformFilter] = React.useState<string>("all");

  const handleDelete = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
    showSuccess("Post deleted successfully!");
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "instagram": return <Instagram className="h-5 w-5 text-pink-500" />;
      case "twitter": return <Twitter className="h-5 w-5 text-cyan-500" />;
      case "linkedin": return <Linkedin className="h-5 w-5 text-blue-600" />;
      default: return null;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "published":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700 border border-green-100">
            <CheckCircle className="h-3.5 w-3.5" />
            Published
          </span>
        );
      case "scheduled":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-100">
            <Clock className="h-3.5 w-3.5" />
            Scheduled
          </span>
        );
      case "failed":
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-red-50 text-red-700 border border-red-100">
            <AlertCircle className="h-3.5 w-3.5" />
            Failed
          </span>
        );
      default:
        return null;
    }
  };

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.caption.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = platformFilter === "all" || post.platform === platformFilter;
    return matchesSearch && matchesPlatform;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-extrabold text-gray-800">Scheduled Posts</h2>
        <p className="text-sm text-gray-500">Manage, edit, and track your scheduled social media posts</p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl border border-pink-50 shadow-sm">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
          />
        </div>

        {/* Platform Filter */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <Filter className="h-4 w-4 text-gray-400" />
          <select
            value={platformFilter}
            onChange={(e) => setPlatformFilter(e.target.value)}
            className="px-3 py-2 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm bg-white"
          >
            <option value="all">All Platforms</option>
            <option value="instagram">Instagram</option>
            <option value="twitter">Twitter/X</option>
            <option value="linkedin">LinkedIn</option>
          </select>
        </div>
      </div>

      {/* Posts List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white p-5 rounded-2xl border border-pink-50 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Left: Platform & Content */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                <div className="p-3 bg-pink-50/50 rounded-xl mt-1">
                  {getPlatformIcon(post.platform)}
                </div>
                <div className="space-y-1 flex-1 min-w-0">
                  <h4 className="font-bold text-gray-800 text-base truncate">{post.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">{post.caption}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 font-medium pt-1">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.time}</span>
                  </div>
                </div>
              </div>

              {/* Right: Status & Actions */}
              <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-pink-50/50">
                {getStatusBadge(post.status)}
                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => handleDelete(post.id)}
                    className="p-2 hover:bg-red-50 rounded-lg text-gray-400 hover:text-red-500 transition-colors"
                    title="Delete Post"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <button className="p-2 hover:bg-pink-50 rounded-lg text-gray-400 hover:text-pink-500 transition-colors">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-pink-50 shadow-sm">
            <p className="text-gray-500 font-medium">No posts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}