const initialState = {
  likes:0
}

const reducer = (state = initialState, action) => {
  const newState = {...state}

  if (action.type === 'like') {
    newState.likes++;
  }

  if (action.type === 'dislike') {
    newState.likes--;
  }

  return newState;
}

export default reducer;
