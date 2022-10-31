import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function home() {
  return (
    <Container>
        <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftbtnText="custom order"
        rightbtnText="Existing inventory"
        
        />


        <Section
         title="Model Y"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-y.jpg"
         leftbtnText="custom order"
         rightbtnText="Existing inventory"
        
        />
<Section

         title="Model 3"
         description="Order Online for Touchless Delivery"
         backgroundImg="model-3.jpg"
         leftbtnText="custom order"
         rightbtnText="Existing inventory"
        


/>
<Section

        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftbtnText="custom order"
        rightbtnText="Existing inventory"
/>

<Section

        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg="solar-panel.jpg"
        leftbtnText="order now "
        rightbtnText="learn more "
/>

<Section

        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftbtnText="order now "
        rightbtnText="learn more "
/>
<Section

        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftbtnText="shop now "
/>

    </Container>
  )
}

export default home

const Container= styled.div`
height:100v

`