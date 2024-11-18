const acg = new Vue({
    el: '#acg',
    data: {
        linkGroups: [
            {
                title: '导航网址',
                links: [
                    { name: '影视-金牌影院', link: 'https://www.hhduc.com/type/2' },
                    { name: '影视-爱壹帆[VPN]', link: 'https://www.yfsp.tv/' },
                    { name: '漫画-包子漫画', link: 'https://cn.baozimh.com/' },
                    { name: '漫画-来漫画', link: 'https://www.comemh8.com/' },
                ]
            },
            {
                title: '漫画',
                links: [
                    { name: '鬼刀', link: 'https://manga.bilibili.com/detail/mc29481' },
                    { name: '我独自升级', link: 'https://cn.baozimh.com/comic/woduzishengji-duburedicestudio_gi486f' },
                    { name: '死灵法师:亡灵支配者', link: 'https://cn.baozimh.com/comic/silingfashiwanglingzhipeizhe-kimkyoungyeoljjjkimdongjun_netlj6' },
                    { name: '全知读者视角', link: 'https://www.comemh.com/kanmanhua/quanzhiduzheshijiao/' },
                    { name: '妹子与科学', link: 'https://cn.baozimh.com/comic/meiziyukexue-zhazhushidede' },
                    { name: '虫穴-系列', link: 'https://cn.baozimh.com/comic/chongxue-jinguisen' },
                    { name: '医统-天下', link: 'https://cn.baozimh.com/comic/yitongtianxia-duanyanmuou' },
                    { name: '医统-乱世', link: 'https://cn.baozimh.com/comic/yitongluanshi-duanyanmuou2gefeiwu' },
                    { name: '偷星九月天', link: 'https://cn.baozimh.com/comic/touxingjiuyuetian-zhouhongbingongzuoshi' },
                    { name: '与死亡同行：从鱼人地下城开始', link: 'https://cn.baozimh.com/comic/yusiwangtongxingcongyurendixiachengkaishi-yinhechuangxiang' },
                    { name: '末世英雄传说', link: 'https://cn.baozimh.com/comic/moshiyingxiongchuanshuo-ddartquancanxukenaz' },
                    { name: '末世人间道', link: 'https://www.comemh.com/kanmanhua/15303/' },
                    { name: '末日危机', link: 'https://cn.baozimh.com/comic/moriweiji-parkchanggeunparkchanggeun' },
                    { name: '尸界', link: 'https://cn.baozimh.com/comic/shijie-bianhuinorth0023' },
                    { name: '末世凡人', link: 'https://cn.baozimh.com/comic/moshifanren-liangqigongchang' },
                    { name: '末日孢子', link: 'https://cn.baozimh.com/comic/moribaozi-yanqimen' },
                    { name: '从末世崛起', link: 'https://www.dingmanhua.com/comic/1732.html/' },
                    { name: '银之守墓人', link: 'https://www.dingmanhua.com/comic/1265.html/' },
                    { name: '白垩纪', link: 'https://cn.baozimh.com/comic/baieji-qiasitedongman' },
                    { name: '驭灵师', link: 'https://cn.baozimh.com/comic/yulingshi-shidaimanwang2' },
                    { name: '我只想安静的打游戏', link: 'https://www.dingmanhua.com/comic/700.html/' },
                    { name: '武炼巅峰', link: 'https://cn.baozimh.com/comic/wuliandianfeng-pikapi_lav8od' },
                    { name: '死灵法师！我即是天灾-53', link: 'https://www.dingmanhua.com/comic/1082.html/' },
                    { name: '角色是水母的我依然超神', link: 'https://www.dingmanhua.com/comic/1460.html/' },
                    { name: '生存学概率', link: 'https://cn.baozimh.com/comic/shengcunxuegailun-mrquokkaharustudiokhit' },
                    { name: '回头是岸', link: 'https://cn.baozimh.com/comic/huitoushian-wumantiancaoruibo' },
                    { name: '灭亡之后的世界', link: 'https://www.dingmanhua.com/comic/521.html/' },
                    { name: '骸骨王座', link: 'https://cn.baozimh.com/comic/haiguwangzuo-cartoonlife_o4589z' },
                    { name: '梦境毁灭Dreamcide', link: 'https://cn.baozimh.com/comic/mengjinghuimiedreamcide-hkbooks' },
                ]
            },
            {
                title: '动画',
                links: [
                    { name: '葬送的芙莉莲', link: 'https://www.hhduc.com/detail/75717' },
                    { name: '双城之战', link: 'https://www.hhduc.com/detail/105218' },
                    { name: '双城之战Ⅱ', link: 'https://www.hhduc.com/detail/130730' },
                    { name: '雾山五行', link: 'https://www.hhduc.com/detail/69702' },
                    { name: '拾荒者统治', link: 'https://www.hhduc.com/detail/81526' },
                    { name: 'DOTA：龙之血系列', link: 'https://www.hhduc.com/vod/search/DOTA%EF%BC%9A%E9%BE%99%E4%B9%8B%E8%A1%80' },
                    { name: '龙王子系列', link: 'https://www.hhduc.com/vod/search/%E9%BE%99%E7%8E%8B%E5%AD%90' },
                    { name: '爱，死亡和机器人系列', link: 'https://www.hhduc.com/vod/search/%E7%88%B1%EF%BC%8C%E6%AD%BB%E4%BA%A1%E5%92%8C%E6%9C%BA%E5%99%A8%E4%BA%BA' },
                    { name: '灵笼', link: 'https://www.hhduc.com/detail/122722' },
                    { name: '斩神之凡尘神域', link: 'https://www.hhduc.com/detail/128495' },
                    { name: '时光代理人系列', link: 'https://www.hhduc.com/vod/search/%E6%97%B6%E5%85%89%E4%BB%A3%E7%90%86%E4%BA%BA' },

                ]
            },
            {
                title: '电影',
                links: [
                    { name: '头号玩家', link: 'https://www.hhduc.com/detail/106145' },
                    { name: '阿凡达系列', link: 'https://www.hhduc.com/vod/search/%E9%98%BF%E5%87%A1%E8%BE%BE' },
                    { name: '流浪地球系列', link: 'https://www.hhduc.com/vod/search/%E6%B5%81%E6%B5%AA%E5%9C%B0%E7%90%83' },
                    { name: '侏罗纪世界系列', link: 'https://www.hhduc.com/vod/search/%E4%BE%8F%E7%BD%97%E7%BA%AA%E4%B8%96%E7%95%8C' },
                    { name: '明日边缘', link: 'https://www.hhduc.com/detail/117863' },
                    { name: '明日之战', link: 'https://www.hhduc.com/detail/108571' },
                    { name: '僵尸世界大战', link: 'https://www.hhduc.com/detail/111241' },
                    { name: '后天', link: 'https://www.hhduc.com/detail/121796' },
                ]
            },
            {
                title: '电视剧',
                links: [
                    { name: '尘封十三载', link: 'https://www.hhduc.com/detail/105795' },
                    { name: '狂飙', link: 'https://www.hhduc.com/detail/59618' },
                    { name: '觉醒年代', link: 'https://www.hhduc.com/detail/104926' },
                    { name: '亮剑', link: 'https://www.hhduc.com/detail/129107' },
                    { name: '伪装者', link: 'https://www.hhduc.com/detail/109172' },
                    { name: '三体', link: 'https://www.hhduc.com/detail/84061' },
                ]
            },



        ],  
    }
})