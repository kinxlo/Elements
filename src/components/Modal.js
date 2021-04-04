import React from 'react'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.element.name,
    }
  }


  render() {
    return (
      <>
        <div
          className='modal fade'
          id={this.state.name}
          data-backdrop='static'
          data-keyboard='false'
          tabIndex='-1'
          aria-labelledby='staticBackdropLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title' id='staticBackdropLabel'>
                  Modal title
                </h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>{this.state.name}</div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'
                >
                  Close
                </button>
                <button
                  type='button'
                  className='btn btn-primary'
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Modal
