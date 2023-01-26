module.exports = {

list: async (res,req) => {try{
    return res.status(201).json({
        ok : true,
        msg :  "Usuario Registrado"
    })
} catch (error) {
    console.log(error);
    return res.status(error.status||500).json({
        ok: false,
        msg: error.message || "ups, hubo un error REGISTER"
    })}
}
}