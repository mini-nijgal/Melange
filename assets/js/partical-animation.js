canvas {
	display: block;
	vertical-align: bottom;
}


/* ---- particles.js container ---- */

#particles-js {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	/* background-color: #1556cf transparent  ; */
	/* background-color: #01102b; */
	/* background: rgba(4, 60, 173, 0.8); */
}


/* ---- stats.js ---- */

.count-particles {
	background: #000022;
	position: absolute;
	top: 48px;
	left: 0;
	width: 80px;
	color: #13E8E9;
	font-size: .8em;
	text-align: left;
	text-indent: 4px;
	line-height: 14px;
	padding-bottom: 2px;
	font-family: Helvetica, Arial, sans-serif;
	font-weight: bold;
}

.js-count-particles {
	font-size: 1.1em;
}

#stats,
.count-particles {
	-webkit-user-select: none;
	margin-top: 5px;
	margin-left: 5px;
}

#stats {
	border-radius: 3px 3px 0 0;
	overflow: hidden;
}

.count-particles {
	border-radius: 0 0 3px 3px;
}
