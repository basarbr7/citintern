type TableProps = {
  columns: string[];
  rows: React.ReactNode[][];
  className?: string;
};

const CustomTable = ({ columns, rows, className }: TableProps) => {
  return (
    <div className={`overflow-hidden rounded-[10px] border border-[#8F94FB]/40 ${className}`}>
      <table className="w-full border-collapse text-left">

        {/* Header */}
        <thead className="bg-[#342B27]">
          <tr>
            {columns.map((col, i) => (
              <th
                key={i}
                className="px-4 py-3 text-white border-b border-r border-[#D4D4D4]/50  text-base font-semibold "
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-[#F0F1F5]" :"bg-white" }
            >
              {row.map((cell, i) => (
                <td
                  key={i}
                  className="px-6 py-4 border-b border-r border-[#D4D4D4] text-[#605F62] text-sm font-medium "
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default CustomTable;
