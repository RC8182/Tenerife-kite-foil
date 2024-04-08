import { Flex, Image } from '@chakra-ui/react';
import React from 'react'

export const Olas = () => {
    const altSig= '0.9 m';
    const altMed= '0.5 m';
    const altMax= '1.8 m';

  return (
    <Flex flexDirection={'column'} fontSize={'0.7rem'}>
        <Flex margin={'2px'}>
            <Image 
                    className='icono-olas'    
                    boxSize='36px'
                    borderRadius='full'
                    src={require('../Icons/tsunami_waves_wave_sea_removebg-preview.png')} 
                    alt='Icono-Olas' 
                    zIndex={10}
                    />
            <Flex flexDirection={'column'}>
                <Flex flexDirection={'row'}>
                    <Flex margin={'2px'}>
                        Altura Significativa:
                    </Flex>
                    <Flex margin={'2px'}>
                        {altSig}
                    </Flex>
                </Flex>

                <Flex flexDirection={'row'}>
                    <Flex margin={'2px'}>
                        Altura Media:
                    </Flex>
                    <Flex margin={'2px'}>
                        {altMed}
                    </Flex>
                </Flex>

                <Flex flexDirection={'row'}>
                    <Flex margin={'2px'}>
                        Altura Máxima:
                    </Flex>
                    <Flex margin={'2px'}>
                        {altMax}
                    </Flex>
                </Flex>

            </Flex>

        </Flex>
    </Flex>
   
  )
}
