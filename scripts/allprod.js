
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

document.getElementById("button1").addEventListener("click",allProd)
function allProd(){
    FetchApi();
}

    
    async function FetchApi() {
        try {
          //  const url = "http://localhost:7005/products";
            const url = "https://mamaearrth-backend.herokuapp.com/products";
            let res = await fetch(url);
            let data = await res.json();
     //       console.log(data)
            appendData(data)
        } catch (error) {
            console.log("error", error);
        }
    }
    FetchApi();

function appendData(data) {
    document.getElementById("index").innerHTML=null
    data.forEach(element => {
       // console.log(element);
        let div = document.createElement("div");
        let img = document.createElement("img")
        img.src = element.imgUrl
        img.setAttribute("id","hoverImg")
        img.addEventListener("click",function(){
            window.location.href="./detailProdPage.html"
        })
        let p = document.createElement("p");
        p.innerText = element.title;
        let price = document.createElement("p")
        price.innerHTML = `₹ ${element.price}`
        let button = document.createElement("button")
        button.addEventListener("click",function(){
            alert("Product Add To Cart")
           
        })
        button.innerHTML = "ADD TO CART"
        button.setAttribute("id","hoverImg")
        div.append(img, p, price, button);
        document.getElementById("index").append(div);
        // document.querySelector(".main").append(div);
    });
}
 /////////  Hair
 document.getElementById("button2").addEventListener("click",allHair)
function allHair(){
    allHairsProd();
}

async function allHairsProd() {
    try {
    //    const url = "http://localhost:7005/hairs";
        const url = "https://mamaearrth-backend.herokuapp.com/hairs";
        let res = await fetch(url);
        let data = await res.json();
   //     console.log(data)
        hairData(data)
    } catch (error) {
        console.log("error", error);
    }
}


function hairData(data) {
    document.getElementById("index").innerHTML=null
data.forEach(element => {
    //console.log(element);
   // document.getElementById("index")=[]
    let div = document.createElement("div");
    let img = document.createElement("img")
    img.src = element.imgUrl
    img.setAttribute("id","hoverImg")
    img.addEventListener("click",function(){
        window.location.href="./detailProdPage.html"
    })
    let p = document.createElement("p");
    p.innerText = element.title;
    let price = document.createElement("p")
    price.innerHTML = `₹ ${element.price}`
    let button = document.createElement("button")
    button.innerHTML = "ADD TO CART"
    button.addEventListener("click",function(){
        alert("Product Add To Cart")
       
    })
    button.setAttribute("id","hoverImg")
    div.append(img, p, price, button);
    document.getElementById("index").append(div);
    // document.querySelector(".main").append(div);
});
}

 /////////  baby
 document.getElementById("button5").addEventListener("click",allBaby)
function allBaby(){
    allBabyProd();
}

async function allBabyProd() {
    try {
       // const url = "http://localhost:7005/babys";
        const url = "https://mamaearrth-backend.herokuapp.com/babys";
        let res = await fetch(url);
        let data = await res.json();
     //   console.log(data)
        appendBaby(data)
    } catch (error) {
        console.log("error", error);
    }
}
function appendBaby(data) {
    document.getElementById("index").innerHTML=null
data.forEach(element => {
    //console.log(element);
   // document.getElementById("index")=[]
    let div = document.createElement("div");
    let img = document.createElement("img")
    img.src = element.imgUrl
    img.setAttribute("id","hoverImg")
    img.addEventListener("click",function(){
        window.location.href="./detailProdPage.html"
    })
    let p = document.createElement("p");
    p.innerText = element.title;
    let price = document.createElement("p")
    price.innerHTML = `₹ ${element.price}`
    let button = document.createElement("button")
    button.setAttribute("id","hoverImg")
    button.addEventListener("click",function(){
        alert("Product Add To Cart")
       
    })
    button.innerHTML = "ADD TO CART"
    div.append(img, p, price, button);
    document.getElementById("index").append(div);
    // document.querySelector(".main").append(div);
});
}


 /////////  face
 document.getElementById("button3").addEventListener("click",allFace)
function allFace(){
    allFaceProd();
}

async function allFaceProd() {
    try {
        const url = "https://mamaearrth-backend.herokuapp.com/face";
        let res = await fetch(url);
        let data = await res.json();
      //  console.log(data)
        appendFace(data)
    } catch (error) {
        console.log("error", error);
    }
}
function appendFace(data) {
    document.getElementById("index").innerHTML=null
data.forEach(element => {
    //console.log(element);
   // document.getElementById("index")=[]
    let div = document.createElement("div");
    let img = document.createElement("img")
    img.src = element.imgUrl
    img.setAttribute("id","hoverImg")
    img.addEventListener("click",function(){
        window.location.href="./detailProdPage.html"
    })
    let p = document.createElement("p");
    p.innerText = element.title;
    let price = document.createElement("p")
    price.innerHTML = `₹ ${element.price}`
    let button = document.createElement("button")
    button.setAttribute("id","hoverImg")
    button.innerHTML = "ADD TO CART"
    div.append(img, p, price, button);
    document.getElementById("index").append(div);
    // document.querySelector(".main").append(div);
});
}

//////////////////////
 /////////  body
 document.getElementById("button4").addEventListener("click",allBody)
 function allBody(){
     allBodyProd();
 }
 
 async function allBodyProd() {
     try {
       //  const url = "http://localhost:7005/body";
         const url = "https://mamaearrth-backend.herokuapp.com/body";
         let res = await fetch(url);
         let data = await res.json();
      //   console.log(data)
         appendBoby(data)
     } catch (error) {
         console.log("error", error);
     }
 }
 function appendBoby(data) {
     document.getElementById("index").innerHTML=null
 data.forEach(element => {
     //console.log(element);
    // document.getElementById("index")=[]
     let div = document.createElement("div");
     let img = document.createElement("img")
     img.src = element.imgUrl
     img.setAttribute("id","hoverImg")
     img.addEventListener("click",function(){
         window.location.href="./detailProdPage.html"
     })
     let p = document.createElement("p");
     p.innerText = element.title;
     let price = document.createElement("p")
     price.innerHTML = `₹ ${element.price}`
     let button = document.createElement("button")

     button.innerHTML = "ADD TO CART"
     button.setAttribute("id","hoverImg")
     div.append(img, p, price, button);
     document.getElementById("index").append(div);
     // document.querySelector(".main").append(div);
 });
 }


////////////////////////////////////sort

function dis(){
   
    var value=document.getElementById("change").value
    if(value=="ba"){
        var url1 = "https://mamaearrth-backend.herokuapp.com/ass/dis";
        assdata(url1)
    }
    if(value=="ab"){
        var url1 = "https://mamaearrth-backend.herokuapp.com/ass/ass";
        assdata(url1)
    }
}

async function assdata(url1) {
    try {
      
        
       
        let res = await fetch(url1);
        let data = await res.json();
       // console.log(data)
        disData(data)
    } catch (error) {
        console.log("error", error);
    }
}


function disData(data) {
    document.getElementById("index").innerHTML=null
data.forEach(element => {
  
    let div = document.createElement("div");
    let img = document.createElement("img")
    img.src = element.imgUrl
    img.setAttribute("id","hoverImg")
    img.addEventListener("click",function(){
        window.location.href="./detailProdPage.html"
    })
    let p = document.createElement("p");
    p.innerText = element.title;
    let price = document.createElement("p")
    price.innerHTML = `₹ ${element.price}`
    let button = document.createElement("button")
    button.setAttribute("id","hoverImg")
    button.addEventListener("click",function(){
        alert("Product Add To Cart")
       
    })
    button.innerHTML = "ADD TO CART"
    div.append(img, p, price, button);
    document.getElementById("index").append(div);
  
});
}