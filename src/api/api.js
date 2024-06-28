import { axios } from "../utils/axios";
const login = async ({ username, password }) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);

    const res = await axios.post("/auth/signin", { username, password });
    // console.log(res);
    return {
      data: res.data,
      status: res.status,
    };
  } catch (error) {
    console.log(error);
  }
};

const fetchUserInfo = async () => {
  try {
    const result = await axios.get("/user-info");
    return {
      data: result.data,
      status: result.status,
    };
  } catch (error) {
    console.log(error);
  }
};

const dateStatisticsFetcher = () => {
  return axios.get("/by-date-statistic");
};

const statusStatisticsFetcher = ({ startDate, endDate } = {}) => {
  return axios.get("/by-status-statistic", {
    params: {
      startDate,
      endDate,
    },
  });
};

const requestStatisticsFetcher = ({ startDate, endDate } = {}) => {
  return axios.get("/by-request-type-statistic", {
    params: {
      startDate,
      endDate,
    },
  });
};

const expertsByStatusStatisticFetcher = ({ startDate, endDate } = {}) => {
  return axios.get("/experts-by-status-statistic", {
    params: {
      startDate,
      endDate,
    },
  });
};

const divisionsTableDataFetcher = ({ startDate, endDate } = {}) => {
  return axios.get("/expert-tree-by-status-statistic", {
    params: {
      startDate,
      endDate,
    },
  });
};

export {
  login,
  fetchUserInfo,
  dateStatisticsFetcher,
  requestStatisticsFetcher,
  statusStatisticsFetcher,
  divisionsTableDataFetcher,
  expertsByStatusStatisticFetcher,
};
