import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class RadialProgress extends Component {
  render() {
    const { progress, strokeColor, strokeWidth, width } = this.props;
		
		// Determine the center of the circle, as that will be both the `cx` and the `cy` attribute.
		const center = width / 2;
		
		// The stroke is applied half inside the circle, so we need to account for it in order to make it appear outside the circle.
		const radius = (width / 2) - (strokeWidth / 2);
		
		// Set the circumference of the circle as our `stroke-dasharray` and our initial `stroke-dashoffset`
		const strokeDasharray = 2 * radius * Math.PI;
		
		// Express progress as a percentage of stroke-dasharray. The difference between stroke-dasharray and this percentage is the stroke-dashoffset
		const strokeDashoffset = progress > 0 ? (strokeDasharray - (strokeDasharray / 100 * progress)) : strokeDasharray;
		
		// We make a perfect circle, so it fits in a square.
    const height = width;
    
    return (
      <svg
				xmlns="http://www.w3.org/2000/svg"
				height={height}
				width={width}
				viewBox={`0 0 ${width} ${height}`}
			>
				<circle
					cx={center}
					cy={center}
					r={radius}
					fill="none"
					stroke={strokeColor}
					strokeWidth={strokeWidth}
					strokeDasharray={strokeDasharray}
					strokeDashoffset={strokeDashoffset}
					transform={`rotate(270, ${center}, ${center})`}
				/>
			</svg>
    )
  }
}

RadialProgress.propTypes = {
	strokeColor: PropTypes.string.isRequired,
	strokeWidth: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	progress: PropTypes.number.isRequired
};
