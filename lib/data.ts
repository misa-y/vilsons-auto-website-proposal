export type Machine = {
  id: string;
  sourceSheet: "Manufacturing Facility" | "Tool Room Equipment";
  category: "Stamping" | "Welding" | "CNC" | "Cutting" | "Tool Room";
  name: string;
  specification: string;
  quantity: number;
  parts: string[];
  application: string;
};

export const profile = {
  company: "Vilsons Auto",
  tagline: "Driving Precision, Powering Mobility",
  description:
    "Precision sheet metal components and fabrication solutions for automotive and industrial applications.",
  location: "Pune, Maharashtra, India",
  certification: "ISO 9001:2015",
  founder: "Mr. Vilas Vasantrao Shivale",
  founderProfile:
    "Founder of Vilsons Group with industry expertise and leadership experience serving leading OEMs including Tata Motors, Mahindra & Mahindra, and Bosch.",
  vision:
    "To establish Vilsons Auto as the preferred choice for customers in India and international markets by delivering high-quality automotive parts and assemblies with precision, reliability, and excellence.",
  mission:
    "To exceed customer expectations by delivering superior quality and cost-effective products while fostering innovation, operational excellence, and long-term business partnerships.",
  qualityPolicy:
    "Vilsons Auto is committed to delivering consistent quality and cost-effective products that meet customer expectations and industry standards through continuous improvement, advanced technology, and process-driven manufacturing systems.",
  email: null,
  website: null,
  mobile: null,
  address: null,
};

export const values = [
  "Integrity & Honesty",
  "Customer Satisfaction",
  "Responsiveness",
  "Commitment to Excellence",
  "Quality Focus",
  "Results-Oriented Approach",
];

export const customers = [
  "Tata Motors, Pune",
  "PROTO-D Industries",
  "Swapnil Auto Engineering",
  "SOGEFI ADM Suspensions",
  "SPICA Assemblies",
  "Daesung Seat Co., Ltd.",
  "KLT Automotive & Tubular Products Ltd.",
  "Windals Auto Pvt Ltd",
  "Associated MAFG Co.",
  "Sharda Industries",
  "SD Engineerstech Pvt. Ltd.",
];

export const coreStrengths = [
  "Precision Sheet Metal Fabrication",
  "Advanced Engineering Support",
  "High-Volume Mass Production",
  "Dimensional Accuracy & Consistency",
  "Strong Joint Reliability",
  "Process-Driven Manufacturing Systems",
];

export const productRanges = [
  {
    title: "Seating System Components",
    category: ["ICE", "EV", "Commercial"],
    process: "Stamping, welding, forming",
    material: "Sheet metal components",
    tolerance: "Dimensional accuracy and consistency specified in company profile",
    machineFit: "Power Press 20-250 Ton, spot/projection welding",
    image: "/vilsons-page-5.png",
  },
  {
    title: "Tube Components",
    category: ["ICE", "EV", "Commercial"],
    process: "3 Axis CNC pipe bending, CO2 welding",
    material: "Tube metal components",
    tolerance: "Process-driven repeatability specified in company profile",
    machineFit: "CNC Pipe Bending Machine, CO2 Welding 350/400 Amps",
    image: "/vilsons-page-7.png",
  },
  {
    title: "Brackets",
    category: ["ICE", "EV", "Commercial"],
    process: "Stamping, shearing, welding",
    material: "Precision sheet metal",
    tolerance: "Dimensional accuracy and consistency specified in company profile",
    machineFit: "Power Press 20-250 Ton, shearing, welding shop",
    image: "/vilsons-page-5.png",
  },
  {
    title: "Chassis Structures",
    category: ["ICE", "Commercial"],
    process: "Sheet metal forming and fabrication welding",
    material: "Sheet metal assemblies",
    tolerance: "Strength, durability, and consistency emphasized in profile",
    machineFit: "CO2 Welding, Arc Welding, Power Presses",
    image: "/vilsons-page-6.png",
  },
  {
    title: "Mountings",
    category: ["ICE", "EV", "Commercial"],
    process: "Stamping, welding, tooling support",
    material: "Sheet metal mountings",
    tolerance: "Quality-controlled dimensional consistency",
    machineFit: "Power Presses, tool room equipment, welding shop",
    image: "/vilsons-page-5.png",
  },
  {
    title: "Suspension Parts",
    category: ["ICE", "EV", "Commercial"],
    process: "Precision fabrication and welding",
    material: "Automotive sheet metal parts",
    tolerance: "Reliability and consistency stated in customer partnership section",
    machineFit: "Press shop, spot welding, projection welding",
    image: "/vilsons-page-6.png",
  },
];

export const machines: Machine[] = [
  { id: "power-press-20", sourceSheet: "Manufacturing Facility", category: "Stamping", name: "Power Press", specification: "20 Ton", quantity: 2, parts: ["Brackets", "Mountings", "Seating System Components"], application: "Precision sheet metal forming" },
  { id: "power-press-30", sourceSheet: "Manufacturing Facility", category: "Stamping", name: "Power Press", specification: "30 Ton", quantity: 2, parts: ["Brackets", "Mountings", "Seating System Components"], application: "Precision sheet metal forming" },
  { id: "power-press-50", sourceSheet: "Manufacturing Facility", category: "Stamping", name: "Power Press", specification: "50 Ton", quantity: 2, parts: ["Brackets", "Mountings", "Chassis Structures"], application: "Precision sheet metal forming" },
  { id: "power-press-100", sourceSheet: "Manufacturing Facility", category: "Stamping", name: "Power Press", specification: "100 Ton", quantity: 1, parts: ["Chassis Structures", "Suspension Parts"], application: "High-tonnage component forming" },
  { id: "power-press-150", sourceSheet: "Manufacturing Facility", category: "Stamping", name: "Power Press", specification: "150 Ton", quantity: 1, parts: ["Chassis Structures", "Suspension Parts"], application: "High-tonnage component forming" },
  { id: "power-press-210", sourceSheet: "Manufacturing Facility", category: "Stamping", name: "Power Press", specification: "210 Ton", quantity: 1, parts: ["Chassis Structures", "Suspension Parts"], application: "High-tonnage component forming" },
  { id: "power-press-250", sourceSheet: "Manufacturing Facility", category: "Stamping", name: "Power Press", specification: "250 Ton", quantity: 1, parts: ["Chassis Structures", "Suspension Parts"], application: "Highest listed press capacity" },
  { id: "co2-350", sourceSheet: "Manufacturing Facility", category: "Welding", name: "CO2 Welding Machine", specification: "350 Amps", quantity: 4, parts: ["Tube Components", "Chassis Structures"], application: "Structural fabrication welding" },
  { id: "co2-400", sourceSheet: "Manufacturing Facility", category: "Welding", name: "CO2 Welding Machine", specification: "400 Amps", quantity: 2, parts: ["Tube Components", "Chassis Structures"], application: "Structural fabrication welding" },
  { id: "arc-250", sourceSheet: "Manufacturing Facility", category: "Welding", name: "Arc Welding Machine", specification: "250 Amps", quantity: 1, parts: ["Chassis Structures", "Mountings"], application: "Fabrication welding support" },
  { id: "cnc-pipe", sourceSheet: "Manufacturing Facility", category: "CNC", name: "CNC Pipe Bending Machine", specification: "3 Axis", quantity: 1, parts: ["Tube Components"], application: "Tube bending and formed tubular parts" },
  { id: "mechanical-shear", sourceSheet: "Manufacturing Facility", category: "Cutting", name: "Mechanical Shearing Machine", specification: "1 mm to 6 mm Capacity", quantity: 1, parts: ["Brackets", "Mountings", "Sheet blanks"], application: "Accurate sheet cutting" },
  { id: "hydraulic-shear", sourceSheet: "Manufacturing Facility", category: "Cutting", name: "Hydraulic Shearing Machine", specification: "-", quantity: 1, parts: ["Sheet blanks", "Brackets"], application: "Sheet processing support" },
  { id: "band-saw", sourceSheet: "Manufacturing Facility", category: "Cutting", name: "Band Saw Machine", specification: "-", quantity: 2, parts: ["Tube Components", "Tooling support"], application: "Cutting support" },
  { id: "projection-weld", sourceSheet: "Manufacturing Facility", category: "Welding", name: "Projection Welding Machine", specification: "12 KVA", quantity: 1, parts: ["Brackets", "Mountings"], application: "Nut & bolt welding" },
  { id: "spot-weld", sourceSheet: "Manufacturing Facility", category: "Welding", name: "Spot Welding Machine", specification: "50 KVA", quantity: 1, parts: ["Seating System Components", "Brackets"], application: "Strong joints with low distortion" },
  { id: "lathe", sourceSheet: "Tool Room Equipment", category: "Tool Room", name: "Lathe Machine", specification: "7 ft Bed Length", quantity: 1, parts: ["Tooling support"], application: "Tool room machining support" },
  { id: "milling", sourceSheet: "Tool Room Equipment", category: "Tool Room", name: "Milling Machine", specification: "-", quantity: 1, parts: ["Tooling support"], application: "Tool room machining support" },
  { id: "surface-grinding", sourceSheet: "Tool Room Equipment", category: "Tool Room", name: "Surface Grinding Machine", specification: "-", quantity: 1, parts: ["Tooling support"], application: "Tool room grinding support" },
  { id: "radial-drilling", sourceSheet: "Tool Room Equipment", category: "Tool Room", name: "Radial Drilling Machine", specification: "-", quantity: 1, parts: ["Tooling support"], application: "Tool room drilling support" },
  { id: "pillar-drilling", sourceSheet: "Tool Room Equipment", category: "Tool Room", name: "Pillar Drilling Machine", specification: "-", quantity: 2, parts: ["Tooling support"], application: "Tool room drilling support" },
  { id: "bench-grinder", sourceSheet: "Tool Room Equipment", category: "Tool Room", name: "Bench Grinder", specification: "-", quantity: 1, parts: ["Tooling support"], application: "Tool room finishing support" },
];

export const metrics = [
  { label: "Certification", value: "ISO 9001:2015" },
  { label: "Press Range", value: "20-250 Ton" },
  { label: "Listed Equipment Units", value: String(machines.reduce((total, machine) => total + machine.quantity, 0)) },
  { label: "Manufacturing Base", value: "Pune" },
];

export const timeline = [
  {
    title: "Foundation",
    meta: "Founder profile",
    body: "Mr. Vilas Vasantrao Shivale established Vilsons Auto to deliver precision-engineered automotive components and dependable manufacturing solutions to Tier-One vendors and OEM manufacturers.",
  },
  {
    title: "Quality System",
    meta: "ISO 9001:2015",
    body: "The profile identifies Vilsons Auto as an ISO 9001:2015 certified organization focused on quality, dimensional accuracy, and consistency.",
  },
  {
    title: "Engineering Capability",
    meta: "CAD + FEA",
    body: "Vilsons Auto integrates CAD software and FEA methodologies to enhance design validation, manufacturability, and cost-effective production solutions.",
  },
  {
    title: "Production Scope",
    meta: "Prototype to mass production",
    body: "Operations support both prototype development and large-scale production for precision sheet metal and fabrication applications.",
  },
];

export const categories = ["All", "Stamping", "Welding", "CNC", "Cutting", "Tool Room"] as const;
