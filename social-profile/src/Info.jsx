import React from 'react';
import './index.css';

import profilePicture from './media/profilePicture.jpg'
let username = 'Sanro Thodi'
let profession = 'Photographer'
let url = 'https://sanrothodi.com'

let email = 'sanrothodi@protonmail.com'
let emailLink = `mailto:${email}`
let linkedin = 'https://linkedin.com'

let altText = 'Refresh the page'



const Info = () => {
  return (
    <header>
      <div className='profile-picture-box'>
        <img src={profilePicture} className="profile-picture" alt={altText}></img>
      </div>
      <div className='info'>
        <div><h1 className='username'>{username}</h1></div>
        <div><h3 className='profession'>{profession}</h3></div>
        <div className='url-box'><a href={url} className='url'>{url}</a></div>
      </div>
      <div className='buttons'>
        <div className='buttons-line'><a href={emailLink}> 
          <button className='button email-button'>
            <svg preserveAspectRatio="xMidYMid meet" width="25" height="25" viewBox="256 0 10 512" className='email-button-icon'>
              <path d="M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"></path>
            </svg>
            <span className='button-text email'>Email</span>
          </button></a></div>
        <div className='buttons-line'><a href={linkedin}>
          <button className='button linkedin-button'>
            <svg preserveAspectRatio="xMidYMid meet" width="20" height="20" viewBox="256 0 10 512" className='linkedin-button-icon'>
              <path d="M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"></path>
            </svg>
            <span className='button-text linkedin'>LinkedIn</span>
          </button></a></div>
      </div>
    </header>
  )
}

export default Info



