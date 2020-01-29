export const toggle = (payload) => {
  return {
    type: 'TOGGLE',
    payload: payload
  };
};

export const connect = () => {
    return {
        type: "CONNECT",
    };
};
