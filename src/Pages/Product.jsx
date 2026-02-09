import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {
  const { productId } = useParams()
  const { products } = useContext(ShopContext)
  const [productData, setProductData] = useState(null)

  useEffect(() => {
    if (products.length > 0) {
      const product = products.find(item => item._id == productId)
      setProductData(product)
      console.log(product)
    }
  }, [productId, products])

  return (
    <div>
      {productData && <h1>{productData.name}</h1>}
    </div>
  )
}

export default Product
