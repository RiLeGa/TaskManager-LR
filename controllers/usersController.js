module.exports = {
    profile : (req,res) => {
        try{
            return res.status(200).json({
                ok : true,
                msg :  "Usuario Registrado",
                user: req.user
            })
        } catch (error) {
            console.log(error);
            return res.status(error.status||500).json({
                ok: false,
                msg: error.message || "ups, hubo un error REGISTER"
            })
        }
    }
}