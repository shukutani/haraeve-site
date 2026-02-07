import { useState } from "react";
import { useParams, Link, Navigate } from "react-router";
import { ChevronLeft, ChevronRight, Star, Clock, Users, List } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { boardGames } from "../data/boardGames";

export function GameDetailPage() {
  const { id } = useParams();
  const game = boardGames.find((g) => g.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!game) {
    return <Navigate to="/games" replace />;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % game.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? game.images.length - 1 : prev - 1
    );
  };

  const renderStars = (difficulty: number) => {
    return (
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-6 px-4 shadow-lg">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/games"
            className="inline-flex items-center gap-2 text-white hover:text-orange-100 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>一覧に戻る</span>
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">
        {/* Image Slider */}
        <div className="relative mb-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100">
          <div className="relative aspect-video bg-slate-100">
            <img
              src={`https://source.unsplash.com/featured/1200x675/?${game.images[currentImageIndex]}`}
              alt={`${game.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Navigation Buttons */}
            {game.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full p-2 shadow-lg transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 rounded-full p-2 shadow-lg transition-all"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {game.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex
                          ? "bg-white w-6"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Game Info Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8 border border-orange-100">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
            {game.title}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
              <div className="flex items-center gap-2 mb-2 text-orange-600">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">プレイ時間</span>
              </div>
              <p className="text-lg font-semibold text-slate-800">{game.playTime}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100">
              <div className="flex items-center gap-2 mb-2 text-orange-600">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">プレイ人数</span>
              </div>
              <p className="text-lg font-semibold text-slate-800">{game.playerCount}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-100 col-span-2 md:col-span-2">
              <div className="flex items-center gap-2 mb-2 text-orange-600">
                <Star className="h-5 w-5" />
                <span className="text-sm font-medium">難易度</span>
              </div>
              <div className="flex items-center gap-2">
                {renderStars(game.difficulty)}
                <span className="text-sm text-slate-600">
                  ({game.difficulty}/5)
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
            <h3 className="text-lg font-semibold text-slate-800 mb-2 flex items-center gap-2">
              <List className="h-5 w-5 text-blue-600" />
              概要
            </h3>
            <p className="text-slate-700 leading-relaxed">{game.summary}</p>
          </div>
        </div>

        {/* Markdown Content */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-orange-100">
          <div className="prose prose-slate max-w-none prose-headings:text-slate-800 prose-h1:text-3xl prose-h2:text-2xl prose-h2:border-b prose-h2:border-orange-200 prose-h2:pb-2 prose-h3:text-xl prose-a:text-orange-600 prose-strong:text-slate-800 prose-ul:list-disc prose-ol:list-decimal">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {game.detailMarkdown}
            </ReactMarkdown>
          </div>
        </div>

        {/* Back to List Button */}
        <div className="mt-8 text-center">
          <Link
            to="/games"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 font-medium"
          >
            <ChevronLeft className="h-5 w-5" />
            一覧に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
