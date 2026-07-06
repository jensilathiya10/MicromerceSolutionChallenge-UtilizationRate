type Address = {
  country: string;
  streetName: string;
  postalCode?: string;
  locality: string;
  houseNumber?: string;
};

type Period = {
  monthlySalary?: number;
  start: string;
  end: string;     
  hourlyRate?: number;
  timeBudget?: number;
};

type MonthlyCost = {
  costs: number;
  month: string;
};

type CostsByMonth = {
  _applicationId: string;
  periods?: Period[];
  costsByMonth?: MonthlyCost[];
  _updatedDate: string;
  _definitionId: string;
  _createdDate: string;
};

type MRNReference = {
  _mrn: string;
};

type StatusAggregation = {
  monthlySalary?: number | null;
  _updatedDate: string;
  yearlyVacationDays?: number | null;
  _createdDate: string;
  jobTitle?: MRNReference | null;
  _applicationId: string;
  weeklyWorkingHours?: number | null;
  jobType?: MRNReference | null;
  _definitionId: string;
  status: string;
};

type QuarterEarnings = {
  earnings: number;
  start: string;
  name: string;
  end: string;
};

type LastThreeMonthsIndividually = {
  month: string;
  utilisationRate: number;
};

type WorkforceUtilisation = {
  _updatedDate: string;
  totalCostPerCustomer?: number;
  _createdDate: string;
  utilisationRateOngoingQuarter?: number;
  monthlyCostDifference?: number;
  utilisationRateLastTwelveMonths?: number;
  timeWorkedPreviousQuarter?: number;
  utilisationRateOverall?: number;
  utilisationRateYearToDate?: number;
  utilisationRatePreviousQuarter?: number;
  _definitionId: string;
  lastThreeMonthsIndividually?: LastThreeMonthsIndividually[];
  quarterEarnings?: QuarterEarnings[];
};

type EmploymentStatus = {
  _applicationId: string;
  employmentStatus: string;
  _updatedDate: string;
  _definitionId: string;
  _createdDate: string;
};

export type Employee = {
  birthday?: string;
  firstname: string;
  _mrn: string;
  _createdDate: string;
  jobTitle?: MRNReference;
  hourlyRateForProjects?: number;
  costsByMonth?: CostsByMonth;
  _createdBy?: string;
  usedVacationDays?: number;
  potentialEarnings?: number;
  _archived?: string;
  statusAggregation?: StatusAggregation;
  jobType?: MRNReference;
  address?: Address;
  hoursPerWeek?: number;
  _updatedDate: string;
  team?: MRNReference;
  targetWorkingHours?: number;
  lastname?: string;
  holidayPerYear?: number;
  workforceUtilisation?: WorkforceUtilisation;
  name: string;
  earnedVacationDays?: number;
  _id: string;
  individualTicketDuration?: number;
  searchValue?: string;
  status: string;
  salutation?: string;
  email?: string;
  employmentStatus?: EmploymentStatus;
};

export type ExternalEmployee = Employee & {
  salutation?: string;
  email?: string;
};

type Team = {
  _updatedDate: string;
  _mrn: string;
  _createdDate: string;
  name: string;
  _archived?: string;
  _id: string;
  _createdBy?: string;
};

// Type for source-data.json
export type SourceDataType = {
  employees?: Employee[];
  externals?: ExternalEmployee[];
  teams?: Team[];
};

// Type for Table Column and Row Data
export type TableDataType = {
  person: string;
  past12Months: number;
  y2d: number;
  may: number;
  june: number;
  july: number;
  netEarningsPrevMonth: number;
};
