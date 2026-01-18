
import{auth,db}from'./firebase.js'
import{createUserWithEmailAndPassword}from'https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js'
import{doc,setDoc}from'https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js'

registerBtn.onclick=async()=>{
const c=await createUserWithEmailAndPassword(auth,email.value,password.value)
await setDoc(doc(db,'users',c.user.uid),{email:c.user.email,role:'user'})
location.href='dashboard.html'
}
