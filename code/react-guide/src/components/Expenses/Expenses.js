import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

//import filter component
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {



  
  const expenses = props.items;
  return (
    <div>
     

    <Card className="expenses">
     
    <ExpensesFilter/>
     
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />

      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </Card>
    </div>
  );
}

export default Expenses;
