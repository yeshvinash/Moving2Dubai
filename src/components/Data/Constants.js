import SVGIcons from "./SVGIcons";
import ReactReadMoreReadLess from "react-read-more-read-less";
import FreelanceVisa from "./../../assets/images/cover/freelance.jpg";
import FreeZone from "./../../assets/images/cover/free-zone.jpg";
import Setup from "./../../assets/images/cover/setup.jpg";
import TradeLicense from "./../../assets/images/cover/vision.jpg";
import KateImg from "./../../assets/images/profile/kate.jpg";
import JonathanImg from "./../../assets/images/profile/jonathan.jpg";
import MichaleImg from "./../../assets/images/profile/michael.jpg";

const freelanceText = "Ready to start your freelance journey? Get your 2-year Dubai freelance visa and take the first step in building your future Ready to start your freelance journey? Get your 2-year Dubai freelance visa and take the first step in building your future...";
const setupText = "You don’t get a second chance at setting up your company in the UAE. Make sure you do it right the first time, by partnering with You don’t get a second chance at setting up your company in the UAE. Make sure you do it right the first time, by partnering with...";
const freeZoneText = "Enjoy the infinite benefits of setting up a business in a Dubai free zone, including foreign ownership, repatriation of profits Enjoy the infinite benefits of setting up a business in a Dubai free zone, including foreign ownership, repatriation of profits...";
const tradeText = "Let’s get your DED trader license so you can get your start-up off the ground without delay. With your license in tow, you can Let’s get your DED trader license so you can get your start-up off the ground without delay. With your license in tow, you can...";

export const FacilityData = [
  {
    id: "1",
    image: SVGIcons.EyeSlash,
    title: "No Hidden Fees",
    detail: "With Moving2Dubai, there are no nasty surprises. You’ll know exactly what government fees you can expect to pay for your Dubai freelance visa, Dubai company setup, and more – all upfront. No concealed costs. No recurring annual fees. No nonsense!",
  },
  {
    id: "2",
    image: SVGIcons.MonitorMobile,
    title: "100% Online",
    detail: "You don’t need to stand in long queues or waste time you don’t have. With Moving2Dubai.com, you can complete your full Dubai company setup process, get your Dubai freelance visa, and more – all under one digital roof. Submit your documentation, get your visa and work permit, and more, completely online.",
  },
  {
    id: "1",
    image: SVGIcons.HappyEmoji,
    title: "Hassle-Free",
    detail: "We pride ourselves on offering our clients a fast, easy, affordable, and fuss-free way to move to Dubai. Whether you dream of launching a marketing, yoga, web development, graphic design, or accounting business in Dubai, we’re by your side. We’ll help you organize everything the Dubai government needs, so you can start your new life in Dubai with confidence!",
  },
];

export const HelpData = [
  {
    id: "1",
    image: FreelanceVisa,
    title: "Dubai Freelance Visa",
    description: (
      <div className="p small primary-font text-darkgray help-des">
        <ReactReadMoreReadLess charLimit={128} readMoreText={"Read More"} readLessText={"Read Less"} readMoreClassName="p small primary-font text-blue" readLessClassName="p small primary-font text-blue">
          {freelanceText}
        </ReactReadMoreReadLess>
      </div>
    ),
    btnText: "Apply Now",
  },
  {
    id: "2",
    image: Setup,
    title: "Company Setup in Dubai",
    description: (
      <div className="p small primary-font text-darkgray help-des">
        <ReactReadMoreReadLess charLimit={128} readMoreText={"Read More"} readLessText={"Read Less"} readMoreClassName="p small primary-font text-blue" readLessClassName="p small primary-font text-blue">
          {setupText}
        </ReactReadMoreReadLess>
      </div>
    ),
    btnText: "Apply Now",
  },
  {
    id: "3",
    image: FreeZone,
    title: "Business Setup in Dubai Free Zones",
    description: (
      <div className="p small primary-font text-darkgray help-des">
        <ReactReadMoreReadLess charLimit={128} readMoreText={"Read More"} readLessText={"Read Less"} readMoreClassName="p small primary-font text-blue" readLessClassName="p small primary-font text-blue">
          {freeZoneText}
        </ReactReadMoreReadLess>
      </div>
    ),
    btnText: "Apply Now",
  },
  {
    id: "4",
    image: TradeLicense,
    title: "UAE Trade License",
    description: (
      <div className="p small primary-font text-darkgray help-des">
        <ReactReadMoreReadLess charLimit={128} readMoreText={"Read More"} readLessText={"Read Less"} readMoreClassName="p small primary-font text-blue" readLessClassName="p small primary-font text-blue">
          {tradeText}
        </ReactReadMoreReadLess>
      </div>
    ),
    btnText: "Apply Now",
  },
];

export const ServiceData = [
  {
    id: "1",
    xxlSize: 6,
    xlSize: 7,
    mdSize: 8,
    columnData: [
      {
        id: "11",
        link: "company setup in Dubai (4)",
      },
      {
        id: "12",
        link: "moving / move to Dubai (3)",
      },
      {
        id: "13",
        link: "Dubai freelance visa (6)",
      },
      {
        id: "14",
        link: "Dubai company setup (2)",
      },
      {
        id: "15",
        link: "start your new life in Dubai (2)",
      },
    ],
  },
  {
    id: "2",
    xxlSize: 10,
    xlSize: 9,
    mdSize: 8,
    columnData: [
      {
        id: "21",
        link: "setting up a business in a Dubai free zone (1)",
      },
      {
        id: "22",
        link: "2-year Dubai freelance visa (1)",
      },
      {
        id: "23",
        link: "start freelancing in the UAE (1)",
      },
      {
        id: "24",
        link: "setting up your company in the UAE (1)",
      },
      {
        id: "25",
        link: "business setup in Dubai free zones (1)",
      },
    ],
  },
  {
    id: "3",
    xxlSize: 6,
    xlSize: 7,
    mdSize: 8,
    columnData: [
      {
        id: "31",
        link: "free zone company formation (1)",
      },
      {
        id: "32",
        link: "UAE trade license (1)",
      },
      {
        id: "33",
        link: "get your DED trader license (1)",
      },
      {
        id: "34",
        link: "DED trader license (2)",
      },
      {
        id: "35",
        link: "start your business in the UAE (1)",
      },
    ],
  },
];

export const SwiperContent = [
  {
    id: "1",
    review: `" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, When an unknown printer took a galley of type and scrambled it to make a type specimen book. "`,
  },
  {
    id: "2",
    review: `" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, When an unknown printer took a galley of type and scrambled it to make a type specimen book. "`,
  },
  {
    id: "3",
    review: `" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, When an unknown printer took a galley of type and scrambled it to make a type specimen book. "`,
  },
  {
    id: "4",
    review: `" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, When an unknown printer took a galley of type and scrambled it to make a type specimen book. "`,
  },
  {
    id: "5",
    review: `" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, When an unknown printer took a galley of type and scrambled it to make a type specimen book. "`,
  },
  {
    id: "6",
    review: `" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, When an unknown printer took a galley of type and scrambled it to make a type specimen book. "`,
  },
];

export const SwiperNavigate = [
  {
    id: "1",
    image: JonathanImg,
    name: "Johnathan Doe",
    rating: "4.5/5",
  },
  {
    id: "2",
    image: KateImg,
    name: "Kate Williams",
    rating: "4.5/5",
  },
  {
    id: "3",
    image: MichaleImg,
    name: "Michael Smith",
    rating: "4.5/5",
  },
  {
    id: "4",
    image: KateImg,
    name: "Kate Williams",
    rating: "4.5/5",
  },
  {
    id: "5",
    image: MichaleImg,
    name: "Michael Smith",
    rating: "4.5/5",
  },
  {
    id: "6",
    image: JonathanImg,
    name: "Johnathan Doe",
    rating: "4.5/5",
  },
];

export const PanelData = [
  {
    id: "1",
    headeData: "How can I pay for my appointment?",
    panelData: "Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.",
  },
  {
    id: "2",
    headeData: "What can I expect at my first consultation?",
    panelData: "Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.",
  },
  {
    id: "3",
    headeData: "What are your opening hours?",
    panelData: "Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.",
  },
  {
    id: "4",
    headeData: "Do i need a referral?",
    panelData: "Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.",
  },
  {
    id: "5",
    headeData: "Is the cost of the appointment covered by private health insurance?",
    panelData: "Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.Moving2Dubai (M2D) is your one stop-destination for everything you need to start your new life in the UAE. We proudly provide a wide range of packages depending on your goals, so contact us today to learn more.",
  },
];
