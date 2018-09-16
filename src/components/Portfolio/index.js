import React, { Component } from 'react'
import PreviewModal from 'components/Modal'
import { fetchWorkPosts, fetchProjectPosts } from 'api/exampleWork'
import WorkPreview from './workPreview'
import './style.css'


class Portfolio extends Component {
    state = {
      workPosts: [],
      projectPosts: [],
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

    fetchProjectPosts().then((res) => {
      this.setState({
        projectPosts: res.data.items
      })
    })
    .catch((err) => {
      console.error(err)
    })
  }

  openModal = ({ fields }) => {
    const { title, mockup, description, techStack, url, codeUrl } = fields
    const mockupID = mockup ? mockup.sys.id : null
    this.setState({
      modalOpen: true,
      currentPreviewId: mockupID,
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
        <div className="work-container">
          <h4 className="section-title">Professional Work</h4>
          <div className="work-project-container">
            { this.state.workPosts.map((item, i) =>
              <div className="workPreview" key={i} onClick={() => {this.openModal(item)}}>
                <WorkPreview {...item}/>
              </div>
            )}
          </div>
          <h4 className="section-title">Personal Projects</h4>
          <div className="school-project-container">
            { this.state.projectPosts.map((item, i) =>
              <div className="workPreview" key={i} onClick={() => {this.openModal(item)}}>
                <WorkPreview {...item}/>
              </div>
            )}
          </div>
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
