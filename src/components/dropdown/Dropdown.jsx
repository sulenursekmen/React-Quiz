import React from 'react'
import './Dropdown.css'
const Dropdown = ({data,setDifficultyChange}) => {
  return (
    <div className='dropdown'>
     <select onChange={e=>setDifficultyChange(e.target.value)}>
      {
        data.map((d,i)=>(
          <option value={d}>{d}</option>
        ))
      }
     </select>
    </div>
  )
}

export default Dropdown
