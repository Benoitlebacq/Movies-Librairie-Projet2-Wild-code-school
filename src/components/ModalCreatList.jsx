import React from "react";
import { Button, Modal, ModalHeader,ModalBody,ModalFooter } from 'reactstrap';

class ModalCreatList extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Modal show={this.props.show} onHide={this.handleClose}>
                    <ModalHeader closeButton>
                    </ModalHeader>
                    <ModalBody>Woohoo, you're reading this text in a modal!</ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button> 
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

export default ModalCreatList;