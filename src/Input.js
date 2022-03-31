import React from 'react'

export default function Input({handleFilter,getAllNames,getOnlyGirls,getOnlyBoys}) {
  return ( 
    <div className='input-container'>
        <input onChange={handleFilter} placeholder='Enter a name' type="text"/>
        <button onClick={getAllNames}className="all-button">All</button>
        <button onClick={getOnlyGirls} className="female-button">Girls</button>
        <button onClick={getOnlyBoys} className="male-button">Boys</button>
    
    </div>
  )
}
