import numeral from "numeral";
import moment from "moment";
export const Format_Money = ({ amount }) => {
  return numeral(amount).format("0,0") + " ກີບ";
};

export const ThisYear = () => {
  return new Date().getFullYear();
};

export const Fomatdate = ({ mydate }) => {
  return moment(mydate).format("DD/MM/YY, h:mm:ss a");
};
