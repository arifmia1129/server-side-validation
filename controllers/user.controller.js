exports.createUser = async (req, res) => {
    try {
        res.status(201).json({
            success: true,
            message: "Successfully created user",
            user: req.body
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't create user",
            error: error.message
        })
    }
}


exports.getUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email !== "arif@gmail.com" || password !== "123456") {
            return res.status(400).json({
                success: false,
                message: "Email or password invalid"
            })
        }

        res.status(201).json({
            success: true,
            message: "Successfully logged in user"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't login user",
            error: error.message
        })
    }
}