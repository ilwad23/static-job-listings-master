import Data from "./data";
export const initialState = {
  tags: [],
  filteredData: Data,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TAGS":
      return {
        ...state,
        tags: action.tags,
      };
    case "FILTER_TAGS":
      const filterData = Data.filter((item) => {
        let items = [item.role, item.level, ...item.languages, ...item.tools];
        if (state.tags.length === 0) return item;
        return state.tags.every((v) => items.includes(v));
      });

      return {
        ...state,
        filteredData: filterData,
      };
    case "CANCEL_TAG":
      const index = state.tags.indexOf(action.tag);
      let newTags = [...state.tags];

      if (index >= 0) {
        newTags.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (tag: ${action.tag}) as its not in the tags`
        );
      }
      return {
        ...state,
        tags: newTags,
      };
    case "CLEAR_TAGS":
      return {
        ...state,
        tags: [],
        filteredData: Data,
      };
    default:
      return state;
  }
};

export default reducer;
