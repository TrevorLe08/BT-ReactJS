import { useState } from 'react';
import './App.css';
import { Formik } from 'formik';

function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }
  let [form, setForm] = useState({})

  let handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  let handleValidate = () => {
    const errors = {}
    if (!form.to) {
      errors.to = "Required"
    } else if (!REGEX.email.test(form.to)) {
      errors.to = "Invalid email address"
    }
    if (!form.title) {
      errors.title = "Required"
    }
    if (!form.message) {
      errors.message = "Required"
    }
    return errors
  }
  let handleSubmit = () => {
    alert("Sent successfully")
  }
  return (
    <div>
      <h2>Mail form</h2>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={`custom-input ${errors.to ? "custom-input-error" : ""}`}>
              <label htmlFor="to">To</label>
              <input type="text" name="to" value={form.to || ""} onChange={handleChange} />
              <p className="error">{errors.to}</p>
            </div>
            <div className={`custom-input ${errors.title ? "custom-input-error" : ""}`}>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" value={form.title || ""} onChange={handleChange} />
              <p className="error">{errors.title}</p>
            </div>
            <div className={`custom-input ${errors.message ? "custom-input-error" : ""}`}>
              <label htmlFor="message">Message</label>
              <textarea type="text" name="message" value={form.message || ""} onChange={handleChange} />
              <p className="error">{errors.message}</p>
            </div>
            <div>
              <input type="file" name="file" />
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
