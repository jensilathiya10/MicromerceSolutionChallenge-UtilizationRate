import  { useMemo } from "react";
import {
  MaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import sourceData from "./source-data.json";
import type { SourceDataType, TableDataType, Employee, ExternalEmployee } from "./types";

console.log(sourceData)

const flattenPersons = (data: SourceDataType[]): (Employee | ExternalEmployee)[] => {
  return data.flatMap((item) => {
    // Normalize employees to array
    const employees = item.employees
      ? Array.isArray(item.employees)
        ? item.employees
        : [item.employees]
      : [];

    // Normalize externals to array
    const externals = item.externals
      ? Array.isArray(item.externals)
        ? item.externals
        : [item.externals]
      : [];

    return [...employees, ...externals];
  });
};
const formatPercent = (value?: number | null) => {
  if (value === undefined || value === null) return "-";
  return `${(value * 100).toFixed(0)}%`; 
};

const formatCurrency = (value?: number | null) => {
  if (value === undefined || value === null) return "-";
  return `${value.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  })} EUR`;
};
const Example = () => {
const allPersons = flattenPersons(sourceData as unknown as SourceDataType[]).filter(
    (p) => p.status?.toLowerCase() === "active"
  );
  const activePersons = allPersons.filter(
    (p) => p.status?.toLowerCase() === "active"
  );
  
  console.log("Active persons:", allPersons);
  const tableData: TableDataType[] = useMemo(()=>allPersons.map((person) => {
    const name = `${person.firstname} ${person.lastname ?? ""}`.trim();

    const past12Months = person.workforceUtilisation?.utilisationRateLastTwelveMonths ?? 0;
  const y2d = person.workforceUtilisation?.utilisationRateYearToDate ?? 0;

  const lastThree = person.workforceUtilisation?.lastThreeMonthsIndividually ?? [];

  const getMonthValue = (month: string) => {
    const found = lastThree.find((m) => m.month.toLowerCase() === month.toLowerCase());
    return found?.utilisationRate ?? 0;
  };

    const may = getMonthValue("may");
    const june = getMonthValue("june");
    const july = getMonthValue("july");

    const netEarningsPrevMonth = person.workforceUtilisation?.monthlyCostDifference ?? 0;

    return {
      person: name,
      past12Months,
      y2d,
      may,
      june,
      july,
      netEarningsPrevMonth,
    };
  }),[allPersons]);

  const columns = useMemo<MRT_ColumnDef<TableDataType>[]>(() => [
  { accessorKey: "person", header: "Person" },

  {
    accessorKey: "past12Months",
    header: "Past 12 Months",
    Cell: ({ cell }) => formatPercent(cell.getValue<number>()),
  },
  {
    accessorKey: "y2d",
    header: "Y2D",
    Cell: ({ cell }) => formatPercent(cell.getValue<number>()),
  },
  {
    accessorKey: "may",
    header: "May",
    Cell: ({ cell }) => formatPercent(cell.getValue<number>()),
  },
  {
    accessorKey: "june",
    header: "June",
    Cell: ({ cell }) => formatPercent(cell.getValue<number>()),
  },
  {
    accessorKey: "july",
    header: "July",
    Cell: ({ cell }) => formatPercent(cell.getValue<number>()),
  },
  {
    accessorKey: "netEarningsPrevMonth",
    header: "Net Earnings Prev Month",
    Cell: ({ cell }) => formatCurrency(cell.getValue<number>()),
  },
], []);

  return <MaterialReactTable columns={columns} data={tableData} />;
};

export default Example;
