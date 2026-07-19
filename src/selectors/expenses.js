export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const expenseDate = new Date(expense.createdAt)
        .toISOString()
        .split("T")[0];
      const startDateMatch = startDate ? expenseDate >= startDate : true;
      const endDateMatch = endDate ? expenseDate <= endDate : true;
      const textMatch = expense.description
        ? expense.description.toLowerCase().includes(text.toLowerCase())
        : true;
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
      return 0;
    });
};
