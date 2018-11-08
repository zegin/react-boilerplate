import React from 'react'
import Axios from 'axios'

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
    }
  }

  componentDidMount() {
    Axios.post('/api/test', {
      password: '12345',
    })
      .then(res => {
        this.setState({ content: res.data })
      })
      .catch(() => {
        this.setState({ content: 'Error' })
      })
  }

  render() {
    const { content } = this.state
    return content ? <div>{content}</div> : <div>Fetching data ... </div>
  }
}

export default Card
