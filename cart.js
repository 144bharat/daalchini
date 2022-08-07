let mycart=JSON.parse(localStorage.getItem("bharat"))||[];

let qty=[];
let total=0;

function putdata(mycart){
    let container=document.getElementById("container");
       container.innerHTML = null;
       var count=1;
       mycart.forEach(function(e){
        

        let div=document.createElement("div");
    
        let div1=document.createElement("div");
                let name=document.createElement("h3");
                name.innerText=e.name;
    
               
                div1.append(name);
    
        let div2=document.createElement("div");
            div2.className="main";
            
            let insidemain=document.createElement("div");
            insidemain.className="btn";
                
            let btn=document.createElement("button");
                btn.innerText="Add";
                btn.className="mainBtn";
               
                let mbtn=document.createElement("button");
                mbtn.innerText="-";
                mbtn.className="minusBtn";
               
                let pbtn=document.createElement("button");
                pbtn.innerText="+";
                pbtn.className="plusBtn";
    
                insidemain.append(mbtn,btn,pbtn);
                
    
                btn.addEventListener("click",()=>{
                    
                    if(btn.innerText=="Add")
                    {
                        btn.innerText=+1;
                        
                        count=innerText;
                        pbtn.style.display='inline-block';
                        mbtn.style.display='inline-block';
                    }
                })   
    
                mbtn.addEventListener("click",()=>{
                    if(btn.innerText==5)
                    {
                        pbtn.style.display='inline-block';
                    }
                    if(btn.innerText<2)
                    {
                        btn.innerText='Add';
                        // div.style.display='none';
                        
                        pbtn.style.display='none';
                        mbtn.style.display='none'; 
                    }
                    else{
                        btn.innerText=btn.innerText-1;
                        total=total-(+(btn.innerText*e.price));
                        
                        count=btn.innerText;
                        
                    } 
                    // console.log(btn);
                })
    
    
                pbtn.addEventListener("click",()=>{
                    
                    btn.innerText= +(btn.innerText) + +1;
                    count=btn.innerText;
                    total=total + (+(btn.innerText*e.price));
    
                    if(btn.innerText==5)
                    {
                        pbtn.style.display='none';
                    }
                    console.log(btn);
                })
                // insidemain.innerText=count;
                div2.append(insidemain);
    
        let div3=document.createElement("div");    
                let price=document.createElement("p");
                price.innerText="$"+e.price;
                total=total+e.price;
                div3.append("$"+e.price +"x"+count);
            
        let div4=document.createElement("h4");
        div4.innerText="Total";
        let div5=document.createElement("div");
        let div6=document.createElement("h4");
        div6.innerText="$"+total;
    
    div.append(div1,div2,div3,div4,div5,div6);
    
    container.append(div);

})};
putdata(mycart);

let item1=document.getElementById("itemnumber");
item1.append("["+mycart.length+"]");
