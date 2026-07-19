import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import db, { ref, set, onValue } from "../firebase/firebase";

export const startAddExpense = createAsyncThunk(
  "expenses/startAddExpense",
  async (expenseData, { getState }) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = {
      id: uuidv4(),
      description,
      note,
      amount,
      createdAt,
    };
    await set(ref(db, `users/${uid}/expenses/${expense.id}`), expense);
    return expense;
  }
);

export const startSetExpenses = createAsyncThunk(
  "expenses/startSetExpenses",
  async (_, { getState }) => {
    const uid = getState().auth.uid;
    return new Promise((resolve) => {
      onValue(ref(db, `users/${uid}/expenses`), (snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
          expenses.push({ ...childSnapshot.val() });
        });
        resolve(expenses);
      }, { onlyOnce: true });
    });
  }
);

export const startRemoveExpense = createAsyncThunk(
  "expenses/startRemoveExpense",
  async ({ id }, { getState }) => {
    const uid = getState().auth.uid;
    await set(ref(db, `users/${uid}/expenses/${id}`), null);
    return id;
  }
);

export const startEditExpense = createAsyncThunk(
  "expenses/startEditExpense",
  async ({ id, updates }, { getState }) => {
    const uid = getState().auth.uid;
    await set(ref(db, `users/${uid}/expenses/${id}`), { ...updates, id });
    return { id, updates };
  }
);

const initialState = [];

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startAddExpense.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(startSetExpenses.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(startRemoveExpense.fulfilled, (state, action) => {
        return state.filter((expense) => expense.id !== action.payload);
      })
      .addCase(startEditExpense.fulfilled, (state, action) => {
        const index = state.findIndex((expense) => expense.id === action.payload.id);
        if (index !== -1) {
          state[index] = { ...state[index], ...action.payload.updates };
        }
      });
  },
});

export default expensesSlice.reducer;
