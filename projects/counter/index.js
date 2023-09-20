const btn = document.querySelectorAll(".butt");
const value = document.querySelector("#counter");
let count = 0;

btn.forEach((but) => {
    but.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if(count>0){
            value.style.color="green"
        }
        else if(count<0){
            value.style.color="red"
        }
        else if(count===0){
            value.style.color="yellow"
        }
        value.textContent = count;
    });
});
