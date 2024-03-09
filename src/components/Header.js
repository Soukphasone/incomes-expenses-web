import { ThisYear } from "../helper/suport";
function Header() {
  return (
    <div className="header">
      <h3>ລາຍຮັບ - ລາຍຈ່າຍ {ThisYear()}</h3>
    </div>
  );
}
export default Header;
