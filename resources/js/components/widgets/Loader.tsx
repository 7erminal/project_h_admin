import React from "react";
import { Modal } from "react-bootstrap";

type Props = {
    show: boolean
    handleClose: ()=>void
}
const Loader: React.FC<Props> = ({show, handleClose})=>{
    return <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
    centered
  >
    <Modal.Body>
      Loading...
    </Modal.Body>
  </Modal>
}

export default Loader