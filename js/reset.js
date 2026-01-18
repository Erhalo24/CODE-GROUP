
import{auth}from'./firebase.js'
import{sendPasswordResetEmail}from'https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js'

resetBtn.onclick=()=>{
sendPasswordResetEmail(auth,email.value)
.then(()=>alert('Mail gönderildi'))
}
