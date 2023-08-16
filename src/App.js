import Iconlaslesvpn from "./assets/logo.svg";
import Illustration1 from "./assets/illustration-1.svg";
import IconLocations from "./assets/icon-location.svg";
import IconServers from "./assets/icon-server.svg";
import IconUsers from "./assets/icon-user.svg";
import Illustration2 from "./assets/illustration-2.svg";
import IconCheck from "./assets/icon-green.svg";
import IconFree from "./assets/icon-freeplan.svg";
import IconSuccess from "./assets/icon-success.svg";

function App() {
  const menus = ["About", "Features", "Pricing", "Testimonials", "Help"];
  const section3 = [
    {
      icon: IconLocations,
      lable: "users",
      total: "30+",
    },
    {
      icon: IconServers,
      lable: "users",
      total: "30+",
    },
    {
      icon: IconUsers,
      lable: "users",
      total: "30+",
    },
  ];
  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits.",
  ];
  const plans = [
    {
      title: "Free Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      title: "Standard Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
      ],
      price: "$9 / mo",
    },
    {
      title: "Premium Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anywhere",
        "Get New Features",
      ],
      price: "$12 / mo",
    },
  ];

  return (
    <div className=" bg-white">
      <header className="container max-w-5xl mx-auto flex flex-row pt-12 items-center space-x-36">
        <img alt="icon-laslesvpn" src={Iconlaslesvpn} className="w-36" />
        <div className="flex-1">
          <ul className="flex flex-row space-x-6">
            {menus.map((val, index) => (
              <li key={index}>{val}</li>
            ))}
          </ul>
        </div>
        <div className="space-x-6 flex flex-row items-center">
          <button className="font-bold">Sign In</button>
          <button className="border border-red-500 rounded-full py-2 px-9 text-red-500 font-bold">
            Sign Up
          </button>
        </div>
      </header>
      <main>
        <div className="container max-w-5xl mx-auto py-24 grid grid-cols-2">
          <div>
            <h1 className="font-bold text-4xl pb-5">
              Want anything to be
              <br />
              easy with LaslesVPN.
            </h1>
            <div className="font-normal text-xs pb-12">
              Provide a network for all your needs with ease and fun using
              LaslesVPN discover interesting features from us.
            </div>
            <button className="py-4 px-16 bg-red-500 rounded-md text-white drop-shadow-3xl">
              Get Started
            </button>
          </div>
          <div>
            <img src={Illustration1} alt="illustration-1" />
          </div>
        </div>
        <div className="container max-w-5xl mx-auto grid grid-cols-3 shadow-2xl rounded-md py-4">
          {section3.map((val, index) => {
            return (
              <div
                key={index}
                className={`flex flex-row py-4 space-x-6 justify-center ${
                  index + 1 !== section3.length && "border-r border-gray-400"
                }`}
              >
                {/* <div className="rounded-full bg-red-100 p-3"> */}
                <img alt={val.lable} src={val.icon} className="w-12 h-12" />
                {/* </div> */}
                <div>
                  <div>{val.total}</div>
                  <div>{val.lable}</div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container max-w-5xl mx-auto grid grid-cols-2 py-24 items-center">
          <img src={Illustration2} alt={"features-laslesvpn"} />
          <div className="px-16 space-y-4">
            <div className="font-medium text-3xl">
              We Provide Many Features You Can Use
            </div>
            <div className="font-medium text-sm">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </div>
            {features.map((val, index) => {
              return (
                <div className="flex items-center space-x-3" key={index}>
                  <img
                    src={IconCheck}
                    alt="features-check-laslesvpn"
                    className="w-6 h-6"
                  />
                  <div className="text-xs">{val}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className=" bg-gray-50 py-12">
          <div className="container max-w-5xl mx-auto mb-10">
            <div className="text-center text-3xl font-medium mb-5">
              Choose Your Plan
            </div>
            <div className="text-center font-normal text-sm text-gray-700">
              Let's choose the package that is best for you and explore it
              happily and cheerfully.
            </div>
          </div>
          <div className="container max-w-5xl mx-auto grid grid-cols-3 space-x-6">
            {plans.map((val, index) => {
              return (
                <CardPlan
                  key={index}
                  {...val}
                  isSelect={index + 1 === plans.length}
                />
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

function CardPlan({ title, price, features, isSelect }) {
  return (
    <div
      className={`bg-white rounded-md flex flex-col justify-between items-center pt-16 pb-8 border ${
        isSelect ? "border-red-600" : "border-gray-300"
      }`}
    >
      <div className="space-y-5 flex flex-col justify-center items-center">
        <img src={IconFree} alt="" className="w-24" />
        <h3>{title}</h3>
        <div className="space-y-2">
          {features.map((val, index) => {
            return (
              <div
                key={index}
                className="flex flex-row items-center mr-2 space-x-2"
              >
                <img src={IconSuccess} alt="icon-success" className="w-6 h-6" />
                <div>{val}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-center mb-3">{price}</div>
        <button
          className={`border rounded-full py-1 px-10 border-red-500 ${
            isSelect ? "bg-red-500 text-white" : "bg-white text-red-500"
          }`}
        >
          Select
        </button>
      </div>
    </div>
  );
}

export default App;
