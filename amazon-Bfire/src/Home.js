import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        //src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Shoes/August/SSW/Super-Saver-Weekends_PC-En_1500._CB407324597_.jpg"
        //src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
        //src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      {/* product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="the Lean startUp How constant innovation creates radically successfully bussiness paperback"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/379-X-304-Yellow-Desktop-CC_1._SY304_CB406923879_.jpg" //"https://images-eu.ssl-images-amazon.com/images/I/41iYq8vzGvL._AC_SY200_.jpg" //https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/758-X-608-Yellow-Desktop-CC_1._SY608_CB406923839_.jpg">
        />

        <Product
          id="12321341"
          title="the Lean startUp How constant innovation creates radically successfully bussiness paperback"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/379-X-304-Yellow-Desktop-CC_1._SY304_CB406923879_.jpg" //"https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/758-X-608-Yellow-Desktop-CC_1._SY608_CB406923839_.jpg" //"https://images-eu.ssl-images-amazon.com/images/I/41iYq8vzGvL._AC_SY200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="the Lean startUp How constant innovation creates radically successfully bussiness paperback"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/379-X-304-Yellow-Desktop-CC_1._SY304_CB406923879_.jpg" //"https://images-eu.ssl-images-amazon.com/images/I/41iYq8vzGvL._AC_SY200_.jpg" //https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/758-X-608-Yellow-Desktop-CC_1._SY608_CB406923839_.jpg">
        />

        <Product
          id="12321341"
          title="the Lean startUp How constant innovation creates radically successfully bussiness paperback"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/379-X-304-Yellow-Desktop-CC_1._SY304_CB406923879_.jpg" //"https://images-eu.ssl-images-amazon.com/images/I/41iYq8vzGvL._AC_SY200_.jpg" //https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/758-X-608-Yellow-Desktop-CC_1._SY608_CB406923839_.jpg">
        />

        <Product
          id="12321341"
          title="the Lean startUp How constant innovation creates radically successfully bussiness paperback"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/379-X-304-Yellow-Desktop-CC_1._SY304_CB406923879_.jpg" //"https://images-eu.ssl-images-amazon.com/images/I/41iYq8vzGvL._AC_SY200_.jpg" //https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/758-X-608-Yellow-Desktop-CC_1._SY608_CB406923839_.jpg">
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="the Lean startUp How constant innovation creates radically successfully bussiness paperback"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/379-X-304-Yellow-Desktop-CC_1._SY304_CB406923879_.jpg" //"https://images-eu.ssl-images-amazon.com/images/I/41iYq8vzGvL._AC_SY200_.jpg" //https://images-eu.ssl-images-amazon.com/images/G/31/VG-2019Dec/758-X-608-Yellow-Desktop-CC_1._SY608_CB406923839_.jpg">
        />
        </div>
      {/* product */}
    </div>
  );
}

export default Home;
