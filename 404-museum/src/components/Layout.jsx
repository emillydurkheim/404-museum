import { Link } from 'react-router-dom';
export function Header({back=false}){return <header className="navbar"><Link to="/" className="logo" aria-label="404 Museum home">404® MUSEUM</Link><nav aria-label="Main navigation">{back?<Link to="/#collection">← BACK TO MUSEUM</Link>:<><a href="/#collection">COLLECTION</a><a href="/#about">ABOUT</a></>}</nav></header>}
export function Footer({text='SYSTEM STATUS: UNSTABLE'}){return <footer className="footer"><span>© 2026 — 404 MUSEUM</span><span>{text}</span></footer>}
