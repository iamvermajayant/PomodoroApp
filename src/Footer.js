import { GithubOutlined, HeartFilled, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
        <hr style={{width: '50%', marginBottom: '1rem'}}></hr>
        <div className="footer-icons-wrapper">
        <a href="https://www.instagram.com/jayantverma.js/" target="_blank" rel="noreferrer"><InstagramOutlined style={{fontSize: '30px',  marginRight: '1.5rem'}} /></a>
        <a href="https://www.linkedin.com/in/jayant-verma-13062001/" target="_blank" rel="noreferrer"><LinkedinOutlined  style={{fontSize: '30px',  marginRight: '1.5rem'}} /></a>
        <a href="https://github.com/iamvermajayant" target="_blank" rel="noreferrer"><GithubOutlined  style={{fontSize: '30px',  marginRight: '1rem'}} /></a>
        </div>
        <p>Made with <HeartFilled style={{fontSize: '20px', color: 'red'}} /> by Jayant Verma</p>
    </footer>
  )
}

export default Footer