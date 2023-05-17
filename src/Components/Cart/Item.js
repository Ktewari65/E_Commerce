import CartItem from "./CartItem"
const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

    id:1
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

    id:2
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

    id:3
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ]
   // console.log(productsArr)
    
    
const Item  =()=>{
    return (
    <div>
        <ul>
        {productsArr.map((item)=>
               <CartItem  

               title={item.title}
               price={item.price}
               url={item.imageUrl}
               id={item.id}/>
              
        )}
        </ul>

    </div>
    )

}
export default Item