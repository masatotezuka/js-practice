let counter = 0;
const element = document.getElementById("count");
element.innerHTML = counter;

const headerModule = (() => {
  return {
    countUp: () => {
      counter++;
      console.log(`現在のカウントは${counter}`);
      element.innerHTML = counter;
    },
    selectMenu: () => {
      console.log("headerです！");
    },
  };
})();
