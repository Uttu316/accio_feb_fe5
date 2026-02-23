import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import ResumeList from "./components/resumeList";

const App = () => {
  return (
    <div className="page-container">
      <Header />
      <h1>Hello! I am Utkarsh Gupta</h1>
      <ResumeList />
      <ResumeList />
      <ResumeList />

      <Footer />
    </div>
  );
};
export default App;
