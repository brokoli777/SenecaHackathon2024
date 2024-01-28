import TestimonialSection from "./testimonialSection";
import { Testimonial } from "../../../Data/Schema/testimonialSchema";
import { Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

export default function Testimonials({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  return (
    <>
      <h2>
        <strong>Testimonials</strong>
      </h2>
      <Carousel fade className="drop-shadow-2xl md:mt-[-30px]">
      {testimonials.map((testimonialItem, index) => (
        <Carousel.Item className="">
          <TestimonialSection testimonial={testimonialItem}/>
        </Carousel.Item>
      ))}
      </Carousel>
      {/* <Row>
        {testimonials.map((testimonialItem, index) => (
          <Col key={index} sm={6}>
            <TestimonialSection testimonial={testimonialItem} />
          </Col>
        ))}
      </Row> */}
    </>
  );
}
