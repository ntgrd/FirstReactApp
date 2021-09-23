import Checkbox from '@material-ui/core/Checkbox';

export const ProfilePres = ({name, showName, setShowName, setName, onChange, value}) => {

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
                <input type="text" value={value} onChange={onChange}/>
            </div>
            <div>
                <button onClick={setName}>Change Name</button>
            </div>

        </div>
    )
};