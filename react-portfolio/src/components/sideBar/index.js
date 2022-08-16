import { NavLink,Link } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-jp.png'
import LogoSubtitle from '../../assets/images/jp_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faEnvelope,faUser} from '@fortawesome/free-solid-svg-icons'

const SideBar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='logo-subtitle' />
            
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-list'to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>

    </div>
)

export default SideBar 