import React from 'react'
import {Link} from 'react-router-dom'

function ListItem({item,i,no}) {
  // console.log(item_Id);
  return (
    <ul className='flex justify-between p-2' key={i}>
        <li className='mr-2'>{no}</li>
        <li className='flex-1 text-base'><Link to={`/blog/${item._id}`}>{item.title}</Link></li>
        <li className='text-sm'>{item.user.name}</li>
    </ul>
  )
}

export default ListItem