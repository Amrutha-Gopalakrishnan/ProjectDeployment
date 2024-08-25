var addpopupbutton=document.querySelector(".add-button")
var overlay=document.querySelector(".popup-overlay")
var extra=document.querySelector(".extra-popup")

addpopupbutton.addEventListener("click",function()
{
    overlay.style.display="block"
    extra.style.display="block"
})

var cancelpopup=document.getElementById("cancel")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
})

cancelpopup.addEventListener("click",function(){
    extra.style.display="none"
    overlay.style.display="none"
})

var books=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var title=document.getElementById("title")
var author=document.getElementById("author")
var description=document.getElementById("book-description")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
            <h5>${author.value}</h5>
            <p>${description.value}</p>
           <button onclick="deletebook(event)">Delete</button>`
    books.append(div)
    extra.style.display="none"
    overlay.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}
