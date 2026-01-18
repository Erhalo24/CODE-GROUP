
import{auth,db}from'./firebase.js'
import{onAuthStateChanged,signOut}from'https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js'
import{collection,addDoc,onSnapshot,query,orderBy}from'https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js'

onAuthStateChanged(auth,u=>{if(!u)location.href='login.html'})

shareBtn.onclick=async()=>{
if(!codeText.value)return
await addDoc(collection(db,'codes'),{user:auth.currentUser.email,text:codeText.value,time:Date.now()})
codeText.value=''
}

onSnapshot(query(collection(db,'codes'),orderBy('time','desc')),s=>{
codes.innerHTML=''
s.forEach(d=>{
const c=d.data()
codes.innerHTML+=`<div class=code><b>${c.user}</b><pre>${c.text}</pre></div>`
})
})

logoutBtn.onclick=()=>signOut(auth).then(()=>location.href='login.html')
