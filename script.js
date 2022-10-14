 const benefits = document.querySelectorAll(".benefits .benefits_list .benefit_item")
 
 console.log(benefits)

 benefits.forEach(function (item) {
    item.addEventListener("click", function (event) {
        const targetElem = evennt.target;
        
        const elemTitle = targetElem.querySelector(".benefit_title");
        console.log()
        console.log(targetElem.classList);
        if (targetElem.classList.contains("is-active")) {
            targetElem.classList.remove("is-active");
            elemTitle.innerHTML = elemTitle.innerHTML.replace("Active", "");
        } else {
            targetElem.classList.add("is-active");
            elemTitle.innerHTML += "Active";
        }
    })
 })

let rect = section.getBoundingClientRect();
console.log.rect;
let x = rect.left;
let y = rect.top;
let w = rect.widht;
let h = rect.height;
console.log(x,y,w,h)

let section = document.querySelector("benefits");

window.addEventListener("scroll", function (e) {
    const target = e.target;

    console.log(y)
    console.log(document.documentElement.scrollTop);
    if (y= document.documentElement.scrollTop + this.document.documentElement.clientHeight / 2) {
        section.classList.add("visable");}
        
    if (h + y < document.documentElement.scrollTop + 300) {
        section.classList.remove("visable");
    }
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });