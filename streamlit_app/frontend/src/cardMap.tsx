import React, { useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Streamlit } from "streamlit-component-lib"
import { BasicCard } from './card';
import { gridChildren } from './types';
import { Container } from 'react-bootstrap';


//Bootstrap example used from https://react-bootstrap.github.io/docs/components/cards
function GridExample({children}:gridChildren) {
    let RowElements:React.JSX.Element[] = []
    let columnNum= 0
    for(let Element of children){ //this part of the code just groups columns into rows and returns a "JSX grid" of any size
        RowElements.push(
            <Col key={columnNum} xs={6} md={4} style={{marginBottom:30}}>
                {Element}
            </Col>
            )
        columnNum++
    }
  return (
    <Container fluid={true}>
        <Row xs={1} md={2} className="g-4" key={0}>
            { RowElements }
        </Row>
    </Container>
  );
}

export default GridExample;