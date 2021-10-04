function validate() {
  const input = document.getElementById("email");
  const pattern = /[a-z]+\@[a-z]+\.[a-z]{2,3}/gm
      // /^\w+@\w+.\w+$/gm;
  input.addEventListener("change", () => {
    if (!pattern.test(input.value)) {
      input.classList.add("error");
    } else {
      input.removeAttribute("class");
    }
  });
}
