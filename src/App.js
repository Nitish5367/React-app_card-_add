import React from 'react'
import Nav from './Nav'
import Cart from './Cart'
import { useState,useEffect } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Product from './Product'
import Gc from './Gc'
const App = () => {
 let [cart,setCart]=useState([])
 let obj={"addprod":addprod,"data":cart,"incqty":incqty,"decqty":decqty,"del":del,"ctotal":ctotal}
 let addprod=(item)=>{
 /* let x=cart.filter((prod)=>item.id==prod.id)
   if(x.length==0){
    setCart([...cart,{...item,"qty":1,"total":item.price}])
   }*/
 
 let x=cart.filter((prod,index)=>{
  if(item.id==prod.id){
    incqty(index)
    return true
  }
  else{
    return false
  }
 })
 if(x.length==0){
  setCart([...cart,{...item,'qty':1,"total":item.price}])
 }
}
 let incqty=(index)=>{
  if(cart[index].qty<5){
    cart[index].qty++
    cart[index].total+=cart[index].price
    setCart([...cart])
  }
 }
 let decqty=(index)=>{
  if(cart[index].qty>1){
    cart[index].qty--
    cart[index].total-=cart[index].price
    setCart([...cart])
  }
 }

  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/' element={<Product/>}/>
    <Route path='/cart' element={<Cart />}/>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App