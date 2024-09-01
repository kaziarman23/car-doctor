import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div id="banner" className="w-full">
      <div className="carousel w-full h-[500px] rounded-xl">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full" />

          {/* overlay text div */}
          <div className="w-full h-full absolute top-0 left-0 text-white flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
            <div className="w-1/3 space-y-7 pl-10">
              <h1 className="font-bold text-5xl">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-4">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn border rounded-xl bg-transparent text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          {/* button div */}
          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a
              href="#slide6"
              className="btn btn-circle mr-5 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full" />
          {/* overlay text div */}
          <div className="w-full h-full absolute top-0 left-0 text-white flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
            <div className="w-1/3 space-y-7 pl-10">
              <h1 className="font-bold text-5xl">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-4">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn border rounded-xl bg-transparent text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a
              href="#slide1"
              className="btn btn-circle mr-5 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full" />
          {/* overlay text div */}
          <div className="w-full h-full absolute top-0 left-0 text-white flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
            <div className="w-1/3 space-y-7 pl-10">
              <h1 className="font-bold text-5xl">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-4">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn border rounded-xl bg-transparent text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a
              href="#slide2"
              className="btn btn-circle mr-5 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle hover:bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full" />
          {/* overlay text div */}
          <div className="w-full h-full absolute top-0 left-0 text-white flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
            <div className="w-1/3 space-y-7 pl-10">
              <h1 className="font-bold text-5xl">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-4">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn border rounded-xl bg-transparent text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a
              href="#slide3"
              className="btn btn-circle mr-5 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle hover:bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full" />
          {/* overlay text div */}
          <div className="w-full h-full absolute top-0 left-0 text-white flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
            <div className="w-1/3 space-y-7 pl-10">
              <h1 className="font-bold text-5xl">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-4">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn border rounded-xl bg-transparent text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a
              href="#slide4"
              className="btn btn-circle mr-5 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle hover:bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full" />
          {/* overlay text div */}
          <div className="w-full h-full absolute top-0 left-0 text-white flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21)]">
            <div className="w-1/3 space-y-7 pl-10">
              <h1 className="font-bold text-5xl">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-sm">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="space-x-4">
                <button className="btn bg-[#FF3811] border-none text-white">
                  Discover More
                </button>
                <button className="btn border rounded-xl bg-transparent text-white">
                  Latest Project
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
            <a
              href="#slide5"
              className="btn btn-circle mr-5 hover:bg-[#FF3811]"
            >
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811]">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
