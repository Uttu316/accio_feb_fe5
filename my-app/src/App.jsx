import "./App.css";
import ContactForm from "./components/ContactForm";
import Counter from "./components/Counter";
import Footer from "./components/footer";
import Header from "./components/header";
import ResumeList from "./components/resumeList";
import { EDUCATION, EXPIRENCES, SKILLS } from "./data/resumeData";

const App = () => {
  return (
    <div className="page-container">
      <Header />
      <h1>Hello! I am Utkarsh Gupta</h1>

      {
        <>
          <ResumeList list={SKILLS} title={"Skills"} />

          <ResumeList list={EXPIRENCES} title={"Experience"} />
          <ResumeList list={EDUCATION} title={"Education"} />
        </>
      }
      <h2>Projects</h2>
      <Counter />

      <ContactForm />

      <Footer />
    </div>
  );
};
export default App;
