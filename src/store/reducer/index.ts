export type initStateType = {
  isExhibition: [string, string]
}
const initState = {
  isExhibition: ['calc(-100% - 192px)', '0']
}
export const rootReducer = (state = initState, action: any) => {
  switch (action.type) {
    case 'exhibition':
      return { ...state, isExhibition: action.value }
    case 'unExhibition':
      return { ...state, isExhibition: action.value }
    default:
      return { ...state }
  }
}
