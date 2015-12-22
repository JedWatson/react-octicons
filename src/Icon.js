import React from 'react';
import classNames from 'classnames';

import { map, keys } from '../Octicons';

const Icon = React.createClass({
	displayName: 'Icon',
	propTypes: {
		className: React.PropTypes.string,
		icon: React.PropTypes.oneOf(keys),
		type: React.PropTypes.oneOf(['danger', 'default', 'muted', 'primary', 'success', 'warning']),
	},
	render () {
		// classes
		var className = classNames(
			'Glyph__icon',
			map[this.props.icon].className,
			(this.props.type ? 'IconField__icon-color--' + this.props.type : null),
			this.props.className
		);
		return <i className={className} />;
	},
});

module.exports = Icon;
module.exports.names = keys;
