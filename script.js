const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
let fixBox = document.querySelector(".fixedBox")
document.querySelector(".imgsBox").addEventListener("mouseenter",()=> {
    fixBox.style.display = "block"
    console.log(fixBox)
})
document.querySelector(".imgsBox").addEventListener("mouseleave",()=> {
    fixBox.style.display = "none"
    console.log(fixBox)
})

let boxArr = document.querySelectorAll(".box")
boxArr.forEach((e)=> {
    e.addEventListener("mouseenter",()=> {
        let imgUrl = e.getAttribute("img-url")
        fixBox.style.backgroundImage = `url(${imgUrl})`
    })
})


let h1Arr = document.querySelectorAll(".sliderH1")
h1Arr.forEach((e)=> {
    e.addEventListener("click",()=> {
        let imgUrl = e.getAttribute("img-url")
       let sliderRight= document.querySelector(".sliderRight")
       sliderRight.style.backgroundImage = `url(${imgUrl})`
       if(e.classList.contains("1st")) {
        document.querySelector(".sliderP").innerText = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."

       }
       else if (e.classList.contains("2nd")) {
        document.querySelector(".sliderP").innerText = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
       }
       else if(e.classList.contains("3rd")){
        document.querySelector(".sliderP").innerText = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
       }
    })
})

// navbar toggle btn code 

const toggleBtn = ()=> {
    let toggleBtn = document.querySelector(".menuBox")
let menuBar = document.querySelector(".menuItems")
let m = 0;
toggleBtn.addEventListener("click", ()=> {
    if(m==0) {
        menuBar.style.display = "flex"
        m=1
    }
    else {
        menuBar.style.display = "none"
        m=0
    }
})
}
toggleBtn()



// loading animation 

const loadingAnimation = ()=> {
    let loader = document.querySelector(".loader")
    setTimeout(()=> {
        loader.style.top = "-110%"
    },4000)
}
loadingAnimation()