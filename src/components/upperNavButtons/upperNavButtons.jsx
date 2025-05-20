import "./upperNavButtons.css"

import settingsIcon from "../../assets/svg/settingsIcon.svg"
import notificationsIcon from "../../assets/svg/notificationsIcon.svg"
import profileIcon from "../../assets/jpg/profileMockImage.jpg"

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