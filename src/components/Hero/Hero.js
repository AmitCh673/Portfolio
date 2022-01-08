import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row padding>
   <LeftSection>
     <SectionTitle main center>
     Hi. I’m Amit chaturvedi.<br />
      
     </SectionTitle>
     <SectionText>
     I’m  a front-end developer  with a keen eye for creating engaging UI, bringing products to life.
     </SectionText>
     <Button onClick={()=>window.location = 'https://www.linkedin.com/in/amit-chaturvedi-365a4b169/'}>Hire Me!</Button>
   </LeftSection>
 

 </Section>
);

export default Hero;