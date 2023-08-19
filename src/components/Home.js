import React from 'react'

const Home = (props) => {
    const {data}=props
  return (
    <div className='cart-wrapper'>
    <img src='https://www.svgrepo.com/show/508283/cart.svg' alt='..'/>
    <div className='cart-image item'>
<img src='https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg' alt='...'/>
    </div>
    <div className='cart-text item'>
<span>
<p>{data.name}</p>
<p>Colour:{data.color} </p>
<p>Size:{data.size} </p>
</span>
<span>
    Price:$700
</span>
    </div>
    <div className='cart-qty item'>
        <span>+ Qty -</span>
    </div>
    <div className='cart-button item'>
<button>Add to cart</button>
    </div>
      
    </div>
  )
}

export default Home
