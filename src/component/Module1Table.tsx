import { FileText, MonitorSmartphone } from "lucide-react";
import CustomTable from "./CustomTable";


const Module1Table = () => {
  const columns = ["Class No.", "Class Type", "Topic / Lesson", "Resource Type"];

  const rows = [
    [
      "Class 1",
      "Offline (Theory)",
      "Fundamental Of Graphic Design",
      <a href="#" className="text-blue-600 flex items-center gap-1">
         <FileText size={16} />PDF
      </a>,
    ],
    [
      "Class 2",
      "Offline (Lab)",
      "Introducing With Microsoft PowerPoint",
      <a href="#" className="text-blue-600 flex items-center gap-1">
        <MonitorSmartphone size={16} /> Class Video
      </a>,
    ],
    [
      "Class 3",
      "Lab (Practice)",
      "Interactive PowerPoint Presentation",
      "N/A",
    ],
    [
      "Class 4",
      "Lab (Exam)",
      "Fundamental Exam (MCQ & Presentation)",
      "N/A",
    ],
  ];

  return <CustomTable columns={columns} rows={rows} className="mt-6 "/>;
};

export default Module1Table;
