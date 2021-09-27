// import Checkbox from '@material-ui/core/Checkbox';
import './Profile.css'

export const ProfilePres = ({name, onLogout, onSubmit, onChange, value}) => {

    return (
        <div>
            <h2>Profile:
                <div>{name}</div>
            </h2>
            <div className="profile">
                {/*<Checkbox*/}
                {/*    color="primary"*/}
                {/*    inputProps={{'aria-label': 'checkbox with default color'}}*/}
                {/*    checked={showName}*/}
                {/*    value={showName}*/}
                {/*    onChange={setShowName}*/}
                {/*/>*/}
                {/*<span>Show Name</span>*/}
                <form onSubmit={onSubmit}>
                    <input type="text" value={value} onChange={onChange}/>
                    <button type="submit">Change Name</button>
                </form>
                <div>
                    {/*<button onClick={setName}>Change Name</button>*/}

                    <button onClick={onLogout}>Logout</button>
                </div>
            </div>
        </div>
    )
};