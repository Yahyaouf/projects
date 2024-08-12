let cases = Array.from(document.querySelectorAll(".case"));
let pictures = ["flat_medal1.png", "flat_medal2.png", "flat_medal3.png",
    "flat_medal4.png", "flat_medal5.png", "flat_medal6.png",
    "flat_medal7.png", "flat_medal8.png", "flat_medal1.png", "flat_medal2.png", "flat_medal3.png",
    "flat_medal4.png", "flat_medal5.png", "flat_medal6.png",
    "flat_medal7.png", "flat_medal8.png"];
let images = Array.from(document.querySelectorAll("img"));
let im1, im2;
let case1, case2;
let win = 0;
let move = 0;
let moving;
let container = document.querySelector(".container");
let timer;
let time = 0;
let timing = document.querySelector(".time");
moving = document.querySelector(".move");
let k;
let j = 0;
let b, c;
let run = 0;
let restart = document.querySelector(".restart");
let rotate = () => {
    while (images[images.length - 1] !== undefined) {
        let a = Math.floor(Math.random() * pictures.length);
        if (pictures[a] !== undefined) {
            images[images.length - 1].src = pictures[a];
            images.pop();
            pictures.splice(a, 1);
        }
    }
    cases.forEach((elm, k) => {
        elm.addEventListener("click", () => {
            if(run===0){
                chrono();
                run=1;
            }
           
            if (j < 2) {
                elm.classList.add("flip");
                if (j === 0 && k !== c) {
                    im1 = elm.querySelector("img").src;
                    case1 = elm;
                    b = k;
                }
                else if (j === 1 && k !== b) {
                    im2 = elm.querySelector("img").src;
                    case2 = elm;
                    c = k;
                    move++;
                    moving.textContent = move;
                }
                else
                    j--;
                j++;
            if (j === 2) {
                if (im1 === im2) {
                    win++;
                    if (win === 8) {
                        document.querySelector(".container").classList.add("fin");
                        document.querySelector(".win").textContent = "you win";
                        document.querySelector(".win").classList.add("winner");
                        document.querySelector(".restart").classList.add("again");
                        document.querySelector(".restart").textContent="restart";
                        clearTimeout(timer);
                        restart.addEventListener("click",()=>{
                            container.classList.remove("fin");
                            document.querySelector(".win").textContent = "";
                            document.querySelector(".win").classList.remove("winner");
                            document.querySelector(".restart").classList.remove("again");
                            document.querySelector(".restart").textContent="";
                            move=0;
                            time = 0;
                            moving.textContent=0;
                            timing.textContent=0;
                            run=0;
                            win = 0;
                            cases.forEach(elm => {
                                elm.classList.remove("flip");
                                
                            });
                            rotate();
                        })
                    }
                    j = 0;
                }
                else {
                    setTimeout(() => {
                        case1.classList.remove("flip");
                        case2.classList.remove("flip");
                    }, 700);
                    j = 0;
                }
            }
        }})
    });
}
rotate();
let chrono = () => {
    time++;
    timing.textContent = time;
    timer = setTimeout(chrono,1000);
}






