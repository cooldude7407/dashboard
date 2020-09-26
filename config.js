module.exports = {
	/* The token of your Discord Bot */
	token: "",
	/* For the support server */
	/* Dashboard configuration */
	dashboard: {
		enabled: true, // whether the dashboard is enabled or not
		secret: "Mh0gwFYqTCtum6bj54iD4sE9qQfrdKHv", // Your discord client secret
		baseURL: "http://localhost:7487", // The base URl of the dashboard
		logs: "758073117733027882", // The channel ID of logs
		port: 7487, // Dashboard port
		expressSessionPassword: "wsdertgyhufrcdgxyuhrfcdgyubcfgiyvkcbfrkgbdcef", // Express session password (it can be what you want)
		failureURL: "http://localhost:7487" // url on which users will be redirected if they click the cancel button (discord authentication)

};
