var user;


$("#formsub").click(function() {
	user = {
		name: $("#name").val().trim(),
		pass: $("#pass").val().trim()
	};

	return user;
});


module.exports = user;