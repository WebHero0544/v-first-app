export default {
    changeCity(state: any, city: string) {
        state.city = city;
        try {
            // 防止浏览器的localStorage被禁用，或在无痕模式下时程序抛出异常而终止
            const ls: any = window.localStorage;
            ls.city = city;
        } catch (error) {
            window.console.log(error);
        }
    },
};
