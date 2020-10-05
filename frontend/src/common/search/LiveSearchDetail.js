import React from 'react';
import { format } from 'date-fns';
import { NavLink } from 'react-router-dom';
import { Typography, Grid, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    image: {
        height: 60,
        width: 40
    },
    mainContainer: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    },
    textContainer: {
        marginLeft: theme.spacing(2)
    },
    largeImage: {
        height: 100,
        width: 66
    },
    largeTextContainer: {
        marginLeft: theme.spacing(2),
        marginBottom: theme.spacing(1)
    },
    title: {
        color: theme.palette.primary.main,
        fontWeight: 700,
        textDecoration: 'none',
        '&:active': {
            color: theme.palette.primary.main,
        },
        '&:visited': {
            color: theme.palette.primary.main,
        },
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));

function parseDate(dateObj) {
    try {
        return format(new Date(dateObj), 'yyyy');
    } catch (err) {
        return 'No information';
    }
}

const LiveSearchDetail = (props) => {
    const classes = useStyles();
    const { result } = props;
    const [expand, setExpand] = React.useState(false);

    const handleExpand = () => {
        if (!expand) {
            setExpand(true);
        }

    };

    const handleContract = () => {
        if (expand) {
            setExpand(false);
        }
    };

    return <div className={classes.mainContainer} onMouseEnter={handleExpand} onMouseLeave={handleContract}>
        {!expand && <Grid container alignContent="center" >
            <img src={result.mal_anime_image_path} alt="" className={classes.image}></img>

            <div className={classes.textContainer}>
                <Typography
                    variant="body2"
                    style={{ fontWeight: 700 }}
                    component={NavLink}
                    to={`/anime/${result.anime_id}`}
                    className={classes.title}
                >
                    {result.name}
                </Typography>
                <Typography
                    variant="body2"
                >
                    {`(${result.anime_type}, ${parseDate(result.airing_start)})`}
                </Typography>
            </div>
        </Grid>}
        {expand &&
            <Grid container alignContent="center" >
                <img src={result.mal_anime_image_path} alt="" className={classes.largeImage}></img>

                <div className={classes.largeTextContainer}>
                    <Typography
                        variant="body2"
                        style={{ fontWeight: 700 }}
                        component={NavLink}
                        to={`/anime/${result.anime_id}`}
                        className={classes.title}
                    >
                        {result.name}
                    </Typography>
                    <Typography
                        variant="body2"
                    >
                        Type: {result.anime_type}
                    </Typography>
                    <Typography
                        variant="body2"
                    >
                        Aired: {result.airing_str}
                    </Typography>
                    <Typography
                        variant="body2"
                    >
                        Score: {result.rating}
                    </Typography>
                    <Typography
                        variant="body2"
                    >
                        Status: {result.status}
                    </Typography>
                </div>
            </Grid>}
        <Divider></Divider>
    </div>;
};

export default LiveSearchDetail;