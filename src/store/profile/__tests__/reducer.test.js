import {profileReducer, initialState} from "../reducers";
import {changeName, toggleShowName} from "../actions";

describe('profileReducer', () => {
    it('returns correct state after SET_NAME action', () => {
        const userStore = profileReducer(initialState, changeName(`new name`));
        expect(userStore).toMatchSnapshot();
    });

    it('should return initial state for any unknown action', () => {
        const newState = profileReducer(undefined, {type: 'unknown'});
        expect(newState).toEqual(initialState);
    });

    it('should return state with new name for CHANGE_NAME action', () => {
        const newName = 'My New Name';
        const newState = profileReducer(undefined, changeName(newName));
        expect(newState.name).toBe(newName);
    });

    it('should toggle showName field for TOGGLE_SHOW_NAME action', () => {
        const newState = profileReducer(undefined, toggleShowName);
        expect(newState.showName).not.toBe(initialState.showName);
    });
});
