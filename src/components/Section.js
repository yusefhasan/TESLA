import React from 'react'
import styled from 'styled-components'
function Section() {
  return (
    <Wrap>
    <Itemtext>
        <h1>model s</h1>
        <p> order online for touch delivery</p>
    </Itemtext>
    <Buttongroup>
<Leftbutton>
</Leftbutton>
    </Buttongroup>

    </Wrap>
  )
}

export default Section

const Wrap= styled.div`
width :100vw;
height:100vh;
background-image:url('/images/model-s.jpg');
background-size:cover;
background-position:cover;
background-repeat:not-repeat;


`
const Itemtext = styled.div`
padding-top: 15vh;
text-align:center;


`