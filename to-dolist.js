function add(){
    var text=document.getElementById("text").value.trim()
    var list=document.getElementById("list")
    var result=document.createElement("li")
    result.innerHTML=text+ "<button class='deletebut' onclick='del(event)'>Delete</button>"
    list.append(result)
}
function del(event){
    event.target.parentElement.remove()

}