const contratos = require('../models/contratos');

module.exports.listAll = () => {
    const res = contratos.find({}).exec();
    return res;
}

module.exports.findID = (id) => {
    const res = contratos.findOne({ _id: id }).exec();
    return res;
}

module.exports.findContratosEntidade = (entidade) => {
    const res = contratos.find({ entidade_comunicante: entidade }).exec();
    return res;
}

module.exports.findContratosTipo = (tipo) => {
    const res = contratos.find({ tipoprocedimento: tipo }).exec();
    return res;
}

module.exports.listEntidades = () => {
    const res = contratos.distinct("entidade_comunicante").sort().exec();
    return res;
}

module.exports.listTipos = () => {
    const res = contratos.distinct("tipoprocedimento").sort().exec();
    return res;
}

module.exports.addRegisto = (registo) => {
    return contratos.create(registo);
}

module.exports.deleteRegisto = (id) => {
    return contratos.deleteOne({ _id: id });
}

module.exports.update = (id, contrato) => {
    return Contrato
        .findByIdAndUpdate(id, contrato, {new : true})
        .exec()
}