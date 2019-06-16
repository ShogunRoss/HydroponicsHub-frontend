import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// core components
import useStyles from "./cardStyles";

const Card = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const {
    className,
    children,
    plain,
    profile,
    chart,
    noMarginTop,
    ...rest
  } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardNoMarginTop]: noMarginTop,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...rest} ref={ref}>
      {children}
    </div>
  );
});

Card.propTypes = {
  // classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  noMarginTop: PropTypes.bool
};

export default Card;
