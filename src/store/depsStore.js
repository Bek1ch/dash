import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const useDepsStore = create()(
  immer(() => ({
    departaments: null,
  }))
);

const useDepartaments = () => useDepsStore();

const setDepartaments = (payload) => {
  useDepsStore.setState({ departaments: payload });
};

export { useDepartaments, setDepartaments };
