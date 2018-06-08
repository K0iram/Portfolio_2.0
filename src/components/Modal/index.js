import React, { Component} from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal'

import './style.css'


class PreviewModal extends Component {

  render() {
    let { modalOpen, closeModal, title } = this.props
    return (
      <div>
        <Modal onClose={closeModal} open={modalOpen} center>
          <div className="iframe-loader">
            <h1>{title}</h1>
          </div>
        </Modal>
      </div>
    );
  }
}


PreviewModal.propTypes = {
  vidUrl: PropTypes.string,
  videoTitle: PropTypes.string,
  modalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

PreviewModal.defaultProps = {
  vidUrl: "",
  videoTitle: "",
  modalOpen: false,
  closeModal: () => {}
}

export default PreviewModal

