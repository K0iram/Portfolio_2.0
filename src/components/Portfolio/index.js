import React, { Component } from 'react'
import PreviewModal from 'components/Modal'
import { fetchWorkPosts } from 'api/exampleWork'
import WorkPreview from './workPreview'
import './style.css'


class Portfolio extends Component {
    state = {
      workPosts: [],
      modalOpen: false,
      currentPreviewId: '',
      currentPreviewTitle: '',
      currentPreviewDescription: ''
    }

  componentDidMount() {
    fetchWorkPosts().then((res) => {
      this.setState({
        workPosts: res.data.items
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  openModal = ({ fields }) => {
    const { title, mainPic, description, url } = fields
    this.setState({
      modalOpen: true,
      currentPreviewId: mainPic.sys.id,
      currentPreviewTitle: title,
      currentPreviewDescription: description,
      currentPreviewUrl: url
    })
  }

  closeModal = () => {
    this.setState({modalOpen: false})
  }

  render() {
    const {
      modalOpen,
      currentPreviewId,
      currentPreviewTitle,
      currentPreviewDescription
    } = this.state

    return (
      <div className="work">
        <h4 className="section-title">Professional Work</h4>
        <div className="schoolProject-container">
          { this.state.workPosts.map((item, i) =>
            <div className="workPreview" onClick={() => {this.openModal(item)}}>
              <WorkPreview {...item} key={i}/>
            </div>
          )}
        </div>
        <PreviewModal
          id={currentPreviewId}
          title={currentPreviewTitle}
          description={currentPreviewDescription}
          modalOpen={modalOpen}
          closeModal={this.closeModal}
          />
      </div>
    )
  }
}

export default Portfolio
