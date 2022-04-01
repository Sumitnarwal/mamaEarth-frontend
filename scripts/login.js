
document.querySelector("form").addEventListener("submit", login);


async function login(event) {
        event.preventDefault();
        try {
            var registered_data = {
                phone : document.querySelector("#phone").value,
                name: document.querySelector("#name").value,
                LastName: document.querySelector("#lname").value,
                email: document.querySelector("#email").value,
               

            }

        } catch (error) {
            console.log(error);
            alert("Registeration Failed")
        }
        registered_data = JSON.stringify(registered_data);
        console.log(registered_data)

        var response = await fetch("https://mamaearrth-backend.herokuapp.com/register", {
            method: "POST",
            body: registered_data,
            headers: {
                "Content-Type": "application/json",
            }
            
        })
         try{

             var data = await response.json();
             console.log(data.email)
             console.log(data);
             if (data.message != null) {
                 alert("Mobile No Already exist!");
             }
           
             else {
                 alert( "Registration succesfull", "success");
             
                     window.location.href = "./index.html"
             }
         }catch(err){
             alert("Email Already Exist")
         }


    }
