	import React from "react";

	const Alarm = React.forwardRef((props, ref) => {
		return (
				<audio ref={ref}>
					<source src="/Alarm.mp3" type="audio/mp3" />
					Your browser does not support the audio element.
				</audio>
		);
	});

	export default Alarm;