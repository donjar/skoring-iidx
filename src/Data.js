function textageLinkMaker(version, id, difficulty, level) {
  difficulty = difficulties[difficulty][0];
  level = level.toString(16).toUpperCase();
  return `http://textage.cc/score/${version}/${id}.html?1${difficulty}${level}00`;
}

export const dans = ['七級', '六級', '五級', '四級', '三級', '二級', '一級',
                     '初段', '二段', '三段', '四段', '五段', '六段', '七段',
                     '八段', '九段', '十段', '中伝', '皆伝'];

export const difficulties = ['Normal', 'Hyper', 'Another'];

export const contests = [
  {
    name: 'THE',
    songs: [
      {
        song: 'The Hope of Tomorrow',
        version: 11,
        textageID: 'thehope',
        charts: [
          {
            level: 5,
            notes: 536
          },
          {
            level: 8,
            notes: 874
          },
          {
            level: 10,
            notes: 992
          }
        ]
      },
      {
        song: 'THE BLACK KNIGHT',
        version: 18,
        textageID: 'tbknight',
        charts: [
          {
            level: 5,
            notes: 470
          },
          {
            level: 10,
            notes: 1067,
          },
          {
            level: 11,
            notes: 1488,
          }
        ]
      },
      {
        song: 'THE CANNONBALLER',
        version: 25,
        textageID: 'tcannonb',
        charts: [
          {
            level: 6,
            notes: 770
          },
          {
            level: 10,
            notes: 1236
          },
          {
            level: 11,
            notes: 1748
          }
        ]
      },
      {
        song: 'The Chase',
        version: 25,
        textageID: 'thechase',
        charts: [
          {
            level: 5,
            notes: 359
          },
          {
            level: 10,
            notes: 710
          },
          {
            level: 12,
            notes: 1148
          }
        ]
      },
    ],
  },
];

export const results = [
  [
    [

    ],
    [

    ],
    [
      {
        name: 'SHIYOU',
        dan: 18,
        results: [1234, 2345, 3456, 4567]
      },
      {
        name: 'DONJAR',
        dan: 18,
        results: [234, 345, 456, 567]
      },
    ]
  ],
];
