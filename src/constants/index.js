import {
  Home,
  Notebook,
  Notifications,
  Receipt,
  Settings,
  Team,
  User,
  Calendar,
  FAQ,
  BarChart,
  PieChart,
  LineChart,
  Map,
  Mail,
  SalesSymbol,
  NewClient,
  Traffic,
} from "../images/svg";

const topbarIcons = [
  { img: Notifications, name: "notifcations" },
  { img: Settings, name: "settings" },
  { img: User, name: "user" },
];

const leftbarIcons = [
  {
    name: "block-1",
    items: [
      { img: Home, title: "Dashboard", path: "/" },
      { img: Team, title: "Manage Team", path: "/team" },
      {
        img: Notebook,
        title: "Contacts Information",
        path: "/contacts-information",
      },
      { img: Receipt, title: "Invoices Balances", path: "/invoices" },
    ],
  },
  {
    name: "block-2",
    items: [
      { img: User, title: "Profile Form", path: "/profile-form" },
      { img: Calendar, title: "Calendar", path: "/calendar" },
      { img: FAQ, title: "FAQ Page", path: "/faq-page" },
    ],
  },
  {
    name: "block-3",
    items: [
      { img: BarChart, title: "Bar Chart", path: "/bar-chart" },
      { img: PieChart, title: "Pie Chart", path: "/pie-chart" },
      { img: LineChart, title: "Line Chart", path: "/line-chart" },
      { img: Map, title: "Geography Chart", path: "/choropleth-chart" },
    ],
  },
];

const pieChartDashboard = [
  {
    icon: Mail,
    title: "Emails Sent",
    per: "+14%",
    number: "12,361",
    color: "nivo",
    data: [
      {
        id: "python",
        label: "python",
        value: 270,
        color: "hsl(318, 70%, 50%)",
      },
      {
        id: "rust",
        label: "rust",
        value: 490,
        color: "hsl(215, 70%, 50%)",
      },
    ],
  },
  {
    icon: SalesSymbol,
    title: "Sales obtained",
    per: "+21%",
    number: "431,225",
    color: "category10",
    data: [
        {
          id: "python",
          label: "python",
          value: 570,
          color: "hsl(318, 70%, 50%)",
        },
        {
          id: "rust",
          label: "rust",
          value: 190,
          color: "hsl(215, 70%, 50%)",
        },
      ],
  },
  {
    icon: NewClient,
    title: "New Clients",
    per: "+5%",
    number: "32,441",
    color: "dark2",
    data: [
        {
          id: "python",
          label: "python",
          value: 570,
          color: "hsl(318, 70%, 50%)",
        },
        {
          id: "rust",
          label: "rust",
          value: 190,
          color: "hsl(215, 70%, 50%)",
        },
      ],
  },
  {
    icon: Traffic,
    title: "Traffic Received",
    per: "+43%",
    number: "1,325,134",
    color: "red_blue",
    data: [
        {
          id: "python",
          label: "python",
          value: 370,
          color: "hsl(318, 70%, 50%)",
        },
        {
          id: "rust",
          label: "rust",
          value: 390,
          color: "hsl(215, 70%, 50%)",
        },
      ],
  },
];

const campaignChartData = [
  {
    id: "python",
    label: "python",
    value: 370,
    color: "hsl(318, 70%, 50%)",
  },
  {
    id: "rust",
    label: "rust",
    value: 390,
    color: "hsl(215, 70%, 50%)",
  },
  {
    id: "java",
    label: "rust",
    value: 390,
    color: "hsl(215, 70%, 50%)",
  },
  {
    id: "go",
    label: "rust",
    value: 390,
    color: "hsl(215, 70%, 50%)",
  }
]

export { topbarIcons, leftbarIcons, pieChartDashboard, campaignChartData };
