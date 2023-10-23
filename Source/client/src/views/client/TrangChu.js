
import Nav from './Nav'
import Nav2 from './sinhvien/Nav2'
import Slideshow from './Slideshow/Slideshow'
import BaCatalog from './BaCatalog/BaCatalog'
import Notification from './Notification/Notification'
import ChatBox from './sinhvien/Chat/ChatBox'
import "./Trangchu.scss"

const TrangChu = () => {
    return (
        <>
            {/* <Nav />
            <Nav2 /> */}
            <Slideshow />
            <BaCatalog />
            <Notification />
        </>
    )
}
export default TrangChu;