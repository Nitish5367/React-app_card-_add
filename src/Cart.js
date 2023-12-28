

import React from 'react'
import Gc from './Gc'
const Cart = () => {
  let props=useContext(Gc)
  return (
    <div>
       <div className='Products'>{
        props.data.map((item,index)=>{
            return(<div className='card'>
                <div className='pimg'><img src={item.images[0]}/></div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <h2>{item.price}</h2>
                <div><button onClick={()=>props.decqty(index)}>-</button>{item.qty}
                <button onClick={()=>props.incqty(index)}>+</button>
                </div>
            
            </div>)
        })
    }  
    </div>
    </div>
  )
}

export default Cart