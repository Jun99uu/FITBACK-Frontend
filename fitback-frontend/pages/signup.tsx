import SignupLayout from "../components/Signup/SignupLayout";

export default function SignUp() {
  return (
    <div className="container">
      <SignupLayout />
      <style jsx>{`
        .container {
          width: 100%;
          padding: 150px 0px;
        }
      `}</style>
    </div>
  );
}
