import { NavLink } from 'react-router'
import { works } from '../../works/works'
import cs from './DesktopHeader.module.scss'
import { formatRoute } from '../WorkList/formatRoute'

export const DesktopHeader = () => {
  return <nav className={cs.desktopNav}>
    <NavLink to="/" className={({ isActive }) => isActive ? cs.isActive : undefined}>Home</NavLink>
    <NavLink to="/contact" className={({ isActive }) => isActive ? cs.isActive : undefined}>Contact</NavLink>
    {works.map(work => {
      const { title } = work
      return <NavLink key={title} to={`/${formatRoute(title)}`} className={({ isActive }) => isActive ? cs.isActive : undefined}>{title}</NavLink>
    })}
  </nav>
}