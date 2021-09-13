import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import Checkbox from '@material-ui/core/Checkbox';

import {toggleShowName} from "../../store/profile/actions";


export const Profile = () => {
    const {showName, name} = useSelector((state) => state);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);

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
        </div>
    )
};