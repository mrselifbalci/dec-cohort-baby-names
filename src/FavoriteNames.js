import React from 'react'

export default function FavoriteNames({removeFromFavorites,favoriteNames}) {
  return (
    <div className='favorites-container'>
    {
        favoriteNames.map(name=>{
            return <button onClick={()=>removeFromFavorites(name)} className={name.sex==='f' ? 'female-button' : 'male-button'}>{name.name}</button>
        })
    }

    </div>
  )
}
