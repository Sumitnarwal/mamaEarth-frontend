let cart=JSON.parse(localStorage.getItem("showInDetail"))


cartData(cart)
function cartData(data) {
  //  document.getElementById("photo").innerHTML=null
data.forEach(element => {
  let photo1= document.getElementById("photo")
  let image=document.createElement("img")

  image.src = element.imgUrl
  let p=document.createElement("p")
  let p1=document.createElement("p")
  p.innerText=element.title
  p1.innerText=element.title
  photo1.append(image)

  let price=document.createElement("p")
  price.innerText=`₹ ${element.price}.00`


  document.getElementById("detailN").append(p)
  document.getElementById("detailN1").append(p1)
 document.getElementById("inRS").append(price)
 document.getElementById("inRSs").append(price)
});
}

//////////////////////////////

let btnsub=document.getElementById("sub")
let btnadd=document.getElementById("add")
let input=document.getElementById("inp")

btnadd.addEventListener("click",()=>{
    input.value=parseInt(input.value)+1
})
btnsub.addEventListener("click",()=>{
    if(input.value>0)
    input.value=parseInt(input.value)-1
})
////////////////////////////////////////////
let button = document.getElementById("addTCrt")
       
        button.addEventListener("click",function(){
          
         alert("Product Add to Cart")
        })
       