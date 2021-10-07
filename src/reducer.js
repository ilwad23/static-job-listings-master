import Data from "./data";
export const initialState = {
  tags: [],
  filteredData: [],
  changing:false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TAGS":
      return {
        ...state,
        tags: action.tags,
        changing: true,
      };
    case "FILTER_TAGS":
      console.log(state.tags,12);
      const filterData = Data.filter((item) => {
        let items = [item.role, item.level, ...item.languages, ...item.tools];
        if (state.tags.length === 0) return item;
        return state.tags.every((v) => items.includes(v));
      });

      return {
        ...state,
        filteredData: filterData,
        changing: false,
      };
    // case "CLEAR_TAGS":
    //   return {
    //     ...state,
    //     tags: [],
    //   };
    case "CANCEL_TAG":
    //   const filterTags = state.tags.filter((tag) => action.tag !== tag);
    //   return {
    //     ...state,
    //     tags: filterTags,
    //   };

    // case "REMOVE_FROM_BASKET":
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
        changing:true
      };
    default:
      return state;
  }
};

export default reducer;
