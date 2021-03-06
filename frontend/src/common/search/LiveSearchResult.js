import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import LiveSearchDetail from './LiveSearchDetail';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2)
    },
    searchingLoader: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(1),
        color: 'white',
        borderRadius: 4,
        marginBottom: theme.spacing(1)
    }
}));


const LiveSearchResult = (props) => {
    const classes = useStyles();
    const { searchResult } = props;

    if (searchResult.length === 0) {
        return <div className={classes.root}>
            <Typography
                variant="body2"
                style={{ fontWeight: 700 }}
            >
                No results found.
            </Typography>
        </div>;
    }
    return (<div className={classes.root}>
        {searchResult.map(result => <LiveSearchDetail key={result.anime_id} result={result}></LiveSearchDetail>)}
    </div>);
};

export default LiveSearchResult;