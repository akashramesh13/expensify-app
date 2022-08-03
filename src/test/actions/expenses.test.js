import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense action", () => {
  const action = editExpense("123abc", {
    note: "New test note",
  });
  expect(action).toEqual({
    id: "123abc",
    type: "EDIT_EXPENSE",
    updates: {
      note: "New test note",
    },
  });
});

test("should setup add expnse action object with provided values", () => {});
test("should setup add expnse action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last month's ret",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});
test("should setup add expnse action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      amount: 0,
      createdAt: 0,
      description: "",
      id: expect.any(String),
      note: "",
    },
  });
});
