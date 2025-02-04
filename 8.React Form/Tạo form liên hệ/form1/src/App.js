import React, { useState } from "react";
import { Formik, Form } from "formik";
import "./App.css";

function App() {
  const REGEX = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }
  const [form, setForm] = useState({})

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleValidate() {
    const errors = {}
    if (!form.name) {
      errors.name = "Required"
    }
    if (!form.email) {
      errors.email = "Required"
    } else if (!REGEX.email.test(form.email)) {
      errors.email = "Invalid email"
    }
    if (!form.phone) {
      errors.phone = "Required"
    }
    return errors
  }
  function handleSubmit() {
    alert("Thêm liên hệ thành công")
  }
  return (
    <div>
      <h1>Contact form</h1>
      <Formik
        initialValues={form}
        validate={handleValidate}
        onSubmit={handleSubmit}
      >
        {({ errors, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className={`custom-input ${errors.name ? "custom-input-error" : ""}`}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={form.name || ""} onChange={handleChange} />
              <p className="error">{errors.name}</p>
            </div>
            <div className={`custom-input ${errors.email ? "custom-input-error" : ""}`}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={form.email || ""} onChange={handleChange} />
              <p className="error">{errors.email}</p>
            </div>
            <div className={`custom-input ${errors.phone ? "custom-input-error" : ""}`}>
              <label htmlFor="phone">Phone</label>
              <input type="number" name="phone" value={form.phone || ""} onChange={handleChange} />
              <p className="error">{errors.phone}</p>
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message"></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default App;
