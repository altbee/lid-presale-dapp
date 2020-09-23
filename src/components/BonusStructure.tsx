import React, { useState } from 'react';
import Web3 from 'web3';
import { BonusRange } from '../config'

import { Text, Box, Button, Flex, Grid, Image, Link } from '@chakra-ui/core';


import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '240px',
    left                  : '78%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const BonusStructure: any = () => {

    var subtitle: any;

    const [modalIsOpen,setIsOpen] = useState(false);
    
    function openModal() {
      setIsOpen(true);
    }
   
    function afterOpenModal() {
      subtitle.style.color = '#f00';
    }
   
    function closeModal(){
      setIsOpen(false);
    }
    
    return (
        <>
            <Box
                ml="900px"
                mb="-60px"
                pt="20px"
                >
                  
            <button onClick={openModal}>Bonuses</button>
            

            <Modal  isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    >
            
              <h2 ref={_subtitle => (subtitle = _subtitle)}> BonusRange </h2>


              {BonusRange.map(data =>
                  <p> {data.eth} ETH : {data.reward}  </p>
              )}

              <Button
                  variantColor="blue"
                  bg="lid.brand"
                  color="white"
                  border="none"
                  display="block"
                  borderRadius="25px"
                  w="174px"
                  h="40px"
                  m="0px"
                  mt="30px"
                  fontWeight="regular"
                  fontSize="18px"
                  onClick={closeModal}
              >
                   Close
              </Button>

          </Modal>
          </Box>
        </>
    )
}

export default BonusStructure;