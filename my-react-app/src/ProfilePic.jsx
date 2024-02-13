

function ProfilePic(){
    const imgUrl = './assets/CE.jpg'
    const handleClick = (e) => e.target.style.display = "none";
    return(
        <img onClick={(e) => handleClick(e)} src={imgUrl}></img>
    )
}

export default ProfilePic