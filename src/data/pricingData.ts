export type Plan = {
  price: string | number;
  image: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
};



export const pricingData = {
  annually: [
    {
      image: "/Planss1.png",
      title: "Basic",
      price: "$480",
      description:
        "Essential tools and features for starting your journey with ease.",
      features: [
        "Basic workflow automation",
        "Basic chatbot development",
        "60 content request",
        "E-mail support",
        "1 consultation a month",
      ],
      buttonText: "Go with this plan →",
    },
    {
      image: "/Planss2.png",
      title: "Professional",
      price: "$960",
      description:
        "Advanced capabilities designed to meet growing business needs.",
      features: [
        "Advance workflow automation",
        "Advance chatbot development",
        "150 content request",
        "E-mail support",
        "2 consultation a month",
      ],
      buttonText: "Go with this plan →",
    },
    {
      image: "/Planss3.png",
      title: "Enterprises",
      price: "Custom",
      description:
        "Comprehensive solutions tailored for large-scale business success.",
      features: [
        "Custom workflow automation",
        "Custom chatbot development",
        "Unlimited content request",
        "24hr priority support",
        "Unlimited consultation a month",
      ],
      buttonText: "Schedule a call →",
    },
  ],
  monthly: [
    {
      image: "/Planss1.png",
      title: "Basic",
      price: "$600",
      description:
        "Essential tools and features for starting your journey with ease.",
      features: [
        "Basic workflow automation",
        "Basic chatbot development",
        "60 content request",
        "E-mail support",
        "1 consultation a month",
      ],
      buttonText: "Go with this plan →",
    },
    {
      image: "/Planss2.png",
      title: "Professional",
      price: "$1200",
      description:
        "Advanced capabilities designed to meet growing business needs.",
      features: [
        "Advance workflow automation",
        "Advance chatbot development",
        "150 content request",
        "E-mail support",
        "2 consultation a month",
      ],
      buttonText: "Go with this plan →",
    },
    {
      image: "/Planss3.png",
      title: "Enterprises",
      price: "Custom",
      description:
        "Comprehensive solutions tailored for large-scale business success.",
      features: [
        "Custom workflow automation",
        "Custom chatbot development",
        "Unlimited content request",
        "24hr priority support",
        "Unlimited consultation a month",
      ],
      buttonText: "Schedule a call →",
    },
  ],
};
