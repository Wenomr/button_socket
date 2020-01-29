let websocket;

const middleware = store => next => action => {
  switch (action.type) {
    // User request to connect
    case 'CONNECT':
      websocket = new WebSocket('ws://localhost:6868');

      // Attach the callbacks
      websocket.onopen = () => store.dispatch({ type: 'OPEN' });
      websocket.onclose = (event) => store.dispatch({ type: 'CLOSE', payload: event });
      websocket.onmessage = (event) => store.dispatch({ type: 'MESSAGE', payload: event });

      break;

    // User request to send a message for toggle button state
    case 'TOGGLE':
      websocket.send(JSON.stringify(action));
      break;

    // User request to disconnect
    case 'DISCONNECT':
      websocket.close();
      break;

    default:
      break;
  };

  return next(action);
};

export default middleware;