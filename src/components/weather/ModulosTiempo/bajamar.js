import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

export const Bajamar = (props) => {
    const bajamar1= props.bajamar1;
    const bajamar2= props.bajamar2;

  
  return (
    <Flex flexDirection={'column'} fontSize={'0.7rem'}>
        <Flex margin={'2px'}>
        <Image 
                className='icono-bajamar'    
                boxSize='36px'
                borderRadius='full'
                src={require('../Icons/water_climate_forecast_weather-bajamar-removebg-preview.png')} 
                alt='Icono-Bajamar' 
                zIndex={10}
                />
        <Flex flexDirection={'column'}>
            <Flex flexDirection={'row'}>
            <Flex margin={'2px'}>
            Bajamar 1:
            </Flex>
            <Flex margin={'2px'}>
            {bajamar1}
            </Flex>
            </Flex>

            <Flex flexDirection={'row'}>
            <Flex margin={'2px'}>
            Bajamar 2: 
            </Flex>
            <Flex margin={'2px'}>
            {bajamar2}
            </Flex>
            </Flex>

        </Flex>

    </Flex>

  </Flex>
  )
}
