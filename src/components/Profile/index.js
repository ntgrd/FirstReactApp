import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";
import Checkbox from '@material-ui/core/Checkbox';

import {changeName, toggleShowName} from "../../store/profile/actions";
import {selectProfileName, selectProfileShowName} from "../../store/profile/selectors";


export const Profile = () => {
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
        <div>
            <h2>Profile:
                {showName && <div>{name}</div>}
            </h2>
            <Checkbox
                color="primary"
                inputProps={{'aria-label': 'checkbox with default color'}}
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            <div>
                <input type="text" value={value} onChange={handleChange}/>
            </div>
            <div>
                <button onClick={setName}>Change Name</button>
            </div>

        </div>
    )
};