
    let data=[
        {
            image:"https://tse4.mm.bing.net/th?id=OIP.AAeMOleCsTZ6bN_MA_cQqQHaEK&pid=Api&P=0",
            name:"Masala Dosa",
            description:"Masala Dosa is a variation of the popular South Indian dosa which has its origins in Karnataka.",
            price:70,
            strike:110
        },
        {
            image:"https://tse1.mm.bing.net/th?id=OIP.GZpdRrpbyY4pEQxjk7CvSgHaFC&pid=Api&rs=1&c=1&qlt=95&w=169&h=114",
            name:"Taco",
            description:" is a traditional Mexican food wheat-based tortilla topped with a filling",
            price:210,
            strike:370
        },
        {
            image:"https://sp.yimg.com/ib/th?id=OPA.Ua7mQV%2bHuRUigg474C474&o=5&pid=21.1",
            name:"Cake",
            description:"Cake is a flour confection made from flour, sugar, and other ingredients, and is usually baked.",
            price:810,
            strike:1170
        },
        
        {
            image:"https://tse2.mm.bing.net/th?id=OIP.MfhIfzrC6x6T1-szQkjtCgHaEo&pid=Api&P=0",
            name:"Pizza",
            description:"Pizza is a flat base of leavened wheat dough topped with tomatoes, cheese, and various other ingredients",
            price:299,
            strike:599
        },
        
        {
            image:"https://tse4.mm.bing.net/th?id=OIP.tl6F7F2TkYjaJhfHPJkwGgHaLH&pid=Api&P=0",
            name:"Pasta",
            description:"Italian food made from flour, eggs and water and shaped in different forms, usually cooked and served with a sauce",
            price:110,
            strike:170
        },
        
        {
            image:"https://www.eatthis.com/wp-content/uploads/sites/4/2018/08/kfc-chicken-tenders.jpg?resize=640,468&quality=82&strip=all",
            name:"Extra Crispy Chicken",
            description:"Much like the beloved original, but even more deeply fried? Of course, this is a must-try fast-food delicacy.",
            price:500,
            strike:780
        },
        
        {
            image:"https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/469806218/starbucks-iced-coconut-milk-mocha-macchiato.jpg?resize=640,468&quality=82&strip=all",
            name:"Starbucks Macchiato",
            description:"The Caramel Macchiato is the most frequently ordered version today.",
            price:1200,
            strike:1500
        },

        {
            image:"https://www.eatthis.com/wp-content/uploads/sites/4/2019/07/qdoba-chicken-bowl.png?resize=640,468",
            name:"Grilled Chicken Bowl",
            description:"The grilled adobo chicken bowl, complete with queso, guacamole and vegetables",
            price:650,
            strike:987
        },

        {
            image:"https://m1.quebecormedia.com/emp/cl_prod/canadian_living-_-4d0a5a2d124f2431a68203635e8fcead499fe28e-_-0081-CL-Jul15hero.jpg?impolicy=resize&width=1500&height=1500",
            name:"Burger",
            description:"A burger is a food consisting of fillings —usually a patty of ground vegetables.",
            price:35,
            strike:49
        },
    ]
    let mycart=JSON.parse(localStorage.getItem("bharat"))||[];
    
    function getdata(data)
    
    {    
        let container=document.getElementById("container");
        container.innerHTML=null;

        data.forEach(function(e){
        let div=document.createElement("div");
            let div2=document.createElement("div");
                    let img=document.createElement("img");
                    img.src=e.image;
                    div2.append(img);
        
            let div3=document.createElement("div");
                    let name=document.createElement("h2");
                    name.innerText=e.name;

                    let description=document.createElement("h4");
                    description.innerText=e.description;
                    div3.append(name,description);
        


                    let div5=document.createElement("div");    
                    let price=document.createElement("p");
                    price.innerText="$"+e.price;
                    

                    let strike=document.createElement("p");
                    strike.innerText="$"+e.strike;
                    strike.className="strikemyself";
                    div5.append(price,strike);
        

                    let div4=document.createElement("div");
                div4.className="main";
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
                    // console.log(btn);
                    div4.append(insidemain);

                    btn.addEventListener("click",()=>{
                        
                        if(btn.innerText=="Add")
                        {
                            btn.innerText=+1;
                            pbtn.style.display='inline-block';
                            mbtn.style.display='inline-block';
                        }
                        cart(e);
                    })

                    mbtn.addEventListener("click",()=>{
                        if(btn.innerText==5)
                        {
                            pbtn.style.display='inline-block';
                        }
                        if(btn.innerText<2)
                        {
                            btn.innerText='Add';
                            pbtn.style.display='none';
                            mbtn.style.display='none'; 
                        }
                        else{
                            btn.innerText=btn.innerText-1;
                        
                        } 
                        // console.log(btn);
                    })


                    pbtn.addEventListener("click",()=>{
                        
                        btn.innerText= +(btn.innerText) + +1;
                        

                        if(btn.innerText==5)
                        {
                            pbtn.style.display='none';
                        }
                        // console.log(btn);
                    })
                    

            // let div5=document.createElement("div");    
            //         let price=document.createElement("p");
            //         price.innerText="$"+e.price;

            //         let strike=document.createElement("p");
            //         strike.innerText="$"+e.strike;
            //         strike.className="strikemyself";
            //         div5.append(price,strike);
        
        
        div.append(div2,div3,div4,div5);
        
    container.append(div);
    })
    // localStorage.setItem("bharat",JSON.stringify(data))
}

    getdata(data);
    function cart(e)
    {

        mycart.push(e);
        console.log(mycart);
        localStorage.setItem("bharat",JSON.stringify(mycart));
    }
