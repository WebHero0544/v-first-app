

let defaultCity = '北京';


// 防止浏览器的localStorage被禁用，或在无痕模式下时程序抛出异常而终止
try {
    const ls: any = window.localStorage;
    if (ls.city) {
        defaultCity = ls.city;
    }
} catch (error) {
    window.console.log(error);
}

export default {
    city: defaultCity,
};
