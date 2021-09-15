const RU = {
  title: "Поддержка пользователей",
  labels: ["Опишите вашу проблему", "Введите имя", "Введите номер телефона"],
  formTitle: "Форма обратной связи",
  name: "Иван",
  send: "Отправить",
  answerText: "Ваша заявка скоро будет рассмотрена",
};
const EN = {
  title: "User support",
  labels: ["Describe your problem", "Name", "Phone number"],
  formTitle: "Feedback form",
  name: "Ivan",
  send: "Send",
  answerText: "We'll phone you soon",
};

const ruLangBtn = document.querySelector(".choose-lang-ru");
const enLangBtn = document.querySelector(".choose-lang-en");
const langWrapper = document.querySelector(".lang-wrapper");
const labels = document.querySelectorAll("label");
const formText = document.querySelector(".form-title");
const inputName = document.querySelector(".input-name");
const sendBtn = document.querySelector(".btn-send");
const answer = document.querySelector(".answer-text");
const closeBtn = document.querySelector(".close-btn ");

ruLangBtn.addEventListener("click", () => {
  document.title = RU.title;
  labels.forEach((label, index) => (label.textContent = RU.labels[index]));
  formText.textContent = RU.formTitle;
  inputName.placeholder = RU.name;
  sendBtn.textContent = RU.send;
  answer.textContent = RU.answerText;
  langWrapper.classList.add("hide");
});

enLangBtn.addEventListener("click", () => {
  document.title = EN.title;
  labels.forEach((label, index) => (label.textContent = EN.labels[index]));
  formText.textContent = EN.formTitle;
  inputName.placeholder = EN.name;
  sendBtn.textContent = EN.send;
  answer.textContent = EN.answerText;

  langWrapper.classList.add("hide");
});

sendBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector(".answer-wrapper").classList.remove("hide");
});

closeBtn.addEventListener("click", () => {
  document.querySelector(".answer-wrapper").classList.add("hide");
});
