window.KYNEX_CONFIG = {
  telegramHandle: "theegreatdavid",

  carouselDelay: 8000,

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
      name: "KyneX AI Engine — existing report",
      url: "https://showmytrades.com/account/kynex-ai-engine"
    }
  ]
};
