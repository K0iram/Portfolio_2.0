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
      currentPreviewDescription: '',
      currentPreviewUrl: '',
      currentPreviewCodeUrl: '',
      currentTechStack: []
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
    const { title, mockup, description, techStack, url, codeUrl } = fields
    this.setState({
      modalOpen: true,
      currentPreviewId: mockup.sys.id,
      currentPreviewTitle: title,
      currentPreviewDescription: description,
      currentPreviewUrl: url,
      currentPreviewCodeUrl: codeUrl || null,
      currentTechStack: techStack
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
      currentPreviewDescription,
      currentPreviewUrl,
      currentPreviewCodeUrl,
      currentTechStack
    } = this.state

    return (
      <div className="work">
        <h4 className="section-title">Professional Work</h4>
        <div className="schoolProject-container">
          { this.state.workPosts.map((item, i) =>
            <div className="workPreview" key={i} onClick={() => {this.openModal(item)}}>
              <WorkPreview {...item}/>
            </div>
          )}
        </div>
        <PreviewModal
          id={currentPreviewId}
          title={currentPreviewTitle}
          description={currentPreviewDescription}
          techStack={currentTechStack}
          url={currentPreviewUrl}
          codeUrl={currentPreviewCodeUrl}
          modalOpen={modalOpen}
          closeModal={this.closeModal}
          />
      </div>
    )
  }
}

export default Portfolio
