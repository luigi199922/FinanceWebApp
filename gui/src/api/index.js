import axios from "axios";
import HashTable from "../shared/hashTable";
const url = "https://covid19.mathdro.id/api";
const econDataUrl =
  "https://finnhub.io/api/v1/economic?code=MA-XXX-678073&token=boqata7rh5rfjhndqf1g";

export const fetchData = async (country) => {
  let flexUrl = url;

  if (country) {
    flexUrl = url + "/countries/" + country;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(flexUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

const formatUrl = (countryCode) => {
  return econDataUrl.replace("XXX", countryCode);
};

export const fetchEconomicData = async (country) => {
  try {
    const { data } = await axios.get(formatUrl(country));
    const modifiedData = [];
    data.map((dailyData) => {
      modifiedData.unshift({ date: dailyData[0], value: dailyData[1] });
    });
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyCountries = async () => {
  const economicCodesUrl =
    "https://finnhub.io/api/v1/economic/code?token=boqata7rh5rfjhndqf1g";
  const { data } = await axios.get(economicCodesUrl);
  const countries = new HashTable();
  const economicCodes = new HashTable();
  data.forEach(async (item) => {
    console.log(item);
    if (countries.getItem(item.country) === null) {
      const code = item.code.slice(3, 6);
      await countries.setItem(item.country, code);
    }
    // if (economicCodes.getItem(item.name) == null) {
    //   const code = item.code.slice(7);
    //   economicCodes.setItem(item.name, code);
    // }
  });

  return countries;
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(url + "/daily");
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(url + "/countries");
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};
