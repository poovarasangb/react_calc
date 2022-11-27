import PropTypes from 'prop-types';

export const CalendarButton = ({
  name
}) => <h1>{`Hello ${name}`}</h1>;

const CalendarButtonPropTypes = {
  text: PropTypes.number,
  value: PropTypes.number,
  onClick: PropTypes.func
};

CalendarButton.propTypes = CalendarButtonPropTypes;
