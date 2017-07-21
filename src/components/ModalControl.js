import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import styled from 'styled-components';

const modalStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.5)',
    zIndex : 10
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
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px',
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

  generateCode(fonts) {
    let code = ``;

    for(let type in fonts){
      code += `${fonts[type].family}`;

      if(fonts[type].variant != "regular"){
        code += `:${fonts[type].variant.replace('talic','')}`;
      }

      code += `|`;
    }

    return `<link href="https://fonts.googleapis.com/css?family=${code.slice(0, -1)}" rel="stylesheet">;`
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}><i className="fa fa-code" aria-hidden="true"></i>Get Code</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="This is modal, friend."
          style={modalStyles}
        >
        <p>{this.generateCode(this.props.fonts)}</p>
        </Modal>
      </div>
    );
  }
}

const mapState = ({ appState }) => {
  return {
    fonts : appState.activeFonts
  }
};

export default connect(mapState)(ModalControl);