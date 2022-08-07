
let data=JSON.parse(localStorage.getItem("login"))||[]
document.querySelector("form").addEventListener("submit",login)

function login(e){
    e.preventDefault()
    let form = document.querySelector("form");
    let email=form.email.value;
    let password=form.password.value;

   
    let flag=false;
    for(let i=0; i<data.length; i++){
        if(data[i].email==email || email==null){
            flag=true
    }
}if(flag==false){
    let s1=new loginData(email,password)
    data.push(s1);
    localStorage.setItem("login", JSON.stringify(data));
    window.location.href="index.html"
}else{
    alert("Invalid Credential")
}
}
function loginData(e,p){
    this.email=e
    this.password=p
}
