// import {Component} from 'react'
// import {Redirect} from 'react-router-dom'
// import Cookies from 'js-cookie'

// import './index.css'

// class LoginForm extends Component {
//   state = {
//     usernameInput: '',
//     passwordInput: '',
//     showSubmitError: false,
//     errorMsg: '',
//   }

//   onSubmitSuccess = jwtToken => {
//     const {history} = this.props

//     Cookies.set('jwt_token', jwtToken, {expires: 30})
//     history.replace('/')
//   }

//   onSubmitFailure = errorMsg => {
//     this.setState({showSubmitError: true, errorMsg})
//   }

//   onSubmitForm = async event => {
//     event.preventDefault()
//     const {usernameInput, passwordInput} = this.state
//     const userDetails = {usernameInput, passwordInput}
//     const url = 'https://apis.ccbp.in/login'
//     const options = {
//       method: 'POST',
//       body: JSON.stringify(userDetails),
//     }
//     const response = await fetch(url, options)
//     const data = await response.json()
//     console.log(data)
//     if (response.ok === true) {
//       this.onSubmitSuccess(data.jwt_token)
//     } else {
//       this.onSubmitFailure(data.error_msg)
//     }
//   }

//   onChangeUsername = event => {
//     this.setState({usernameInput: event.target.value})
//   }

//   onChangePassword = event => {
//     this.setState({passwordInput: event.target.value})
//   }

//   render() {
//     const {usernameInput, passwordInput, showSubmitError, errorMsg} = this.state
//     const token = Cookies.get('jwt_token')
//     if (token !== undefined) {
//       return <Redirect to="/" />
//     }
//     return (
//       <div className="app-container">
//         <div className="login-card-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
//             className="logo-image"
//             alt="website logo"
//           />
//           <form onSubmit={this.onSubmitForm}>
//             <div className="input-container">
//               <label className="input-label" htmlFor="username">
//                 Username
//               </label>
//               <br />
//               <input
//                 type="text"
//                 className="input-username"
//                 id="username"
//                 value={usernameInput}
//                 onChange={this.onChangeUsername}
//                 placeholder="Enter Username"
//               />
//             </div>
//             <br />
//             <div className="password-container">
//               <label className="input-label" htmlFor="password">
//                 Password
//               </label>
//               <br />
//               <input
//                 type="password"
//                 className="input-username"
//                 id="password"
//                 value={passwordInput}
//                 onChange={this.onChangePassword}
//                 placeholder="Enter Password"
//               />
//             </div>
//             <br />
//             <button type="submit" className="button">
//               Login
//             </button>
//             {showSubmitError && <p className="error-message">*{errorMsg}</p>}
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default LoginForm

import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({errorMsg, showSubmitError: true})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="login-website-logo"
            alt="website logo"
          />
          <div className="input-container">
            <label className="input-label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              value={username}
              className="username-input-field"
              onChange={this.onChangeUsername}
              placeholder="Username"
            />
          </div>
          <div className="input-container">
            <label className="input-label" htmlFor="password">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="password-input-field"
              onChange={this.onChangePassword}
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
