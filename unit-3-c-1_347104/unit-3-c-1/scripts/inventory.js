

   let data=JSON.parse(localStorage.getItem("products"))
   displayData(data)
   function displayData(data){
       data.map(function(ele,index){
         let div=document.createElement("div")
         let h1=document.createElement("h3")
         h1.innerText="Type: "+ele.type
         let h2=document.createElement("h3")
         h2.innerText=ele.desc
         let h3=document.createElement("h3")
         h3.innerText="₹ "+ele.price
         let img=document.createElement("img")
         img.src=ele.image
         let rmv=document.createElement("button")
         rmv.innerText="Remove"
         rmv.style.cursor="pointer"
         rmv.style.color="red"
         rmv.addEventListener("click",function(){
              remove_product(ele,index)
         })
         //console.log(h1,h2,h3,img)
         div.append(img,h1,h2,h3,rmv)
         document.getElementById("all_products").append(div)

         function remove_product(ele,index){
            event.target.parentNode.remove()
              data.splice(index,1)
              localStorage.setItem("products",JSON.stringify(data))
              window.location.reload
         }
       })
   }

   let b1=document.getElementById("add_more_product")
   b1.addEventListener("click",fn)
   function fn(){
     window.location.href="index.html"
   }