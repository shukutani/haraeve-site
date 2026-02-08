import { useState, useMemo, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import {
  Search,
  ArrowUpDown,
  Star,
  Clock,
  Users,
  ChevronLeft,
} from "lucide-react";
import { supabase } from "../../lib/supabase";

/* =====================
   型定義（Supabase）
===================== */
type Game = {
  id: string;
  title: string;
  play_time: string;
  player_count: string;
  difficulty: number;
  summary: string;
  thumbnail_url: string | null;
};

type SortKey = "title" | "play_time" | "player_count" | "difficulty";
type SortDirection = "asc" | "desc";

/* =====================
   Component
===================== */
export function GameListPage() {
  const navigate = useNavigate();

  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("title");
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  /* =====================
     データ取得
  ===================== */
  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from("games")
        .select("*");

      console.log("games data:", data);
      console.log("games error:", error);

      if (error) {
        console.error(error);
      } else {
        setGames(data ?? []);
      }
      setLoading(false);
    };

    fetchGames();
  }, []);

  /* =====================
     ソート処理
  ===================== */
  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  /* =====================
     検索 & ソート
  ===================== */
  const filteredAndSortedGames = useMemo(() => {
    let filtered = games.filter((game) =>
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
        case "play_time":
          comparison = a.play_time.localeCompare(b.play_time);
          break;
        case "player_count":
          comparison = a.player_count.localeCompare(b.player_count);
          break;
      }

      return sortDirection === "asc" ? comparison : -comparison;
    });

    return filtered;
  }, [games, searchQuery, sortKey, sortDirection]);

  const displayedGames = useMemo(() => {
    return filteredAndSortedGames.slice(0, itemsPerPage);
  }, [filteredAndSortedGames, itemsPerPage]);

  /* =====================
     その他
  ===================== */
  const handleRowClick = (gameId: string) => {
    navigate(`/games/${gameId}`);
  };

  const renderStars = (difficulty: number) => (
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

  if (loading) {
    return <div className="p-12 text-center">読み込み中...</div>;
  }

  /* =====================
     JSX
  ===================== */
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-500 to-amber-500 text-white py-8 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mb-4 hover:text-orange-100"
          >
            <ChevronLeft className="h-5 w-5" />
            トップページに戻る
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">ボードゲーム一覧</h1>
          <p className="text-orange-100">
            ハライベで遊べるボードゲームをチェック！
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ゲームタイトルで検索..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-orange-200"
            />
          </div>

          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-4 py-3 rounded-xl border border-orange-200"
          >
            <option value={10}>10件</option>
            <option value={30}>30件</option>
            <option value={50}>50件</option>
            <option value={100}>100件</option>
          </select>
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow overflow-x-auto">
          <table className="w-full">
            <thead className="bg-orange-100">
              <tr>
                <th onClick={() => handleSort("title")} className="px-4 py-4">
                  タイトル
                </th>
                <th className="hidden md:table-cell px-4 py-4">画像</th>
                <th onClick={() => handleSort("play_time")} className="px-4 py-4">
                  <Clock className="inline h-4 w-4" /> 時間
                </th>
                <th
                  onClick={() => handleSort("player_count")}
                  className="px-4 py-4"
                >
                  <Users className="inline h-4 w-4" /> 人数
                </th>
                <th
                  onClick={() => handleSort("difficulty")}
                  className="px-4 py-4"
                >
                  難易度
                </th>
                <th className="hidden lg:table-cell px-4 py-4">概要</th>
              </tr>
            </thead>

            <tbody>
              {displayedGames.map((game) => (
                <tr
                  key={game.id}
                  onClick={() => handleRowClick(game.id)}
                  className="hover:bg-orange-50 cursor-pointer"
                >
                  <td className="px-4 py-4 text-orange-600 font-medium">
                    {game.title}
                  </td>
                  <td className="px-4 py-4 hidden md:table-cell">
                    <img
                      src={
                        game.thumbnail_url ??
                        "https://placehold.co/100x100?text=No+Image"
                      }
                      alt={game.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="px-4 py-4">{game.play_time}</td>
                  <td className="px-4 py-4">{game.player_count}</td>
                  <td className="px-4 py-4">{renderStars(game.difficulty)}</td>
                  <td className="px-4 py-4 hidden lg:table-cell">
                    {game.summary}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-center text-slate-600">
          {displayedGames.length} / {filteredAndSortedGames.length} 件表示
        </div>
      </div>
    </div>
  );
}