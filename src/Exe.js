import React, { useState } from 'react';
import { FaTrashAlt} from 'react-icons/fa';
// IoMdTrash
function Exe() {
    const [items,setitems]=useState(
        [
            {   id:1,
                checked:true,
                item:"Practice Coding"


            },
            {   id:2,
                checked:true,
                item:"Play Cricket"


            }, {   id:3,
                checked:true,
                item:"Read about Devops"


            }
        ]
    )
    // const numbers=[1,2,3,4,5,6,7,8];
    // const item=numbers.filter(n=>{
    //     return n>4;
    // });
    // console.log(item);
  function handleChange(id){
   const list=items.map((item)=>item.id===id?{checked:!item.checked}:item)
   setitems(list)
  }
  return (
    <main>
        <ul>
          {items.map((item)=>(
            <li key={item.id}>
                
                <input type='checkbox' checked={item.checked} onChange={()=>handleChange(item.id)} />
                <label>{item.item}</label>
               <FaTrashAlt 
                role="button"
                tabIndex="0"
               />
            </li>
          ))}
        </ul>
    
    </main>
  )
}

export default Exe