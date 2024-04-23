import React from 'react'

function ListItem({item,i,no}) {
  return (
    <ul className='flex justify-between p-2' key={i}>
        <li className='mr-2'>{no}</li>
        <li className='flex-1 text-base'>{item.title}</li>
        <li className='text-sm'>{item.user.name}</li>
    </ul>
  )
}

export default ListItem