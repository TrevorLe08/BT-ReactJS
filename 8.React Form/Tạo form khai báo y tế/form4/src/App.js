import './App.css';
import { Formik } from 'formik';
import { useState } from 'react'
function App() {
  let [form, setForm] = useState({})
  const SEX_LIST = [
  {
    label: "Nam",
    value: "Male"
  },{
    label: "Nữ",
    value: "Female"
  }
]
  return (
    <div>
      <Formik
        initialValues={

        },
      >

      </Formik>
    </div>
  );
}

export default App;
