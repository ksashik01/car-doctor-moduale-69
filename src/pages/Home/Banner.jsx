
import img1 from '../.././assets/images/banner/1.jpg'
import img2 from '../.././assets/images/banner/2.jpg'
import img3 from '../.././assets/images/banner/3.jpg'
import img4 from '../.././assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div>
           <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full ">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute flex transform -translate-y-1/2 left-5 right-5 bottom-0">
      <div className='text-white space-y-7' >

        <h2 className='text-6xl'>Affortable price for car servicing</h2>
        <p>There are many varoation of passages of awai but majority have sufferd alternation</p>
        <button className="btn btn-accent">Discover</button>
        <button className="btn btn-secondary">latest Project</button>


      </div>

      <div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>

      </div>

    </div>
    </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={img2}className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={img3}className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={img4}className="w-full" />
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;