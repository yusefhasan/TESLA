import React , {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import  {selectCars} from '../features/counter/car/carslice';
import {useSelector} from "react-redux"; 


function header() {
  const [BurgerStatus,setBurgerStatus]= useState(false);
  const cars= useSelector(selectCars)
  console.log(cars)
  return (
    <Container>
    <a>
    <img src='/images/logo.svg' alt='#'></img>
    </a>
    <Menu>
    {cars && cars.map((cars,index)=>(

      <a key={index}href="#">{cars}</a>
    ))

    }

    
    </Menu>
<RightMenu>

<a href='#'>Shop </a>
<a href='#'>Tesla Account </a>
<CustomMenu onClick={()=>setBurgerStatus(true)}/>



</RightMenu>
<BurgerNav show={BurgerStatus} >
  <Closewrapper>

  <CustomClose onClick={()=>setBurgerStatus(false)}/>

  </Closewrapper>
  {cars && cars.map((cars,index)=>(

<li> <a key={index}href="#">{cars} </a></li>
))

}
<li> <a href='#'>Exsisting Enventory</a></li>
<li> <a href='#'>Used Enventory</a></li>
<li> <a href='#'>Trade-in</a></li>
<li> <a href='#'>Cyper Truck</a></li>
<li> <a href='#'>Roadster</a></li>
<li> <a href='#'>Exsisting Enventory</a></li>

</BurgerNav>


    </Container>
  )
}
 
export default header

const Container = styled.div`
justify-content:space-between;

min-height:60px;
position:fixed; //stay in the same position 
display:flex;
align-items:center;
padding: 0 20px;
top:0;
left:0;
right:0;
z-index:1;


`


const Menu =styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
font-weight:600;
text-transform:uppercase;
padding :0 10px;
flex-wrap:nowrap;


}

@media (max-width:768px){
display:none;
}

`

const RightMenu=styled.div`
display: flex;
align-items:center;
a{
  font-weight600;
  text-transform:uppercase;
  margin-right:10px;


}



`



const CustomMenu=styled(MenuIcon)`
cursor:pointer;


`

const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:2;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform: ${props=> props.show ? "translateX(0)":"translateX(100%)" };
transition: transform  0.2s;
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
}

a{
  font-weight:600;
}
`

const CustomClose= styled(ClearIcon)`
cursor:pointer;

`

const Closewrapper=styled.div`
display:flex;
justify-content:flex-end;

`
