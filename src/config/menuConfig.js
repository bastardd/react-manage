const menuList = [
    {
        title : '首页',
        key : '/home',
        icon : 'home',
    },
    {
        title : '学校管理',
        key : '/SchoolMng',
        icon : 'home',
        children : [
            {
                title : '学校管理',
                key : '/school',
                icon : 'school',
            },
            {
                title : '校区管理',
                key : '/campus',
                icon : 'campus',
            },
            {
                title : '院系管理',
                key : '/facultys',
                icon : 'facultys',
            },
            {
                title : '学员管理',
                key : '/schoolUsers',
                icon : 'users',
            },
        ]
    },
    {
        title : '培训机构管理',
        key : '/TrainOrgMng',
        icon : 'home',
        children : [
            {
                title : '培训机构管理',
                key : '/trainSchool',
                icon : 'trainSchool',
            },
            {
                title : '机构区域管理',
                key : '/trainCampuss',
                icon : 'trainCampuss',
            },
            {
                title : '学员管理',
                key : '/trainUsers',
                icon : 'users',
            }
        ]
    },
    {
        title : '企业管理',
        key : '/organs',
        icon : 'organs',
    },
    {
        title : '个人用户管理',
        key : '/users',
        icon : 'users',
    },
    {
        title : '虚拟公司管理',
        key : '/VirCompanysMng',
        icon : 'VirCompanysMng',
        children : [
            {
                title : '虚拟公司管理',
                key : '/virCompanys',
                icon : 'virCompanys',
            },
            {
                title : '客户公司管理',
                key : '/clintVirCompanys',
                icon : 'clintVirCompanys',
            },
            {
                title : '供应商管理',
                key : '/suplyVirCompanys',
                icon : 'suplyVirCompanys',
            },
            {
                title : '固定资产管理',
                key : '/assets',
                icon : 'assets',
            },
            {
                title : '库存产品管理',
                key : '/inventorys',
                icon : 'inventorys',
            },
        ]
    },
    {
        title : '实操题账表管理',
        key : '/OperaSheetMng',
        icon : 'OperaSheetMng',
        children : [
            {
                title : '账本类型',
                key : '/operBookForms',
                icon : 'operBookForms',
            },
            {
                title : '账本种类',
                key : '/operBookTypes',
                icon : 'operBookTypes',
            },
            {
                title : '账表名称',
                key : '/operBooks',
                icon : 'operBooks',
            },
        ]
    },
    {
        title : '试题管理',
        key : '/QuestionMng',
        icon : 'QuestionMng',
        children : [
            {
                title : '选项题管理',
                key : '/options',
                icon : 'options',
            },
            {
                title : '判断题管理',
                key : '/judges',
                icon : 'judges',
            },
            {
                title : '简答题管理',
                key : '/shortAnswers',
                icon : 'shortAnswers',
            },
            {
                title : '填空题管理',
                key : '/fills',
                icon : 'fills',
            },
            {
                title : '实操题管理',
                key : '/operations',
                icon : 'operations',
            },
        ]
    },
    {
        title : '试卷管理',
        key : '/exampapers',
        icon : 'exampapers',
    },
    {
        title : '测评管理',
        key : '/appraises',
        icon : 'appraises',
    },
    {
        title : '考证管理',
        key : '/textualMng',
        icon : 'textualMng',
    },
    {
        title : '培训管理',
        key : '/TrainMng',
        icon : 'home',
        children : [
            {
                title : '讲师管理',
                key : '/lecturers',
                icon : 'lecturers',
            },
            {
                title : '课程管理',
                key : '/courses',
                icon : 'courses',
            },
        ]
    },
    {
        title : '数据字典',
        key : '/Dictionary',
        icon : 'home',
        children : [
            {
                title : '单位管理',
                key : '/units',
                icon : 'units',
            },
            {
                title : '货币管理',
                key : '/currencys',
                icon : 'currencys',
            },
            {
                title : '行业管理',
                key : '/quesIndustrys',
                icon : 'quesIndustrys',
            },
            {
                title : '部门管理',
                key : '/quesDepts',
                icon : 'quesDepts',
            },
            {
                title : '岗位管理',
                key : '/quesPositions',
                icon : 'quesPositions',
            },
            {
                title : '职务管理',
                key : '/quesDutys',
                icon : 'quesDutys',
            },
            {
                title : '行业类别管理',
                key : '/quesIndustryTypes',
                icon : 'quesIndustryTypes',
            },
            {
                title : '专业管理',
                key : '/majors',
                icon : 'majors',
            },
            {
                title : '学校类型管理',
                key : '/schoolTypes',
                icon : 'schoolTypes',
            },
        ]
    },
    {
        title : '印章管理',
        key : '/SealMng',
        icon : 'home',
        children : [
            {
                title : '印章分类管理',
                key : '/seal',
                icon : 'seal',
            },
            {
                title : '印章列表管理',
                key : '/sign',
                icon : 'sign',
            },
            {
                title : '印章制作',
                key : '/yzzz',
                icon : 'yzzz',
            },
        ]
    },
    {
        title : '票据管理',
        key : '/BillMng',
        icon : 'home',
        children : [
            {
                title : '票据一级分类',
                key : '/levelone',
                icon : 'levelone',
            },
            {
                title : '票据二级分类',
                key : '/leveltwo',
                icon : 'leveltwo',
            },
            {
                title : '票据三级分类',
                key : '/levelthree',
                icon : 'levelthree',
            },
            {
                title : '票据类型',
                key : '/billcatagory',
                icon : 'billcatagory',
            },
            {
                title : '票据制作',
                key : '/billModul',
                icon : 'billModul',
            },
        ]
    },
    {
        title : '权限管理',
        key : '/AuthorityMng',
        icon : 'home',
        children : [
            {
                title : '角色管理',
                key : '/roles',
                icon : 'roles',
            },
            {
                title : '系统管理员管理',
                key : '/sysAdmins',
                icon : 'sysAdmins',
            },
            {
                title : '学校操作员管理',
                key : '/schoolAdmins',
                icon : 'schoolAdmins',
            },
            {
                title : '机构操作员管理',
                key : '/orgAdmins',
                icon : 'orgAdmins',
            },
        ]
    },
]

export default menuList