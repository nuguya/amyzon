const item1 = {
  img: "./images/minions1",
  link:
    "https://www.amazon.com/Minions-Sandra-Bullock/dp/B011802OI6/ref=sr_1_1?keywords=minions&qid=1568811053&s=gateway&sr=8-1"
};
const item2 = {
  img: "./images/minions2",
  link:
    "https://www.amazon.com/Minion-Rush-Despicable-Official-Game/dp/B00DJFIMW6/ref=sr_1_6?keywords=minions&qid=1568811072&s=gateway&sr=8-6"
};
const item3 = {
  img: "./images/minions3",
  link:
    "https://www.amazon.com/Despicable-Me-Presents-Minion-Madness/dp/B00DBT6M7C/ref=sr_1_3?keywords=minions&qid=1568811072&s=gateway&sr=8-3"
};
const item4 = {
  img: "./images/minions4",
  link:
    "https://www.amazon.com/Pajamas-Children-Christmas-Spider-Man-Sleepwear/dp/B07Q2LVFGF/ref=sr_1_12?keywords=minions&qid=1568811072&s=gateway&sr=8-12"
};

const title = "Amazon Originals, exclusively on Prime Video";
const section = `Prime Video is the only place where you can watch Amazon Original series like "The Marvelous Mrs. Maisel", "Tom Clancy's Jack Ryan", "Homecoming", and "The Man in the High Castle".`;
const navigation = `Explore Prime Video`;
const dataList = [item1, item2, item3, item4];
const textArea = { title: title, section: section, navigation: navigation };

module.exports = { Data: dataList, Text: textArea };
