let count = 0;

const counterEl = document.getElementById("counter");
const btn = document.getElementById("incrementBtn");

btn.addEventListener("click", () => {
    alert(count);

    count++;

    counterEl.innerText = count;
});
