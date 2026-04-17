//your JS code here. If required.
const un = document.querySelector("#username");
const pW = document.querySelector("#password");
const ck = document.querySelector("#checkbox");
const sB = document.querySelector("#submit");
const exB = document.querySelector("#existing");

exB.style.visibility = "hidden";

sB.addEventListener("click", () => {
	alert(`Logged in as ${un.value}`);
    this.event.preventDefault();
});

ck.addEventListener("click", () => {
    exB.style.visibility = "visible";
});

exB.addEventListener("click", () => {
    localStorage.setItem("user", JSON.stringify({usename: `${un.value}`, password: `${pW.value}`}));
    alert(`Logged in as ${un.value}`);
    this.event.preventDefault();
})


