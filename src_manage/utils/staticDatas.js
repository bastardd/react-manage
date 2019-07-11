const schoolListdataSource = [
    {
        id: '1',
        name: '西南科技大学',
        address: 'sc',
    },
    {
        id: '2',
        name: '清华大学',
        address: 'bj',
    },
    {
        id: '3',
        name: '北京大学',
        address: 'bj',
    },
    {
        id: '4',
        name: '四川大学',
        address: 'bj',
    },
    {
        id: '5',
        name: '四川理工大学',
        address: 'bj',
    },
    {
        id: '6',
        name: '同济大学',
        address: 'bj',
    },
    {
        id: '7',
        name: '测试大学001',
        address: 'bj',
    },
    {
        id: '8',
        name: '测试大学002',
        address: 'bj',
    },
    {
        id: '9',
        name: '测试大学003',
        address: 'bj',
    },
    {
        id: '10',
        name: '测试大学004',
        address: 'bj',
    },

    {
        id: '10',
        name: '测试大学004',
        address: 'bj',
    },
    {
        id: '10',
        name: '测试大学004',
        address: 'bj',
    },
    {
        id: '10',
        name: '测试大学004',
        address: 'bj',
    },
];

const facultysListdataSource = [
    {
        id: '1',
        name: '西南科技大学',
        manage:'张三',
        address: 'sc',
    },
    {
        id: '2',
        name: '清华大学',
        manage:'张三',
        address: 'bj',
    },
    {
        id: '3',
        name: '北京大学',
        manage:'张三',
        address: 'bj',
    },
    {
        id: '4',
        name: '四川大学',
        manage:'张三',
        address: 'bj',
    },
    {
        id: '5',
        name: '四川理工大学',
        manage:'张三',
        address: 'bj',
    },
    {
        id: '6',
        name: '同济大学',
        manage:'张三',
        address: 'bj',
    },
    {
        id: '7',
        name: '测试大学001',
        manage:'张三',
        address: 'bj',
    },
    {
        id: '8',
        name: '测试大学002',
        manage:'张三',
        address: 'bj',
    },
    {
        id: '9',
        name: '测试大学003',
        manage:'张三',
        address: 'bj',
    },
    {
        id: '10',
        name: '测试大学004',
        manage:'张三',
        address: 'bj',
    },

    {
        id: '11',
        name: '测试大学005',
        manage:'张三',
        address: 'bj',
    },
    {
        id: '12',
        name: '测试大学006',
        manage:'张三',
        address: 'bj',
    },
    {
        id: '13',
        name: '测试大学007',
        manage:'张三',
        address: 'bj',
    },
];

const rolesDataSource = [
    {
        title : '角色名称',
        dataIndex : 'roleName',
    },
    {
        title : '创建人',
        dataIndex : 'createUser',
    },
    {
        title : '创建时间',
        dataIndex : 'createDate',
    }
]

const sysAdminDataSource = [
    {
        id: '1',
        userName: '张三',
        account:'1234567',
        createName: '李四',
        roleId: 1,
        roleName: '超级管理员',
        phone :'1234567',
        password :'1234567'
    },
    {
        id: '2',
        userName: '王二小',
        account:'1234567',
        createName: '李四',
        roleId: 3,
        roleName: '超级管理员',
        phone :'1234567',
        password :'1234567'
    },
];

const roleData = [
    {
        id : 1,
        name : '超级管理员',
        createUser :'张三',
        createDate : '2019-11-11'
    },
    {
        id : 2,
        name : '学校管理员',
        createUser :'张三',
        createDate : '2019-11-11'
    },
    {
        id : 3,
        name : '题库管理员',
        createUser :'张三',
        createDate : '2019-11-11'
    }
]

export  {
    schoolListdataSource,
    facultysListdataSource,
    rolesDataSource,
    sysAdminDataSource,
    roleData
}