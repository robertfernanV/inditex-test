import { ReactElement } from 'react';
import { useRoutes } from 'react-router-dom';

const AppRouter = (): ReactElement | null => {
  const router: ReactElement | null = useRoutes([
    {
      path: '/',
      element: <>Home</>,
    },
    {
      path: 'podcasts',
      children: [
        {
          path: ':podcastId',
          children: [
            {
              index: true,
              element: <>Podcast Id</>,
            },
            {
              path: 'episode',
              children: [
                {
                  path: ':episodeId',
                  element: <>Episode Id</>,
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return router;
};

export default AppRouter;
