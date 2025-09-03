import { Link } from 'react-router-dom'

const BannerBox = (props) => {
  return (
    
    <div className="box BannerBox overflow-hidden rounded-lg group">
    <Link to={'/'}>
        <img src={props.img} className="w-full h-auto transition-all group-hover:scale-110" alt="Banner"/>
    </Link>
    </div>
  )
}

export default BannerBox;
