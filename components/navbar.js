import Link from "next/link"

export default function Navbar() {
    return (
        
        <div className = "top">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"/>
            <div className="topLeft">
                <Link href="/">
                <img
                    className="LogoImg"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_xiCAwX4JHf4O_hDoeBQTuV6r-hXviCbeEA&usqp=CAU"
                    alt="Logo"
                />
                </Link>
            </div>
            
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link href="/home"><a target="_blank">Home</a></Link></li>
                    <li className="topListItem"> Practice</li>
                    <li className="topListItem">Compete</li>
                </ul>
            </div>
            <div className="topRight">
                <li className="topRightItem">Profile</li>
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}