import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
    try {
        const { token } = req.headers;
        if (!token) return res.json({ success: false, message: "Not Authorized. Login Again" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        if (decoded.admin !== process.env.ADMIN_EMAIL) {
    return res.json({ success: false, message: "Not Authorized. Login Again" });
}


        next();
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export default adminAuth;
