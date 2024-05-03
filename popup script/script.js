var popupbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popup-overlay")
var addbutton=document.getElementById("add-button")
addbutton.addEventListener("click",function(){
     popupoverlay.style.display="block"
     popupbox.style.display="block"
})


// select cancel button
var cancelbutton=document.getElementById("btn-box2")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})


// select container,btn-box1,book title,book author,book dsecription
var container=document.querySelector(".container")
var book=document.getElementById("btn-box1")
var addbook=document.getElementById("book-title")
var author=document.getElementById("book-author")
var description=document.getElementById("book-description")

book.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book")
    div.innerHTML=` <h2>${addbook.value}</h2>
    <h5>${author.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">delete</button>`
    container.append(div)
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
function deletebook(event) {
    event.target.parentElement.remove()
}