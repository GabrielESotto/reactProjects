import styled from "styled-components";
import { MdClose } from 'react-icons/md'

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0,0,0, 0.2);
  background-color: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-color: #000;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  background-color: #ebf2ff;
`

export const ModalP = styled.p`
  margin-bottom: 1rem;
`

export const ModalButton = styled.button`
  padding: 10px 24px;
  background-color: #141414;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: 0.4s ease-in-out;
  font-weight: bold;
  letter-spacing: 1.2px;
  
  &:hover{
    color: #000;
    background-color: #e9ba23;
  }
`

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  transition: 0.2s ease-in-out;

  &:hover{
    color: #e9ba23;
  }
`

export const ModalH1 = styled.h1`
  font-size: 32px;
`
