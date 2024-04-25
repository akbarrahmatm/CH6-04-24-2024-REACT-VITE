import logoImg from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={logoImg} alt="Quiz Logo" />
      <h1>Quiz App</h1>
    </header>
  );
}
