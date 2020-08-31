export default {
    state: {
        memu: [],
        currentMenu: null,
        isCollapse: false,
        tabsList: [{ path: "/", name: "home", label: "首页", icon: "s-home" }],
    },
    mutations: {
        selectMenu(state, val) {
            if (val.name !== "home") {
                state.currentMenu = val;
                let result = state.tabsList.findIndex((item) => item.name === val.name);
                result === -1 ? state.tabsList.push(val) : "";
            } else {
                state.currentMenu = null;
            }
            // val.name === "home" ? (state.currentMenu = null) : (state.currentMenu = val);
        },
        closeTab(state, val) {
            let result = state.tabsList.findIndex((item) => item.name === val.name);
            state.tabsList.splice(result, 1);
        },
        collapse(state) {
            //取反
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {},
};