const getElement =(selection)=>{

    const element=document.querySelector(selection)
    if(element)return element;
    throw new Error('no such a element') 
}

const url='https://randomuser.me/api/'

const img=getElement('.user-img')
const title=getElement('.user-title')
const value=getElement('.user-value')
const btn=getElement('.btn')
const btns=[...document.querySelectorAll('.icon')]

const getUser=async()=>{
    const response=await fetch(url)
    const data=await response.json()
    const person=data.results[0];
    
    //destructuring
    const {phone,email}=person
    const {large:img}=person.picture
    const {password}=person.login
    const {first,last}=person.name
    const {dob:{age}}=person
    const{street:{number,name}}=person.location

    return {img,phone,email,password,name:`${first} ${last}`,age,street:`${number} ${name}`}
}


const displayUser=(person)=>{
    img.src=person.img
    value.textContent=person.name
    btns.forEach((btn)=>btn.classList.remove('active'))
    btns[0].classList.add('active')
btns.forEach(btn=>{
    const label=btn.dataset.label
    btn.addEventListener('click',()=>{
        title.textContent=`My ${label} is`;
    value.textContent=person[label];
btns.forEach((btn)=>btn.classList.remove('active'))
    btn.classList.add('active')
    })
})

}
const showUser=async()=>{
   const person=await getUser()
   displayUser(person )
}

window.addEventListener('DOMContentLoaded',showUser)
btn.addEventListener('click',showUser)