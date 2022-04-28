import React, { useState } from 'react'
import './Items.css'

function Schedule() {
  const list = []

  return (
    <div className='main-container'>
      <h1 className='title'>Update Status, WBD's, and Regulatory</h1>
      <div className='taskmanager-container'>
        {/* schedule  */}
        <div className='container'>
          <h2 className='itemsTitle'>Schedule</h2>
          <div className='addItems'>
            <input type='text' placeholder='Enter your item' className='itemsInput' onChange={''}></input>
            <button className='itemsButton' onClick={''}>Add</button>
          </div>
          <div className='itemsList'>
            {list.map(item => (
              <ul>
                <li className='item' key={item.id} onClick={''}>{item.content}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule;