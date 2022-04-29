import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'

// import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
          <img
            className="logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </Link>
        <div className="nav-lg-container">
          <ul className="nav-menu">
            <Link to="/" className="nav-item">
              <li>Home</li>
            </Link>
            <Link to="/jobs" className="nav-item">
              <li>Jobs</li>
            </Link>
          </ul>
          <button
            type="button"
            className="logout-button"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
        <div className="nav-md-container">
          <ul className="nav-icon">
            <li>
              <Link to="/">
                <AiFillHome className="home-icon" />
              </Link>
            </li>
            <li>
              <Link to="/jobs">
                <BsFillBriefcaseFill className="brief-icon" />
              </Link>
            </li>
          </ul>
          <button type="button" className="btn" onClick={onClickLogout}>
            <FiLogOut />
          </button>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)
