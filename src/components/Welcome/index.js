import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {name, age} = this.props
    return (
      <h1 className="heading">
        Your name is {name} and age is {age}
      </h1>
    )
  }
}

export default Welcome
