export type initStateType = {
}
const initState = {
}
export const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    default:
      return { ...state }
  }
}
