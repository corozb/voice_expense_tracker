import { useContext } from 'react'

import { ExpenseTrackerContext } from './context/context'
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories'

const useTransaction = (title) => {
  resetCategories()

  console.log('title', title)

  const { transactions } = useContext(ExpenseTrackerContext)
  const transactionsPerType = transactions.filter((t) => t.type === title)
  const total = transactionsPerType.reduce((acc, curr) => (acc += curr.amount), 0)
  const categories = title === 'Income' ? incomeCategories : expenseCategories

  console.log({ transactionsPerType, total, categories })

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category)

    if (category) category.amount += t.amount
  })

  const filteredCategories = categories.filter((c) => c.amount > 0)

  console.log('categorias mayor a cero', filteredCategories)

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  }

  return { total, chartData }
}

export default useTransaction
