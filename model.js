const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const citySchema = new Schema(
  {
    owm_city_id: { type: String },
    owm_city_name: { type: String },
    owm_latitude: { type: String },
    owm_longitude: { type: String },
    owm_country: { type: String },
    locality_short: { type: String },
    locality_long: { type: String },
    country_short: { type: String },
    country_long: { type: String },
    admin_level_1_short: { type: String },
    admin_level_1_long: { type: String },
    admin_level_2_short: { type: String },
    admin_level_2_long: { type: String },
    admin_level_3_short: { type: String },
    admin_level_3_long: { type: String },
    admin_level_4_short: { type: String },
    admin_level_4_long: { type: String },
    admin_level_5_short: { type: String },
    admin_level_5_long: { type: String },
    postal_code: { type: String },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("cities", citySchema);
