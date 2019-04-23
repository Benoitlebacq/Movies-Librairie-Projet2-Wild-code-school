import React from "react";
import { Button, Modal, ModalHeader,ModalBody,ModalFooter, Input } from 'reactstrap';

class ModalCreatList extends React.Component {
    render() {
        console.log('this.state.show in ModalCreatList => ' + this.props.show);
        return (
            <React.Fragment>
                <Modal isOpen={this.props.show} toogle={this.props.handleToogle}>
                    <ModalHeader>
                    Choose list name
                    </ModalHeader>
                    <ModalBody>
                        <Input type="text" name="list" placeholder="List name" />
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="secondary" onClick={this.props.handleToogle}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.props.handleToogle}>
                            Save List
                        </Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        )
    }
}

export default ModalCreatList;