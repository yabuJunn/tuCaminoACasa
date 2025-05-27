import "./upperNavButtons.css"

import settingsIcon from "../../../assets/svg/profileScreen/settings-02.svg"
import notificationsIcon from "../../../assets/svg/profileScreen/bell-01.svg"
import profileIcon from "../../../assets/jpg/Image-profile.png"

export const UpperNavButtons = () => {
    return <>
        <div id="upperNavButtons">
            <button className="upperNavButton" id="settingsButton">
                <img src={settingsIcon} alt="settingsIcon" />
            </button>

            <button className="upperNavButton" id="snotificationButton">
                <img src={notificationsIcon} alt="" />
            </button>

            <button className="upperNavButton" id="profileButton">
                <img src={profileIcon} alt="" />
            </button>
        </div>
    </>
}