import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const Pleamar = (props) => {
    const pleamar1= props.pleamar1;
    const pleamar2= props.pleamar2;

  
  return (
    <Flex flexDirection={'column'} fontSize={'0.7rem'}>
        <Flex margin={'2px'}>
        <Image 
                className='icono-pleamar'    
                boxSize='36px'
                borderRadius='full'
                src={require('../Icons/forecast_weather-pleamar-removebg-preview.png')} 
                alt='Icono-Pleamar' 
                zIndex={10}
                />
        <Flex flexDirection={'column'}>
            <Flex flexDirection={'row'}>
            <Flex margin={'2px'}>
            Pleamar 1:
            </Flex>
            <Flex margin={'2px'}>
            {pleamar1}
            </Flex>
            </Flex>

            <Flex flexDirection={'row'}>
            <Flex margin={'2px'}>
            Pleamar 2: 
            </Flex>
            <Flex margin={'2px'}>
            {pleamar2}
            </Flex>
            </Flex>

        </Flex>

    </Flex>

  </Flex>
  )
}
