

var image = ["./indexSliding/Desktop.jpg",
    "./indexSliding/slide1.jpg",
    "./indexSliding/slide2.jpg",
    "./indexSliding/slide3.jpg",
    "./indexSliding/slide4.jpg",
];

var i = 0;
function slides() {
    document.getElementById("slider").src = image[i];
    if (i < image.length - 1) {
        i++;
    } else {
        i = 0;
    }
} setInterval(slides, 1600)
////////////////////
document.getElementById("btton").addEventListener("click",play)
function play(){
    window.location.href="allprod.html"
}
/////////////////
for (let i = 1; i <= 10; i++) {
    let url = `https://mamaearrth-backend.herokuapp.com/products?page=${i}&size=4`;
    async function FetchApi() {
        try {
            let res = await fetch(url);
            let data = await res.json();
           // console.log(data)
            appendData(data,i)
        } catch (error) {
            console.log("error", error);
        }
    }
    FetchApi();
}

let cart= JSON.parse(localStorage.getItem("idd"))||[]
let showDetail1=[]
function appendData(data,i) {
    data.forEach(element => {
    //   console.log(element);
    let id=document.createElement("p")
    id.innerHTML=element._id
  //  console.log(id)
        let div = document.createElement("div");
        let img = document.createElement("img")
        img.src = element.imgUrl
        img.setAttribute("id","hoverImg")
        img.addEventListener("click",function(){
            
            showDetail1.push(element)
            showDetail(showDetail1)
        })
        let p = document.createElement("p");
        p.innerText = element.title;

        let price = document.createElement("p")
        price.innerHTML = `₹ ${element.price}`
        let button = document.createElement("button")
        
        
        button.setAttribute("id","hoverImg")
        button.addEventListener("click",function(){
            alert("Product Add To Cart")
            cart.push(element)
            addtolocal(cart)
        })
        
        
        button.innerHTML = "ADD TO CART"
        div.append(img, p, price, button);
        document.getElementById(`products${i}`).append(div);
        
    });
}

function addtolocal(element){
 //  console.log(img,p,price)
localStorage.setItem("idd",JSON.stringify(element))
}

function  showDetail(element){
    localStorage.setItem("showInDetail",JSON.stringify(element)) ||[]
    window.location.href="./detailProdPage.html" 
}
