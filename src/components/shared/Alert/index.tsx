import React from "react";
import { connect } from "react-redux";
import CSSTransition from "react-transition-group/CSSTransition";

import styles from "./styles.module.sass";
import { Message } from "../../../models/UI/message.class";
import { exists } from "../../../utils/exists";
import { IReducerState } from "../../../store/reducers";
import { dismissMessage } from "../../../store/actions/layout";

interface IStateProps {
  isShown: boolean;
  message: Message | null;
}

interface IDispatchProps {
  dismiss: () => void;
}

interface IOwnProps {}

type IProps = IStateProps & IDispatchProps & IOwnProps;

function Alert({ isShown, message }: IProps) {
  return (
    <CSSTransition
      in={isShown}
      mountOnEnter
      unmountOnExit
      timeout={100}
      classNames={{
        enter: styles.enter,
        enterActive: styles.entering,
        enterDone: styles.entered,
        exit: styles.exit,
        exitActive: styles.exiting,
        exitDone: styles.exited,
      }}
    >
      <React.Fragment>
        <div className={styles.Alert}>{message?.message}</div>
        <button onClick={dismissMessage}>X</button>
      </React.Fragment>
    </CSSTransition>
  );
}

const mapStateToProps = (state: IReducerState, ownProps: any): IStateProps => ({
  isShown: exists(state.layout.message),
  message: state.layout.message,
});

const mapDispatchToProps = (dispatch: any, onwProps: any): IDispatchProps => ({
  dismiss: () => dispatch(dismissMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Alert);
