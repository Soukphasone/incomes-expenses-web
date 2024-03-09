import AddExpenses from "../components/AddExpenses";
import AddIncomes from "../components/AddIncomes";
import AddNavbar from "../components/Navbar";
import ReportIn_exToday from "../components/ReportExpDay";
import ReportExpesesMonth from "../components/ReportExpMonth";
import ReportExpesesYear from "../components/ReportExpYear";
import RealTimeClock from "../components/RealTimeClock";
const HomePage = () => {
  return (
    <>
      <AddNavbar />
      <AddIncomes />
      <span style={{ padding: "0px 5px 0px 5px" }}></span>
      <AddExpenses />
      <RealTimeClock />
      <ReportIn_exToday />
      <hr />
      <ReportExpesesMonth />
      <hr />
      <ReportExpesesYear />
    </>
  );
};
export default HomePage;
