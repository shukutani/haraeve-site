import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Users,
  List,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

import { supabase } from "../lib/supabase";
import type { GameDetail } from "../types/game";

export function GameDetailPage() {
  const { id } = useParams<{ id: string }>();

  const [game, setGame] = useState<GameDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!id) return;

    const fetchGame = async () => {
      const { data, error } = await supabase
        .from("games")
        .select("*")
        .eq("id", id)
        .single();

      if (!error && data) {
        setGame(data);
      }
      setLoading(false);
    };

    fetchGame();
  }, [id]);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (!game) {
    return <Navigate to="/games" replace />;
  }

  const images = game.image_urls ?? [];

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const renderStars = (difficulty: number) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-5 w-5 ${
            star <= difficulty
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-6 px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/games" className="flex items-center gap-2">
            <ChevronLeft className="h-5 w-5" />
            一覧に戻る
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Images */}
        {images.length > 0 && (
          <div className="relative mb-8 bg-white rounded-2xl shadow overflow-hidden">
            <div className="aspect-video bg-slate-100">
              <img
                src={images[currentImageIndex]}
                alt={game.title}
                className="w-full h-full object-cover"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
                  >
                    <ChevronLeft />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
                  >
                    <ChevronRight />
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Info */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <h1 className="text-3xl font-bold mb-6">{game.title}</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div>
              <Clock className="inline mr-1" />
              {game.play_time}
            </div>
            <div>
              <Users className="inline mr-1" />
              {game.player_count}
            </div>
            <div className="col-span-2 flex items-center gap-2">
              {renderStars(game.difficulty)}
              <span>({game.difficulty}/5)</span>
            </div>
          </div>

          <div className="bg-slate-50 rounded-xl p-4">
            <List className="inline mr-2" />
            {game.summary}
          </div>
        </div>

        {/* Markdown */}
        <div className="bg-white rounded-2xl shadow p-8">
          <div className="prose max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
            >
              {game.detail_markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}