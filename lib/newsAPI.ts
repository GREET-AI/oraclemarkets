import { NewsArticle } from "./mockData";

export async function fetchNewsArticles(): Promise<NewsArticle[]> {
  try {
    const response = await fetch("/api/news", {
      next: { revalidate: 600 }, // Cache für 10 Minuten
    });

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

