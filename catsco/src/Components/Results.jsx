import Products from "./product/product.jsx"
import { useState } from "react"
const Results = ({ f, qwe }) => {
  console.log(f, qwe)
  const [display, setD] = useState(false)
  return (
    <div>
      {display ? <Products products={f} /> : null}
    </div>

  )
}

export default Results