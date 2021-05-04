'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  image() {
    return this.belongsTo('App/Models/Image')
  }

  /**
   * Relacionamento entre produto e imagens
   * galeria de imagens do produto
   */
  images() {
    return this.belongsToMany('App/Models/Image')
  }

  /**
   * Relacionamento entre produto e categoria
   */
  categories() {
    return this.belongsToMany('App/Models/Category')
  }

  /**
   * Relacionemnto enre produtos e cupons
   */
  coupons() {
    return this.belongsToMany('App/Models/Coupon')
  }
}

module.exports = Product
