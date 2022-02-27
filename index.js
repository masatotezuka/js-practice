const testScope = (scope) => {
  if (scope === "var") {
    var functionScope = "どこからでも参照可能!";
  } else if (scope === "let") {
    let blockScope = "プロック内のみ参照可能";
    console.log(blockScope);
  }
  console.log(functionScope);
  // console.log(blockScope);
};

testScope("let");

//１ラインはreturnが省略可能
const user = { id: 1 };
const getUserName = (userId) => user[userId];

console.log(getUserName("id"));

//array配列
const array = [1, 2, 3, 4];
const arrayResults = array.map((value) => value * 3);
console.log(arrayResults);

const object = {
  hoge: { text: "hogehoge" },
  foo: { text: "foofoo" },
  fiz: { text: "fizfiz" },
};
console.log(object);

const objectToArray = Object.keys(object);
console.log(objectToArray);

//マップメソッドは配列を返す
const objectToArray2 = Object.keys(object).map((key) => {
  const value = object[key];
  value["id"] = key;
  console.log(value);
  return value;
});

console.log(objectToArray2);

const filterResult = objectToArray2.filter((object) => {
  return object.id === "hoge";
});
console.log(filterResult);

const index = objectToArray2.findIndex((object) => {
  return object.id === "hoge";
});
console.log(index, filterResult);

//正規表現のテスト
const torahack = "torahack";
const charahack = "charahach";
const regex = RegExp("tora*");

console.log(regex.test(charahack));
console.log(/chara*/.test(charahack));
