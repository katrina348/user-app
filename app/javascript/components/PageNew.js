import React from 'react'

const PageNew = (props) =>{
  return(
    
    <div>
      <h1>New Page Form</h1>
      <form action='/pages' method='post'></form>
      <button type='submit'>add</button>
    </div>
    
  )
}

export default PageNew