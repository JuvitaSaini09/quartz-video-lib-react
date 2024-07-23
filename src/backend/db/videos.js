import { v4 as uuid } from "uuid";
import {
  logo1,
  logo2,
  gardenOfWords,
  campfireCooking,
  yourName,
  valleyOfLanterns,
  codeBreaker,
  aSilentVoice,
  ThePlacePromised,
  OriginSpiritsOfThePast,
  PsychicSchoolWars,
  helloWorld,
  orange,
  fiveCentimeters,
  tmakoLoveStroy,
  aWhiskerWay,
  Twilight,
} from "../../images/allImages";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const videos = [
  {
    _id: uuid(),
    categoryName: "Drama",
    creator: " Cix Wave Films",
    videoUrl: "https://www.youtube.com/watch?v=64cu3yhoOQo",
    thumbnailUrl: gardenOfWords,
    title: "The Garden of Words",

    logoUrl: logo2,
    videoId: "64cu3yhoOQo",
    description:
      "On a rainy morning in Tokyo, Takao Akizuki, an aspiring shoemaker, decides to skip class to sketch designs in a beautiful garden. This is where he meets Yukari Yukino, a beautiful yet mysterious woman, for the very first time. Offering to make her new shoes, Takao continues to meet with Yukari throughout the rainy season, and without even realizing it, the two are able to alleviate the worries hidden in their hearts just by being with each other. However, their personal struggles have not disappeared completely, and as the end of the rainy season approaches, their relationship will be put to the test.",
  },

  {
    _id: uuid(),
    categoryName: "Adventure",
    creator: "MAPPA",
    videoUrl: "https://www.youtube.com/watch?v=Y2kGBN52p58",
    thumbnailUrl: campfireCooking,
    title: "Campfire Cooking in Another World with My Absurd Skill",
    logoUrl: logo1,
    videoId: "Y2kGBN52p58",
    description:
      "Salaryman Tsuyoshi Mukouda is accidentally summoned as a hero to the Kingdom of Reijseger in another world to help defend against their enemies. Wary of the royal family's true intentions, Mukouda is able to talk his way out of the situation due to his non-combat skill,Online Supermarket, which is deemed useless. However, this power proves to be anything but useless. With this ability, Mukouda is able to cheaply purchase food products and utensils from Japan—most of which are considered luxuries in this world. As Mukouda cooks up a storm using his ability, he catches the eye of the fearsome mythical wolf Fenrir. The legendary beast swiftly negotiates a contract to become Mukouda's familiar, unable to resist the delicious dishes. With Fenrir by his side, Mukouda travels the world, earning his keep as an adventurer and merchant all the while enjoying delectable meals.",
  },

  {
    _id: uuid(),
    categoryName: "Drama",
    creator: "Anime Adventures",
    videoUrl: "https://www.youtube.com/watch?v=fdk_OMwgjpA",
    thumbnailUrl: yourName,
    title: "Your Name",
    logoUrl: logo2,
    videoId: "fdk_OMwgjpA",
    description:
      "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.",
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
    creator: "Family Central",
    videoUrl: "https://www.youtube.com/watch?v=UTAvGzCK6ok",
    thumbnailUrl: valleyOfLanterns,
    logoUrl: logo2,
    title: "Valley of the Lanterns",
    videoId: "UTAvGzCK6ok",
    description:
      "An elderly grandmother has a big decision to make when it emerges that the hold she has on her past puts her family's future in jeopardy.",
  },
  {
    _id: uuid(),
    categoryName: "Adventure",
    creator: " Kinema Citrus",
    videoUrl: "https://www.youtube.com/watch?v=xYXx-rR2s-w",
    thumbnailUrl: codeBreaker,
    title: "Code:Breaker",
    logoUrl: logo2,
    videoId: "xYXx-rR2s-w",
    description:
      "Although cheerful and delicate, Sakura Sakurakouji is a skilled martial artist with a sense of fairness that never falters—no matter the situation. Upon witnessing people burning in blue flames while on a bus ride home, she calls the police to bring their murderer to justice only to find that no evidence remains. However, all her doubts about what she saw vanish when the next day, the new transfer student Rei Oogami joins her class; he is the very boy she watched commit murder in cold blood. Rei is kind, sweet, and quickly becomes popular, contradicting Sakura's accusations. Soon enough, she learns his true nature: a Code Breaker, or one who does not exist. To Sakura's shock, Rei—armed with mysterious powers—seeks to exact justice according to the principle of an eye for an eye. Determined to bring Rei to the right path, Sakura keeps close to him in the hopes of redeeming him from his ways before others are hurt.",
  },
  {
    _id: uuid(),
    categoryName: "Drama",
    creator: "Kyoto Animation",
    videoUrl: "https://www.youtube.com/watch?v=mXYvNHlVSsQ",
    thumbnailUrl: aSilentVoice,
    title: "A Silent Voice",
    logoUrl: logo1,
    videoId: "mXYvNHlVSsQ",
    description:
      "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye. Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends. Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past",
  },

  {
    _id: uuid(),
    categoryName: "Sci-Fi",
    creator: "CoMix Wave Films",
    videoUrl: "https://www.youtube.com/watch?v=quCsu8KS_bA",
    thumbnailUrl: ThePlacePromised,
    title: "The Place Promised in Our Early Days",
    logoUrl: logo2,
    videoId: "quCsu8KS_bA",
    description:
      "Hiroki Fujisawa and Takuya Shirakawa harbor admiration for two things in their life: their classmate Sayuri Sawatari and the vast Ezo Tower that stands boundlessly across the Tsugaru Strait. Fascinated by the limitless structure beyond their reach, Hiroki and Takuya begin constructing an aeroplane from a fallen drone they discovered—naming it the Bella Ciela—to fulfill their dream of one day reaching the sky-scraping top of the tower. Later joined by the girl they love, Hiroki and Takuya promise Sayuri to fly with her to the seemingly otherworldly top together. However, Japan has suffered a North-South partitioning that has fueled conflict near the base of the tower, which marks the border between the America-controlled Southern islands and the Northern lands occupied by the Soviet Union.",
  },

  {
    _id: uuid(),
    categoryName: "Adventure",
    creator: "Gonzo",
    videoUrl: "https://www.youtube.com/watch?v=LAy0wo2BEAo",
    thumbnailUrl: OriginSpiritsOfThePast,
    title: "Origin: Spirits of the Past",

    logoUrl: logo2,
    videoId: "LAy0wo2BEAo",
    description:
      "Three hundred years ago, a genetic experiment gone wrong caused the mutation of all forests on Earth. Armed with consciousness, the vegetation sought to destroy all of humankind, and the war that ensued turned the planet into a hellish dystopia. In the present day, Agito, a young boy, lives with his father in Neutral City—a village maintaining an uneasy truce with the neighboring forest. One day, Agito, on his way to collect water, becomes separated from his friend and stumbles upon a relic of the past: a girl sleeping in a mysterious machine. Agito awakens the girl, Toola Cm Sacl, and introduces her to the village. But outside forces have ulterior motives for the girl, who holds the key to restore the Earth. Misguided by Shunack, a soldier from the old world hellbent on destroying the forest, Toola follows him despite Agito's warning. Determined to save Toola and unify humankind with the forest, Agito borrows the power of the forest and pursues her.",
  },

  {
    _id: uuid(),
    categoryName: "Sci-Fi",
    creator: "Sunrise",
    videoUrl: "https://www.youtube.com/watch?v=4bZk1tjz95M",
    thumbnailUrl: PsychicSchoolWars,
    title: "Psychic School Wars",
    logoUrl: logo1,
    videoId: "4bZk1tjz95M",
    description:
      "Very little changes in Kenji Seki's daily routine. Every morning, he takes his dog to the beach in the hopes of catching a glimpse of his classmate, Kahori Harukawa, while she surfs. Afterward, he meets up with his neighbor and childhood friend, Natsuki Suzuura, and they walk to school. In essence, he lives an idyllic life where the only thing he has to worry about is how to finally confess his feelings to Kahori. The routineness of Kenji's life is interrupted by the arrival of a mysterious transfer student. Ryouichi Kyougoku, who claims to be a psychic, has both the charisma and popularity that Kenji has always dreamed of. Before long, Kahori begins to show feelings for Ryouichi, and Natsuki becomes distant whenever Kenji tries to talk about his feelings. As Kenji's life is thrown into disarray, how will Ryouichi's arrival impact those around him? Nerawareta Gakuen follows these formerly typical high schoolers as they become involved with the supernatural",
  },
  {
    _id: uuid(),
    categoryName: "Sci-Fi",
    creator: "CK Anime",
    videoUrl: "https://www.youtube.com/watch?v=EgrehrOCpcA",
    thumbnailUrl: helloWorld,
    title: "Hello World New Sci-Fi Anime",
    logoUrl: logo1,
    videoId: "EgrehrOCpcA",
    description:
      "The year is 2027, and the city of Kyoto has undergone tremendous technological advancement. Within the city lives Naomi Katagaki, a socially awkward and introverted boy with a love for books, and Ruri Ichigyou, a girl with a cold personality who is often blunt with people, but shares his love for reading. Despite having similar interests, Naomi is afraid to approach Ruri due to her unfriendly nature. One day, as Naomi goes out for a walk, a crimson aurora pierces through the sky for a brief moment before vanishing. Shortly after, he sees a three-legged crow and a mysterious hooded man who reveals himself to be Naomi from 10 years in the future, explaining that he has come to change an imminent tragic event that happens to Ruri shortly after they start dating. Initially taking his words with a grain of salt, present-day Naomi follows his future self's instructions and starts getting closer to Ruri, determined to save her. Hello World focuses on the present Naomi alongside himself from 10 years into the future. With the help of his future self, Naomi begins his preparations to save Ruri. Will he be able to change the future?",
  },

  {
    _id: uuid(),
    categoryName: "Sci-Fi",
    creator: "Manga",
    videoUrl: "https://www.youtube.com/watch?v=GHiosL7ZLz8",
    thumbnailUrl: orange,
    title: "Orange",
    logoUrl: logo2,
    videoId: "GHiosL7ZLz8",
    description:
      "Naho Takamiya's first day of her sophomore year of high school is off to an uneasy start. After waking up late, she receives a strange letter addressed to her. However, the letter is from herself—10 years in the future! At first, Naho is skeptical of the note; yet, after witnessing several events described to take place, she realizes the letter really is from her 26-year-old self.",
  },

  {
    _id: uuid(),
    categoryName: "Drama",
    creator: "CoMix Wave Films",
    videoUrl: "https://www.youtube.com/watch?v=r-hFIoLhCaE",
    thumbnailUrl: fiveCentimeters,
    title: "5 CENTIMETRES PER SECOND IN ENGLISH DUB",
    logoUrl: logo2,
    videoId: "r-hFIoLhCaE",
    description:
      "What happens when two people love each other but just aren't meant to be together? Takaki Toono and Akari Shinohara are childhood friends, but circumstances beyond their control tear them apart. They promise to stay in contact, and although the progression of time widens the distance between them, the chain of memories remains ever-present.",
  },
  {
    _id: uuid(),
    categoryName: "Drama",
    creator: "Kyoto Animation",
    videoUrl: "https://www.youtube.com/watch?v=y5lPfXKDym0",
    thumbnailUrl: tmakoLoveStroy,
    title: "Tamako Love Story",
    logoUrl: logo2,
    videoId: "y5lPfXKDym0",
    description:
      "As she edges toward the end of her high school life, the energetic but generally clueless third-year Tamako Kitashirakawa has only one major concern: pulling off a stunning baton performance at the Usagiyama Marching Festival. But all too soon, she is confronted by the reality that all her friends have big plans for their futures; she, on the other hand, just operates with the moderate goal of continuing to work at her family's restaurant. Under the same brilliant sky, Mochizou Ooji intends to study at a university in Tokyo, leaving behind his family, friends, and most importantly, his first and only love Tamako. Unfortunately, the shy admirer cannot bring himself to declare his love, and Tamako is yet unaware that she is the source of such anguish. With time quickly running out, Mochizou must confess his feelings to Tamako soon, or his dream of romance will never be fulfilled. ",
  },
  {
    _id: uuid(),
    categoryName: "Drama",
    creator: "Studio Colorido",
    videoUrl: "https://www.youtube.com/watch?v=y1DFqAQHUcE",
    thumbnailUrl: aWhiskerWay,
    title: "A Whisker Away",
    logoUrl: logo2,
    videoId: "y1DFqAQHUcE",
    description:
      "Miyo Sasaki is an energetic high school girl who comes from a broken family consisting of her unconfident father and an overly invested stepmother, whose attempts at connecting with Miyo come across as bothersome. Seeing Kento Hinode as a refuge from all her personal issues, she can't help herself from forcing her unorthodox demonstrations of love onto her crush While Miyo is unable to get Kento's attention as herself, she manages to succeed by interacting with him in the form of a white cat, affectionately nicknamed Tarou by Kento. But Miyo soon realizes that she can't help Kento with the various problems she overhears in her cat form and is now caught between two tough choices. Will she continue her relationship with him as a cat, or will she reveal her identity and risk what they have, in order to help him as her human self?",
  },
  {
    _id: uuid(),
    categoryName: "Drama",
    creator: "Twilight Studio",
    videoUrl: "https://www.youtube.com/watch?v=trExdyeD01E",
    thumbnailUrl: Twilight,
    title: "Twilight",
    logoUrl: logo2,
    videoId: "trExdyeD01E",
    description:
      "Hakubo revolves around the daily life of Sachi Koyama, a high school violinist with promising talent. Although Sachi is content with her school life and retains friends within the music club, her favorite pastime is appreciating the scenery around her neighborhood in Iwaki, Fukushima while walking to her bus stop alone.However, during one of Sachi's after-school walks, she has an unexpected meeting with Yuusuke Kijinami, a boy whom she often notices on her bus ride home. After offering to help Kijinami find a perfect view of the evening landscape—the subject of his next painting for his art club's exhibition—the two forge a bond over their mutual admiration of the beautiful scenery bathed in sunset. This chance encounter brings together these two souls who yearn to cherish the present, knowing full well how easily it can all slip away.",
  },
];
