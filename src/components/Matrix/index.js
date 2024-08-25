import {Component} from 'react'

import './index.css'

class Matrix extends Component {
  state = {
    buttons: [
      {id: 1, isClick: 'not-Click'},
      {id: 2, isClick: 'not-Click'},
      {id: 3, isClick: 'not-Click'},
      {id: 4, isClick: 'not-Click'},
      {id: 5, isClick: 'not-Click'},
      {id: 6, isClick: 'not-Click'},
      {id: 7, isClick: 'not-Click'},
      {id: 8, isClick: 'not-Click'},
    ],
    lastButtonClick: false,
  }

  onButtonClicked = id => {
    const {buttons} = this.state
    const li = buttons

    if (li[id - 1].isClick === 'not-Click') {
      li[id - 1].isClick = 'clicked'
    } else {
      li[id - 1].isClick = 'not-Click'
    }

    this.setState({buttons: li})
  }

  lastButtonClicked = () => {
    this.setState(pre => ({lastButtonClick: !pre.lastButtonClick}))
  }

  elements = (i, k, o) => {
    const {id, isClick} = i

    const buttonClicked = () => {
      k(id)
    }

    return (
      <li>
        <button
          type="button"
          onClick={buttonClicked}
          className={o ? 'orange-button' : isClick}
        >
          {id}
        </button>
      </li>
    )
  }

  render() {
    const {buttons, lastButtonClick} = this.state

    return (
      <div>
        <h1>3 X 3 Matrix</h1>

        <ul>
          {buttons.map(i =>
            this.elements(i, this.onButtonClicked, lastButtonClick),
          )}
          <li>
            <button
              type="button"
              onClick={this.lastButtonClicked}
              className={!lastButtonClick ? 'not-Click' : 'orange-button'}
            >
              9
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Matrix
