import React from 'react'

export default class Footer extends React.Component {
	render() {
		return (
			<footer id="footer">
				<div className="inner">
					<div className="logo text-center">
						<a className="logo-inner" href="https://www.smh.com.au/">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="-323 265.2 312.3 30.8"><path d="M-241 273.8l-2.8 1.8 1 .8v10.7c0 1-.8 1.6-1.9 1.6h-.5v-13.4l-2.4-1.6-3.1 2 .2.3s.6-.4.7-.4c0 0 1.1 1 1.1 1.9v11.2c-1.2.4-2.5 1.3-2.5 3.6 0 1 .9 2.4 2.6 2.6.9.1 3.5-.2 3.5-.2.4-.1.8-.1 2.1-.2 1.1 0 1.8.4 2.1.8l.3.3c.3-.3.6-1 .6-1.5 0-1.1-.5-1.9-1.3-2.3-.7-.5-1.5-.6-2.4-.6-.1 0-.3 0-.7.1s-1.1.1-1.6.2c-.8.1-1.6.2-2.1.2-.4 0-.6.1-.7.1-.4 0-.7-.1-1-.4-.2-.2-.3-.5-.3-.6.1-1 1.3-1.4 1.7-1.4h.4c.7.2 2.3.4 4.1.4.6 0 1.1-.1 1.7-.4.5-.2 1.1-.5 1.5-.9.5-.4.7-.7 1-1.2s.4-1 .4-1.5V275c-.1-.1-1.7-1.2-1.7-1.2"/><path id="Fill-2" className="st0" d="M-239.4 275.1l1-.6"/><path id="Fill-3" className="st0" d="M-214.1 287l-.6.4-.5-.4v-11.9l-2.1-1.4-3.8 2.5-.1-.2c-.5-1.3-1.3-1.8-1.6-2.1l-3.7 2.3.2.2s.4-.2.6-.4c.4.4 1 1.4 1 1.8v8.9l-1 .8 2.8 1.8 2.8-1.8-1-.8v-9.9l.9-.6 1.4 1.5v9.2c0 1.1.9 1.9 1.5 2.4l3.4-2.2-.2-.1"/><path id="Fill-4" className="st0" d="M-215.4 275.3l1-.6"/><path id="Fill-5" className="st0" d="M-288.1 287.7l1-.6"/><path id="Fill-6" className="st0" d="M-280.7 287.2s-.9.5-1 .6l-2-1.4V282l4.9-3.2-2.8-5.1-5.9 3.8v9.8c1.1.8 3.6 2.2 3.6 2.2l3.4-2.1-.2-.2zm-3-11.2l2.3 3.8-2.3 1.5V276z"/><path id="Fill-7" className="st0" d="M-213.4 287.8l1-.6"/><path id="Fill-8" className="st0" d="M-136.4 274.2s-2.5 1.6-3 1.9c-.1-.2-.5-1.4-1.8-2.3-.4.3-3.4 2.2-3.4 2.2l.1.2s.4-.3.5-.3l.2.2c.4.4.6.7.6.9v9.5l-1 .8 2.9 2.2s3-2.1 3-2l-1.1-.9v-9.5l.6-.4 1.4 1.8s-.1.2-.2.3c-.2.3-.6.7-.6 1.4 0 .2.3.8.7.8h.1c.3 0 .4-.1.6-.1h.1-.1c-.2 0-.3-.1-.5-.2s-.3-.4-.3-.6c0-.3.2-.8.6-1.2.7-.8 2.3-1.9 2.3-1.9l-1.7-2.8"/><path id="Fill-9" className="st0" d="M-11.7 276.1l1-.6"/><path id="Fill-10" className="st0" d="M-21.6 287.7l1-.6"/><path id="Fill-11" className="st0" d="M-254.2 286.3c-1.9-1.3-4-2.2-6.1-2.8h-.1l2.2-3.2c2.8.6 4.8 2.1 4.8 3.7.1.7-.2 1.6-.8 2.3zm-5.2-10.5c-.4-.1-1.6-.3-2-.3-1-.2-6.1-1.7-6.1-3.8.1-2.5 3.3-2.5 4.9-2.5.3 0 4 .3 5.8 2.6 0 .1-2.1 3.3-2.6 4zm11.2-3.3c.3-.3.5-.7.5-1 0-.3-.1-.6-.4-.9-.2-.2-.6-.4-1-.4h-.3c-1.1 0-2.3.7-3.6 1.9-1.1 1-1.5 1.8-2.2 2.9-.6.9-.8 1.3-1 1.5-.2 0-1.5-.2-2.6-.5.4-.6 1.5-2.4 2.7-4.2.9-1.3 2-2.4 2.5-3 .1-.1.2-.2.3-.2.1 0 .2-.1.2-.1s-.1-.2-.2-.2-.1 0-.2.1c-.1 0-.2.1-.4.1s-.4-.2-.8-.5c-.9-.8-2.7-2.1-5.8-2.1-5.3 0-8.4 4.3-8.3 7.2 0 1.8.4 3.7 1.3 4.6.9.8 2.5 1.5 5.3 2.1h.2l-.4.5c-.7.6-1.3 1.2-2.6 1.2-.9 0-1.3-.3-1.6-.6h-.1c.1.1.3.5.5.7.3.4.6.6.9.6 0 0 .4.1 1-.1.8-.2 1.6-.8 2.4-1.6l.3-.3.3-.3 2 .3c.2 0 .4.1.6.1l-.8 1.2c-1 1.5-1.4 2-1.4 2s-.7-.1-.9-.1c-.6-.1-1.5-.2-2.7-.2-2.4 0-5.7.8-7.7 2.8-.4.4-.8.8-1 1.3-.5.8-.7 1.6-.7 2.5 0 1.2.8 2.5 3 2.5 3 0 5.6-2.7 7-4.2l.2-.2c.4-.4.6-.7.7-.9 1.6.4 4.2 1.5 6.4 2.9.5-.5 1.8-2 3.1-3.8.7-1 2.3-3.3 2.3-5.1.1-1.7-1.6-3.7-4.6-4.4.1-.2.3-.5.7-1.2 1.3-1.9 2.4-3.8 4.8-3.8.7-.1 1.5 0 2.1.9-.1 0-.1 0 0 0zm-17.9 17.1c-.6.5-1.2.9-1.7 1.2-.6.3-1.2.6-1.8.7-.2 0-.4.1-.5.1-.2 0-.5.1-.7.1h-.4c-1.2-.1-2-.8-2-1.8 0-2.7 4.7-3.5 6.3-3.5h.4c.8 0 1.3 0 2.8.3l.3.1c-.7.9-1.5 1.7-2.2 2.4-.1 0-.3.2-.5.4z"/><path id="Fill-12" className="st0" d="M-301.1 282.9c-2.2 2.5-4.1 3.3-4.4 3.5v-13.3c2.5-.1 4.1-1.5 4.1-3.7 0-.3-.1-.6-.2-1-.7.8-1.9 1.1-2.6 1.1-1.8 0-3.7-.5-5.7-1.1-2.1-.6-4.3-1.2-6.4-1.2-3.1 0-6.7 1.4-6.7 5.4 0 1.4 1 4.1 3.4 5.3l.1.1s-.6 1.2-.6 2.3c0 3.8 2.5 9.6 9.4 9.6 1.7 0 3.2-.4 4.6-1.1 1.1-.6 2.1-1.4 2.9-2.4 1.5-1.7 2.1-3.4 2.1-3.5zm-11.5 3.3c.1-.1.3-.2.3-.2 2.3-1.5 3.4-2.8 3.4-4.2v-9.1s1.2.3 2.8.3v13.5c-2.5.9-5.3.3-6.5-.3zm.2-2.3c0 .6-.2 1.2-.7 1.9l-.2-.1c-2.4-1.5-3.5-4.4-3.7-7.5-.1-2.3 1.1-5.2 2.9-7 .2.1 1.2.3 1.7.5v12.2zm-2.2-12.8c-3.6 3.5-4.7 6.5-4.7 6.5l-.1-.1c-1.1-.5-1.6-1.7-1.6-2.8-.1-2.6 1.8-3.8 4.3-3.8.8 0 1.7.1 2.1.2z"/><path id="Fill-14" className="st0" d="M-118.1 273.7c-.1 0-3.4 2.3-3.4 2.3l.1.3.5-.3.2.1c.4.4.6.6.6.8v10.7l1.8 1.8 3.5-1.8-.2-.4-.5.2-.9-.9v-11.4l-1.7-1.4"/><path id="Fill-15" className="st0" d="M-120.1 269.9v-.1l2.2-1.6 1.9 1.8-2.2 1.6-1.9-1.7"/><path id="Fill-16" className="st0" d="M-194.4 273.7l-2.8 1.8 1 .8V287c0 1-.8 1.6-1.9 1.6h-.5v-13.4l-2.4-1.6-3.1 2 .2.3s.6-.4.7-.4c0 0 1.1 1 1.1 1.9v11.2c-1.2.4-2.5 1.3-2.5 3.5 0 1 .9 2.4 2.6 2.6.9.1 3.5-.2 3.5-.2.3-.1.8-.1 2.1-.2 1.1 0 1.8.4 2.1.8l.3.3c.3-.3.6-1 .6-1.5 0-1.1-.5-1.9-1.3-2.3-.6-.3-1.3-.4-2.3-.4-.1 0-.3 0-.7.1-.4.1-1.1.1-1.6.2-.8.1-1.6.2-2.1.2-.4 0-.6.1-.7.1-.4 0-.8-.1-1-.4-.2-.2-.3-.6-.3-.7.1-1 1.3-1.4 1.7-1.4h.5c.8.1 2.3.4 4.1.4.6 0 1.1-.1 1.7-.4.5-.2 1.1-.5 1.5-.9.5-.4.7-.7 1-1.2s.4-1 .4-1.6v-10.8c-.2 0-1.9-1.1-1.9-1.1"/><path id="Fill-17" className="st0" d="M-77.9 280.5c.2 0 .6 0 .8.1s.3.2.3.3v3.4c0 .6-.1.9-.2 1.2 1.3-.6 2.8-1.9 3.2-2.7.5-1 .5-3.1.4-5.3-.1-2.5-.1-5.3.7-7.3-1 .6-1.5 1.1-2.3 1.8-.7.8-1.3 1.4-1.5 1.8-.5 1.2-.4 3.1-.4 3.5-4 .4-4.7 2.2-4.6 3.7 0 .1.1.3.1.5v.2c.9-1 2-1.2 3.5-1.2"/><path id="Fill-18" className="st0" d="M-81.3 269.8c.2 0 .8.1 2.4.5.8.2 1.9.4 2 .4h.8c.9 0 2.6-1 4.8-2.7l.4-.3c-.5.2-1.1.4-1.7.4-.9 0-2-.3-3.1-.7-1.2-.4-2.5-.8-3.5-.8-2.4 0-4 1.4-4 3.5 0 .5.2 1 .5 1.5-.1-.2-.1-.4-.1-.6-.1-.7.5-1.2 1.5-1.2"/><path id="Fill-19" className="st0" d="M-63.2 265.6c.5.2 1.3.7 1.7 1.5-1.2.8-2.7 1.9-3.2 2.3-.9-1-2.1-2.4-3-2.4 0 0-.6 0-.8.1s-.3.4-.3.6v7.8l3.4-2.1 2.7 2.6v8.7c0 2.5-1.8 5.1-5.3 7.4 1.1.3 3.1.6 5.4.1-1.3 1.9-2.8 2.8-4.4 2.8-.2 0-.6-.1-1-.2-1.9-.7-3.2-.3-3.3-.3 1.6-1.3 2.8-2.6 3.6-3.9.8-1.3 1.2-2.9 1.3-4.3v-8.6l-2.4-1.7v1c0 2.2 0 4.2-.5 5.2-.4.8-1.9 2.1-3.2 2.7.2-.3.2-.5.2-1.2v-11.1c0-.2.1-1.2.1-1.3.2-1.5.5-3 2.9-4.5 1.7-1.2 3.2-1.7 4.3-1.7.5.1 1.2.3 1.8.5"/><path id="Fill-20" className="st0" d="M-288.7 287.8c-.2.2-1.9 1.3-2.4 1.7-.6.4-1.2 1-1.6 1.6-.4.6-.5 1.1-.6 1.8 0 .2.1.4.2.6.3.4 1 .4 1.3.4h.4c.2 0 .4 0 .5-.1v.1c-.1.2-.3.5-.6.6-.3.2-.6.2-.9.2-1.2 0-1.6-1-1.6-1.7 0-1 1.3-2.8 2.1-3.6 0 0-1.5-1.2-1.5-2.2v-9.6l-1.3-1.4-.9.6v10c.1.1 1 .8 1 .8l-2.8 1.8-2.8-1.8 1-.8v-16.4c0-.8-.1-2-.4-2.3-.2-.2-.4-.3-.7-.5.2-.8.7-1.1 1.5-1.1.2 0 .8.1 1.1.3.3-.6.8-1.5 2-1.5.2 0 .6.1.9.3-.8.9-.7 2.8-.7 4v6.6l3.8-2.4 2.2 1.4v10.7c-.2.9.3 1.4.8 1.9"/><path id="Fill-21" className="st0" d="M-22.5 287l.1.2-3.4 2.2-2.7-1.8.9-.8V270c0-.8-.1-2-.4-2.3-.2-.2-.4-.3-.7-.5.2-.8.7-1.1 1.5-1.1.2 0 .7.1 1 .2.5-.4.9-1.2 2.1-1.2.2 0 .6.1.9.3-.5.5-.7 1.4-.7 2.2-.1 4.6 0 19.1 0 19.1l.8.7.6-.4"/><path id="Fill-22" className="st0" d="M-289.9 275.3l1-.6"/><path id="Fill-23" className="st0" d="M-227.9 276.1l1-.6"/><path id="Fill-24" className="st0" d="M-237.7 287.6l1-.6"/><path id="Fill-25" className="st0" d="M-192.7 275l1-.6"/><path id="Fill-26" className="st0" d="M-146.2 275.9l1-.6"/><path id="Fill-27" className="st0" d="M-156 287.8l1-.6"/><path id="Fill-28" className="st0" d="M-116.6 275.2l1-.6"/><path id="Fill-29" className="st0" d="M-120.8 288l1-.6"/><path id="Fill-30" className="st0" d="M-91.3 276l1-.6"/><path id="Fill-31" className="st0" d="M-31.2 275.5l1-.6"/><path id="Fill-32" className="st0" d="M-20.9 267.4v4.5c.7.7 2.4 2.2 3.1 2.8-.7.6-2.1 1.4-3.2 1.6 0 0 .1.3.1.7v10.2l3.2 2.3c3-1.9 5.1-2.3 6.1-2.5v-11l-9.3-8.6zm4 8.1l1.9 1.7v10.1l-2.2-1.5v-10.1l.3-.2z"/><path id="Fill-33" className="st0" d="M-148.3 273.6c-1.3.8-5.1 2.4-7.1 2.8 0 0 .1.3.1.7v10.2l3.2 2.3c3-1.9 5.1-2.3 6.1-2.5v-11.3l-2.3-2.2zm-3.2 2.2l1.9 2v9.5l-2.2-1.5v-9.9l.3-.1z"/><path id="Fill-34" className="st0" d="M-237 267.3v4.5c.7.7 2.4 2.2 3.1 2.8-.7.6-2.1 1.4-3.2 1.6 0 0 .1.3.1.7v10.2l3.2 2.3c3-1.9 5.1-2.3 6.1-2.5v-11l-9.3-8.6zm3.9 8.1l1.9 1.7v10.1l-2.2-1.5v-10.1l.3-.2z"/><path id="Fill-35" className="st0" d="M-30.7 287.5l1-.6"/><path id="Fill-36" className="st0" d="M-138.5 287.3l.7-.5"/><path id="Fill-37" className="st0" d="M-30.7 287.2c-.2-.3-.4-.6-.3-.9v-10.9c-.2-.2-1.8-1.7-1.8-1.7l-2.9 2.2-2.1-2-2.8 2.1 1.9 2.1c-.3.4-1.1 2-.2 3.2.2.3.3.4.3.4l-.3.1c-1.8.5-3 2.4-3.1 3.8 0 1.1.6 3.1 2.2 3.9l4.9-3v.4c.1.8.5 1.7 1.4 2.7l2.9-2-.1-.4zm-4.2-1.5l-2.3 1.4c-.8-.4-1.3-1-1.6-1.5-.3-.6-.5-1.4-.5-1.9 0 0 0-.7.3-1.1.2-.2.4-.3.4-.4.1-.1.3-.1.5 0 .9.6 1.9.7 3.1.8l.1 2.7zm-.8-9.3l.8.8v5c-1.3 0-2.3-.2-2.8-.7-2.1-1.7-.3-4.1 2-5.1z"/><path id="Fill-38" className="st0" d="M-122 287l-.6.4-.5-.4v-11.9l-2.1-1.4-3.8 2.5-.1-.2c-.5-1.3-1.3-1.8-1.6-2.1l-3.6 2.3.2.2s.4-.2.6-.4c.4.4 1 1.4 1 1.8v8.9l-1 .8 2.8 1.8 2.8-1.8-1-.8v-9.9l.9-.6 1.4 1.5v9.2c0 1.1.9 1.9 1.5 2.4l3.4-2.2-.3-.1"/><path id="Fill-39" className="st0" d="M-123.4 275.3l1-.6"/><path id="Fill-40" className="st0" d="M-102.2 287l-.6.4-.5-.4v-11.9l-2.1-1.4-3.8 2.5-.1-.2c-.5-1.3-1.3-1.8-1.6-2.1l-3.6 2.3.2.2s.4-.2.6-.4c.4.4 1 1.4 1 1.8v8.9l-1 .8 2.8 1.8 2.8-1.8-1-.8v-9.9l.9-.6 1.4 1.5v9.2c0 1.1.9 1.9 1.5 2.4l3.4-2.2-.3-.1"/><path id="Fill-41" className="st0" d="M-103.5 275.3l1-.6"/><path id="Fill-42" className="st0" d="M-205.8 287.2l-1 .6-2-1.4V282l4.9-3.2-2.8-5.1-5.9 3.8v9.8c1.1.8 3.6 2.2 3.6 2.2l3.4-2.1-.2-.2zm-3.1-11.2l2.3 3.8-2.3 1.5V276z"/><path id="Fill-43" className="st0" d="M-61.3 287.8l1-.6"/><path id="Fill-44" className="st0" d="M-53.8 287.2l-1 .6-2-1.4V282l4.9-3.2-2.8-5.1-5.9 3.8v9.8c1.1.8 3.6 2.2 3.6 2.2l3.4-2.1-.2-.2zm-3-11.1l2.3 3.8-2.3 1.5v-5.3z"/><path id="Fill-45" className="st0" d="M-43.4 274.2s-2.5 1.6-3 1.9c-.1-.2-.5-1.4-1.8-2.3-.4.3-3.4 2.2-3.4 2.2l.1.2s.4-.3.5-.3l.2.2c.4.4.6.7.6.9v9.5l-1 .8 2.9 2.2s3-2.1 3-2l-1.1-.9v-9.5l.6-.4 1.4 1.8s-.1.2-.2.3c-.2.3-.6.7-.6 1.4 0 .2.3.8.7.8h.1c.3 0 .4-.1.6-.1h.1-.1c-.2 0-.3-.1-.5-.2s-.3-.4-.3-.6c0-.3.2-.8.6-1.2.7-.8 2.3-1.9 2.3-1.9l-1.7-2.8"/><path id="Fill-46" className="st0" d="M-45.5 287.3l.7-.5"/><path id="Fill-47" className="st0" d="M-97.2 276l2.5 2.2v8.2l-.8.6h-.1c-.9-.3-2-1.9-2-2.7v-8.1l.4-.2zm6 9.4v-9.6s-1.8-1.6-2.5-2.3c-.6.4-4.3 2.1-7.7 3.1.1.1.3.4.3.4v6c0 1 0 2.2.4 3.3.4 1.2 1.1 2.1 2.3 2.7l.3.2-5.7 4.7.1.6c.1 0 .3-.1.5-.2.4-.2 1.1-.5 2.2-.5 1.6 0 3.2 1 4 1.5.1.1.3.2.4.2.5-.1 2.3-1.5 3.9-2.9.9-.8 1.7-1.6 2.2-2.2.7-.8 1-1.4 1-1.7 0-.5-.4-1-.7-1.4-.5-.6-1-1.2-1-1.9zm-2.6 7.5l-.5-.3c-1.1-.6-2.2-1.2-3.4-1.2h-.3c-.4 0-1 .1-1.6.3l-.2-.4s4.4-3.6 4.8-3.9c.6.4 1.3 1.3 1.6 1.9s.5 1.1.5 1.7c0 .6-.1 1.1-.9 1.9z"/><path id="Fill-48" className="st0" d="M-74 285.3c-4 .1-7.2 3.7-7.1 7.1 0 1.4.5 3.5 2.6 3.5.9 0 1.6-.4 1.6-1.6 0-.2 0-.6-.2-.8-.1.4-.9 1.3-1.6 1.3-1.5 0-2-1.2-2-2.2 0-2.1 1.6-4.6 4.3-4.6 1.5 0 2.9.6 4.4 2.2 0 0 3.1-2.2 3.1-2.3-1.7-2.1-2.7-2.6-5.1-2.6"/><path id="Fill-49" className="st0" d="M-172.6 284.2c-.1.6-1.1 2.5-2.2 2.5-.9 0-1.3 0-2.1-.2-.6-.1-1-.2-1.5-.3h-.7c-2.7 0-3.6 2.3-3.6 3.8 0 2.5 1.2 5.2 4.5 5.2 1 0 3.2-.6 3.2-2.5 0-.1-.2-1.2-.8-1.2h-.4c.1.3.3.9.3 1.1 0 1.3-1.8 2-2.6 2-1.8 0-3.4-1-3.4-3.2 0-1.2.6-2.4 2-2.4 1.2 0 2.8.7 4 .7 2.7-.1 3.3-1.8 3.3-5.5"/><path id="Fill-50" className="st0" d="M-180.3 272.4c-.5-.5-.7-1-.7-1.3 0-.9.8-1.8 2.2-1.8.3 0 1 .2 2 .4.4.1.9.2 1 .2 1.2 0 3.1-1.2 4.2-2.4l.1-.1c-1 0-1.8-.3-2.6-.6s-1.6-.6-2.6-.6c-2.3 0-4.9 1.7-4.9 4-.1.3.4 1.7 1.3 2.2"/><path id="Fill-51" className="st0" d="M-156.6 286.8s-.4.3-.5.3-.2-.1-.4-.1c-.5-.3-1-1-1-2v-14.2c0-.9.4-1.4.6-1.7-.4-.3-.8-.6-1.3-1-.9-.7-2-1.6-2.6-2.1 0 0-3.3 2.6-3.6 2.8l-1.6-1.2c-.6-.5-1.6-1.3-1.9-1.5-.5.3-7.4 6-7.4 6v4.8h-.2c-3.9.5-4.2 3.4-4.2 4.3 0 .1.1.6.2.9v.1-.1c.2-.5.6-.9 1.1-1.2.4-.3 1-.5 1.5-.6 1.2-.2 1.3-.1 1.4 0l.1.1v5.1c0 .5-.1.8-.2 1 1.3-.7 2.9-2 3.4-2.8.6-1.1.5-1.1.5-3.3v-.3h3.2v5.9l-1.1 1.1 3.8 2.5 3.6-2.5-.5-.3s-.1.1-.2.1c-.1.1-.2.1-.3.1-.4 0-1.5-.9-1.6-1.2V280h3.5v5.6c0 .4 0 1.1.4 2 .1.2 1.2 1.6 2 2 .4-.2 3.6-2.5 3.6-2.5l-.3-.3zm-12.8-10.1h-3.2v-6.5l1.3-1.1 1.9 1.5v6.1zm7.2 0h-3.6v-6.5l1.3-1 2.3 2.1v5.4z"/></svg>
						</a>
					</div>
				</div>
			</footer>
		)
	}
}