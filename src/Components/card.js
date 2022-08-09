import React from 'react';
import "./eatwell.css";

import { Link } from "react-router-dom";
import first from '../Components/img/first.png';
import {BsArrowRightCircle} from 'react-icons/bs';
import {
    Box,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react';



const Card = ({image, name, link }) => {
    console.log("name", name)
    const {isOpen, onOpen, onClose}= useDisclosure();

    return (

        <>  <div className="content-image">
            <div className="images" >
           <div> <Link to="/Detail" state={{youtube:link}}><img src={image} alt="" /> </Link> </div>
               
        </div>
     
                
                
<div className="menu" onClick={onOpen}>{name} <BsArrowRightCircle size={10} top={2}/> </div>
<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Recipe</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
    You’ve probably heard about the ketogenic or ‘keto’ diet. Well, 
    this book delves into everything you’ve ever wanted 
    to know about dealing with gut issues, chronic illnesses,
     and autoimmune diseases through your diet. 
    </ModalBody>

    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={onClose}>
        Download
      </Button>
      <Button variant="ghost">Cancel</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
</div>
        </>

    );
}

export default Card;
