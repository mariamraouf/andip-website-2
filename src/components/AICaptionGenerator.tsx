"use client";

import React from "react";
import { 
  Sparkles, 
  Copy, 
  Check, 
  RefreshCw, 
  Instagram, 
  Twitter, 
  Linkedin,
  Send
} from "lucide-react";
import { showSuccess } from "@/utils/toast";

const toneTemplates = [
  { id: "witty", label: "Witty & Fun", emoji: "🤪" },
  { id: "professional", label: "Professional", emoji: "💼" },
  { id: "inspirational", label: "Inspirational", emoji: "✨" },
  { id: "bold", label: "Bold & Punchy", emoji: "🔥" },
];

const sampleOutputs: Record<string, string[]> = {
  witty: [
    "My code works on the first try. And other hilarious jokes I tell myself before going to bed. ☕️💻 #DeveloperLife #CodingHumor #ReactJS",
    "Just spent 3 hours debugging a typo. Yes, I am a professional software engineer. Please send coffee. 🚀✨ #TechHumor #WebDev #Vite"
  ],
  professional: [
    "Excited to share our latest insights on building scalable user interfaces. By prioritizing modular components and clean state management, we can deliver exceptional user experiences. 📈✨ #WebDevelopment #ReactJS #UIUXDesign",
    "Efficiency is key in modern web development. Leveraging Vite and Tailwind CSS allows teams to build and deploy high-performance applications faster than ever. 🚀 #TechLeadership #SoftwareEngineering"
  ],
  inspirational: [
    "Every line of code you write is a step closer to building something that could change the world. Don't let the bugs discourage you—they are just lessons in disguise. ✨💻 #KeepCoding #TechInspiration #DeveloperJourney",
    "The best way to predict the future is to invent it. Keep building, keep learning, and never stop pushing the boundaries of what's possible. 🌟🚀 #Innovation #TechCommunity #WebDesign"
  ],
  bold: [
    "Stop overcomplicating your tech stack. Keep it simple, keep it fast, and ship it. ⚡️🔥 #WebDev #Productivity #TechTrends",
    "Great design isn't a luxury—it's a necessity. If your app doesn't look amazing, you're already losing. Let's build better. 🚀💥 #UIUX #DesignSystem #Frontend"
  ]
};

export default function AICaptionGenerator() {
  const [topic, setTopic] = React.useState("");
  const [selectedTone, setSelectedTone] = React.useState("witty");
  const [generatedCaption, setGeneratedCaption] = React.useState("");
  const [isGenerating, setIsGenerating] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [previewPlatform, setPreviewPlatform] = React.useState<"instagram" | "twitter" | "linkedin">("instagram");

  const handleGenerate = () => {
    if (!topic) return;
    setIsGenerating(true);
    setGeneratedCaption("");

    setTimeout(() => {
      const templates = sampleOutputs[selectedTone];
      const randomIndex = Math.floor(Math.random() * templates.length);
      // Customize template slightly with user topic
      const customized = templates[randomIndex].replace("My code", topic).replace("debugging a typo", `working on ${topic}`);
      setGeneratedCaption(customized);
      setIsGenerating(false);
      showSuccess("AI Caption generated successfully!");
    }, 1200);
  };

  const handleCopy = () => {
    if (!generatedCaption) return;
    navigator.clipboard.writeText(generatedCaption);
    setCopied(true);
    showSuccess("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-fade-in">
      {/* Generator Controls */}
      <div className="lg:col-span-3 space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-800 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-pink-500 animate-pulse" />
              AI Caption Writer
            </h2>
            <p className="text-sm text-gray-500">Generate high-converting captions in seconds</p>
          </div>

          {/* Topic Input */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-500 uppercase">What is your post about?</label>
            <textarea 
              rows={3}
              placeholder="e.g. A new React dashboard template with beautiful pink and purple gradients..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-3 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm resize-none"
            />
          </div>

          {/* Tone Selector */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-500 uppercase">Select Tone</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {toneTemplates.map((tone) => (
                <button
                  key={tone.id}
                  type="button"
                  onClick={() => setSelectedTone(tone.id)}
                  className={`p-3 rounded-xl border text-sm font-semibold flex flex-col items-center gap-1 transition-all duration-200 ${
                    selectedTone === tone.id 
                      ? "border-pink-500 bg-pink-50/50 text-pink-600 shadow-sm" 
                      : "border-gray-100 hover:border-pink-200 text-gray-600"
                  }`}
                >
                  <span className="text-xl">{tone.emoji}</span>
                  {tone.label}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!topic || isGenerating}
            className="w-full py-3.5 bg-gradient-to-r from-pink-500 via-purple-500 to-amber-400 text-white font-bold rounded-xl shadow-lg shadow-pink-100 hover:opacity-95 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="h-5 w-5 animate-spin" />
                Generating Magic...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                Generate Caption
              </>
            )}
          </button>
        </div>

        {/* Output Box */}
        {generatedCaption && (
          <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm space-y-4 animate-scale-up">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-pink-500 uppercase tracking-wider">Generated Output</span>
              <button 
                onClick={handleCopy}
                className="p-2 hover:bg-pink-50 rounded-lg text-gray-500 hover:text-pink-500 transition-colors flex items-center gap-1.5 text-xs font-semibold"
              >
                {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed bg-pink-50/20 p-4 rounded-xl border border-pink-50/50 whitespace-pre-wrap">
              {generatedCaption}
            </p>
          </div>
        )}
      </div>

      {/* Live Preview Panel */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-2xl border border-pink-50 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800">Live Preview</h3>
            <p className="text-xs text-gray-500">See how your post looks on different platforms</p>
          </div>

          {/* Platform Selector Tabs */}
          <div className="flex bg-gray-50 p-1 rounded-xl">
            <button
              onClick={() => setPreviewPlatform("instagram")}
              className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                previewPlatform === "instagram" ? "bg-white text-pink-600 shadow-sm" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </button>
            <button
              onClick={() => setPreviewPlatform("twitter")}
              className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                previewPlatform === "twitter" ? "bg-white text-cyan-500 shadow-sm" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <Twitter className="h-4 w-4" />
              Twitter/X
            </button>
            <button
              onClick={() => setPreviewPlatform("linkedin")}
              className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                previewPlatform === "linkedin" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-800"
              }`}
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </button>
          </div>

          {/* Simulated Phone/Post Preview */}
          <div className="border border-gray-100 rounded-2xl overflow-hidden shadow-inner bg-gray-50 p-4 flex justify-center">
            {previewPlatform === "instagram" && (
              <div className="bg-white rounded-xl border border-gray-200 w-full max-w-[320px] overflow-hidden shadow-sm">
                {/* Insta Header */}
                <div className="flex items-center gap-2 p-3 border-b border-gray-100">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" className="w-8 h-8 rounded-full object-cover" alt="" />
                  <span className="text-xs font-bold text-gray-800">sarah_jenkins</span>
                </div>
                {/* Insta Image Placeholder */}
                <div className="aspect-square bg-gradient-to-tr from-pink-100 via-purple-100 to-amber-100 flex items-center justify-center p-6 text-center">
                  <span className="text-xs font-bold text-purple-600/70 bg-white/80 px-4 py-2 rounded-full shadow-sm">
                    {topic || "Your Post Visual"}
                  </span>
                </div>
                {/* Insta Actions */}
                <div className="p-3 space-y-2">
                  <div className="flex gap-3 text-gray-700">
                    <span>❤️</span>
                    <span>💬</span>
                    <span>✈️</span>
                  </div>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    <span className="font-bold mr-1.5">sarah_jenkins</span>
                    {generatedCaption || "Your generated caption will appear here..."}
                  </p>
                </div>
              </div>
            )}

            {previewPlatform === "twitter" && (
              <div className="bg-white rounded-xl border border-gray-200 w-full max-w-[320px] p-4 shadow-sm space-y-3">
                <div className="flex gap-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" className="w-10 h-10 rounded-full object-cover" alt="" />
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold text-gray-800">Sarah Jenkins</span>
                      <span className="text-[10px] text-gray-400">@sarah_codes</span>
                    </div>
                    <p className="text-xs text-gray-800 mt-1 leading-relaxed">
                      {generatedCaption || "Your generated tweet will appear here..."}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between text-gray-400 text-xs pt-2 border-t border-gray-50">
                  <span>💬 0</span>
                  <span>🔁 0</span>
                  <span>❤️ 0</span>
                  <span>📊 0</span>
                </div>
              </div>
            )}

            {previewPlatform === "linkedin" && (
              <div className="bg-white rounded-xl border border-gray-200 w-full max-w-[320px] p-4 shadow-sm space-y-3">
                <div className="flex gap-3">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" className="w-10 h-10 rounded-full object-cover" alt="" />
                  <div>
                    <span className="text-xs font-bold text-gray-800 block">Sarah Jenkins</span>
                    <span className="text-[10px] text-gray-400 block">Content Director at Hummingbird</span>
                    <span className="text-[9px] text-gray-400 block">1h • Edited</span>
                  </div>
                </div>
                <p className="text-xs text-gray-800 leading-relaxed">
                  {generatedCaption || "Your generated LinkedIn post will appear here..."}
                </p>
                <div className="aspect-video bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-gray-100 flex items-center justify-center p-4 text-center">
                  <span className="text-[10px] font-bold text-purple-600">
                    {topic || "Visual Asset"}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}