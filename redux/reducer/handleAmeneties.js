const ameneties = 'default';

const handleAmeneties = (state = ameneties, action) => {
  switch (action.type) {
    case "LOAD_AMENETIES":
      return action.payload;

    default:
      return state;
  }
};

export default handleAmeneties;
