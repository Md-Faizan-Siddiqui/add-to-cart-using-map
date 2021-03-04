import './App.css';
import React from "react";
import { useState } from "react"


function Cart() {

  const [addCart, setAddCart] = useState([])

  const [productList] = useState([

    {
      id: "0",
      titel: "SMART WATCH",
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/61Li3cp0wvL._AC_SL1500_.jpg",
      price: "Rs: 1050/=",
      qty: 1
    },
    {
      id: "1",
      titel: "WATERPROOF MOBILE POUCH",
      imgUrl: "https://www.sonalibazar.com/image/cache/catalog/Eletronics/waterproof-mobile-bag-910x1155.jpg",
      price: "Rs: 650/=",
      qty: 1
    },
    {
      id: "2",
      titel: "E-CIGARETTE",
      imgUrl: "https://www.goodtherapy.org/blog/blog/wp-content/uploads/2019/10/Vape-pens-and-e-cigs.jpg",
      price: "Rs: 1500/=",
      qty: 1
    },
    {
      id: "3",
      titel: "WIRELESS HEADPHONE",
      imgUrl: "https://images.philips.com/is/image/PhilipsConsumer/TASH402LF_00-IMS-en_PK?$jpglarge$&wid=1250",
      price: "Rs: 1250/=",
      qty: 1
    },
    {
      id: "4",
      titel: "Wireless Keyboard and Mouse",
      imgUrl: "https://ae01.alicdn.com/kf/H9c1b41b07bf24982be7d9be902a03f35F.jpeg_q50.jpeg",
      price: "Rs: 1600/=",
      qty: 1
    },
    {
      id: "5",
      titel: "Flexible Mini USB Led Lamp",
      imgUrl: "https://ph-test-11.slatic.net/original/a5b0a2a29e21cf34866607bad7f72d02.jpg",
      price: "Rs: 250/=",
      qty: 1
    }
  ])


  function add(eachProduct) {
    var result = addCart.find((eachitems) => eachitems.id === eachProduct.id)
    if (result === undefined) {
      setAddCart([...addCart, eachProduct])
    }
  }
  console.log(addCart)


  const [value, setvalue] = useState(0)
  function incrementState() {
    setvalue(function (prev) {
      return prev + 1;
    })
  }

  function decrementState() {
    setvalue(function (prev) {
      return prev - 1;
    })
  }




  return (
    <>
      <div style={{ }}>
        {productList.map((eachProduct, index) => {
          return <div key={index} className="container" >

            <div className="img" style={{ width: '100%' }}>
              <img src={eachProduct.imgUrl} alt="" />
            </div>

            <h4>{eachProduct.titel}</h4>

            <p>{eachProduct.price}</p>

            <button className="btn" onClick={() => add(eachProduct)} >Add To Cart</button>

          </div>
        })}

      </div>
      <div>
        {addCart.map((eachProduct, index) => {
          return <div key={index} className="container">

            <div className="img">
              <img src={eachProduct.imgUrl} alt="" />
            </div>

            <h4>{eachProduct.titel}</h4>

            <p>{eachProduct.price}</p>


            <button onClick={incrementState}>+</button>
            
            <div> <p> {value} </p> </div>
            
            <button onClick={decrementState}>-</button>

          </div>
        })}
      </div>

    </>
  )

}
export default Cart;
