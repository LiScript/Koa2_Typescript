const router = require('koa-router')()
const AipNlpClient = require("baidu-aip-sdk").nlp;
// 设置百度APPID/AK/SK
const APP_ID = "22969043";
const API_KEY = "dkyhBeEDWcxlbXy80hiBqLYt";
const SECRET_KEY = "NE86zbsga0N69vXtyO8cSzP3BsFUNvXO";

const client = new AipNlpClient(APP_ID, API_KEY, SECRET_KEY);

router.prefix('/api/aipoli')

router.post('/sentiment_classify', async function (ctx, next) {
    const { text } = ctx.request.body
    const sentiment = await  client.sentimentClassify(text).then(function(result) {
        return result.items
    }).catch(function(err) {
        console.log(err);
        return err
    });
    ctx.body = {
        errno: 0,
        text,
        sentiment
    }
})

module.exports = router
