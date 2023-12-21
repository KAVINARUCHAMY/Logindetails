exports.renderHomePage = function(req, res) {
  return res.render("home");
};
  
exports.renderLoginPage = function(req, res) {
  return res.render("login");
};
  
exports.renderSignupPage = function(req, res) {
  return res.render("signup");
};

exports.renderSecondPage = function(req,res){
  return res.render("second");
}
  