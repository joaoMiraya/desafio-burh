const db = require('../database/models')

const Resultado = db.Resultado;

const mainController = {
    list: (req, res) => {
        Resultado.findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err);
            })
    },
    findByBimestre: (req, res) => {
        Resultado.findAll({
            where: {
                bimestre: req.params.bimestre
            }
        })
            .then((data) => {
                if (data) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json({ error: 'Resultados não encontrado' })
                }
            }).catch((err) => {
                res.status(500).json(err);
            })
    },
    create: async (req, res) => {
        const data = req.body;
        try {
            await Resultado.create(data)
            res.status(201).json({ msg: 'Nota criada com sucesso!' })
        } catch (err) {
            console.error(err);
            res.status(400).json({ err })
        }
    },
    update: async (req, res) => {
        const id = req.params.id
        const data = req.body
        try {
            await Resultado.update(data, { where: { id } })
            res.status(201).json({ msg: 'Nota alterada com sucesso!' })
        } catch (err) {
            res.status(304).json({ error: [...err] })
        }
    },

    delete: async (req, res) => {
        const id = req.params.id
        try {
            await Resultado.destroy({ where: { id } })
            res.status(201).json({ msg: 'Nota excluída com sucesso!' })
        } catch (err) {
            res.status(400).json(err)
        }
    }
}


module.exports = mainController;