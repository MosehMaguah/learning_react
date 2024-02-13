import PropTypes from 'prop-types'

function UserGreeting(props) {

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>

    const promptMessage = <h2 className="prompt-message">please log in to continue</h2>



    return(props.isLoggedIn ? welcomeMessage : promptMessage);
}
UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting