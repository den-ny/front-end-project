import Products from "./product/product.jsx"
import { useState, useEffect } from "react"
const Results = ({ f, qwe }) => {
  // console.log(f, qwe)
  const [display, setD] = useState(false)
  console.log(f, qwe)
  console.log("dsadsa")
  // useEffect(() => {
  //   const q = async () => {
  //     await setD(qwe)
  //     console.log(qwe)
  //   }
  //   q()
  // }, [])
  return (
    <div>
      {/* {f} */}
      {display ? <Products products={f} /> : "sadsad"}
      {/* <Products products={f} /> */}

    </div>

  )
}

export default Results