import { create } from 'zustand';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const useFeedbackStore = create((set) => ({
  ...initialState,
  actions: {
    voteGood: () => set((state) => ({ good: state.good + 1 })),
    voteNeutral: () => set((state) => ({ neutral: state.neutral + 1 })),
    voteBad: () => set((state) => ({ bad: state.bad + 1 })),
    reset: () => set(initialState),
  },
}));


export const useFeedbackActions = () => {
  return useFeedbackStore((state) => state.actions);
};