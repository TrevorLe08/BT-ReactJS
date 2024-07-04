import './App.css';

function Alert(props) {
  return (
    <div class="alert alert-danger" role="alert">
      {props.text}
    </div>
  )
}
export default function App() {
  return (
    <div>
      <Alert text="Cảnh báo! Tài nguyên bạn vừa truy cập không tồn tại." />
    </div>
  );
}
