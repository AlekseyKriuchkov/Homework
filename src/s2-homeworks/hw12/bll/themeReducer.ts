
type initStateType = {
    themeId: number
}
const initState = {
    themeId: 1,
}

export type changeThemeIdActionType = {
    type: 'SET_THEME_ID',
    id: number
}

export const themeReducer = (state = initState, action: changeThemeIdActionType): initStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return {
                ...state, themeId: action.id
            }
        }
        // дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdActionType => ({ type: 'SET_THEME_ID', id }) // fix any
