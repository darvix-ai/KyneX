window.KYNEX_CONFIG = {
  // Telegram handle without @.
  telegramHandle: "theegreatdavid",

  // Automatically advance the home-page carousel every 8 seconds.
  carouselDelay: 8000,

  /*
   * Generates entries for all 67 uploaded screenshots.
   *
   * Photos 1–37 end with: 16-46-06.jpg
   * Photos 38–67 end with: 16-46-07.jpg
   *
   * The home-page carousel uses the first 20 entries.
   * The results-page gallery uses all 67 entries.
   */
  testimonials: Array.from({ length: 67 }, function (_, index) {
    var photoNumber = index + 1;

    var timestamp =
      photoNumber <= 37
        ? "2026-10-19_16-46-06"
        : "2026-10-19_16-46-07";

    return {
      src:
        "assets/testimonials/photo_" +
        photoNumber +
        "_" +
        timestamp +
        ".jpg",

      alt: "Client experience screenshot " + photoNumber
    };
  }),

  // Public account reports.
  reports: [
    {
      name: "KyneX Scalper",
      url: "https://showmytrades.com/account/kynex-scalper"
    },
    {
      name: "KyneX Scalper — connected account 2",
      url: "https://showmytrades.com/account/kynex-scalper-2"
    },
    {
      name: "KyneX Scalper — connected account 3",
      url: "https://showmytrades.com/account/kynex-scalper-3"
    },
    {
      name: "KyneX Scalper — connected account 4",
      url: "https://showmytrades.com/account/kynex-scalper-4"
    },
    {
      name: "KyneX Scalper — connected account 5",
      url: "https://showmytrades.com/account/kynex-scalper-5"
    },
    {
      name: "KyneX AI Engine — existing report",
      url: "https://showmytrades.com/account/kynex-ai-engine"
    }
  ]
};
