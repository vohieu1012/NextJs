"use client"; // This is a client component 👈🏽
import imageUser from '../assets/img/user.svg'
import imageMenu from '../assets/img/navigation-menu.svg'
import "../styles/base/sidebar.css"
import { useRouter } from 'next/navigation'
const SideBar = () => {
    const router = useRouter();

    const handleRedirectDashBoard = () => {
        console.log(1111);

        router.push('/DashBoard');
    };
    const handleRedirectLog = () => {
        router.push('/Log');
    };
    return (
        <>
            <div className="sidebar">
                <div className="sidebar--option">
                    <div className="sidebar--option__icon">
                        <i className="fa-regular fa-computer-speaker"></i>
                    </div>
                    <div className="sidebar--option__select">Device Management</div>
                </div>
                <div className="sidebar--option selected dashboard">
                    <div className="sidebar--option__icon">  </div>
                    <div className="sidebar--option__select">Dashboard</div>
                </div>
                <div className="sidebar--option logAction">
                    <div className="sidebar--option__icon"></div>
                    <div className="sidebar--option__select" onClick={handleRedirectLog}>Logs</div>
                </div>
                <div className="sidebar--option">
                    <div className="sidebar--option__icon"></div>
                    <div className="sidebar--option__select">Device Management</div>
                </div>
            </div>
            {/* <div className="sidebar--nav">
                <img src={imageMenu} />
            </div>
            <div className="sidebar--responsive">

                <div className="sidebar--responsive__account">
                    <div className="account--icon"> <img src={imageUser} /> </div>
                    <div className="account--name">Welcome John</div>
                </div>
                <div className="sidebar--responsive__select">
                    <div className="sidebar--option">
                        <div className="sidebar--option__icon">
                            <i className="fa-regular fa-computer-speaker"></i>
                        </div>
                        <div className="sidebar--option__select">Device Management</div>
                    </div>
                    <div className="sidebar--option selected dashboard">
                        <div className="sidebar--option__icon"></div>
                        <div className="sidebar--option__select" >Dashboard</div>
                    </div>
                    <div className="sidebar--option logAction">
                        <div className="sidebar--option__icon"></div>
                        <div className="sidebar--option__select" onClick={handleRedirectLog}>Logs</div>
                    </div>
                    <div className="sidebar--option">
                        <div className="sidebar--option__icon"></div>
                        <div className="sidebar--option__select">Device Management</div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default SideBar;