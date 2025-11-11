let formData = {
  email: "",
  message: "",
};

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || "";
    form.elements.message.value = formData.message || "";
  } catch (error) {
    console.error("Помилка зчитування з localStorage:", error);
  }
}
form.addEventListener("input", (event) => {
  if (event.target.name === "email" || event.target.name === "message") {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (email === "" || message === "") {
    alert("Fill please all fields");
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
});
