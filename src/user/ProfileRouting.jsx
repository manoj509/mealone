import React from 'react'
import PublicNavbar from '../public/pages/PublicNavbar'
import Profile from './pages/Profile'

const ProfileRouting = () => {
  return (
    <div>
      <PublicNavbar isFalse={true}/>
      <Profile/>
    
    </div>
  )
}

export default ProfileRouting