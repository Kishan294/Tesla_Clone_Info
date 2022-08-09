import React from 'react'
import { Section } from './Section'
import tesla_roadster from '../Images/tesla-roadster.jpg'
import Model_S from '../Images/model-s.jpg'
import Model_3 from '../Images/model-3.jpg'
import Model_X from '../Images/model-x.jpg'
import Model_Y from '../Images/model-y.jpg'

export const Home = () => {
  return (
    <div>
        <Section 
        title ="Tesla"  
        model = "Roadster"
        topSpeed = "+250mph"
        range= "620ml"
        time= "1.9s"
        bgImg= {tesla_roadster}
        />
        <Section 
        title ="Model S"  
        model = ""
        topSpeed = "+200mph"
        range= "390ml"
        time= "1.99s"
        bgImg= {Model_S}
        />
        <Section 
        title ="Model 3"  
        model = ""
        topSpeed = "+180mph"
        range= "400ml"
        time= "2.99s"
        bgImg= {Model_3}
        />
        <Section 
        title ="Model X"  
        model = ""
        topSpeed = "+150mph"
        range= "350ml"
        time= "1.55s"
        bgImg= {Model_X}
        />
        <Section 
        title ="Model Y"  
        model = ""
        topSpeed = "+190mph"
        range= "410ml"
        time= "2.05s"
        bgImg= {Model_Y}
        />
    </div>
  )
}
