import LoginLayout from "../components/Login/LoginLayout";

export default function Login() {
  return (
    <div className="container">
      <LoginLayout />
      <style jsx>{`
        .container {
          width: 100%;
          height: calc(100vh - 150px);
        }
      `}</style>
    </div>
  );
}
