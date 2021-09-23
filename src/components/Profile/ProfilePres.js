import Checkbox from '@material-ui/core/Checkbox';
import './Profile.css'

export const ProfilePres = ({name, showName, setShowName, setName, onChange, value}) => {

    return (
        <div>
            <h2>Profile:
                {showName && <div>{name}</div>}
            </h2>
            <div className="profile">
            <Checkbox
                color="primary"
                inputProps={{'aria-label': 'checkbox with default color'}}
                checked={showName}
                value={showName}
                onChange={setShowName}
            />
            <span>Show Name</span>
            <div>
                <input type="text" value={value} onChange={onChange}/>
            </div>
            <div>
                <button onClick={setName}>Change Name</button>
            </div>
            </div>
        </div>
    )
};