import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/brand_logo.jpg'
export default function Navbar() {
  return (
    <>
      <Navdiv>
      <nav className='Nav'>
      <div><img src={logo} alt="Logo" /></div>
      <div className='MenuDiv'>
      <ul className='Menu'>
      <li>MENU</li>
      <li>LOCATION</li>
      <li>ABOUT</li>
      <li>CONTACT</li>
      </ul>
      </div>
      <div className='Login'>
        <button className='Loginbtn'>Login</button>
      </div>

      </nav>
     </Navdiv>
    </>
  )
}
  const Navdiv=styled.div`
padding:0px;
margin:0 auto;
width:1200px;
.Nav{
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  height:72px;
}
img{
    cursor: pointer;
}
ul{
  display:flex;
  flex-direction:row;
  justify-content: center;
  gap:24px;
  align-items:center;
  list-style-type:none;
  font-size:18px;
  font-weight:800;
  
}
li{
    cursor: pointer;
    border:1px solid grey;
    padding:5px;
    border-radius:5px;
}
button{
  padding: 6px 16px;;
  background: #D01C28;
  color:white;
  border:none;
  font-size:18px;
  font-weight:500;
  border-radius:5px;
  box-shadow: 0px 8px 15px black;
  cursor: pointer;
}
`

