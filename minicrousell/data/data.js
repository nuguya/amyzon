item1 = {
  img: "./images/minions1",
  text: "안녕하세요"
};
item2 = {
  img: "./images/minions2",
  text: "반갑습니다"
};
item3 = {
  img: "./images/minions3",
  text: "잘가세요"
};
item4 = {
  img: "./images/minions4",
  text: "다시만나요"
};

const title = "Amazon Originals, exclusively on Prime Video";
const section = `Prime Video is the only place where you can watch Amazon Original series like "The Marvelous Mrs. Maisel", "Tom Clancy's Jack Ryan", "Homecoming", and "The Man in the High Castle".`;
const navigation = `Explore Prime Video`;
const dataList = [item1, item2, item3, item4];
const textArea = { title: title, section: section, navigation: navigation };

module.exports = { Data: dataList, Text: textArea };
