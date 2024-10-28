import Fire from "../../assets/fire.png";
import Card from "../../assets/saving.png";

interface FeatureCardProps {
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  isHighlighted = false,
}) => (
  <div
    className={`w-full md:w-96 rounded-lg p-4 flex flex-col gap-4 ${
      isHighlighted ? "bg-[#F1FFD2]" : "border-2"
    }`}
  >
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

function AboutUs() {
  const features = [
    {
      title: "Expenses Tracker",
      description:
        "Our comprehensive selection of medications, supplements, and healthcare products.",
      isHighlighted: true,
    },
    {
      title: "Expenses Tracker",
      description:
        "Our comprehensive selection of medications, supplements, and healthcare products.",
    },
    {
      title: "Expenses Tracker",
      description:
        "Our comprehensive selection of medications, supplements, and healthcare products.",
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-20 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:justify-around">
        {/* Image Section */}
        <div className=" lg:mt-16">
          <div className="bg-gray-300 p-6 md:p-10 md:pt-16 rounded-lg w-full lg:w-auto">
            <img
              src={Card}
              alt="saving"
              className="w-full h-auto"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div>
            <div className="inline-flex items-center border bg-gray-100 text-white rounded-full px-4 py-2 space-x-2 mb-4">
              <img src={Fire} alt="" className="w-4 h-4" aria-hidden="true" />
              <span className="text-sm font-medium uppercase text-black">
                About Us
              </span>
            </div>
            <h1 className="max-w-md text-3xl md:text-4xl font-bold text-black uppercase leading-tight tracking-wide">
              All your money needs in one app
            </h1>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute w-2 h-full bg-gray-200 rounded-full" />
            <div className="absolute w-2 h-32 bg-[#04684C] rounded-full" />

            {/* Feature Cards */}
            <div className="pl-6 flex flex-col gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  isHighlighted={feature.isHighlighted}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
