import { createContext } from 'react';
import { Podcast, CurrentPodcast, Episode } from './Podcast.model';

interface PodcastContextProps {
  podcasts: Podcast[];
  currentPodcast: CurrentPodcast;
  episode: Episode;
  episodes: Episode[];
  searchPodcast: (search: string) => Promise<void | null>;
  findPodcast: (id: string) => Promise<void | null>;
  findEpisode: (id: string) => void;
}

const PodcastContext = createContext<PodcastContextProps>({
  podcasts: [],
  currentPodcast: {
    podcast: {
      id: '',
      name: '',
      description: '',
      image: '',
      author: '',
    },
    total: 0,
    episodes: [],
  },
  episode: {
    title: '',
    date: '',
    duration: '',
    description: '',
    audioUrl: '',
    id: '',
  },
  episodes: [],
  findPodcast: async () => null,
  searchPodcast: async () => null,
  findEpisode: () => null,
});

export default PodcastContext;
