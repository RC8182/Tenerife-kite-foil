import { Flex } from '@chakra-ui/react'
// import { Olas } from '../../Modulos Tiempo/Olas'
import { Sunrise } from '../../ModulosTiempo/sunrise'
import { Sunset } from '../../ModulosTiempo/sunset'
import { Temperature } from '../../ModulosTiempo/temperature'
import { VientoAcordion } from '../../Acordion/VientoAcordion'

export const DayCard = (props) => {
    const alba= props.alba;
    const amanecer= props.amanecer;
    const atardecer= props.atardecer;
    const crepusculo= props.crepusculo;

    const fecha=props.fecha;
    const hora= props.hora;
    const viento= props.viento;
    const racha= props.racha;
    const direccion= props.direccion;

  return (
    <Flex
        margin={'2px'}
        width={'auto'}
        border={'1px'}
        borderColor={'rgb(255, 154, 0)'}
        borderRadius={'5px'}>
        <Flex margin={'2px'} padding={'2px'} flexDirection={'column'} width={'auto'}>
          <Flex textTransform={'capitalize'}>
            {fecha}
          </Flex>
          <Flex flexDirection={'row'}>
            <Flex>
              <Sunrise alba={alba} amanecer={amanecer}/>
            </Flex>
            <Flex>
              <Sunset atardecer= {atardecer} crepusculo= {crepusculo} />
            </Flex>
          </Flex>

          <Flex flexDirection={'column'} width={'100%'}>
            <VientoAcordion hora={hora} viento={viento} racha={racha} direccion={direccion} />
          </Flex>
          <Flex>
            <Temperature />
          </Flex>
          <Flex>
            {/* <Olas /> */}
          </Flex>
          
        </Flex>
    
    </Flex>
  )
}
