import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Streamlit } from "streamlit-component-lib"
import { locationDetails } from "./types";
//Bootstrap example used from https://react-bootstrap.github.io/docs/components/cards


export function BasicCard({location,descrition,imageUrl}:locationDetails) {
    useEffect(()=>{ //was having issues when conditionally rendering diffrent components due to height differences so we update the frameHeifght once we render the actual component
        Streamlit.setFrameHeight()
    },[])
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl}/>
      <Card.Body>
        <Card.Title style={{color:"blue"}}>{location}</Card.Title>
        <Card.Text style={{color:"green"}}>
        {descrition}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}