
import React, { useState } from 'react'

function Tod() {
  const [text,settext]=useState('')
  const [state,setstate]=useState([])
  const [edit,setedit]=useState(null)
  function handlechange(e){
    settext(e.target.value)
  }
  function handlesubmit(e){
    e.preventDefault()
    if (edit!==null) {
      state[edit]=text
      setstate([...state])
      setedit(null)
    }
    else{
      setstate([...state,text])
    }
    settext('')
  }
  function Delete(id){
    let ans=state.filter((el,i)=>{
      return i!=id
    })
    setstate(ans)
  }
  function Edit(id){
    settext(state[id])
    setedit(id)
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" placeholder='enter name' value={text} onChange={handlechange} />
        <input type="submit"  />
      </form>
      {
        state.map((el,i)=>{
          return <>
          <li key={i}>{el}</li>
          <button onClick={()=>Delete(i)}>Delete</button>
          <button onClick={()=>Edit(i)}>Edit</button>
          </>
        })
      }
    </div>
  )
}

export default Tod

