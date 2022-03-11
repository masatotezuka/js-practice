const uploadImageModule = (() => {
  console.log("aaa");
  const inputElement = document.getElementById("image");
  const previewElement = document.getElementById("image-preview");

  inputElement.addEventListener("change", (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.target.files[0];
    console.log(file);
    if (!file || !file.type.match(/image\/*/)) {
      window.alert("画像ファイルがありません。");
      return false;
    }

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.addEventListener("load", (event) => {
      previewElement.setAttribute("src", event.target.result);
      console.log(event.target);
    });
  });
})();
