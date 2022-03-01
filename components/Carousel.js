import { Children } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = ({ children, maxItemsPerSlide = 3, autoplay = true, dots = true, arrows = false, breakpoint1 = 374, breakpoint2 = 991, breakpoint3 = 1199, carouselRef }) => {
    let quantityOfChildren = Children.count(children)

    if (!quantityOfChildren) {
        quantityOfChildren = maxItemsPerSlide
    }

    const maxItem = Math.min(quantityOfChildren, maxItemsPerSlide)
    const settings = {
        arrows: arrows,
        dots: dots,
        infinite: true,
        speed: 500,
        autoplay: autoplay,
        slidesToShow: maxItem,
        slidesToScroll: 1,
        ref:carouselRef,
        // nextArrow: <CarouselNextArrow />,
        // prevArrow: <CarouselPrevArrow />,
        responsive: [
            {
                breakpoint: breakpoint3,
                settings: {
                    slidesToShow: maxItem < 3 ? maxItem : 3
                },
            },
            {
                breakpoint: breakpoint2,
                settings: {
                    slidesToShow: maxItem < 2 ? maxItem : 2
                },
            },
            {
                breakpoint: breakpoint1,
                settings: {
                    slidesToShow: maxItem < 1 ? maxItem : 1
                },
            },
        ],
    }

    return (
        <div className="relative w-100 px-20">
            <Slider {...settings}>{children}</Slider>
        </div>
    )
}

export default Carousel
