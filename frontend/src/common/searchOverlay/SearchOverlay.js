import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { InputBase, IconButton, makeStyles } from "@material-ui/core";
import { useTransition, animated } from "react-spring";
import CloseIcon from "@material-ui/icons/Close";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { HIDE_SEARCH_OVERLAY } from "../../actionConstants/actionTypes";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    backgroundColor: theme.palette.primary.dark,
  },
  iconContainer: {
    display: "flex",
  },
  icon: {
    color: "white",
    margin: theme.spacing(4),
    marginLeft: "auto",
  },
  textfieldContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: theme.spacing(8),
  },
  textfield: {
    color: "white",
    fontSize: 144,
  },
  arrow: {
    color: "white",
    border: "1px solid rgba(255, 255, 255, 0.5)",
  },
}));

const LiveSearchResult = (props) => {
  const history = useHistory();
  const { showSearchOverlay, dispatch } = props;
  const [value, setValue] = React.useState('');

  const transitions = useTransition(showSearchOverlay, null, {
    from: {
      transform: "translateY(-100%)",
      zIndex: 2000,
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      opacity: 1,
    },
    enter: { transform: "translateY(0%)" },
    leave: { transform: "translateY(-100%)" },
  });
  const classes = useStyles();

  const hideSearchOverlay = () => {
    dispatch({ type: HIDE_SEARCH_OVERLAY, payload: null });
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      dispatch({ type: HIDE_SEARCH_OVERLAY, payload: null });
      history.push(`/anime?name=${e.target.value}`);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClickSearch = (_) => {
    if (value !== '') {
      dispatch({ type: HIDE_SEARCH_OVERLAY, payload: null });
      history.push(`/anime?name=${value}`);
    }
  };

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <div className={classes.root}>
            <div className={classes.iconContainer}>
              <IconButton className={classes.icon} onClick={hideSearchOverlay}>
                <CloseIcon style={{ fontSize: 50 }}></CloseIcon>
              </IconButton>
            </div>
            <div className={classes.textfieldContainer}>
              <InputBase
                placeholder="Search"
                className={classes.textfield}
                onKeyDown={handleSubmit}
                onChange={handleChange}
                autoFocus
              />
              <IconButton className={classes.arrow} onClick={handleClickSearch}>
                <ArrowForwardIcon style={{ fontSize: 100 }}></ArrowForwardIcon>
              </IconButton>
            </div>
          </div>
        </animated.div>
      )
  );
};

const mapStateToProps = (state) => {
  return {
    showSearchOverlay: state.searchOverlay.show,
  };
};

export default connect(mapStateToProps)(LiveSearchResult);
