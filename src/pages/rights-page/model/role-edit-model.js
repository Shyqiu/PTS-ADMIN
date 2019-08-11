import FormModel from '@/libs/form-model'

class RoleEditModel extends FormModel {
  constructor() {
    super()
    // this.init()

    this.ruleInline = {
      name: [
        {
          required: true,
          message: '请输入系统角色类型',
          trigger: 'blur'
        }
      ],
      permission: [
        {
          required: true,
          message: '请选择功能权限',
          trigger: 'blur'
        }
      ]
    }
  }

  init(form) {
    this.formInline = {
      id: form.id,
      name: form.name,
      permission: form.permission
    }
    return this
  }

  converter(form) {
    return {
      role_id: form.id,
      permissions_name: form.name,
      permissions_group: form.permission
    }
  }
}

export default new RoleEditModel()
