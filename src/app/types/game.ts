export type GameDetail = {
  id: string;
  title: string;
  play_time: string;
  player_count: string;
  difficulty: number;
  summary: string;
  image_urls: string[] | null;
  detail_markdown: string;
};

export type Game = {
  id: string;
  title: string;
  play_time: string;
  player_count: string;
  difficulty: number;
  summary: string;
  image_urls: string[] | null;
};