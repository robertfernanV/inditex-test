import api from '../api/api.service';

const podcastData = [
  {
    id: '1535809341',
    name: 'The Joe Budden Podcast',
    description:
      'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
    image:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
    author: 'The Joe Budden Network',
  },
  {
    id: '1592180670',
    name: 'The Prince Mixtape',
    description:
      "On each episode of The Prince Mixtape, we’ll meet people who knew Prince, worked with him, or simply loved him from afar. Host Nichole Perkins will dig deep into key moments of his life, like when his sexually liberated lyrics gave birth to the Parental Advisory Sticker, when he fought to own his masters, and when he rocked that infamous, delicious booty cut-out pantsuit. The first season of this series explored the unforgettable life of Princess Diana. On season two, just like a treasured mixtape from your favorite crush, the series is a reflection of all the care and passion, the big moments and small, that made up a life. Prince's life.",
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/49/c2/11/49c211d2-629a-dab1-48e4-a522521f3ea1/mza_14590872972922522730.jpg/170x170bb.png',
    author: 'CNN',
  },
  {
    id: '1676314916',
    name: 'The Blog Era',
    description:
      "The dynamic story of how complete unknowns built a world free of music industry gatekeepers --the global superstars that it birthed, the kingmakers you've never heard of - and how big buildings and big money snatched back the power. \n\nAn ItsTheReal Production",
    image:
      'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/3b/a4/a8/3ba4a808-12d7-df9b-e039-d655a21b403b/mza_8540141418134179072.jpg/170x170bb.png',
    author: 'OTHERtone',
  },
  {
    id: '1452110637',
    name: "Dj Puffy's Podcast",
    description:
      'The new official Dj Puffy Podcast! Featuring new genre-specific & Multi-Genre mixes from the 2016 Red Bull World Champion Thre3Style DJ Puffy.',
    image:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts123/v4/a6/2f/2a/a62f2abc-cfe6-7860-5d1a-05d16289183a/mza_918354520644580382.jpg/170x170bb.png',
    author: 'Dj Puffy',
  },
];

const episodeData = [
  {
    title: 'A.I. Drake has put music in a tailspin',
    date: '21/04/2023',
    duration: '37:14',
    description:
      "We have an emergency podcast drop because the biggest and fastest moving story on the internet right now is about a song called “Heart On My Sleeve.” The track sounds like it was made by the producer Metro Boomin featuring Drake and The Weeknd. It might be one of the most consequential songs in music history because it was actually a fake, made with artificial intelligence. The blowback from this song has been enormous and a bit confusing. So host Charlie Harding went on The Vergecast podcast to break down how this song was likely made, and what it might mean for the music industry, the tech industry and all of our intellectual property. \n\n\nListen to the whole episode on The Vergecast\n\n\nRead Alex Cranz's story on Laser Bongs on The Verge\n\n\n\nLearn more about your ad choices. Visit podcastchoices.com/adchoices",
    audioUrl:
      'https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/524GE/traffic.megaphone.fm/VMP6807581673.mp3?updated=1682099892',
    id: '1000610099308',
  },
  {
    title: 'BTS goes solo together',
    date: '18/04/2023',
    duration: '49:00',
    description:
      "The South Korean idol group BTS is one of the biggest musical sensations in history. They're constantly breaking records and they have one of the most dedicated fan bases in the world known as Army. Their hit singles like “Boy With Love,” “Dynamite,” and “Butter” have been discussed on the show in the past for breaking through the US charts. But back in 2022, they decided to take a break from group activities and start releasing solo material because of their obligations to each fulfill mandatory military service in South Korea, precluding them from working together at the same time. Solo projects aren’t new for the group – BTS members have released mixtapes as far back as 2015 and countless solo singles – but this was the first time that BTS had ever announced a prolonged break. This moment, originally presented as a hiatus, has evolved into a whole new musical chapter for the group, with a seemingly endless array of new solo releases. Switched On Pop listens back to one track from each solo effort so far to introduce the casual listener to what is happening in this new era of BTS. Joining the show is Lenika Cruz, senior editor at The Atlantic, who literally wrote the book on BTS, simply called On BTS out on the Atlantic Editions imprint.\n\nSongs Discussed:\n\nj-hope, J. Cole - on the street\n\nJimin - Like Crazy\n\nRM, Youjeen - Wild Flower\n\nAgust D - People Pt.2\n\nAgust D - People\n\nJung Kook - Dreamers\n\nJIN - The Astronaut\n\nBTS - Singularity, Inner Child\n\nColdplay, BTS - My Universe\n\n\nLearn more about your ad choices. Visit podcastchoices.com/adchoices",
    audioUrl:
      'https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/524GE/traffic.megaphone.fm/VMP3036086010.mp3?updated=1681777869',
    id: '1000609451169',
  },
  {
    title: "This Generation's Caroline Polachek",
    date: '11/04/2023',
    duration: '43:52',
    description:
      'From the first seconds of her latest album Desire, I Want to Turn Into You, Caroline Polachek asserts that she is truly a once-in-a-generation artist. From her work in the indie band Chairlift to years of behind-the-scenes songwriting, she has worked hard over years to build a stellar music career – culminating in the pop opus Desire, already one of the best rated albums of 2023. On this episode of Switched on Pop, we look at Polachek’s career thus far, and talk to her about the intricacies of her latest.\n\nSongs Discussed\n\nCaroline Polachek - Desire, I Want To Turn Into You\n\nCaroline Polachek - So Hot You’re Hurting My Feelings\n\nChairlift - Bruises\n\nRamona Lisa - Dominic\n\nBeyoncé - No Angel\n\nDanny L Harle, Caroline Polachek - Ashes of Love\n\nCharli XCX, Caroline Polachek - Tears\n\nCEP - Lilian’s Pavilion\n\nCaroline Polachek - Pretty in Possible\n\nSuzanne Vega - Tom’s Diner DNA remix\n\nCaroline Polachek - Welcome to my Island\n\nCaroline Polachek - Bunny Is A Rider\n\nCaroline Polachek - Smoke\n\nCaroline Polachek - Crude Drawing of An Angel\n\nCaroline Polachek - Butterfly Net\n\nCaroline Polachek - Sunset \n\nCaroline Polachek - Fly To You\n\nCaroline Polachek - Hopedrunk Ever Asking\n\nCaroline Polachek - Billions\n\nCaroline Polachek - Blood And Butter\n\nCaroline Polachek - Butterfly Net\n\n\nLearn more about your ad choices. Visit podcastchoices.com/adchoices',
    audioUrl:
      'https://www.podtrac.com/pts/redirect.mp3/pdst.fm/e/chtbl.com/track/524GE/traffic.megaphone.fm/VMP1705580466.mp3?updated=1681179151',
    id: '1000608319666',
  },
];

const cases = [
  {
    name: 'getPodcasts',
    storageKey: 'podcasts',
    data: podcastData,
    service: api.getPodcasts,
  },
  {
    name: 'getEpisodes',
    storageKey: 'episodes',
    data: episodeData,
    service: api.getEpisodes,
  },
];

cases.forEach(({ name, storageKey, data, service }) => {
  describe(name, async () => {
    beforeEach(() => {
      localStorage.clear();
    });
    test('should return cached data if it exists and is valid', async () => {
      const cacheData = { data, date: new Date().toISOString() };
      localStorage.setItem(storageKey, JSON.stringify(cacheData));
      let result;
      if (name === 'getPodcasts') {
        result = await service();
      } else {
        result = await service('1535809341');
      }
      expect(result).toEqual(data);
    });

    it('should fetch data if cache does not exist or is invalid', async () => {
      let result;
      if (name === 'getPodcasts') {
        result = await service();
      } else {
        result = await service('1535809341');
      }
      expect(result).toEqual(data);
      expect(localStorage.getItem(storageKey)).not.toBeNull();
    });
  });
});

// describe('<AuthProvider />', () => {
//   test('provides expected AuthContext to child elements', () => {
//    [
//      {
//        scenario: 'regular user',
//        user: regularUser,
//        expectedName: 'Jhon Doe',
//        expectedAdmin: 'false',
//      },
//      {
//        scenario: 'admin user',
//        user: adminUser,
//        expectedName: 'Jane Doe',
//        expectedAdmin: 'true',
//      }
//    ].forEach(({ scenario, user, expectedName, expectedAdmin }) => {

//     test(scenario, () => {
//       /* mock the HTTP request */

//       const { getByTestId } = render(
//         <AuthProvider>
//           <TestingComponent />
//         </AuthProvider>,
//       );

//       const userName = getByTestId('user-name');
//       const isAdminValue = getByTestId('is-admin');
//       expect(userName.textContent).toEqual(expectedName);
//       expect(isAdminValue.textContent).toEqual(expectedAdmin);
//     });

//   });
