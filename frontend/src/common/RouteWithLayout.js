import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const RouteWithLayout = (props) => {
  const {
    layout: Layout,
    component: Component,
    noLogin,
    allAccess,
    user,
    previousPath,
    ...rest
  } = props;

  // if the user is logged in, this will automatically redirect back to either home page or previously visited page
  if (noLogin && user) {
    return <Redirect to={previousPath}></Redirect>;
  }

  // if the user tries to access protected pages, such as profile page
  if (!noLogin && !allAccess && !user) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userData.user,
    previousPath: state.userData.previousPath,
  };
};

export default connect(mapStateToProps)(RouteWithLayout);
