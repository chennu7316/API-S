const route=require('express').Router()
const controler=require('./../controler/tourContriler');
route.param('id',controler.ValidId)
route.route('/getall').get(controler.getall)
route.route('/getone/:id').get(controler.getone)
route.route('/add').post(controler.Check,controler.addtoures)
route.route('/delete/:id').delete(controler.delete)
route.route('/update/:id').put(controler.update)

module.exports=route