import { FileText, MonitorSmartphone } from "lucide-react";
import CustomTable from "./CustomTable";

const Module2Table = () => {
  const columns = [
    "Class No.",
    "Class Type",
    "Topic / Lesson",
    "Resource Type",
  ];

  const rows = [
    ["Class 1", "Lab (Practice)", "Introducing Adobe Illustrator", "N/A"],
    ["Class 2", "Recorded Video", "Transformation Details", "N/A"],
    [
      "Class 3",
      "Lab (Practice)",
      "Pen Tool, Line Art Illustration etc.",
      "N/A",
    ],
    [
      "Class 4",
      "Online Theory",
      "Align, Distribute, Shape Mode, Pathﬁnder, Stroke etc.",
      "N/A",
    ],
    [
      "Class 5",
      "Offline (Theory)",
      "Working with Text & Image, Custom Lettering etc.",
      <a href="#" className="text-blue-600 flex items-center gap-1">
        <MonitorSmartphone size={16} /> Class Video
      </a>,
    ],
    [
      "Class 6",
      "Recorded Video",
      "Working with Blend, Effect, Paint Brush etc. and Business Card",
      "N/A",
    ],
    [
      "Class 7",
      "Lab (Practice)",
      "Business Card & Simple Logo",
      <a href="#" className="text-blue-600 flex items-center gap-1">
        <FileText size={16} />
        PDF
      </a>,
    ],
    ["Class 8", "Recorded Video", "Stationery Design Theory", "N/A"],
    [
      "Class 9",
      "Lab (Practice)",
      "Stationery Design & Canva Template Editing ",
      <a href="#" className="text-blue-600 flex items-center gap-1">
        <FileText size={16} /> Fonts & Icons
      </a>,
    ],
    [
      "Class 10",
      "Recorded Video",
      "Color Studies, Concept Development & Thank You Card Design ",
      <a href="#" className="text-blue-600 flex items-center gap-1">
        <FileText size={16} />
        PDF
      </a>,
    ],
    ["Class 11", "Recorded Video", "Marketing Material (Flyer) ", "N/A"],
    [
      "Class 12",
      "Lab (Practice)",
      "Marketing Material (Flyer) & Canva Party Flyer Editing ",
      <a href="#" className="text-blue-600 flex items-center gap-1">
        <FileText size={16} /> Mockups
      </a>,
    ],
    [
      "Class 13",
      "Recorded Video",
      "Analyzing Design & Understanding Graphic Design Principles ",
      <a href="#" className="text-blue-600 flex items-center gap-1">
        <FileText size={16} /> PDF
      </a>,
    ],
    [
        "Class 14", 
        "Recorded Video", 
        "Marketing Material (Brochure) ", 
        "N/A"],
    [
      "Class 15",
      "Lab (Practice)",
      "Marketing Material (Brochure) & Canva Food Menu Brochure Editing",
      <a href="#" className="text-blue-600 flex items-center gap-1">
         <FileText size={16} /> Mockups
      </a>,
    ],
    [
        "Class 16", 
        "Online Theory", 
        "Www.Freelancer.Com", 
        "N/A"],
    [
      "Class 17",
      "Offline (Theory)",
      "Marketplace : 01 Www.Freelancer.Com (Live Project)",
      "N/A",
    ],
    [
        "Class 18", 
        "Offline (Theory)", 
        "Logo Design, Part: 01", 
        <a href="#" className="text-blue-600 flex items-center gap-1">
         <FileText size={16} />PDF
      </a>,
    ],
    [
      "Class 19",
      "Lab (Practice)",
      "Logo Design, Part: 02 (Golden Ratio) & Logo Design Using AI (Nano Banana / Ideogram)",
      <a href="#" className="text-blue-600 flex items-center gap-1">
        <MonitorSmartphone size={16} /> Class Video
      </a>,
    ],
    [
      "Class 20",
      "Recorded Video",
      "Logo Design, Part: 03 (Typography)",
      <a href="#" className="text-blue-600 flex items-center gap-1">
        <MonitorSmartphone size={16} /> Class Video
      </a>,
    ],
    [
      "Class 21",
      "Lab (Practice)",
      "Marketing Material (Calendar & Food Menu)",
      <a href="#" className="text-blue-600 flex items-center gap-1">
         <FileText size={16} /> Mockups
      </a>,
    ],
    [
        "Class 22", 
        "Recorded Video", 
        "Marketing Material (PVC Banner)", 
        "N/A"],
    [
      "Class 23",
      "Online Theory",
      "Product Packaging, Label Design & Using Pacdora.Com",
      "N/A",
    ],
    [
      "Class 24",
      "Lab (Practice)",
      "Product Packaging, Label Design & Using Diecuttemplates.Com",
      <a href="#" className="text-blue-600 flex items-center gap-1">
        <MonitorSmartphone size={16} /> Class Video
      </a>,
    ],
    [
      "Class 25",
      "Lab (Practice)",
      "Print On Demand (POD) Design",
      <a href="#" className="text-blue-600 flex items-center gap-1">
         <FileText size={16} /> Fonts & Mockups
      </a>,
    ],
    [
      "Class 26",
      "Offline (Theory)",
      "ChatGPT, Gemini, Ideogram, Leonardo, Recraf Etc.",
      "N/A",
    ],
    [
      "Class 27",
      "Offline (Theory)",
      "Portfolio And Pre-Press Setup",
      <a href="#" className="text-blue-600 flex items-center gap-1">
        <MonitorSmartphone size={16} /> Class Video
      </a>,
    ],
    [
      "Class 28",
      "Offline (Theory)",
      "Marketplace : 02 Www.Shutterstock.Com (Live Project)",
      <a href="#" className="text-blue-600 flex items-center gap-1">
         <FileText size={16} />PDF
      </a>,
    ],
    [
      "Class 29",
      "Online (Theory)",
      "Illustrator Final Exam",
      "N/A",
    ],
  ];

  return <CustomTable columns={columns} rows={rows} className="mt-6 " />;
};

export default Module2Table;
