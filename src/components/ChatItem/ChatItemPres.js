import {IconButton, ListItem, ListItemAvatar} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from '@material-ui/icons/Delete';
import List from "@material-ui/core/List";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import './ChatItem.css'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
}));

export const ChatItemPres = ({id, chatName, onDelete, current}) => {
    const classes = useStyles();

    return (
        <List className={classes.root}>
            <ListItem className='chat_item' key={id} alignItems="flex-start" divider={true}>
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" data-testid="avatar"/>
                </ListItemAvatar>
                {/*<Link to={`/chats/${id}`}>*/}
                {/*    <b style={{color: current ? '#000000' : 'grey'}}>*/}
                {/*        <h3>{chatName}</h3>*/}
                {/*    </b>*/}
                {/*</Link>*/}
                <IconButton aria-label="delete" onClick={() => onDelete(id)}>
                    <DeleteIcon/>
                </IconButton>
            </ListItem>
        </List>
    );
};
