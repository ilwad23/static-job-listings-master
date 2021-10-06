import Data from "./data";
export const initialState = {
  tags: [],
  filteredData: []
};
// export const filterData = Data.filter((item) => {
//   let items = [item.role, item.level, ...item.languages, ...item.tools];
//   if (tags.length == 0) return item;
//   return tags.every((v) => items.includes(v));
// });

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
        case "CLEAR_TAGS":
          return {
            ...state,
            tags: [],
          };
        case "CANCEL_TAG":
          console.log(state.tags);
          const filterTags = state.tags.filter(tag=>action.tag!==tag);
          return {
            ...state,
            tags: filterTags,
          };
        default:
      return state;
  }
};

export default reducer;
