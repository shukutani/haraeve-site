import { useState, useMemo } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { Search, ArrowUpDown, Star, Clock, Users, ChevronLeft } from "lucide-react";
import { boardGames } from "../data/boardGames";

type SortKey = "title" | "playTime" | "playerCount" | "difficulty";
type SortDirection = "asc" | "desc";

export function GameListPage(){
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("title");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  const filteredAndSortedGames = useMemo(() => {
    let filtered = boardGames.filter((game) =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortKey) {
        case "title":
          comparison = a.title.localeCompare(b.title, "ja");
          break;
        case "difficulty":
          comparison = a.difficulty - b.difficulty;
          break;
        case "playTime":
          comparison = a.playTime.localeCompare(b.playTime);
          break;
        case "playerCount":
          comparison = a.playerCount.localeCompare(b.playerCount);
          break;
      }
      return sortDirection === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [searchQuery, sortKey, sortDirection]);

  const displayedGames = useMemo(() => {
    return filteredAndSortedGames.slice(0, itemsPerPage);
  }, [filteredAndSortedGames, itemsPerPage]);

  const handleRowClick = (gameId: string) => {
    navigate(`/games/${gameId}`);
  };

  const renderStars = (difficulty: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
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
      <header className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-8 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-orange-100 transition-colors mb-4"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>トップページに戻る</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">ボードゲーム一覧</h1>
          <p className="text-orange-100">ハライベで遊べるボードゲームをチェック！</p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Search Bar and Items Per Page */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="ゲームタイトルで検索..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white shadow-sm"
            />
          </div>

          {/* Items Per Page Selector */}
          <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-orange-200 shadow-sm">
            <span className="text-sm text-slate-600 whitespace-nowrap">表示件数:</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              className="bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-orange-400 rounded-lg px-2 py-1 text-slate-800 font-medium cursor-pointer"
            >
              <option value={10}>10件</option>
              <option value={30}>30件</option>
              <option value={50}>50件</option>
              <option value={100}>100件</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-orange-100 to-amber-100">
                <tr>
                  <th className="px-4 py-4 text-left">
                    <button
                      onClick={() => handleSort("title")}
                      className="flex items-center gap-2 hover:text-orange-600 transition-colors font-bold text-slate-800"
                    >
                      タイトル
                      <ArrowUpDown className="h-4 w-4" />
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left hidden md:table-cell">画像</th>
                  <th className="px-4 py-4 text-left">
                    <button
                      onClick={() => handleSort("playTime")}
                      className="flex items-center gap-2 hover:text-orange-600 transition-colors font-bold text-slate-800"
                    >
                      <Clock className="h-4 w-4" />
                      時間
                      <ArrowUpDown className="h-4 w-4" />
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left">
                    <button
                      onClick={() => handleSort("playerCount")}
                      className="flex items-center gap-2 hover:text-orange-600 transition-colors font-bold text-slate-800"
                    >
                      <Users className="h-4 w-4" />
                      人数
                      <ArrowUpDown className="h-4 w-4" />
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left">
                    <button
                      onClick={() => handleSort("difficulty")}
                      className="flex items-center gap-2 hover:text-orange-600 transition-colors font-bold text-slate-800"
                    >
                      難易度
                      <ArrowUpDown className="h-4 w-4" />
                    </button>
                  </th>
                  <th className="px-4 py-4 text-left hidden lg:table-cell font-bold text-slate-800">
                    概要
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-orange-100">
                {displayedGames.map((game) => (
                  <tr
                    key={game.id}
                    onClick={() => handleRowClick(game.id)}
                    className="hover:bg-orange-50 transition-colors cursor-pointer"
                  >
                    <td className="px-4 py-4">
                      <span className="text-orange-600 font-medium">
                        {game.title}
                      </span>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <img
                        src={`https://source.unsplash.com/featured/100x100/?${game.image}`}
                        alt={game.title}
                        className="w-16 h-16 object-cover rounded-lg shadow-sm"
                      />
                    </td>
                    <td className="px-4 py-4 text-slate-600 text-sm">
                      {game.playTime}
                    </td>
                    <td className="px-4 py-4 text-slate-600 text-sm">
                      {game.playerCount}
                    </td>
                    <td className="px-4 py-4">{renderStars(game.difficulty)}</td>
                    <td className="px-4 py-4 text-slate-600 text-sm hidden lg:table-cell max-w-md">
                      {game.summary}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredAndSortedGames.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              検索条件に一致するゲームが見つかりませんでした
            </div>
          )}
        </div>

        {/* Game Count */}
        <div className="mt-4 text-center text-slate-600">
          {displayedGames.length} / {filteredAndSortedGames.length} 件のゲームを表示中
        </div>
      </div>
    </div>
  );
}