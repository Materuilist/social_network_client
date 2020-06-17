import React from "react";
import Alert from "./components/shared/Alert";
import { Authentication } from "./pages/Authentication";
import { IReducerState } from "./store/reducers";
import { connect } from "react-redux";
import { Layout } from "./pages/Layout";

interface IProps {
  isAuth: boolean;
}

function App({ isAuth }: IProps) {
  return (
    <div className="App">
      <Alert />
      {isAuth ? <Layout /> : <Authentication />}
    </div>
  );
}

const mapStateToProps = (state: IReducerState) => ({
  isAuth: state.user.isAuth,
});

export default connect(mapStateToProps)(App);
