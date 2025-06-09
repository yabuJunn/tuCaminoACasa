import "./upperNavButtons.css"

import { NavigationHook } from "../../../hooks/navigationHook"

// import settingsIcon from "../../../assets/svg/profileScreen/settings-02.svg"
// import notificationsIcon from "../../../assets/svg/profileScreen/bell-01.svg"
// import profileIcon from "../../../assets/jpg/Image-profile.png"

export const UpperNavButtons = () => {
    const { handleNavigation } = NavigationHook();

    return <>
        <div id="upperNavButtons">
            {/* <button className="upperNavButton" id="settingsButton">
                <img src={settingsIcon} alt="settingsIcon" />
            </button>

            <button className="upperNavButton" id="snotificationButton">
                <img src={notificationsIcon} alt="" />
            </button> */}

            <button className="upperNavButton" id="profileButton" onClick={handleNavigation.navigateToProfile}>
                <img src="https://media.istockphoto.com/id/1131164548/vector/avatar-5.jpg?s=612x612&w=0&k=20&c=CK49ShLJwDxE4kiroCR42kimTuuhvuo2FH5y_6aSgEo=" alt="" />
            </button>
        </div>
    </>
}