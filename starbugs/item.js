const projectArray=[
{
    id:1,
    title:'Caffe Americon',
    sub_title:'rich in flavour full-bodies espresso with hpt water in true',
    price:'₹350',
    img :"../starbugs/card1.webp" ,
},
{
    id:2,
    title:'Cappuccino',
    sub_title:'Dark, Rich in flavour espresso and bittersweet cocoa lies in... ',
    price:'₹299',
    img :"../starbugs/card2.webp" ,
},
{
    id:3,
    title:'Latte',
    sub_title:'Our dark, Rich in flavour espresso balanced with steamed mil... ',
    price:'₹390',
    img :"../starbugs/card3.webp" ,
},
{
    id:4,
    title:'Chocolate Cappuccino',
    sub_title:'Espresso with decadent Belgian chocolate sauce, mocha sauce ',
    price:'₹230',
    img :"../starbugs/card4.webp" ,
},
{
    id:5,
    title:'Caffe Americon',
    sub_title:'Freshly steamed milk with vanilla-flavored syrup is marked',
    price:'₹430',
    img :"../starbugs/card5.webp" ,
},
{
    id:6,
    title:'Caramel Macchiato',
    sub_title:'A perfect espresso shot topped with steamed milk.',
    price:'₹330',
    img :"../starbugs/card6.webp" ,
},
{
    id:7,
    title:'Chocolate Cortado',
    sub_title:'Signature Italian style Cappuccino with espresso shot, mocha.',
    price:'₹400',
    img :"../starbugs/card7.webp" ,
},
{
    id:8,
    title:'Cortado',
    sub_title:'Our smooth signature Espresso Roast and its caramelly sweetn...',
    price:'₹100',
    img :"../starbugs/card1.webp" ,
},
{
    id:9,
    title:'Caffe Americon',
    sub_title:'Our dark, Rich in flavour espresso balanced with vanilla fla... ',
    price:'₹200',
    img :"../starbugs/card9.webp" ,
},
{
    id:10,
    title:'Caffe Americon',
    sub_title:'Our dark, rich espresso balanced with vanilla flavored syrup',
    price:'₹300',
    img :"../starbugs/card10.webp" ,
},
{
    id:10,
    title:'Caffe Americon',
    sub_title:'Our dark, rich espresso balanced with vanilla flavored syrup',
    price:'₹300',
    img :"../starbugs/card10.webp" ,
},
{
    id:10,
    title:'Caffe Americon',
    sub_title:'Our dark, rich espresso balanced with vanilla flavored syrup',
    price:'₹300',
    img :"../starbugs/card10.webp" ,
},
{
    id:10,
    title:'Caffe Americon',
    sub_title:'Our dark, rich espresso balanced with vanilla flavored syrup',
    price:'₹300',
    img :"../starbugs/card10.webp" ,
},
{
    id:10,
    title:'Caffe Americon',
    sub_title:'Our dark, rich espresso balanced with vanilla flavored syrup',
    price:'₹300',
    img :"../starbugs/card10.webp" ,
},
{
    id:10,
    title:'Caffe Americon',
    sub_title:'Our dark, rich espresso balanced with vanilla flavored syrup',
    price:'₹300',
    img :"../starbugs/card10.webp" ,
},
]


const cardContainer= document.querySelector('.containers')

const showInHtml = projectArray.map((project,index)=>{
return `



  
<div class="cards" >
           <div class="left"><img src=${project.img} width="100px"></div>
           <div class="right">
             <p class="font-bold">${project.title}</p>
             <p class="font-bolds">${project.sub_title}</p>
           
             <div class="price">
               <p class="mr-5 font-bold">${project.price}</p>
               <button id="iten-btn">add item</button>
             </div>
           </div>
           </div> 
     



`
})

cardContainer.innerHTML=showInHtml


{/* <div class="item-card " >
          <div class="left"><img src=${project.img}></div>
          <div class="right">
            <p class="font-bold">${project.title}</p>
            <p class='font-bolds'>${project.sub_title}</p>

            <div class="price">
                <p class="mr-5 ">${project.price}</p>
                <button id="iten-btn">add item</button>
            </div>
          </div>
        </div> */}