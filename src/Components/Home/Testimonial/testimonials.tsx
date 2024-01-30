import TestimonialSection from "./testimonialSection";
import { Testimonial } from "../../../Data/Schema/testimonialSchema";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


//TODO: Change how the right and left arrows looks later
// const CustomRightArrow = () => {
//   // onMove means if dragging or swiping in progress.
//   return (
//     <>
//       <div className="absolute top-1/2 right-1 max-w-4 cursor-pointer text-primary-400">
//         hello world
//       </div>
//     </>
//   );
// };

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <h2>
        <strong>Testimonials</strong>
      </h2>

      {/* customRightArrow={<CustomRightArrow />} */}
      <Carousel
        responsive={responsive}
        className=" md:mt-[-30px]"
        infinite={true}
      >
        {testimonials.map((testimonialItem, index) => (
          <TestimonialSection testimonial={testimonialItem} key={index} />
        ))}
      </Carousel>
    </>
  );
}
