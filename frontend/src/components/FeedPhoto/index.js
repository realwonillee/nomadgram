import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getPhotoLikes: () => {
      dispatch(userActions.getUserLikes(ownProps.id));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
