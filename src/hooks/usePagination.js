import { useState } from "react";

export function usePagination() {

  const [limit, setLimit] = useState(12);
  const [offset, setOffset] = useState(0);
  
  const handleClick = (next = false, callback) => {
    callback()
    if (next){
      setOffset((prev) => (
        prev + limit
      ))
    }else {
      setOffset((prev) => (
        prev - limit
      ))
    }
  }

  return { limit, setLimit, offset, setOffset, handleClick }

}