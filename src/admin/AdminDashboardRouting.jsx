import React from 'react'
import AdminNavbar from './components/AdminNavbar'
import Dashboard from './components/Dashboard'
import SideBar from './components/SideBar'

const AdminDashboardRouting = () => {
  return (
    <div className="flex">
     <SideBar/>
      <div className="flex-1">
        <AdminNavbar />
        <Dashboard />
      </div>
    </div>
  )
}

export default AdminDashboardRouting