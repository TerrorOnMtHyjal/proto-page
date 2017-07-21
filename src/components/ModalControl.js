import React, { Component } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import ModalContent from './ModalContent';

const ModalControlWrapper = styled.div`
  flex-basis: 0;
  flex-grow: 1;
`;
const ModalButton = styled.button`
  height: 50px;
  width: 100%;
`;

const modalStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.5)',
    zIndex : 10000
  },
  content : {
    width: "800px",
    height: "600px",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    zIndex : 11
  }
};

class ModalControl extends Component {
  constructor(props){
    super(props);

    this.state = { 
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <ModalControlWrapper>
        <ModalButton onClick={this.openModal}><i className="fa fa-code" aria-hidden="true"></i>Get Code</ModalButton>
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} contentLabel="This is modal, friend." style={modalStyles}>
          <ModalContent />
        </Modal>
      </ModalControlWrapper>
    );
  }
}

export default ModalControl;