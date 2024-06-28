import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useApplicationsStore = create()(
  immer(() => ({
    data: {
      NEW: 0,
      ALL: 0,
      CLOSED: 0,
      CLOSED_EXPIRED: 0,
      ASSIGNED: 0,
      EXPIRED: 0,
      WAITING: 0,
      SOLVED: 0,
    },
    depData: null,
  }))
);

const useApplications = () => useApplicationsStore();

const setApplicationsData = (payload) => {
  useApplicationsStore.setState({ data: payload });
};

const setDepMetaData = (payload) => {
  useApplicationsStore.setState({ depData: payload });
};

// const setDepMetaDataExpert = (payload) => {
//   useApplicationsStore.setState({ dataExpert: payload });
// };

export {
  useApplications,
  setApplicationsData,
  setDepMetaData,
  // setDepMetaDataExpert,
};
