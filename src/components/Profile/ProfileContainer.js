import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";

import {changeName, toggleShowName} from "../../store/profile/actions";
import {selectProfileName, selectProfileShowName} from "../../store/profile/selectors";
import {ProfilePres} from "./ProfilePres";


export const ProfileContainer = () => {
    const name = useSelector(selectProfileName);
    const showName = useSelector(selectProfileShowName);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const setName = useCallback(() => {
        dispatch(changeName(value))
        setValue('')
    }, [dispatch, value]);

    return (
        <ProfilePres showName={showName} name={name} setShowName={setShowName} onChange={handleChange} setName={setName} value={value} />
    )
};