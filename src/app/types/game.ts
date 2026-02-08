export type Game = {
  id: string;
  title: string;
  play_time: string;
  player_count: string;
  difficulty: number;
  summary: string;
  detail_markdown: string;
  image_urls: string[] | null;
};