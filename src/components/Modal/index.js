import React, { Component} from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal'
import ContentfulWorkImage from 'components/ContentfulImage/workImage'


import './style.css'


class PreviewModal extends Component {

  render() {
    let { modalOpen, closeModal, title, id, description, url, codeUrl, techStack} = this.props
    return (
      <div className="modal-container">
        <Modal onClose={closeModal} open={modalOpen} center>
          <div className="project-container">
            <div className="project-left">
              <div className="project-image">
                <ContentfulWorkImage id={id} />
              </div>
              <div className="project-description">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
            <div className="project-right">
              <div className="project-stack">
                <h3>Tech Stack</h3>
                <ul>
                  {techStack.map(function(listValue){
                  return <li>{listValue}</li>
                })}
                </ul>
              </div>
              <div className="project-links">
                <a href={url} target="_blank">Check out the site</a>
                {!!codeUrl &&
                  <a href={codeUrl} target="_blank">Check out the code</a>
                }
              </div>
            </div>
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

