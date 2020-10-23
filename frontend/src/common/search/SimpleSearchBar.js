import React from "react";
import clsx from "clsx";
import axios from "axios";
import {
  IconButton,
  Input,
  Paper,
  ClickAwayListener,
  CircularProgress,
  makeStyles,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import LiveSearchResult from "./LiveSearchResult";

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(6),
    width: "100%",
    display: "flex",
    position: "relative",
    alignItems: "center",
  },
  iconButton: {
    position: "absolute",
    right: 0,
    color: theme.palette.action.active,
    transform: "scale(1, 1)",
    transition: theme.transitions.create(["transform", "color"], {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeInOut,
    }),
  },
  iconButtonHidden: {
    transform: "scale(0, 0)",
  },
  input: {
    width: "100%",
  },
  searchContainer: {
    margin: "auto 16px",
    width: `calc(100% - ${theme.spacing(6 + 4)}px)`, // 6 button + 4 margin
  },
  mainTitleContainer: {
    display: "flex",
    marginBottom: theme.spacing(2),
  },
  mainTitle: {
    fontWeight: 700,
  },
  searchOutput: {
    width: "100%",
    position: "absolute",
    top: "110%",
    zIndex: 100,
  },
  rootSearch: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: theme.spacing(2),
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: theme.palette.primary.main,
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

const SimpleSearchBar = (props) => {
  const classes = useStyles();
  const { initialValue, valueType, handleSearch, formikSubmit } = props;
  // initialValue to change initial state based on url query string
  const [value, setValue] = React.useState(initialValue);
  const [show, setShow] = React.useState(false);
  const [searching, setSearching] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState([]);

  // for showing and hiding fetched API results
  const handleOpen = () => {
    if (!show && value !== "") {
      setShow(true);
    }
  };

  const handleClose = () => {
    if (show) {
      setShow(false);
    }
  };

  React.useEffect(() => {
    // delay on every keystroke until the user stops typing for a while
    const delayDebounceFn = setTimeout(async () => {
      // do not fire request if the user has not typed stuff yet
      if (value === "") {
        // do we need this setState?
        // setSearching(false);
        // setSearchResult([]);
        return;
      }

      setSearching(true);

      // send API request here
      console.log("firing---------");
      const { data } = await axios.get(
        `/api/anime/liveSearch?keyword=${value}`
      );
      setSearchResult(data.data);
      setTimeout(() => setSearching(false), 1000);
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [value]);

  // for handling keyboard inputs
  const handleInputChange = (e) => {
    // two cases (will always clear search result when the input is blank)
    if (!show) {
      setShow(true);
    }
    if (e.target.value === "") {
      setSearchResult([]);
      setShow(false);
    }
    setValue(e.target.value);
  };

  const handleInputClear = () => {
    setValue("");
    // clear all results if the input is cleared
    // faster here than in useEffect (which uses debouncing)
    setSearchResult([]);
    setShow(false);
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      // setFieldValue for formik here
      handleSearch(valueType, value, false);
      setShow(false);
      formikSubmit();
    }
  };

  const handleSearchByIcon = (e) => {
    e.stopPropagation();
    handleSearch(valueType, value, false);
    setShow(false);
    formikSubmit();
  };

  return (
    <React.Fragment>
      <ClickAwayListener onClickAway={handleClose}>
        <Paper className={classes.root}>
          <div className={classes.searchContainer}>
            <Input
              fullWidth
              disableUnderline
              value={value}
              onFocus={handleOpen}
              onChange={handleInputChange}
              onKeyDown={handleSubmit}
            />
          </div>
          {searching && (
            <div className={classes.rootSearch}>
              <CircularProgress
                variant="determinate"
                className={classes.bottom}
                size={20}
                thickness={4}
                value={100}
              />
              <CircularProgress
                variant="indeterminate"
                disableShrink
                className={classes.top}
                classes={{
                  circle: classes.circle,
                }}
                size={20}
                thickness={4}
              />
            </div>
          )}

          {!searching && (
            <React.Fragment>
              <IconButton
                className={clsx(classes.iconButton, classes.searchIconButton, {
                  [classes.iconButtonHidden]: value !== "",
                })}
                onClick={handleSearchByIcon}
              >
                <SearchIcon></SearchIcon>
              </IconButton>
              <IconButton
                className={clsx(classes.iconButton, {
                  [classes.iconButtonHidden]: value === "",
                })}
                onClick={handleInputClear}
              >
                <ClearIcon></ClearIcon>
              </IconButton>
            </React.Fragment>
          )}

          {show && (
            <Paper className={classes.searchOutput}>
              <LiveSearchResult
                searchResult={searchResult}
                searching={searching}
              ></LiveSearchResult>
            </Paper>
          )}
        </Paper>
      </ClickAwayListener>
    </React.Fragment>
  );
};

export default SimpleSearchBar;
