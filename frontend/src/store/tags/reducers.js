const initialValue = [];

const tagsReducer = (tags = initialValue, action) => {
  switch (action.type) {
    case "GET_TAGS": {
      return [...action.payload];
    }

    case "ADD_TAG": {
      console.log("PAYLOAD:", action.payload);
      return [...tags, action.payload];
    }

    case "DELETE_TAG": {
      console.log("TAG ID: ", action.payload);
      const newTags = tags.filter((tag) => tag._id !== action.payload._id);
      return [...newTags];
    }

    default:
      return tags;
  }
};

export default tagsReducer;
