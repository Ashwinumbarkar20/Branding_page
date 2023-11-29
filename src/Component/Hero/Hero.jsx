import React from 'react'
import styled from 'styled-components'
import { SiFlipkart } from "react-icons/si";
import { AiFillAmazonSquare } from "react-icons/ai";
import Heropic from '../../assets/shoe_image.jpg'
export default function Hero() {
  return (
    <>
     <Maindiv>
<div className='brandingDiv'>
    <h1>YOUR FEET DESERVE THE BEST</h1>
    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
<div className='Buttondiv'>
<button className='Fill'>Shop Now</button>
<button className='outline'> Category</button>
</div>
<p>Also Available On</p>
<div className='onineShopping'>
<SiFlipkart color='#F7A200' fontSize='24px'/>
<AiFillAmazonSquare color='#ff9900' fontSize='24px'/>
</div>
</div>
<div className='Heropic'>
    <img src={Heropic} alt="Shoe" />
</div>

     </Maindiv>    
     
    </>
  )
}

const Maindiv=styled.div`
box-shadow:5px 5px 5px 5px rgba(255, 0, 0, 0.6);
width:1200px;
margin:0 auto;
display:flex;
justify-content:space-between;
flex-direction:row;
align-items:center;
margin-top:50px;
.brandingDiv{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:start;
    gap:24px;
    h1{
        margin:0;
        color: #000;
font-family: Poppins;
font-size: 96px;
font-style: normal;
font-weight: 800;
line-height: 102px;
margin-left:10px;
    }
    p{
        margin:0;
        color: var(--GRAY, #5A5959);
font-family: Poppins;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-left:10px;
    }
    .Buttondiv{
        display:flex;
        flex-direction: row;
        gap:24px;
        justify-content:start;
        align-items:center;
        margin-left:10px;
        
        .Fill{
            padding: 6px 16px;
            background-color:#D01C28;
            color:#fff;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        border:none;
        border-radius:5px;
        cursor: pointer;
        }
        .outline{
            padding: 6px 16px;
            color: var(--GRAY, #5A5959);
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
border:2px solid #D01C28;
border-radius:5px;
cursor: pointer;
        }
    }
    .onineShopping{
        display: flex;
        gap:24px;
        align-items:center;
        justify-content:start;
        margin:10px;
        cursor: pointer;
    }

}
.Heropic{
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    
}
`