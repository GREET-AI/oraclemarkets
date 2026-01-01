"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { NewsArticle } from "@/lib/mockData";
import { ExternalLink } from "lucide-react";

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A0A1A] border-2 border-[#2A1A2A] rounded-xl overflow-hidden hover:border-[#FF006E]/50 transition-all group"
    >
      {/* Date Badge */}
      <div className="absolute top-3 left-3 z-10 px-3 py-1 bg-[#0A0A0A]/90 backdrop-blur-sm rounded-lg">
        <span className="text-white text-xs font-mono font-semibold">
          {article.date}
        </span>
      </div>

      {/* Market Percentage Badge */}
      {article.marketPercentage !== undefined && (
        <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-[#0A0A0A]/90 backdrop-blur-sm rounded-lg">
          <span
            className={`text-xs font-mono font-bold ${
              article.marketPercentage > 50
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {article.marketPercentage}% chance
          </span>
        </div>
      )}

      {/* Image */}
      <div className="relative w-full h-48 bg-gradient-to-br from-[#FF006E]/20 to-[#FF6B35]/20 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          unoptimized
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-lg font-heading font-bold text-white mb-3 group-hover:text-[#FF006E] transition-colors line-clamp-2">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#E0E0E0]/70 font-sans mb-4 line-clamp-3">
          {article.description}
        </p>

        {/* Source and Link */}
        <div className="flex items-center justify-between pt-4 border-t-2 border-[#2A1A2A]">
          <span className="text-xs font-sans text-[#E0E0E0]/60">
            {article.source}
          </span>
          <Link
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#FF006E] hover:text-[#FF6B35] transition-colors text-sm font-heading font-semibold"
          >
            Read more
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

