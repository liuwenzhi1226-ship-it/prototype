// 月子中心共享数据层
// 所有端共用此数据，确保数据一致性

var centerData = {
  // 客户基本信息
  customers: [
    {id:1,name:'李女士',phone:'138****0001',room:'101',package:'尊享套餐',status:'active',checkInDate:'2024-01-15',babyName:'宝宝',babyGender:'女',babyWeight:'3.2kg',babyLength:'50cm',momDelivery:'顺产',babyStaff:'育婴师-李老师',momStaff:'产康师-张老师'},
    {id:2,name:'张女士',phone:'137****0002',room:'103',package:'豪华套餐',status:'active',checkInDate:'2024-01-10',babyName:'宝宝',babyGender:'男',babyWeight:'3.5kg',babyLength:'51cm',momDelivery:'剖宫产',babyStaff:'育婴师-王老师',momStaff:'产康师-张老师'},
    {id:3,name:'王女士',phone:'136****0003',room:'201',package:'标准套餐',status:'active',checkInDate:'2024-01-08',babyName:'宝宝',babyGender:'女',babyWeight:'3.1kg',babyLength:'49cm',momDelivery:'顺产',babyStaff:'育婴师-李老师',momStaff:'产康师-李老师'}
  ],
  
  // 本周菜单（每天6餐：早餐、早点、午餐、午点、晚餐、晚点）
  weeklyMenu: [
    {
      day:'周一',
      meals:[
        {name:'早餐',items:['小米粥','水煮蛋','红糖红枣粥','凉拌黄瓜']},
        {name:'早点',items:['银耳羹','核桃仁']},
        {name:'午餐',items:['米饭','鲫鱼汤','清蒸鲈鱼','炒时蔬','红豆饭']},
        {name:'午点',items:['木瓜牛奶','坚果拼盘']},
        {name:'晚餐',items:['排骨汤','白切鸡','炒青菜','紫菜蛋花汤']},
        {name:'晚点',items:['桂圆红枣茶','芝麻饼']}
      ]
    },
    {
      day:'周二',
      meals:[
        {name:'早餐',items:['红豆粥','蒸饺','南瓜粥','凉拌菠菜']},
        {name:'早点',items:['豆浆','蛋卷']},
        {name:'午餐',items:['米饭','鸡汤','红烧排骨','清炒西兰花','八宝饭']},
        {name:'午点',items:['水果拼盘','苏打饼干']},
        {name:'晚餐',items:['鱼汤','白切肉','炒时蔬','番茄蛋汤']},
        {name:'晚点',items:['牛奶','全麦面包']}
      ]
    },
    {
      day:'周三',
      meals:[
        {name:'早餐',items:['南瓜粥','馄饨','鸡蛋饼','凉拌木耳']},
        {name:'早点',items:['红豆沙','腰果']},
        {name:'午餐',items:['米饭','猪蹄汤','清蒸鲈鱼','炒时蔬','紫薯饭']},
        {name:'午点',items:['银耳羹','坚果']},
        {name:'晚餐',items:['排骨汤','白切鸡','炒青菜','豆腐汤']},
        {name:'晚点',items:['红枣茶','芝麻糊']}
      ]
    },
    {
      day:'周四',
      meals:[
        {name:'早餐',items:['八宝粥','包子','鸡蛋','凉拌黄瓜']},
        {name:'早点',items:['豆浆','蛋卷']},
        {name:'午餐',items:['米饭','鲫鱼汤','红烧肉','清炒时蔬','红豆饭']},
        {name:'午点',items:['水果拼盘','饼干']},
        {name:'晚餐',items:['鸡汤','白切肉','炒青菜','紫菜汤']},
        {name:'晚点',items:['牛奶','全麦饼']}
      ]
    },
    {
      day:'周五',
      meals:[
        {name:'早餐',items:['紫薯粥','鸡蛋','红糖粥','凉拌菠菜']},
        {name:'早点',items:['银耳羹','核桃']},
        {name:'午餐',items:['米饭','排骨汤','清蒸鱼','炒时蔬','八宝饭']},
        {name:'午点',items:['木瓜牛奶','坚果拼盘']},
        {name:'晚餐',items:['鱼汤','白切鸡','炒青菜','豆腐汤']},
        {name:'晚点',items:['红枣茶','芝麻饼']}
      ]
    },
    {
      day:'周六',
      meals:[
        {name:'早餐',items:['花生粥','饺子','鸡蛋饼','凉拌黄瓜']},
        {name:'早点',items:['豆浆','蛋卷']},
        {name:'午餐',items:['米饭','鸡汤','红烧排骨','清炒西兰花','紫薯饭']},
        {name:'午点',items:['水果拼盘','苏打饼干']},
        {name:'晚餐',items:['排骨汤','白切肉','炒时蔬','番茄蛋汤']},
        {name:'晚点',items:['牛奶','全麦面包']}
      ]
    },
    {
      day:'周日',
      meals:[
        {name:'早餐',items:['桂圆粥','鸡蛋','南瓜粥','凉拌木耳']},
        {name:'早点',items:['银耳羹','腰果']},
        {name:'午餐',items:['米饭','鲫鱼汤','清蒸鲈鱼','炒时蔬','红豆饭']},
        {name:'午点',items:['木瓜牛奶','坚果']},
        {name:'晚餐',items:['鸡汤','白切鸡','炒青菜','紫菜汤']},
        {name:'晚点',items:['红枣茶','芝麻糊']}
      ]
    }
  ],
  
  // 原材料每日照片（按日期）
  ingredientPhotos: {
    '2024-01-20': ['🥬蔬菜', '🐔鸡肉', '🐟鱼类', '🥛奶制品', '🍚主食'],
    '2024-01-19': ['🥬蔬菜', '🐔鸡肉', '🐟鱼类', '🥛奶制品', '🍚主食'],
    '2024-01-18': ['🥬蔬菜', '🐔鸡肉', '🐟鱼类', '🥛奶制品', '🍚主食']
  },
  
  // 每餐菜品照片（按日期）
  mealPhotos: {
    '2024-01-20': {
      '早餐': ['🥣小米粥', '🥚水煮蛋', '🥒凉拌黄瓜'],
      '早点': ['🥣银耳羹', '🥜核桃仁'],
      '午餐': ['🍚米饭', '🐟清蒸鲈鱼', '🥣鲫鱼汤', '🥬炒时蔬'],
      '午点': ['🥛木瓜牛奶', '🥜坚果拼盘'],
      '晚餐': ['🐔白切鸡', '🥬炒青菜', '🥣紫菜蛋花汤'],
      '晚点': ['🍵桂圆红枣茶', '🍪芝麻饼']
    },
    '2024-01-19': {
      '早餐': ['🥣红豆粥', '🥟蒸饺', '🥒凉拌菠菜'],
      '早点': ['🥛豆浆', '🥚蛋卷'],
      '午餐': ['🍚米饭', '🐔鸡汤', '🥩红烧排骨', '🥦清炒西兰花'],
      '午点': ['🍉水果拼盘', '🍪苏打饼干'],
      '晚餐': ['🐟鱼汤', '🥩白切肉', '🥬炒时蔬'],
      '晚点': ['🥛牛奶', '🍞全麦面包']
    }
  },
  
  // 宝宝护理记录（按日期，101房）
  babyRecords: {
    '2024-01-20': {
      feeding: [
        {time:'06:30',type:'母乳',amount:'左30ml+右30ml',duration:'15min',notes:'吞咽正常'},
        {time:'09:00',type:'瓶喂',amount:'60ml',duration:'12min',notes:'吃完后拍嗝'},
        {time:'11:30',type:'母乳',amount:'双侧',duration:'20min',notes:'母乳充足'},
        {time:'14:00',type:'瓶喂',amount:'70ml',duration:'15min',notes:'正常'},
        {time:'16:30',type:'母乳',amount:'双侧',duration:'18min',notes:'吃完睡觉'},
        {time:'19:00',type:'瓶喂',amount:'65ml',duration:'14min',notes:'正常'},
        {time:'21:30',type:'母乳',amount:'双侧',duration:'20min',notes:'夜奶'}
      ],
      sleep: [
        {time:'07:00-08:30',duration:'1.5h',quality:'安睡',notes:''},
        {time:'09:30-11:00',duration:'1.5h',quality:'浅睡',notes:'偶有惊醒'},
        {time:'14:00-15:30',duration:'1.5h',quality:'安睡',notes:''},
        {time:'16:00-17:00',duration:'1h',quality:'哭闹后入睡',notes:'安抚后入睡'},
        {time:'19:30-21:00',duration:'1.5h',quality:'安睡',notes:''},
        {time:'22:00-06:00',duration:'8h',quality:'安睡',notes:'整夜安睡'}
      ],
      diaper: [
        {time:'07:00',type:'小便',amount:'正常',color:'淡黄'},
        {time:'08:30',type:'大便',amount:'一次',color:'黄色糊状',notes:'正常'},
        {time:'10:00',type:'小便',amount:'正常',color:'淡黄'},
        {time:'12:00',type:'小便',amount:'正常',color:'淡黄'},
        {time:'14:30',type:'大便',amount:'一次',color:'黄色糊状',notes:'正常'},
        {time:'16:00',type:'小便',amount:'正常',color:'淡黄'},
        {time:'18:00',type:'小便',amount:'正常',color:'淡黄'},
        {time:'20:00',type:'大便',amount:'一次',color:'黄色糊状',notes:'正常'}
      ],
      temp: [{time:'08:00',value:'36.5°C',notes:'正常'}],
      jaundice: [{time:'08:00',value:'8.2',notes:'经皮测量'}],
      care: [
        {time:'08:00',item:'脐部护理',notes:'已消毒，无红肿'},
        {time:'10:00',item:'抚触按摩',duration:'15min',notes:'宝宝状态好'},
        {time:'14:00',item:'游泳',duration:'10min',notes:'正常'},
        {time:'16:00',item:'被动操',duration:'10min',notes:'配合度高'}
      ]
    },
    '2024-01-19': {
      feeding: [
        {time:'06:30',type:'母乳',amount:' bilateral',duration:'15min',notes:''},
        {time:'09:00',type:'瓶喂',amount:'55ml',duration:'12min',notes:''},
        {time:'11:30',type:'母乳',amount:' bilateral',duration:'18min',notes:''},
        {time:'14:00',type:'瓶喂',amount:'65ml',duration:'14min',notes:''},
        {time:'16:30',type:'母乳',amount:' bilateral',duration:'16min',notes:''},
        {time:'19:00',type:'瓶喂',amount:'60ml',duration:'13min',notes:''}
      ],
      sleep: [
        {time:'07:00-08:00',duration:'1h',quality:'安睡',notes:''},
        {time:'09:30-11:00',duration:'1.5h',quality:'浅睡',notes:''},
        {time:'14:00-15:00',duration:'1h',quality:'安睡',notes:''},
        {time:'19:30-21:00',duration:'1.5h',quality:'安睡',notes:''}
      ],
      diaper: [
        {time:'07:00',type:'小便',amount:'正常',color:'淡黄'},
        {time:'08:30',type:'大便',amount:'一次',color:'黄色糊状',notes:'正常'},
        {time:'14:30',type:'大便',amount:'一次',color:'黄色糊状',notes:'正常'},
        {time:'20:00',type:'大便',amount:'一次',color:'黄色糊状',notes:'正常'}
      ],
      temp: [{time:'08:00',value:'36.6°C',notes:'正常'}],
      jaundice: [{time:'08:00',value:'8.5',notes:'经皮测量'}],
      care: [
        {time:'08:00',item:'脐部护理',notes:'已消毒'},
        {time:'10:00',item:'抚触按摩',duration:'15min',notes:'正常'},
        {time:'14:00',item:'游泳',duration:'10min',notes:'正常'}
      ]
    }
  },
  
  // 宝妈护理记录（按日期，101房）
  momRecords: {
    '2024-01-20': {
      temp: [{time:'08:00',value:'36.8°C',notes:'正常'}],
      bloodPressure: [{time:'08:00',value:'110/70',notes:'正常'}],
      lochia: [{time:'08:00',value:'红色，量少',notes:'正常'}],
      breast: [{time:'08:00',value:'无胀痛，泌乳正常',notes:''}],
      wound: [{time:'08:00',value:'切口干燥，无红肿',notes:'顺产恢复良好'}],
      diet: [{time:'08:00',value:'三餐三点正常进食',notes:'食欲良好'}],
      mood: [{time:'20:00',value:'平稳',notes:'情绪稳定'}]
    },
    '2024-01-19': {
      temp: [{time:'08:00',value:'36.7°C',notes:'正常'}],
      bloodPressure: [{time:'08:00',value:'112/72',notes:'正常'}],
      lochia: [{time:'08:00',value:'红色，量少',notes:'正常'}],
      breast: [{time:'08:00',value:'轻微胀痛',notes:'开始泌乳'}],
      wound: [{time:'08:00',value:'切口干燥',notes:'恢复中'}],
      diet: [{time:'08:00',value:'正常进食',notes:'胃口好'}],
      mood: [{time:'20:00',value:'平稳',notes:'良好'}]
    }
  },
  
  // 产康预约
  appointments: [
    {id:1,project:'乳腺疏通',date:'2024-01-20',time:'10:00',therapist:'张产康师',status:'confirmed',notes:''},
    {id:2,project:'盆底肌修复',date:'2024-01-21',time:'14:00',therapist:'张产康师',status:'confirmed',notes:''},
    {id:3,project:'中药泡脚',date:'2024-01-22',time:'15:00',therapist:'李产康师',status:'pending',notes:'需要确认'}
  ],
  
  // 护理照片（按日期）
  carePhotos: {
    '2024-01-20': [
      {id:1,type:'baby',time:'08:30',label:'晨间护理',emoji:'👶',color:'#ffe0ec'},
      {id:2,type:'baby',time:'10:00',label:'抚触按摩',emoji:'💆',color:'#fff3e0'},
      {id:3,type:'baby',time:'14:00',label:'游泳时光',emoji:'🏊',color:'#e3f2fd'},
      {id:4,type:'mom',time:'11:00',label:'产康理疗',emoji:'💆',color:'#fce4ec'},
      {id:5,type:'meal',time:'12:00',label:'午餐时间',emoji:'🍽️',color:'#e8f5e9'},
      {id:6,type:'baby',time:'15:00',label:'午后小憩',emoji:'😴',color:'#f3e5f5'}
    ],
    '2024-01-19': [
      {id:1,type:'baby',label:'晨间护理',emoji:'👶',color:'#ffe0ec'},
      {id:2,type:'mom',label:'产康理疗',emoji:'💆',color:'#fce4ec'},
      {id:3,type:'baby',label:'游泳时光',emoji:'🏊',color:'#e3f2fd'}
    ]
  },
  
  // 特殊饮食需求
  specialDiets: [
    {room:'101房',name:'李女士',diet:'低盐饮食',reason:'血压偏高',status:'已通知'}
  ],
  
  // 反馈记录
  feedbacks: [
    {id:1,time:'2024-01-18 14:30',content:'希望晚餐能增加一点汤品',status:'已处理',reply:'已通知厨房调整菜单',type:'建议'},
    {id:2,time:'2024-01-17 09:00',content:'宝宝昨晚睡眠不太安稳',status:'处理中',reply:'已告知育婴师关注',type:'反馈'},
    {id:3,time:'2024-01-16 16:00',content:'产康预约时间能否调整到下午3点',status:'已处理',reply:'已协调产康师调整时间',type:'建议'}
  ]
};
