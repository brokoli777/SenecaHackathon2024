import { Testimonial } from "../../../Data/Schema/testimonialSchema";


// import "../about.css";

export default function TestimonialSection({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    // <div className="mx-auto flex bg-red-800 h-[300px] rounded-xl flex-col">
    //   <img className="mx-auto h-[80px] w-[80px] rounded-full" src="https://picsum.photos/200/300" alt=""/>
    //   <div className="text-white mx-auto">Hello123 j;salkj;flawkje;lkajwe;lfkja;lkejf;kl</div>
    // </div>

    <div className="mx-auto flex bg-red-600 md:min-h-[280px] rounded-xl flex-col mt-[50px] flex-wrap">
      <img className="border-5 border-solid border-white drop-shadow-2xl absolute left-1/2 ml-[-50px] mt-[-50px] h-[110px] w-[110px] rounded-full" src="https://picsum.photos/200/300" alt=""/>
      {/* <svg className="w-8 h-8 text-white dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
      </svg> */}
      <svg className="w-8 h-8 mt-4 ml-5 md:ml-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" fill="#FFF"><path d="M79 144.11c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L103.1 50.31C75.18 62.56 56.9 76.59 43.81 95.82c-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79zm152 0c-6 0-11.37.28-16.19.8 8.02-32.82 27.27-48.06 55.31-60.35L255.1 50.31c-27.92 12.25-46.2 26.28-59.29 45.51-15.2 22.35-22.6 51.72-22.6 89.81v16.46c0 31.83.11 57.6 57.79 57.6 57.79 0 57.79-25.87 57.79-57.79 0-31.91.37-57.79-57.79-57.79z"></path></svg>
      <div className="text-white mx-auto mt-10 px-10 md:px-[220px]">{testimonial.review}</div>
      
      <div className="text-white font-bold mt-4 ml-10 md:mx-auto">- {testimonial.name}</div>
      <svg className="w-8 h-8 my-2 ml-auto mr-5 md:mr-12 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310" fill="#FFF"><path d="M231 167.84c6.02 0 11.42-.28 16.25-.81-7.1 29.03-22.95 44.36-45.88 56.04-5.33 2.71-7.63 9.1-5.23 14.57l6.04 13.77c2.59 5.91 9.62 8.44 15.38 5.53 22.1-11.11 37.39-23.92 48.76-40.63C281.58 193.89 289 164.4 289 126.17v-16.52c0-31.95-.11-57.81-58-57.81-58 0-58 25.97-58 58s-.38 58 58 58zm-152 0c6.02 0 11.42-.28 16.25-.81-7.1 29.03-22.95 44.36-45.88 56.04-5.33 2.71-7.63 9.1-5.23 14.57l6.04 13.77c2.59 5.91 9.62 8.44 15.38 5.53 22.1-11.11 37.39-23.92 48.76-40.63C129.58 193.89 137 164.4 137 126.17v-16.52c0-31.95-.11-57.81-58-57.81-58 0-58 25.97-58 58s-.38 58 58 58z"></path></svg>
    </div>

    
  
  );
}


// <div id="testimonial">
    //   <p>
    //     <span style={{ color: "red", fontWeight: "bolder" }}>"</span>
    //     {testimonial.review}
    //     <span style={{ color: "red", fontWeight: "bolder" }}>"</span>
    //   </p>
    //   <img src={SampleImage} alt="Headshot" />
    //   <p style={{ color: "red", margin: 0 }}>{testimonial.name}</p>
    // </div>