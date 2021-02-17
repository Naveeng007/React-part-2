import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {editExpense,removeExpense} from '../actions/expenses'
const ExpensePage=(props)=>{//this is actually edit expense page
    console.log(props)
   return (
    <div>
        <ExpenseForm 

         expense={props.expense}
         onSubmit={(expense)=>{
             props.dispatch(editExpense(props.expense.id,expense))
             props.history.push('/')
             console.log('updated',expense)
         }}
        />

        <button onClick={()=>{
            props.dispatch(removeExpense({id:props.expense.id}))
            props.history.push('/') 
        }}>Remove</button>

    </div>
);
}

const mapStateProps=(state,props)=>{
    return {
        expense:state.expenses.find((expenses)=>{
            return expenses.id===props.match.params.id
        })
    }
}

export default connect(mapStateProps)(ExpensePage)