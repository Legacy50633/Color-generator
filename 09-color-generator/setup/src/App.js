import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const[color,setColor] = useState('')
  const[error,setError] = useState(false)

  const[list,setList ] = useState([])
const handle =(e)=>{
 e.preventDefault()
 try {
  let colors = new Values(color).all(10)
  setList(colors)
  setColor('')
  setError(false)
 console.log(colors)  
 } catch (error) {
  setError(true)
  console.log(error)
 }
 


}
const Error=()=>{
  return <h3>Couldn't generate Color try using (#1218) like this! </h3>
}
return <> 
<section className="conatiner">
  <div><h3>Color generator....</h3></div>
  
    <form action='' onSubmit={handle}>
      <input type="text"  value={color} placeholder='#f12322'  
      onChange={(e)=>setColor(e.target.value)}/>
      <button className='btn ' type='submit'>Generate</button>  
        </form>
  </section>
<section className='colors'>
  {error?<Error/>:''}
{list.map((color,index)=>{
  return <SingleColor key={index} index={index} {...color} />
})}
</section>
</>
}

export default App
