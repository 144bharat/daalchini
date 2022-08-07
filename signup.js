


let data=JSON.parse(localStorage.getItem("signup"))||[]
document.querySelector("form").addEventListener("submit",signup);

function signup(event){
    event.preventDefault();
    let form = document.querySelector("form")
    let name=form.name.value
    let email=form.email.value
    let password=form.password.value
    
   
   
    let flag=false
    for(let i=0; i<data.length; i++)
    {
        if(data[i].email==email || email==null)
        {
            flag=true;
        }
    }
   if(flag==false)
   {
        let s1=new givenData(name,email,password)
        data.push(s1)
        localStorage.setItem("signup", JSON.stringify(data))
        window.location.href="./login.html"
   }
   else
   {
        alert("User Already Exists!")
   }
}
function givenData(n,e,p){
    this.name=n
    this.email=e
    this.password=p
}
