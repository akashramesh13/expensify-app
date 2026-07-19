# Expensify

A modern, responsive expense tracking application built with React, Redux Toolkit, and Firebase.

## Project Structure

```text
src/
├── actions/              # (Removed - Migrated to Redux Toolkit Slices)
├── components/
│   ├── AddExpensePage.jsx      # Page to create a new expense
│   ├── EditExpensePage.jsx     # Page to edit an existing expense
│   ├── ExpenseDashboardPage.jsx# Main dashboard displaying expenses
│   ├── ExpenseForm.jsx         # Reusable form component for expenses
│   ├── ExpenseList.jsx         # Component to render the list of expenses
│   ├── ExpenseListFilters.jsx  # Search, sort, and date range filters
│   ├── ExpenseListItem.jsx     # Individual expense card
│   ├── ExpensesSummary.jsx     # Total count and amount summary
│   ├── Header.jsx              # App header with logo, theme toggle, logout
│   ├── LoadingPage.jsx         # Full screen loading spinner
│   ├── LoginPage.jsx           # Google sign-in page
│   ├── NotFoundPage.jsx        # 404 error page
│   └── ThemeToggle.jsx         # 4-way theme cycle (system, light, dark, catppuccin)
├── firebase/
│   └── firebase.js             # Firebase initialization and configuration
├── reducers/             # (Removed - Migrated to Redux Toolkit Slices)
├── routers/
│   ├── AppRouter.jsx           # BrowserRouter configuration
│   ├── PrivateRoute.jsx        # HOC for authenticated routes
│   └── PublicRoute.jsx         # HOC for unauthenticated routes (e.g. login)
├── selectors/
│   ├── expenses.js             # Logic for sorting and filtering expenses
│   └── expenses-total.js       # Logic for calculating total expense amount
├── store/
│   ├── authSlice.js            # RTK slice for auth state
│   ├── configureStore.js       # Redux Toolkit store setup
│   ├── expensesSlice.js        # RTK slice for expenses and async thunks
│   └── filtersSlice.js         # RTK slice for filter state
├── styles/
│   ├── base/
│   │   ├── _base.scss          # Base typography and HTML elements
│   │   └── _settings.scss      # Theme variables and design tokens
│   ├── components/             # Component-specific styles
│   │   ├── _box-layout.scss    # Login page layout
│   │   ├── _button.scss        # Button styles
│   │   ├── _content-container.scss # Responsive max-width wrappers
│   │   ├── _form.scss          # Form layouts
│   │   ├── _header.scss        # Header and navbar styles
│   │   ├── _input-group.scss   # Filter bar layouts
│   │   ├── _inputs.scss        # Text, select, and date inputs
│   │   ├── _list.scss          # Expense list and cards
│   │   ├── _loader.scss        # Loading spinner styles
│   │   ├── _page-header.scss   # Summary header styles
│   │   └── _visibility.scss    # Mobile/desktop utility classes
│   └── styles.scss             # SCSS entry point
└── index.jsx                   # Application entry point
```

## Setup & Running

```bash
# Install dependencies
npm install

# Start local dev server
npm start

# Build for production
npm run build
```
