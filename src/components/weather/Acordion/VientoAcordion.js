import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'
import { Viento } from '../ModulosTiempo/viento'
import { TablaViento } from './Tablas/TablaViento'

export const VientoAcordion = (props) => {
    const direccion= props.direccion
    const hora= props.hora
    const viento= props.viento
    const racha= props.racha

  return (
    <Accordion defaultIndex={[2]} allowMultiple>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box as="span" flex='2' textAlign='left' >
            <Viento titulo={'Previsión Viento'} />
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} >
        <TablaViento hora={hora} viento={viento} racha={racha} direccion={direccion}/>
      </AccordionPanel>
    </AccordionItem>
 </Accordion>
  )
}
