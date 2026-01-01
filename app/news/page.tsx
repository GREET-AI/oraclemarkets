"use client";

import { useState, useEffect, useMemo } from "react";
import { SidebarNavigation } from "@/components/layout/SidebarNavigation";
import { NewsCard } from "@/components/news/NewsCard";
import { mockNewsArticles, NewsArticle } from "@/lib/mockData";

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true);
        const response = await fetch("/api/news");
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          setArticles(data.articles);
        } else {
          // Fallback auf Mock Data
          setArticles(mockNewsArticles);
        }
      } catch (err) {
        console.error("Error loading news:", err);
        setError("Failed to load news");
        // Fallback auf Mock Data
        setArticles(mockNewsArticles);
      } finally {
        setLoading(false);
      }
    }

    loadNews();
  }, []);

  const filteredArticles = useMemo(() => {
    return articles;
  }, [articles]);

  return (
    <main className="min-h-screen bg-[#0A0A0A] flex">
      {/* Sidebar */}
      <SidebarNavigation />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-black text-white mb-6 tracking-tight">
              Latest News
            </h1>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-16">
              <p className="text-[#E0E0E0]/60 font-sans text-lg">Loading news...</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="text-center py-16">
              <p className="text-[#FF006E] font-sans text-lg">{error}</p>
              <p className="text-[#E0E0E0]/60 font-sans text-sm mt-2">
                Showing mock data as fallback.
              </p>
            </div>
          )}

          {/* News Cards Grid */}
          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <NewsCard key={article.id || index} article={article} />
              ))}
            </div>
          )}

          {!loading && filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#E0E0E0]/60 font-sans text-lg">
                No news articles found.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

