//https://reactstrap.github.io/components/modals/

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Form } from 'reactstrap';

class ModalTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.openModal = this.openModal.bind(this);
    this.close = this.close.bind(this);
  }

  openModal() { 
        /*if (this.state.modal === true){
            console.log("biloute")
        }else*/{
            this.setState ({
            modal: true})
        }
  }

  close() {


    /*this.setState ({
      modal: false})*/
    }


  render() {
    return (
      <div>
        <Button onClick={this.openModal} >+ Add List</Button>
        {console.log(this.state.modal)}

        <Modal isOpen={this.state.modal} >
          <ModalHeader>"Choose list name" {console.log(this.state.modal)}</ModalHeader>
          <ModalBody>
          <Form>
          <Input type="text" name="list" placeholder="List name"  />
          </Form>
            </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.createNewList}>Create List</Button>{' '}
            <Button color="secondary" onClick={this.close}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalTest;