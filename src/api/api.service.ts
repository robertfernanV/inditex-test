import { Episode, Podcast } from '../providers/Podcast.model';
import { episodeMapper } from '../utils/epidose.mapper';
import { podcastMapper } from '../utils/podcast.mapper';

interface CacheData<T> {
  data: T;
  date: string;
}

const getData = async <T>(
  storageKey: string,
  apiUrl: string,
  mapper: (data: any) => T[]
): Promise<T[]> => {
  const cache = getCache<T>(storageKey);
  if (cache && isValidCache(cache.date)) {
    return cache.data as T[];
  } else {
    const data = await fetchData(apiUrl, mapper);
    setCache(storageKey, data);
    return data;
  }
};

const getCache = <T>(storageKey: string): CacheData<T> | null => {
  const cache = localStorage.getItem(storageKey);
  if (cache) {
    return JSON.parse(cache) as CacheData<T>;
  }
  return null;
};

const setCache = <T>(storageKey: string, data: T[]): void => {
  const date = new Date();
  const cacheData = {
    data,
    date: date.toISOString(),
  };
  localStorage.setItem(storageKey, JSON.stringify(cacheData));
};

const isValidCache = (cacheDate: string): boolean => {
  const cache = new Date(cacheDate);
  const now = new Date();
  return cache.getTime() > now.getTime();
};

const fetchData = async <T>(
  apiUrl: string,
  mapper: (data: any) => T[]
): Promise<T[]> => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return mapper(data);
};

export default {
  getPodcasts: async (): Promise<Podcast[]> => {
    const apiUrl = `${
      import.meta.env.VITE_API_URL
    }/us/rss/toppodcasts/limit=100/genre=1310/json`;
    return getData<Podcast>('podcasts', apiUrl, podcastMapper);
  },

  getEpisodes: async (idPodcast: string): Promise<Episode[]> => {
    const apiUrl = `${
      import.meta.env.VITE_API_URL
    }/lookup?id=${idPodcast}&media=podcast&entity=podcastEpisode&limit=20`;
    return getData<Episode>('episodes', apiUrl, episodeMapper);
  },
};
