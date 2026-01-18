
import{auth}from'./firebase.js'
import{signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup}from'https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js'

loginBtn.onclick=()=>{
signInWithEmailAndPassword(auth,email.value,password.value)
.then(()=>location.href='dashboard.html')
.catch(e=>alert(e.message))
}

googleBtn.onclick=()=>{
signInWithPopup(auth,new GoogleAuthProvider())
.then(()=>location.href='dashboard.html')
}
