module.exports = {
    basic: [
        {
            to: "/company",
            title: "公司信息",
            crumb: ["基础资料", "公司信息"]
        },
        {
            to: "/employee",
            title: "员工信息",
            crumb: ["基础资料", "公司信息"]
        }
    ],
    depot: [
        {
            to: "/depot_search",
            title: "库存查询",
            componentPath: "modules/depot/search",
            crumb: ["库存管理", "库存查询"]
        }
    ],
    purchase: [],
    sales: [],
    system: []
};
