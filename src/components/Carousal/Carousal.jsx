import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousal.module.css";
import { useEffect } from "react";

import "swiper/css";

const Controls = ({ data }) => {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(0);
  }, [swiper]);

  return null;
};

const Carousal = ({ data, renderCardComponent }) => {
  return (
    <div className={styles.Wrapper}>
      <Swiper
        initialSlide={0}
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={40}
        allowTouchMove={true}
      >
        <Controls data={data} />

        {data.map((item, index) => (
          <SwiperSlide key={index}>
            {renderCardComponent(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousal;