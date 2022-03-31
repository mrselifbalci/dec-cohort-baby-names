import React,{useState} from 'react'
import './App.css';
import data from './Data'
import FavoriteNames from './FavoriteNames';
import Input from './Input';

function App() {
  const [allnames,setAllNames] = useState(data)
  const [favoriteNames,setFavoriteNames]=useState([])



 const handleFilter=(e)=>{
  let filtered= data.filter(item=>item.name.toLowerCase().includes(e.target.value.toLowerCase()))
  setAllNames(filtered)
 }


  const getOnlyGirls=()=>{
   let filteredNames= data.filter(item=>item.sex==='f')
   setAllNames(filteredNames)
  } 
  const getOnlyBoys=()=>{
    let filteredNames= data.filter(item=>item.sex==='m')
    setAllNames(filteredNames)
   }

 const getAllNames=()=>{
   setAllNames(data);
 }

 const addToFavorites=(name)=>{
  const found = favoriteNames.some(item=>item.id===name.id)
  if(!found){
    setFavoriteNames([...favoriteNames,name])
  }
 }
const removeFromFavorites=(name)=>{
  const updated = favoriteNames.filter(item=>{
    return item.id !== name.id
  })
  setFavoriteNames(updated);
}

  return (
    <div>
      <Input handleFilter={handleFilter} getAllNames={getAllNames} getOnlyGirls={getOnlyGirls} getOnlyBoys={getOnlyBoys}/>
      <FavoriteNames removeFromFavorites={removeFromFavorites} favoriteNames={favoriteNames}/>
      <div className="names-container">
        {
          allnames.map(item=>{
            return <button onClick={()=>addToFavorites(item)} className={item.sex==='f' ? 'female-button' : 'male-button'}>{item.name}</button>
          })
        } 
      </div>
    </div>
  );
}

export default App;
 