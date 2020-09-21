import React, { useState } from 'react';
import Web3 from 'web3';
import { BonusRange } from '../config'

import { Text, Box, Flex, Grid, Image, Link } from '@chakra-ui/core';


import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '220px',
    left                  : '70%',
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
                mb="-50px"
                pt="20px">

            <button onClick={openModal}>Bonuses</button>
            </Box>

            <Modal  isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    >
            
            <h2 ref={_subtitle => (subtitle = _subtitle)}> BonusRange </h2>

            {BonusRange.map(data =>
                <p> {data.eth} ETH : {data.reward}  </p>
            )}

            <button onClick={closeModal}>close</button>

          </Modal>
        </>
    )
}

export default BonusStructure;