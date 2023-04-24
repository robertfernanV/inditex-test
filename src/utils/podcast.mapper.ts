import { Podcast } from '../providers/Podcast.model';

export const podcastMapper = (data: any): Podcast[] => {
  const podcasts = data.feed.entry.map((podcast: any): Podcast => {
    return {
      id: podcast.id.attributes['im:id'],
      name: podcast['im:name'].label,
      description: podcast.summary.label,
      image: podcast['im:image'][2].label,
      author: podcast['im:artist'].label,
    };
  });
  return podcasts;
};
