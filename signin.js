async function login(){

let email = document.getElementById("email").value
let password = document.getElementById("password").value

let res = await fetch("/api/login",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email:email,
password:password
})
})

let data = await res.json()

document.getElementById("msg").innerText = data.message

if(data.message === "Login Successful"){
window.location.href = "/"
}

}