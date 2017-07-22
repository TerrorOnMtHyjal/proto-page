import React, { Component }         from 'react';
import styled                       from 'styled-components';

const Selected = styled.div`
  display:                          flex;
  align-items:                      center;
  height:                           30px;
  padding-left:                     20px;

  &:hover {
    background-color:               orange;
  }
`;

const Available = styled.div`
  height:                           ${props => props.isOpen ? "100px" : "0px"};
  transform:                        translate(0px);
  transition:                       height 0.5s ease-in-out;
  overflow-y:                       hidden;
`;

const CategoryButton = styled.div`
  height:                           25px;
  padding-left:                     20px;
  background-color:                 #0e83cd;
  display:                          block;
  outline:                          none;
`;

const AvailableWrapper = styled.div`
  height:                           100px;
  position:                         absolute;
`;

class CategoryList extends Component {

  constructor(props){
    super(props);
    this.state = {
      isOpen : false
    }
  }

  onClick(){
    this.setState({ isOpen : !this.state.isOpen });
  }

  render() {
    return (
      <div>
        <Selected onClick={ () => this.onClick() }>
          {this.props.categories.selected.charAt(0).toUpperCase() + this.props.categories.selected.slice(1)}
        </Selected>
        <Available isOpen={this.state.isOpen}>
          <AvailableWrapper>
            {this.props.categories.available.map(available => <CategoryButton onClick={() => console.log(available, this.props.type)}>{available}</CategoryButton>)}
          </AvailableWrapper>
        </Available>
      </div>
    );
  }
}

export default CategoryList;