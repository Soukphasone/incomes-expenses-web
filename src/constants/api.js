// eslint-disable-next-line no-undef
import axios from "axios";

const mainUrl = "https://incomes-expenses.onrender.com";

export const apiLinks = {
  REPORT: {
    SIGNUP:`${mainUrl}/user`,
    LOGIN:`${mainUrl}/login`,
    REPORT_INC_EXP: `${mainUrl}/incomes_expense`,
    REPORT_Day: `${mainUrl}/reportamout/day`,
    REPORT_Month: `${mainUrl}/reportamout/month`,
    REPORT_Year: `${mainUrl}/reportamout/year`,
  },
};

export const getReport = async () => {
  try {
    const response = await axios.get(apiLinks.REPORT.REPORT_INC_EXP);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getReportDay = async () => {
  try {
    const response = await axios.get(apiLinks.REPORT.REPORT_Day);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getReporMonth = async () => {
  try {
    const response = await axios.get(apiLinks.REPORT.REPORT_Month);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getReporYear = async () => {
  try {
    const response = await axios.get(apiLinks.REPORT.REPORT_Month);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

