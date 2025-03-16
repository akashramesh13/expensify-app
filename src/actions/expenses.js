import { v4 } from "uuid";
import db, { onValue, ref, set } from "../firebase/firebase";

// ADD EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = {
      id: v4(),
      description,
      note,
      amount,
      createdAt,
    };
    set(ref(db, `users/${uid}/expenses/${expense.id}`), {
      ...expense,
    }).then(() => {
      dispatch(addExpense(expense));
    });
  };
};

// SET EXPENSE

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    return onValue(ref(db, `users/${uid}/expenses`), (snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          ...childSnapshot.val(),
        });
      });
      return dispatch(setExpenses(expenses));
    });
  };
};

// REMOVE_EXPENSE

export const removeExpense = ({ id }) => ({
  type: "REMOVE_EXPENSE",
  id,
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    set(ref(db, `users/${uid}/expenses/${id}`), {}).then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const startEditExpense = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    set(ref(db, `users/${uid}/expenses/${id}`), {
      ...updates,
      id,
    }).then(dispatch(editExpense(id, updates)));
  };
};
