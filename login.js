import { supabase } from "./supabase.js";
console.log("InkVibe Login geladen");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const status = document.getElementById("status");


document
.getElementById("registerBtn")
.addEventListener("click", async () => {

const { data, error } = await supabase.auth.signUp({

email: emailInput.value,

password: passwordInput.value

});


if(error){

status.textContent = error.message;

return;

}


status.textContent =
"Registrierung erfolgreich! Prüfe deine Email.";

});





document
.getElementById("loginBtn")
.addEventListener("click", async()=>{


const {data,error}=await supabase.auth.signInWithPassword({

email: emailInput.value,

password: passwordInput.value

});


if(error){

status.textContent=error.message;

return;

}


status.textContent=
"Eingeloggt als "+data.user.email;


});






document
.getElementById("logoutBtn")
.addEventListener("click",async()=>{


await supabase.auth.signOut();


status.textContent=
"Ausgeloggt";


});





supabase.auth.getSession()
.then(({data})=>{


if(data.session){

status.textContent=
"Eingeloggt als "+
data.session.user.email;

}


});