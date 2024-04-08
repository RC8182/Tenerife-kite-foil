import { Flex } from '@chakra-ui/react'
import React from 'react'
import { ContenidoTablaViento } from './ContenidoTablaViento';

export const TablaViento = (props) => {

    const hora= props.hora;
    const viento=props.viento;
    const racha= props.racha;
    const direccion= props.direccion;
 // Creamos la lista para almacenar todos los datos de nuestra tabla
      const data= [hora, viento, racha, direccion]

  return (
    <Flex 
        className='contenedor-viento-table'
        width={'210px'}
        margin={'2px'}
        paddingBottom={'5px'}
        border={'1px'}
        borderRadius={'5px'}
        borderColor={'rgb(255, 154, 0)'}
        flexDirection={'column'}>

        <Flex
        className='viento-table'
        width={'200px'}
        height={'35px'}
        margin={'auto'}
        marginTop={'5px'}
        backgroundColor={ 'rgb(228, 224, 222)'}
        // borderRadius={'5px'}
        fontSize={'0.8rem'}>

            <Flex margin={'auto'} color={'black'}>
                Hora
            </Flex>
            <Flex margin={'auto'} color={'black'}>
                Viento
            </Flex>
            <Flex margin={'auto'} color={'black'}>
                Racha
            </Flex>
            <Flex margin={'auto'} color={'black'}>
                Dirección
            </Flex>

        </Flex>

        { // Accedemos a data[0] en este caso la lista de hora y como todas las listas tienen los mismos indices la utilizamos para iterar con map e imprimir el valor para cada elenento de nuestra lista.
                  data[0].map((e, i)=>{ return(
                    <ContenidoTablaViento hora={hora[i]} viento={viento[i]} racha={racha[i]} direccion={direccion[i]} key={i}/>
                  )
                    })}
        


    </Flex>
  )
}
