import aboutusIMG from '../../assets/about-us/Selection.jpg'
import './AboutUs.css'
export default function AboutUs() {
  return (
    <>
      <div className="aboutus-container" id='about'>
        <div className="header-aboutus">
          <h2>About Gartenbau Website Demo</h2>
          <div className="text-aboutus">
            <p className="text1 aboutus">
              At Gartenbau, we believe in creating outdoor living spaces that
              are both beautiful and functional. With over 20 years of
              experience, our team of passionate landscape architects and
              skilled craftsmen is dedicated to bringing your vision to life. We
              specialize in sustainable designs, meticulous construction, and
              attentive maintenance, ensuring your garden thrives for years to
              come.
            </p>
            <br />
            <p className="text2 aboutus">
              Our commitment to quality, creativity, and client satisfaction
              sets us apart. Let us transform your property into a personal
              oasis.
            </p>
          </div>
        </div>
        <div className="photo-aboutus">
            <img className="img-aboutus" src={aboutusIMG} alt='KAR-LAN AboutUs'/>
        </div>
      </div>
    </>
  );
}
