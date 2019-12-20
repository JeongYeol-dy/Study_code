document.write('<script src="//q.aiyongbao.com/item/qap/qn.min4.0.6.js"></script>');

function getQueryVariable(variable)
{
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let index in vars){
        let pair = vars[index].split("=");
        if(pair[0] == variable){
            return pair[1];
        }
    }
    return null;
}

const projectCodeMap = {
    trade: 'TD20191021101011',
    item: 'TD20191021101025'
}
function doBeacon(event){
    const url = '//mcs.aiyongbao.com/1.gif';
    const nick = getQueryVariable('nick');
    const app = getQueryVariable('app');
    const platform = getQueryVariable('platform');
    const projectCode = projectCodeMap[app];
    event = `${event}-${app}-${platform}`;
    $.ajax({
        type: 'GET',
        url: url,
        data: {
            p:projectCode,
            n:nick,
            e:event,
            t: new Date().getTime()
        }
    })
}

function goToLink(link,need_userinfo_query=false){
    const platform = getQueryVariable('platform');
    // 判断是否需要带上用户信息跳转
    if (need_userinfo_query){
        const nick = getQueryVariable('nick');
        const app = getQueryVariable('app');
        let userinfo_query = `nick=${nick}&app=${app}&platform=${platform}`;
        if (link.includes('?')){
            link = `${link}&${userinfo_query}`;
        }else{
            link = `${link}?${userinfo_query}`;
        }
    }
    if (platform === 'pc'){
        window.open(link);
    }else{
        // 手机端通过插件内事件打开一个新的Page
        QN.emit('app.double11Jump',{url: link});
    }
}
