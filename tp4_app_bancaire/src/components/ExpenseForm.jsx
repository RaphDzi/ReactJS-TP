import React, { useState, useEffect } from "react"


export default function ExpenseForm({ categories, libelles, onAddExpense, expenses, onDeleteExpense }) {
  const [form, setForm] = useState({
    libelle: "",
    date: "",
    montant: "",
    categorie: ""
  })

  // initialise le form quand les props sont disponibles
  useEffect(() => {
    setForm({
      libelle: libelles && libelles.length > 0 ? libelles[0] : "",
      date: "",
      montant: "",
      categorie: categories && categories.length > 1 ? categories[1].category : ""
    })
  }, [categories, libelles])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newExpense = {
      id: Date.now(),
      ...form,
      montant: Number(form.montant)
    }
    onAddExpense(newExpense)

    // reset form après ajout
    setForm({
      libelle: libelles && libelles.length > 0 ? libelles[0] : "",
      date: "",
      montant: "",
      categorie: categories && categories.length > 1 ? categories[1].category : ""
    })
  }

  // on vérifie que libelles et categories existent avant de map()
  const safeLibelles = libelles || []
  const safeCategories = categories || []

  return (
    <div className="expense-form-container">
      <form onSubmit={handleSubmit} className="form-depense">
        <label>
          Libellé :
          <select name="libelle" value={form.libelle} onChange={handleChange}>
            {safeLibelles.map((lib, i) => (
              <option key={i} value={lib}>{lib}</option>
            ))}
          </select>
        </label>

        <label>
          Date :
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
        </label>

        <label>
          Montant (€) :
          <input type="number" name="montant" value={form.montant} onChange={handleChange} required />
        </label>

        <label>
          Catégorie :
          <select name="categorie" value={form.categorie} onChange={handleChange}>
            {safeCategories.filter(c => c.category !== "total").map((c, i) => (
              <option key={i} value={c.category}>{c.category}</option>
            ))}
          </select>
        </label>

        <button type="submit">Ajouter</button>
      </form>

      <ul className="expenses-list">
        {expenses.map(exp => (
          <li key={exp.id} className="expense-item">
            <span>
              <strong>{exp.libelle}</strong> - {exp.montant} € | {exp.categorie} | {exp.date}
            </span>
            <button onClick={() => onDeleteExpense(exp.id)}>❌ Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
