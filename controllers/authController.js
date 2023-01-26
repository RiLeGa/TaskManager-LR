module.exports = {

    register: async (req,res) => {
        try{
        return res.status(201).json({
            ok : true,
            msg :  "Usuario Registrado"
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status||500).json({
            ok: false,
            msg: error.message || "ups, hubo un error REGISTER"
        })
    }
    },
    login: async (req,res) => {
        try{
        return res.status(200).json({
            ok : true,
            msg :  "Usuario Logueado"
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status||500).json({
            ok: false,
            msg: error.message || "Ups, hubo un error en LOGIN"
        })
    }
    },
    checked: async (req,res) => {
        try{
        return res.status(201).json({
            ok : true,
            msg :  "Usuario Checkeado"
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status||500).json({
            ok: false,
            msg: error.message || "Ups, hubo un error en CHECKED"
        })
    }
    },
    sendToken: async (req,res) => {
        try{
        return res.status(200).json({
            ok : true,
            msg :  "Token Enviado"
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status||500).json({
            ok: false,
            msg: error.message || "Ups, hubo un error en SEND-TOKEN"
        })
    }
    },
    verifyToken: async (req,res) => {
        try{
        return res.status(200).json({
            ok : true,
            msg :  "Token Verificado"
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status||500).json({
            ok: false,
            msg: error.message || "Ups, hubo un error en VERIFY-TOKEN"
        })
    }
    },
    changePassword: async (req,res) => {
        try{
        return res.status(200).json({
            ok : true,
            msg :  "Password Actualizado"
        })
    } catch (error) {
        console.log(error);
        return res.status(error.status||500).json({
            ok: false,
            msg: error.message || "Ups, hubo un error en CHANGE-PASSWORD"
        })
    }
    }


}