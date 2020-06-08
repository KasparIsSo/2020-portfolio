import React from "react";

import { Body, Link } from "components";

import content from "./content.json";

export default () => {
	return (
		<Link href={content.url} external>
			<Body primary>{content.text}</Body>
		</Link>
	);
};
