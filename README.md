To run this code:

- `npm install` or `yarn`
- `npm run start` or `yarn start`

The relevant files in the src folder to work with are:
- table-script.tsx -> contains the relevant code for preparing and displaying the data
- source-data.json -> contains all the relevant data needed for the exercise

### 📗 User Story

As a User of the Workforce Management Backoffice, I would like to understand workforce utilisation rate on a per person level with associated costs.

    Utilization rate is the percentage of an employee's total hours spent doing billable work instead of internal or non-billable work

### 📋 Detailed Requirements Description

Please implement a dashboard that has the structure of the table below:

- dashboard shows each active person (employees and externals)
- we can see utilisation year to date, last twelve months, last three months

| Person     | Past 12 Months | Y2D | May | June | July | Net Earnings Prev Month |
| ---------- | -------------- | --- | --- | ---- | ---- | ----------------------- |
| Person A   | 89%            | ... | ... | 72%  | ...  | 3500 EUR                |
| External D | ...            | ... | ... | 72%  | ...  | -1980 EUR               |

### ✅ Acceptance Criteria

- All fields that fetch data (e.g. Net earnings prev Month) are fetched correctly for each cell
- All mathematical operations are correctly performed and displayed in an intuitive way
