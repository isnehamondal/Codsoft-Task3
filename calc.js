var string="";
var buttons=document.querySelectorAll(".button");

Array.from(buttons).forEach(button => {
    button.addEventListener("click", (event)=>{
            

        if(event.target.innerHTML=="ANS"){
            string=eval(string);
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="AC"){
            string="";
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="x!"){
            string=1;
            for(let i=1;i<=document.querySelector("input").value; i++){
                string=string*i;   
            }
            document.querySelector("input").value=string;
        }   
        else if(event.target.innerHTML=="√"){
            string=Math.sqrt(string);
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="x^2"){
            string=Math.pow(string,2);
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="sin"){
            string=Math.sin(string);
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="cos"){
            string=Math.cos(string);
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="tan"){
            string=Math.tan(string);
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="log"){
            string=Math.log(string);
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="pi"){
            pi=3.14159265359;
            console.log(event.target)
            string=string+event.target.innerHTML;
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="e"){
            e=2.71828182846;
            console.log(event.target)
            string=string+event.target.innerHTML;
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="log"){
            string=Math.log(string);
            document.querySelector("input").value=string;
        }
        else if(event.target.innerHTML=="DEL"){
            string=string.substr(0, string.length-1);
            document.querySelector("input").value=string;
        }
        
        else if(event.target.innerHTML=="∫"){
            string=Math.log(string);
            document.querySelector("input").value=string;
        }
        else{
            console.log(event.target)
            string=string+event.target.innerHTML;
            document.querySelector("input").value=string;
        }
        
    })
});


