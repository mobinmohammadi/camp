import React, { useEffect } from 'react'
import {getCabins} from "../services/apiCabins"


export default function Cabins() {
  useEffect(() => {
    getCabins().then(res => console.log(res)
    )
  },[])
  return (
    <div >Cabins</div>
  )
}
