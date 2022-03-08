const getId = (id) => {
  const element = document.getElementById(id);
  console.log(id);
};

const getClasses = (className) => {
  const classes = document.getElementsByClassName(className);
  console.log(classes);
};

const submitForm = () => {
  // event.preventDefault();
  const form = document.forms.demoForm;
  const title = form.title.value;
  const languages = [];
  for (const language of form.languages) {
    if (language.checked) {
      languages.push(language.value);
    }
  }
  console.log(title);
  console.log(languages);
};
