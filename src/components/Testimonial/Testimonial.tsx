import Fire from "../../assets/fire.png";
import Quote from "../../assets/quote.png";
import Rating from "../../assets/rating.png";
import Man1 from "../../assets/man1.jpg";
import Man2 from "../../assets/man2.png";
import Man3 from "../../assets/man3.png";
import ArrowRight from "../../assets/arrow-right.png";

interface TestimonialData {
  name: string;
  position: string;
  testimonial: string;
  image: string;
}

interface TestimonialCardProps {
  bgColor?: string;
  textColor?: string;
  data: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  bgColor = "bg-white",
  textColor = "text-black",
  data,
}) => {
  return (
    <div className={`${bgColor} ${textColor} p-6 rounded-2xl`}>
      <img src={Quote} alt="Quote icon" className="w-6 h-6" />
      <p className="py-4 text-sm md:text-base lg:text-lg min-h-[80px]">
        {data.testimonial}
      </p>
      <div className="flex gap-4 items-center">
        <img
          src={data.image}
          alt={data.name}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
        />
        <div>
          <img src={Rating} alt="Rating" className="w-24 h-5 mb-1" />
          <p className="font-bold text-sm md:text-base">{data.name}</p>
          <p className="text-xs md:text-sm">{data.position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  const testimonials = [
    {
      name: "Mike Torello",
      position: "CEO of Initech",
      testimonial:
        "I like getting the SMS & knowing the jobs done. I often refer to it, hope you get a ping today! because my product",
      image: Man1,
    },
    {
      name: "Richards Hawkins",
      position: "Marketing Manager of Upnow",
      testimonial:
        "We have successfully sold digital product and have happy with the results & look forward to using it again this.",
      image: Man2,
      bgColor: "bg-[#004852]",
      textColor: "text-white",
    },
    {
      name: "Thomas Magnum",
      position: "Barellon NSW",
      testimonial:
        "Design Monks offers producers a cost-effective selling tool. Having the ability to post prices that you want on an exchange visible.",
      image: Man3,
    },
  ];

  return (
    <div className="bg-gray-100 flex flex-col justify-center items-center px-4 md:px-8 lg:px-20 py-12 md:py-20">
      {/* Header Badge */}
      <div className="inline-flex items-center border bg-white text-black rounded-full px-4 py-2 space-x-2 mb-4">
        <img src={Fire} alt="" className="w-4 h-4" aria-hidden="true" />
        <span className="text-xs md:text-sm font-medium uppercase text-black">
          Testimonial
        </span>
      </div>

      {/* Title */}
      <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl uppercase text-center mb-10">
        Get to know your clients
      </h1>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            bgColor={testimonial.bgColor}
            textColor={testimonial.textColor}
            data={testimonial}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="relative mt-10 mb-8">
        <button className=" bg-white border hover:bg-green-600 text-black px-6 py-2 rounded-full inline-flex items-center space-x-2 transition-colors duration-200">
          <span>View More</span>

          <img
            src={ArrowRight}
            alt=""
            className="w-8 h-8 text-white  absolute left-28 bg-green-500 rounded-full p-1 ml-2"
          />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
