import React, { Component} from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal'
import ContentfulWorkImage from 'components/ContentfulImage/workImage'


import './style.css'


class PreviewModal extends Component {

  render() {
    let { modalOpen, closeModal, title, id, description } = this.props
    return (
      <div>
        <Modal onClose={closeModal} open={modalOpen} center>
          <div className="iframe-loader">
            <ContentfulWorkImage id={id} />
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </Modal>
      </div>
    );
  }
}


PreviewModal.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  modalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

PreviewModal.defaultProps = {
  id: "",
  title: "",
  description: "",
  modalOpen: false,
  closeModal: () => {}
}

export default PreviewModal

