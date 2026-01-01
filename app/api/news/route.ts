import { NextResponse } from "next/server";

export async function GET() {
  try {
    // GNews.io API (kostenlos mit Limits)
    // Für Production: API Key in .env.local setzen: GNEWS_API_KEY=your_key_here
    const apiKey = process.env.GNEWS_API_KEY || "";
    
    if (!apiKey) {
      // Fallback: Return mock data wenn kein API Key vorhanden
      return NextResponse.json({
        articles: [],
        message: "No API key configured. Using mock data.",
      });
    }

    const response = await fetch(
      `https://gnews.io/api/v4/search?q=cryptocurrency&lang=en&max=20&token=${apiKey}`,
      {
        next: { revalidate: 600 }, // Cache für 10 Minuten
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch news");
    }

    const data = await response.json();

    // Transform GNews.io format to our NewsArticle format
    const articles = data.articles?.map((article: any, index: number) => ({
      id: `gnews-${index}`,
      title: article.title,
      description: article.description,
      image: article.image || "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&h=200&fit=crop",
      date: new Date(article.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      source: article.source?.name || "GNews",
      url: article.url,
      category: "crypto",
    })) || [];

    return NextResponse.json({ articles });
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { articles: [], error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}

