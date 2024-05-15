// Import Swiper React components
import 'swiper/css';
import { Swiper } from 'swiper/react';

const Partners = () => {
const params = {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnIteration: false
    },
    slidesPerView: 1,
    spaceBetween: 30
    };
  return (
    <section className="section">
      <div className="container py-5 border-bottom">
        {/* <Swiper {...params}>
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div className="swiper-slide">
              <img
                src={`assets/img/logos/${i}.png`}
                className="img-responsive"
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </div>
          ))}
        </Swiper> */}
        <Swiper
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          {...params}
        >
          {[1, 2, 3, 4, 5, 6].map((i, index) => (
            <div className="swiper-slide" key={index}>
              <img
                // src={`assets/img/logos/${i}.png`}
                src="https://picsum.photos/20/20"
                className="img-responsive"
                alt=""
                style={{ maxHeight: "60px" }}
              />
            </div>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
