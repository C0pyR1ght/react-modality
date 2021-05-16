import React from "react";
import PropTypes from "prop-types";
import { Global, css } from "@emotion/react";

const Encapsulate = ({ style, children, ...rest }) => {
	return (
		<div
			style={{
				display: "block",
				overflow: "scroll",
				WebkitOverflowScrolling: "touch",
				border: 0,
				...style
			}}
			{...rest}
		>
			<Global
				styles={css`
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
				`}
			/>
			{children}
		</div>
	);
};

Encapsulate.propTypes = {
	style: PropTypes.object,
	children: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.func,
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node)
	]).isRequired
};

Encapsulate.defaultProps = {
	style: {}
};

export default Encapsulate;
