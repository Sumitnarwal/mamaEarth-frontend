sumit()
function sumit(){
    document.getElementById("upishow").innerHTML=null
let div11= document.getElementById("upishow")
let image=document.createElement("img")

image.src="./indexSliding/upi.png"


div11.append(image)
}
function sumit1(){
    document.getElementById("upishow").innerHTML=null
    let div11= document.getElementById("upishow")
    let image=document.createElement("img")

 
image.src="./indexSliding/crd.png"

div11.append(image)
}
function sumit2(){
    document.getElementById("upishow").innerHTML=null
let div11= document.getElementById("upishow")
let image=document.createElement("img")
image.setAttribute("id","btts2")

image.src="./indexSliding/itenet.png"

div11.append(image)
}
function sumit3(){
    document.getElementById("upishow").innerHTML=null
let div11= document.getElementById("upishow")
let image=document.createElement("img")


image.src="./indexSliding/wall.png"

div11.append(image)
}

function sumit4(){
    document.getElementById("upishow").innerHTML=null
    let div11= document.getElementById("upishow")
    div11.setAttribute("id","div11a")
    let upperdiv=document.createElement("div")
let div1=document.createElement("p")

  div1.innerText="Cash On Delivery"
  div1.setAttribute("id","div11b")
  let div2=document.createElement("div")
  div2.innerText="Do you know you get an Extra 5% Off when you pay online? For everyone’s safety, we advise paying online to limit contact and help stop the spread of the virus"
  div2.setAttribute("id","div2a")
  const bbtn=document.createElement("button")
  bbtn.innerText="PLACE ORDER"
  bbtn.setAttribute("id","bbtn")
  bbtn.addEventListener("click",function(){
      
      alert("Order Placed Sucessfully")
      setTimeout(function(){
          document.location.href="./index.html"
      })
  },100)
  let image=document.createElement("img")
    image.setAttribute("id","img11")

image.src="./indexSliding/crd1.png"
  upperdiv.append(div1,div2,bbtn,image)
   div11.append(upperdiv)
}
let cart=JSON.parse(localStorage.getItem("idd"))||[]
///////////////
a(cart)
function a(cart){
const price=document.createElement("p")
price.innerHTML=`Order Summery (${cart.length} Items)`
// console.log(price.innerHTML)
document.getElementById("cartnoD").append(price)
total_price(cart)
}

///////////////
cartData(cart)
function cartData(data) {
document.getElementById("prod").innerHTML=null
data.forEach(element => {
//console.log(element);
// document.getElementById("index")=[]

let divmain = document.createElement("div");
divmain.setAttribute("id","showimg")
let div = document.createElement("div");
div.setAttribute("id","imgdivk")
let div1 = document.createElement("div");
div1.setAttribute("id","div1price")
let img = document.createElement("img")
img.src = element.imgUrl
 img.setAttribute("id","imgk")
let p = document.createElement("p");
p.innerText = element.title;
p.setAttribute("class","title")
let price = document.createElement("p")
price.innerHTML = `₹ ${element.price}.00`
price.setAttribute("class","price")


///////////////////////////

var btt = document.createElement("button")
btt.innerHTML ='<i class="fas fa-trash-alt fa-lg"></i>'+ "     "+ "   REMOVE"
btt.setAttribute("id","btrem")

let divPBTT=document.createElement("div")
divPBTT.setAttribute("class","price_Rem")
btt.addEventListener("click",function(element){
// remove(element)
data.splice(element, 1)
localStorage.setItem("idd", JSON.stringify(data))
location.reload()
console.log("id")
})

////////////////////////////////////
div.append(img);
divPBTT.append(price,btt)
div1.append( p, divPBTT);
divmain.append(div,div1)
document.getElementById("prod").append(divmain);
// document.querySelector(".main").append(div);
});
}
function remove(element) {
data.splice(element, 1)
localStorage.setItem("idd", JSON.stringify(data))
location.reload()
}

////////////////price calculation

function total_price(){
let Tprice=0;
for(let i=0;i<cart.length;i++){
    Tprice+=cart[i].price
}
//console.log(Tprice)
let Tp=document.getElementById("T_price")
let pp=document.createElement("p")
 pp.innerHTML=`(₹${Tprice}.00)`

 let T1=document.getElementById("Discount")
let pp1=document.createElement("p")
 pp1.innerHTML= "₹ 230"

 
 
 let T5=document.getElementById("totalP")
 let pp5=document.createElement("p")
 pp5.innerHTML= `(₹${Tprice-230}.00)`
 
 let T3=document.getElementById("T_priceDisk")
 let pp3=document.createElement("p")
 pp3.innerHTML= `(₹${(Tprice-230)-(Tprice-230)/10})`
 
 let T4=document.getElementById("Online")
 let pp4=document.createElement("p")
 pp4.innerHTML= `(₹${(Tprice-230)/10})`
 
 let T2=document.getElementById("T_priceDis")
var pp2=document.createElement("p")
 pp2.innerHTML= `(₹${(Tprice-230)-(Tprice-230)/10})`
 
  Tp.append(pp)
  T1.append(pp1)
  T2.append(pp2)
  T3.append(pp3)
  T4.append(pp4)
  T5.append(pp5)


}



