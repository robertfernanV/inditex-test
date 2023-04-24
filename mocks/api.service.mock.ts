import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { fetch, Request, Response } from 'cross-fetch';
import podcastsMock from './podcasts.response.mock.js';
import episodesMock from './episodes.response.mock.js';

export const handlers = [
  rest.get(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(podcastsMock));
    }
  ),

  rest.get(
    'https://itunes.apple.com/lookup?id=1535809341&media=podcast&entity=podcastEpisode&limit=20',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(episodesMock));
    }
  ),
];

const server = setupServer(...handlers);

// Add `fetch` polyfill.
global.fetch = fetch;
global.Request = Request;
global.Response = Response;

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
