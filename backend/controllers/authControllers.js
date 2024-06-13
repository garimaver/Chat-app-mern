const signup = (req, res) => {
    console.log("signup user");
    // Your signup logic here
    res.send("Signup Route");
}

const login = (req, res) => {
    console.log("login user");
    // Your login logic here
    res.send("Login Route");
}

const logout = (req, res) => {
    console.log("logout user");
    // Your logout logic here
    res.send("Logout Route");
}

module.exports = {
    signup,
    login,
    logout
};
