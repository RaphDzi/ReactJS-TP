import { useState } from "react"
import "./App.css"
import CardSpendingCategories from "./components/CardCategories.jsx"
import { CATEGORIES, LIBELLE } from "./components/data"
import ExpenseForm from "./components/ExpenseForm.jsx"

function App() {
  const [categories, setCategories] = useState(CATEGORIES)
  const [expenses, setExpenses] = useState([]) // historique des dépenses

  // state pour le form
  const [form, setForm] = useState({
    libelle: LIBELLE[0],
    date: "",
    montant: "",
    categorie: CATEGORIES[1].category // par défaut "alimentation"
  })

  // gestion des changements dans le form
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  // fonction pour recalculer le total
  const updateTotal = (cats) => {
    const total = cats
      .filter((c) => c.category !== "total")
      .reduce((acc, cur) => acc + cur.spending, 0)

    return cats.map((cat) =>
      cat.category === "total" ? { ...cat, spending: total } : cat
    )
  }

  // soumettre une dépense
  const handleSubmit = (e) => {
    e.preventDefault()

    // ajout dans les catégories
    const updated = categories.map((cat) =>
      cat.category === form.categorie
        ? { ...cat, spending: cat.spending + Number(form.montant) }
        : cat
    )

    const withTotal = updateTotal(updated)
    setCategories(withTotal)

    // ajout dans la liste des dépenses
    const newExpense = {
      id: Date.now(),
      ...form,
      montant: Number(form.montant)
    }
    setExpenses([...expenses, newExpense])

    // reset form
    setForm({
      libelle: LIBELLE[0],
      date: "",
      montant: "",
      categorie: CATEGORIES[1].category
    })
  }

  const handleAddExpense = (expense) => {
    // mettre à jour la catégorie
    const updated = categories.map(cat =>
      cat.category === expense.categorie
        ? { ...cat, spending: cat.spending + expense.montant }
        : cat
    )
    setCategories(updateTotal(updated))
    setExpenses([...expenses, expense])
  }


  // supprimer une dépense
  const handleDeleteExpense = (id) => {
    const expenseToDelete = expenses.find((exp) => exp.id === id)
    if (!expenseToDelete) return

    // on enlève le montant de la catégorie
    const updated = categories.map((cat) =>
      cat.category === expenseToDelete.categorie
        ? { ...cat, spending: cat.spending - expenseToDelete.montant }
        : cat
    )

    const withTotal = updateTotal(updated)
    setCategories(withTotal)

    // mise à jour de la liste des dépenses
    setExpenses(expenses.filter((exp) => exp.id !== id))
  }

  return (
    <div className="app">
      <h1>Suivi des dépenses</h1>

      <CardSpendingCategories categories={categories} />

      <ExpenseForm
        categories={categories}
        LIBELLE={LIBELLE}
        onAddExpense={handleAddExpense}
        expenses={expenses}
        onDeleteExpense={handleDeleteExpense}
      />
    </div>
  )
}

export default App
