import { useState } from 'react'
import { Formik } from 'formik'
import "./App.css"

function App() {
  let [books, setBooks] = useState([])
  let [form, setForm] = useState({})
  let [indexSelected, setIndexSelected] = useState(-1)

  let handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  let handleValidate = () => {
    const errors = {}
    if (!form.title) {
      errors.title = "Required"
    }
    if (!form.number) {
      errors.number = "Required"
    }
    return errors
  }

  let handleSelect = (book, index) => {
    setForm(book)
    setIndexSelected(index)
  }

  let handleDelete = (index) => {
    let newBooks = JSON.parse(JSON.stringify(books))
    newBooks.splice(index, 1)
    setBooks(newBooks)
    alert("Delete successfully")
  }

  let handleSubmit = () => {
    let newBooks = JSON.parse(JSON.stringify(books))
    if (indexSelected > -1) {
      newBooks.splice(indexSelected, 1, form)
      alert("Edit successfully")
    } else {
      newBooks.push(form)
      alert("Submit successfully")
    }
    setBooks(newBooks)
    setForm({})
    setIndexSelected(-1)
  }

  return (
    <>
      <div className='container'>
        <h2>Library</h2>
        <Formik
          initialValues={form}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          {({ errors, handleSubmit }) => (
            <form onSubmit={handleSubmit} className='mb-2'>
              <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={form.title || ""} onChange={handleChange} />
                <p className="error">{errors.title}</p>
              </div>
              <div className={`custom-input ${errors.number ? "custom-input-error" : ""}`}>
                <label htmlFor="email">Number</label>
                <input type="number" name="number" value={form.number || ""} onChange={handleChange} />
                <p className="error">{errors.number}</p>
              </div>
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
        <table >
          <thead>
            <tr>
              <th>Title</th>
              <th>Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.title}</td>
                <td>{book.number}</td>
                <td>
                  <button onClick={() => handleSelect(book, index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
