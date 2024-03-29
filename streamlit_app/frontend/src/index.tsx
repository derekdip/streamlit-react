import { Streamlit, RenderData } from "streamlit-component-lib"
import {BasicCard} from "./card"
import React, { useEffect } from "react";

import { createRoot } from 'react-dom/client';
import GridExample from "./cardMap";
import { Hello } from "./hello";
const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onRender)
Streamlit.setComponentReady()

// The following is an example that sends data back to our python custom_component call with the .setComponentValue() function
// // Add a click handler to our button. It will send data back to Streamlit.
// button.onclick = function(): void {
//   // Increment numClicks, and pass the new value back to
//   // Streamlit via `Streamlit.setComponentValue`.
//   numClicks += 1
//   Streamlit.setComponentValue(numClicks)
// }


interface RenderWrapper{
  children:React.JSX.Element[]|React.JSX.Element
}
function RenderWrapper({children}:RenderWrapper){
  useEffect(()=>{
    Streamlit.setFrameHeight()
  })
  return (
      <>
        {children}
      </>
      )
}
// /**
//  * The component's render function. This will be called immediately after
//  * the component is initially loaded, and then again every time the
//  * component gets new data from Python.
//  */
function onRender(event: Event): void {
  // Get the RenderData from the event
  const data = (event as CustomEvent<RenderData>).detail
  // const container = document.getElementById('app');
  // const root = createRoot(container!); // createRoot(container!) if you use TypeScript 
  const componentType = data.args["component_type"]
  console.log(data.args)
  if (componentType=="card_gallery"){
    const imageUrl = data.args["image_url"]
    const description = data.args["description"]
    const location = data.args["location"]
    root.render(
      <RenderWrapper>
        <GridExample>
            <BasicCard imageUrl={imageUrl} descrition={description} location={location}/>
            <BasicCard imageUrl={imageUrl} descrition={description} location={location}/>
            <BasicCard imageUrl={imageUrl} descrition={description} location={location}/>
            <BasicCard imageUrl={imageUrl} descrition={description} location={location}/>
            <BasicCard imageUrl={imageUrl} descrition={description} location={location}/>
            <BasicCard imageUrl={imageUrl} descrition={description} location={location}/>
        </GridExample>
      </RenderWrapper>
    )
  }
  else if(componentType=="card"){
    const imageUrl = data.args["image_url"]
    const description = data.args["description"]
    const location = data.args["location"]
    root.render(
      <RenderWrapper>
          <BasicCard imageUrl={imageUrl} descrition={description} location={location}/>
      </RenderWrapper>
    )
  }
  else if(componentType=="hello"){
    root.render(
      <RenderWrapper>
          <Hello/>   
      </RenderWrapper>
    )
  }
}
