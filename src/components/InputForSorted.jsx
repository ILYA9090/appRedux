import React from 'react'

const InputForSorted = ({searchParams, setSearchParams}) => {
  return (
    <div style={{display: "flex",justifyContent:"center"}}>
        <input placeholder="search post" value={searchParams} onChange={(e)=> setSearchParams(e.target.value)}/>
        </div>
  )
}

export default InputForSorted;
