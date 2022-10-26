let prev = document.getElementsByClassName("prev-operation")[0];
let curr = document.getElementsByClassName("curr-operation")[0];
let num = Array.from(document.querySelectorAll(".num"));

num.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        prev.innerText = "";
        curr.innerHTML = "";
        break;
      case "DEL":
        if (prev.innerText && !curr.innerText) {
          prev.innerText = prev.innerText.slice(0, -1);
        }
        if (curr.innerText) {
          curr.innerText = curr.innerText.slice(0, -1);
        }
        break;
      case "=":
        try {
          curr.innerText = eval(prev.innerText);
        } catch {
          prev.innerText = "Error!";
        }
        break;
      default:
        if (prev.innerText == "Error!") {
          prev.innerText = "";
          curr.innerText = "";
        }
        if (curr.innerText) {
          prev.innerHTML = curr.innerText;
          curr.innerText += e.target.innerText;
        }
        prev.innerText += e.target.innerText;
    }
  });
});
