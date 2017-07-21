import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import styled from 'styled-components';

const CodeBlock = styled.div`
  background: rgba(0,0,0,0.08);
  font-family: 'Roboto Mono';
  font-size: 12px;
  line-height: 18px;
  padding: 11px 16px;
  word-break: break-all;
  margin: 10px 0;

  //must be an easier way to do this!
  & > p, span {
    font-family: 'Roboto Mono';
    font-size: inherit;
    line-height: inherit;
    word-break: break-all;
  }

  & > span {
    font-weight: 700;
  }
`;

const CodeResult = styled.div`
  
  & > h3 {
    margin-bottom: 5px;
  }

  & > h4 {
    margin-top: 10px;
  }
  
  & > p {
    margin-bottom: 10px;
  }

  ${props => props.css ? `
    border-top: 2px solid #eee;
    padding: 20px 0;
    ` : `
    padding-bottom: 20px;
    `}
`;

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
    outline                    : 'none',
    zIndex : 11
  }
};

const ModalInner = styled.div`

`;


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
    let families = {};
    let code = ``;

    //gather all families, avoiding duplicates and all variants
    for(let type in fonts){
      const {family, variant} = fonts[type];

      !families[family] && (families[family] = { element: type, variants : [] });
      families[family].variants.push(variant.replace('talic', ''));
    }

    for(let family in families){
      let familyCode = family.replace(' ','+');
      const variants = families[family].variants;

      //check if "regular" or "i" exists as well as a weight, if so, join them and replace "regular" w/ "400"
      if(variants.includes("regular") || variants.includes("i")){
        variants.length > 1 ? familyCode += `:${variants.join().replace("regular", "400").replace("i", "400i")}|` : familyCode += `|`;
      } else {
        familyCode += `:${variants.join()}|`;
      }

      code += familyCode;
    }

    return <CodeBlock>{`<link href="https://fonts.googleapis.com/css?family=`}<span>{code.slice(0,-1)}</span>{` rel="stylesheet">;`}</CodeBlock>
  }


  generateCSS({ family, variant, category}){

    let code = [];

    code.push(<p key="familyCode">{`font-family: '${family}', ${category === "handwriting" || category === "display" ? "cursive" : category};`}</p>);

    if(variant != "regular"){
      variant != "italic" && code.push(<p key="weightCode">{`font-weight: ${variant.replace('italic', '')};`}</p>);
      variant.includes("italic") && code.push(<p key="styleCode">font-style: italic;</p>);
    }

    return <CodeBlock>{code}</CodeBlock>;
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
        <ModalInner>
          <CodeResult>
            <h3>Embed Fonts</h3>
            <p>To embed your fonts into a webpage, copy this code into the {`<head>`} of your HTML document:</p>
            {this.generateCode(this.props.fonts)}
          </CodeResult>
          <CodeResult css>
            <h3>Specify in CSS</h3>
            <p>Use the following CSS rules to specify these families:</p>
            <h4>Header</h4>
            {this.generateCSS(this.props.fonts.header)}
            <h4>Subheader</h4>
            {this.generateCSS(this.props.fonts.subheader)}
            <h4>Paragraph</h4>
            {this.generateCSS(this.props.fonts.paragraph)}
          </CodeResult>
        </ModalInner>
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