const mongoose = require('mongoose');

const Equip = mongoose.model('Equip');

module.exports = {
  async index(req,res){
    const { page = 1} = req.query;
    const equips = await Equip.paginate({}, {page, limit: 10});
    return res.json(equips);
  },
  async show(req, res){
    const product = await Equip.findById(req.params.id);

    return res.json(product);
  },
  async store(req,res){
    const equip = await Equip.create(req.body);
    return res.json(equip);

  },
  async update(req, res){
    const product = await Equip.findByIdAndUpdate(req.params.id, req.body, { new : true});

    return res.json(product);
  },
  async destroy(req, res){
    await Equip.findByIdAndRemove(req.params.id);

    return res.send();
  }
  
}