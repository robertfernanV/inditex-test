export interface Podcast {
  id: string;
  name: string;
  description: string;
  image: string;
  author: string;
}

export interface CurrentPodcast {
  podcast: Podcast;
  total: number;
  episodes: Episode[];
}
export interface Episode {
  title: string;
  date: string;
  duration: string;
  description: string;
  audioUrl: string;
  id: string;
}
