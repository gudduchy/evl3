//store the products array in localstorage as "products"
//store the products array in localstorage as "products"


let p_detail=document.getElementById("products")
p_detail.addEventListener("submit",myfn)
function myfn(){
  let add_product=JSON.parse(localStorage.getItem("products"))||[]
  event.preventDefault()
  let obj1={
    type:products.type.value,
    desc:products.desc.value,
    price:products.price.value,
    image:products.image.value,

  };
  //console.log(obj1)
  add_product.push(obj1)
  console.log(add_product)
  localStorage.setItem("products",JSON.stringify(add_product))
  window.location.reload()
 
}


      let b2=document.getElementById("show_products")
          b2.addEventListener("click",fn)
          function fn(){
              window.location.href="inventory.html"
          }






//   let p_detail=document.getElementById("products")
// p_detail.addEventListener("submit",myfn)
// function myfn(){
//   let add_product=JSON.parse(localStorage.getItem("products"))||[]
//   event.preventDefault()
//   let obj1={
//     type:products.type.value,
//     desc:products.desc.value,
//     price:products.price.value,
//     image:products.image.value,

//   };
//   //console.log(obj1)
//   add_product.push(obj1)
//   console.log(add_product)
//   localStorage.setItem("products",JSON.stringify(add_product))
// }