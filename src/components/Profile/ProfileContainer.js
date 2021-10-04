import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {onValue, ref, set} from "firebase/database";

import {selectProfileShowName} from "../../store/profile/selectors";
import {ProfilePres} from "./ProfilePres";
import {db, signOut} from "../../services/firebase";
import {toggleShowName} from "../../store/profile/actions";

export const ProfileContainer = (onLogout) => {
    // const name = useSelector(selectProfileName);
    const showName = useSelector(selectProfileShowName);
    const dispatch = useDispatch();
    const [value, setValue] = useState("");
    const [name, setName] = useState("");

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);

    // const setName = useCallback(() => {
    //     dispatch(changeName(value))
    //     setValue('')
    // }, [dispatch, value]);

    const handleLogout = async () => {
        try {
            await signOut();
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        const userDbRef = ref(db, "user");
        onValue(userDbRef, (snapshot) => {
            const data = snapshot.val();
            console.log('--------', data);
            setName(data?.username || '');
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setValue("");
        set(ref(db, "user"), {
            username: value,
        });
    }

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    return (
        <ProfilePres name={name} onChange={handleChange} onLogout={handleLogout} onSubmit={handleSubmit} setShowName={setShowName} showName={showName}/>
    )
};