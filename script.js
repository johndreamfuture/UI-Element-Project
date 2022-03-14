
//creat a div  with the class named container.
let container = document.createElement("div")
container.classList.add("container")
document.body.appendChild(container)
//creat a div for show bigger picture and details
let bigBox = document.createElement("div")
bigBox.classList.add("bigBox")
container.appendChild(bigBox)
//left box and big img
let bigBoxLeft = document.createElement("div")
bigBoxLeft.classList.add("bigBoxLeft")
let bigImg = document.createElement("img")
bigImg.classList.add("bigImg")
bigBoxLeft.appendChild(bigImg)

//right box for description
let bigBoxRight = document.createElement("div")
bigBoxRight.classList.add("bigBoxRight")
let description = document.createElement("p")
description.classList.add("description")
bigBoxRight.append(description)
bigBox.appendChild(bigBoxLeft)
bigBox.appendChild(bigBoxRight)

let cornerBox = document.createElement("div")
cornerBox.classList.add("cornerBox")
let close = document.createElement("h2")
close.classList.add("close")
close.innerText = "X"
cornerBox.appendChild(close)
bigBox.appendChild(cornerBox)

let slideLeftBox = document.createElement("div")
slideLeftBox.classList.add("slideLeftBox")
let moveLeft = document.createElement("h1")
moveLeft.classList.add("moveLeft")
moveLeft.innerText = "<"
slideLeftBox.appendChild(moveLeft)
bigBox.appendChild(slideLeftBox)

let slideRightBox = document.createElement("div")
slideRightBox.classList.add("slideRightBox")
let moveRight = document.createElement("h1")
moveRight.classList.add("moveRight")
moveRight.innerHTML = "&nbsp;&nbsp>"
slideRightBox.appendChild(moveRight)
bigBox.appendChild(slideRightBox)

// get a random picture for put in each box.
let url = "https://zoo-animal-api.herokuapp.com/animals/rand"

let smallBox = [] //["smallBox-1", "smallBox-2", "smallBox-3", "smallBox-4", "smallBox-5", "smallBox-6", "smallBox-7", "smallBox-8", "smallBox-9", "smallBox-10", "smallBox-11", "smallBox-12", "smallBox-13", "smallBox-14", "smallBox-15", "smallBox-16", "smallBox-17", "smallBox-18"]
let smallImg = []

for (let i = 0; i < 18; i++) {
  smallBox[i] = document.createElement("div")
  smallBox[i].classList.add("smallBox")
  smallImg[i] = document.createElement("img")
  smallImg[i].classList.add("smallImg")
  smallBox[i].appendChild(smallImg[i])
  container.appendChild(smallBox[i])

  fetch(url)
    .then(res => res.json())
    .then(data => {

      //console.log(data)
      smallImg[i].src = data.image_link

      smallImg[i].addEventListener("click", (e) => {
        e.preventDefault()
        bigImg.src = smallImg[i].src
        description.innerHTML = `<b>Welcome!Human friends. I would like to introduce myself to you!</b><br><br> 
        Active time:${data["active_time"]},<br>
        Animal type:${data["animal_type"]},<br>
        Diet:${data["diet"]},<br>
        Geo_range:${data["geo_range"]},<br>
        Habitat:${data["habitat"]},<br>
        Id:${data["id"]},<br>
        Latin name:${data["latin_name"]},<br>
        Lifespan:${data["lifespan"]},<br>
        Weight max:${data["weight_max"]},<br>
        Weight min:${data["weight_min"]}`
        bigBox.style.display = "block"



      })

    })
}

cornerBox.addEventListener("click", (e) => {
  e.preventDefault()
  bigBox.style.display = "none"
})

