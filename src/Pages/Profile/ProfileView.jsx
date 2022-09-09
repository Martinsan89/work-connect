// import Sidebar from "../../components/Sidebar/Sidebar"
import Profile from "../../components/Profile/Profile"
import NavSideBar from "../../components/NavProfileMenu/NavSideBar"


const ProfileView = () => {
  return (
    <div>
      <Profile/>
      <div style={{paddingTop:'1rem'}}>
        <NavSideBar/>
      </div>
    </div>
  )
}

export default ProfileView