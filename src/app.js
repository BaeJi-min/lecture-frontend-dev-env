import "./scss/index.scss";
import form from "./form";
import result from "./result";

document.addEventListener("DOMContentLoaded", async () => {
  const formEl = document.createElement("div");
  console.log(formEl);
  formEl.innerHTML = form.render();
  document.body.appendChild(formEl);

  const resultEl = document.createElement("div");
  resultEl.innerHTML = await result.render();
  document.body.appendChild(resultEl);
});

if (module.hot) {
  console.log("핫모듈켜짐");
}
