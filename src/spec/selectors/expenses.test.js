import selectExpenses from "../../selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0,
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 109500,
    createdAt: 0 - 4 * 24 * 60 * 60 * 1000, // 4 days before epoch
  },
  {
    id: "3",
    description: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: 0 + 4 * 24 * 60 * 60 * 1000, // 4 days after epoch
  },
];

test("should filter by text value", () => {
  const filters = {
    text: "e",
    sortBy: "date",
    startDate: "",
    endDate: "",
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test("should filter by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: "1970-01-01",
    endDate: "",
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by endDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: "",
    endDate: "1970-01-01",
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: "",
    endDate: "",
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test("should sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: "",
    endDate: "",
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
