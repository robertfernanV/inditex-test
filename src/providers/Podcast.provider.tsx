import { useContext, useEffect, useState } from 'react';
import PodcastContext from './Podcast.context';
import { CurrentPodcast, Episode, Podcast } from './Podcast.model';
import api from '../api/api.service';

export interface PodcastProviderProps {
  children: React.ReactNode;
}

const PodcastProvider = ({ children }: PodcastProviderProps) => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);
  const [currentPodcast, setCurrentPodcast] = useState<CurrentPodcast>({
    podcast: {
      id: '',
      name: '',
      description: '',
      image: '',
      author: '',
    },
    total: 0,
    episodes: [],
  });
  const [episode, setEpisode] = useState<Episode>({
    title: '',
    date: '',
    duration: '',
    description: '',
    audioUrl: '',
    id: '',
  });
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const podcasts = await api.getPodcasts();
  //     setPodcasts(podcasts);
  //   };
  //   getData();
  // }, []);

  const findPodcast = async (id: string): Promise<void> => {
    const podcast = podcasts.find((podcast) => podcast.id === id) as Podcast;
    const episodes = await api.getEpisodes(podcast.id);
    setEpisodes(episodes);
    setCurrentPodcast({
      podcast,
      total: episodes.length,
      episodes,
    });
  };

  const searchPodcast = async (search: string): Promise<void> => {
    const param = search.trim();
    let data = await api.getPodcasts();

    if (param.length > 0) {
      data = data.filter(
        (podcast) =>
          podcast.name.toLowerCase().includes(param.toLowerCase()) ||
          podcast.author.toLowerCase().includes(param.toLowerCase())
      ) as Podcast[];
    }
    setPodcasts(data);
    return;
  };

  const findEpisode = (id: string): void => {
    return setEpisode(episodes.find((episode) => episode.id === id) as Episode);
  };

  return (
    <PodcastContext.Provider
      value={{
        podcasts,
        currentPodcast,
        episode,
        episodes,
        findPodcast,
        searchPodcast,
        findEpisode,
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};

const usePodcast = () => useContext(PodcastContext);
export { PodcastProvider, usePodcast };
