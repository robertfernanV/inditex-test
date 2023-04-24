import { Episode } from '../providers/Podcast.model';
import moment from 'moment';

export const episodeMapper = (data: any): Episode[] => {
  const episodes = data.results.reduce(
    (data: Episode[], episode: any, index: number) => {
      if (index == 0) {
        return data;
      }
      data.push({
        title: episode.trackName,
        date: moment(episode.releaseDate).utc().format('DD/MM/YYYY'),
        duration: moment.utc(Number(episode.trackTimeMillis)).format('mm:ss'),
        description: episode.description,
        audioUrl: episode.episodeUrl,
        id: episode.trackId.toString(),
      });
      return data;
    },
    []
  );
  return episodes;
};
