const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const EquipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tombo: {
    type: Number,
    required: true
  },
  transfer: {
    type: Date,
    default: Date.now
  }

});

EquipSchema,mongoose.plugin(mongoosePaginate);
mongoose.model('Equip', EquipSchema);