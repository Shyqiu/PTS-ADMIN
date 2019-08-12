import FormModel from '@/libs/form-model'
// import moment from 'moment'

class TourCreateModel extends FormModel {
  constructor() {
    super()
    // this.init()

    this.ruleInline = {
      content: [{
        required: true,
        message: '请输入简介',
        trigger: 'blur'
      }],
      real_name: [{
        required: true,
        message: '请输入商家名称',
        trigger: 'blur'
      }],
      address: [{
        required: true,
        message: '请输入地址',
        trigger: 'blur'
      }],
      phone: [{
        required: true,
        message: '请输入电话',
        trigger: 'blur'
      }],
      merchants_cid: [{
        required: true,
        message: '请选择分类',
        trigger: 'blur',
      }],
      pic: [{
        required: true,
        message: '请上传图片',
        trigger: 'blur'
      }],
    }
  }

  init(form) {
    this.formInline = {
      mid: form.mid,
      content: form.content,
      address: form.address,
      phone: form.phone,
      pic: form.pic,
      real_name: form.real_name,
      merchants_cid: form.merchants_cid,
      contact: form.contact,
    }
    return this
  }

  converter(form) {
    return {
      id: form.id,
      goods_name: form.goods_name,
      img_list: form.img_list,
      content: form.content,
      create_name: form.create_name,
      goods_price: form.goods_price,
      discount_point: form.discount_point,
      end_time: form.end_time,
      start_time: form.start_time,
    }
  }
}

export default new TourCreateModel()
