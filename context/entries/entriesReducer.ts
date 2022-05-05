import { EntriesState } from "./";

type EntriesActionType = { type: "[Entry] Add-Entry" };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    // case '[Entries] - ActionName':
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
};
