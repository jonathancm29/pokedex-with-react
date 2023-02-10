import { useEffect, useState } from "react";
import { usePagination } from "../hooks/usePagination";

export function Pagination({limit, offset, handleClick, cleanData}) {

  return (
    <div className="pagination">
      <button onClick={() => handleClick(false, cleanData) }>Anterior</button>
      <label> Pagina {(offset/ limit) + 1 } </label>
      <button onClick={() => handleClick(true, cleanData) }>Siguiente</button>
    </div>
  )
}