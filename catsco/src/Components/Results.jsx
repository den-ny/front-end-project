import Products from "./product/product.jsx"
import { useState, useEffect } from "react"
const Results = ({ f, qwe }) => {
  // console.log(f, qwe)

  // console.log(f, qwe)
  console.log(f)
  // useEffect(() => {
  //   setD(qwe)
  // }, [])

  // console.log(display)
  // useEffect(() => {
  //   const q = async () => {
  //     await setD(qwe)
  //     console.log(qwe)
  //   }
  //   q()
  // }, [])
  return (
    <div>
      {/* {f.length > 0 ? "yes" : "no"} */}
      {f.length > 0 ? <Products products={f} /> : "nah"}
      {/* <Products products={f} /> */}

    </div>

  )
}

export default Results