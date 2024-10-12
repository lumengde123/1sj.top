

/* 主页搜索框的功能实现
    1.可以选择搜索引擎
    2.点击搜索根据搜索引擎在新页面打开，输入框清空
    3.按Enter也可以搜
*/
const SearchComponent = {
    template: `
        <div class="home-search col-sm-12 col-md-8 offset-md-2 col-lg-8 offset-lg-2">
            <div class="home-search-container">
                <h1><img src="" alt="">壹世界 1sj.top</h1>
                <div class="search-box-wrap">
                    <div class="search-box">
                        <i class="icon-search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </i>
                        <select v-model="selectedEngine" class="search-engine-select">
                            <option value="baidu">百度</option>
                            <option value="google">谷歌</option>
                            <option value="zhihu">知乎</option>
                            <option value="bilibili">Bili</option>
                            <option value="tieba">贴吧</option>
                            <option value="douyin">抖音</option>
                            <option value="redbook">小红书</option>
                        </select>
                        <input class="search-input" type="text" v-model="query" placeholder="输入搜索内容" @focus="placeholder=''" @blur="placeholder='输入搜索内容'" @keyup.enter="performSearch">
                        <i class="icon-close-o" v-if="query" @click="clearInput"></i>
                        <button class="search-btn" @click="performSearch">搜索</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            query: '',
            selectedEngine: 'baidu',
            placeholder: '输入搜索内容', // 初始化 placeholder
        };
    },
    methods: {
        performSearch() {
            const query = this.query;
            let url = '';

            if (query) {
                switch (this.selectedEngine) {
                    case 'baidu':
                        url = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
                        break;
                    case 'google':
                        url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
                        break;
                    case 'zhihu':
                        url = `https://www.zhihu.com/search?type=content&q=${encodeURIComponent(query)}`;
                        break;
                    case 'bilibili':
                        url = `https://search.bilibili.com/all?keyword=${encodeURIComponent(query)}`;
                        break;
                    case 'tieba':
                        url = `https://tieba.baidu.com/f/search/res?ie=utf-8&qw=${encodeURIComponent(query)}`;
                        break;
                    case 'douyin':
                        url = `https://www.douyin.com/search/${encodeURIComponent(query)}`;
                        break;
                    case 'redbook':
                        url = `https://www.xiaohongshu.com/search_result?keyword=${query}&source=web_explore_feed`;
                        break;
                }
                window.open(url, '_blank');
                this.clearInput();
            }
        },
        clearInput() {
            this.query = '';
        }
    }
};

// 创建 主页搜索框的 Vue 实例
const homeSearch = new Vue({
    el: '#home-search',
    components: {
        'search-component': SearchComponent
    }
});


// Vue实例，自动填充链接组的按钮
const links = new Vue({
    el: '#links',
    data: {
        linkGroups: [
            {
                title: '我的网站',
                links: [
                    {link: 'https://fun.1sj.top', name: '异世界之旅'},
                    {link: 'https://hope.1sj.top', name: 'Hope博客(主)'},
                    {link: 'https://blog.1sj.top', name: 'Hexo博客(废)'},
                    {link: 'https://astroyi.1sj.top', name: 'Astro博客(备)'},
                    {link: 'https://lsky.1sj.top/dashboard', name: '兰空图床'},     // http://142.171.245.130:7791/dashboard
                    {link: 'https://teedoc-coding.1sj.top', name: '编程笔记'},
                    {link: 'https://webstack.1sj.top', name: '网址导航'},
                    {link: 'https://github.com/lumengde123?tab=repositories', name: 'Github'},
                    {link: './memo.html', name: '静态备忘录'},
                ]
            },
            {
                title: '工具网站',
                links: [
                    {link: 'https://dns.console.aliyun.com/#/dns/setting/lumengde.com', name: '阿里域名控制台'},
                    {link: 'https://vercel.com/lumengde123s-projects', name: 'Vercel'},
                    {link: 'https://dash.cloudflare.com/', name: 'Cloudflare'},
                    {link: 'https://mail.google.com/mail/u/0/#inbox', name: 'Gmail'},
                    {link: 'https://www.aliyundrive.com/drive/file/all', name: '阿里云盘'},
                    {link: 'https://cloud.189.cn/web/main/file/folder/-11', name: '天翼云盘'},
                    {link: 'https://neodb.social/users/lumengde/', name: 'NeoDB'},
                    {link: 'https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=755949636', name: '微信公众号'},
                    {link: 'https://两元店.com/#/login', name: '两元店'},
                    {link: 'https://m2.meimeifans123.cyou', name: 'mmyun'},
                    {link: 'https://www.jb51.net/', name: '脚本之家'},
                    {link: 'https://www.cnodejs.org/', name: 'Node.js中文社区'},
                    {link: 'https://www.academia.edu/', name: 'Academia-freePDF'}
                ]
            },
            {
                title: 'AI网站',
                links: [
                    {link: 'https://chat.openai.com', name: 'ChatGPT'},
                    {link: 'https://kimi.moonshot.cn/', name: 'Kimi'},
                    {link: 'https://www.qiyuai.net/', name: '奇域AI'},
                    {link: 'https://jimeng.jianying.com/ai-tool/home/', name: '即梦AI'},
                    {link: 'https://klingai.kuaishou.com/', name: '可灵AI'},
                    {link: 'https://miaohua.sensetime.com/', name: '秒画'},
                ]
            },
            {
                title: '前端网站',
                links: [
                    { link: 'https://www.bootstrap.cn/doc/book/2.html', name: 'Bootstrap5中文手册' },
                    { link: 'https://www.stackoverflow.com', name: 'Stack Overflow' },
                    { link: 'https://juejin.cn', name: '掘金' },
                    { link: 'https://codepen.io', name: 'Code-Pen' },
                    { link: 'https://jsbin.com', name: 'JS Bin' },
                    { link: 'https://developer.mozilla.org/zh-CN/', name: 'MDN' },
                    { link: 'https://fontawesome.com.cn/v5', name: 'Fontawesome v5-cn' },
                ]
            },
            {
                title: '影视天地',
                links: [
                    { link: 'https://www.yfsp.tv/', name: '爱壹帆[要VPN]' },
                    { link: 'https://www.hhduc.com/', name: '金牌影院[别VPN]' },
                    { link: 'https://yingshi.tv/', name: '影视TV[VPN更快]' },
                    { link: 'https://soupian.pro/', name: '搜片.com' },
                    
                    
                ]
            },
            {
                title: '视频阅读社区论坛',
                links: [
                    {link: 'https://www.youtube.com/', name: 'Youtube'},
                    {link: 'https://www.ixigua.com/?wid_try=1', name: '西瓜视频'},
                    {link: 'https://www.douyin.com/', name: '抖音'},
                    {link: 'https://weread.qq.com/', name: '微信读书'},
                    {link: 'https://www.zhihu.com/', name: '知乎'},
                    {link: 'https://www.xiaohongshu.com/explore', name: '小红书'},
                    {link: 'https://nga.cn/', name: 'NGA.CN-游戏社区'},
                    
                ]
            },
            {
                title: '暂未归类',
                links: [
                    { link: 'https://nav.guidebook.top/', name: '数字生活-超全导航站' },
                    { link: 'https://www.kbzhan.com/index.html', name: '影视小说网' },
                    { link: 'https://www.wuxiaworld.com/', name: '武侠世界(英文小说)' },
                    { link: 'http://www.9663.com/k/steamyizhiyouxi/', name: '9663安卓网' },
                    { link: 'https://www.67tool.com/', name: '即时工具-工具箱' },
                    
                    
                ]
            },
            {
                title: '网页链接暂存',
                links: [
                    { link: 'https://uiverse.io/mrhyddenn/warm-wasp-21', name: '骨架屏代码-uiverse.io' },
                    
                    
                ]
            },

        ],  
    }
})
