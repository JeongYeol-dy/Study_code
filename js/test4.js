// 爱用 -- 服务市场链接更改为小程序链接
function exchangeUrl(url, app) {
    // 截取参数
    let params = url.split('?')[1];
    // 参数解码
    params = decodeURIComponent(params);
    // 参数拼接
    // 服务市场：/pages/service-detail/service-detail?serviceCode=FW_GOODS-1827490&tracelog=plugin
    // 订购页面：/pages/confirm-order/confirm-order
    linkTo = '/pages/confirm-order/confirm-order';
    if (app == 'item') {
        linkTo = '/pages/service-detail/service-detail?serviceCode=FW_GOODS-1828810&tracelog=plugin';
    } else if (app == 'trade') {
        linkTo = '/pages/service-detail/service-detail?serviceCode=FW_GOODS-1827490&tracelog=plugin';
    }
    let newUrl = `https://m.duanqu.com/?_ariver_appid=3000000002140711&page=${linkTo}?${params}`;
    // 截取参数并编码
    let newParams = encodeURIComponent(newUrl.split('&page=')[1]);
    let result = `https://m.duanqu.com/?_ariver_appid=3000000002140711&page=${newParams}`;
// console.log(3, String(result));
    window.open(result);
}