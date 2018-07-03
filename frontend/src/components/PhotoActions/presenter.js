import React from "react";
import PropTypes from "prop-types";
import Ionicon from "react-ionicons";
import styles from "./styles.scss";

const PhotoActions = (props, context) => {
  return (
    <div className={styles.actions}>
      <div className={styles.icons}>
        <span className={styles.icon}>
          <Ionicon icon="ios-heart-outline" fontSize="28px" color="#000" />
        </span>
        <span className={styles.icon}>
          <Ionicon icon="ios-text-outline" fontSize="28px" color="#000" />
        </span>
      </div>
      <span className={styles.likes}>
        {props.number} {props.number === 1 ? context.t("like") : context.t("likes")}
      </span>
    </div>
  );
};

PhotoActions.contextTypes = {
  t: PropTypes.func.isRequired
};

PhotoActions.propTypes = {
  number: PropTypes.number.isRequired
};

export default PhotoActions;
