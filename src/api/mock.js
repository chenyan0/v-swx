// 使用 Mock
const Mock = require('mockjs')
const Random = Mock.Random

// 使用mockjs模拟数据

const post = {
  'id|+1': 1,
  'date': () => Random.date('yyyy-mm-dd'),
  'status': 'publish',
  'post_title': () => Random.ctitle(),
  'post_thumbnail_image|1': [
    '@image(100x75, #4C2329, #fff, Mock.js)',
    '@image(100x75, #FAE7D8, #6C6C6C, @Syntax)',
    '@image(100x75, #F2B287, #fff, Pro.web)'
  ],
  'total_comments|1-100': 1,
  'category_name': () => Random.ctitle(),
  'post_date': () => Random.date('yyyy-mm-dd'),
  'like_count|0-200': 1,
  'pageviews|0-10000': 0
}
const categories = {
  'id|+1': 1,
  'count': 150,
  'description': () => Random.ctitle(),
  'link': 'https://www.watch-life.net/category/life-thinking',
  'name': '@cword(5, 7)',
  'slug': 'life-thinking',
  'taxonomy': 'category',
  'parent': 0,
  'meta': [],
  'post_date': () => Random.date('yyyy-mm-dd'),
  'category_thumbnail_image': '@image(100x75)',
  'order_status|1-2': true
}
const articleDetail = {
  'id': () => Random.integer(20, 100),
  'date': () => Random.date('yyyy-mm-dd'),
  'status': () => 'publish',
  'post_title': () => Random.ctitle(),
  'post_thumbnail_image|1': [
    '@image(100x75, #4C2329, #fff, Mock.js)',
    '@image(100x75, #FAE7D8, #6C6C6C, @Syntax)',
    '@image(100x75, #F2B287, #fff, Pro.web)'
  ],
  'post_content': () => `<div id="newsDetailContent" class="detail-content-content"><p class=" first-p"><span class="bjh-p">今天凌晨苹果举办的WWDC19开发者大会上，我们见到了iOS 13、iPadOS、macOS 10.15、watchOS 6等新系统版本，其中iOS 13终于解决了以往了解音量遮挡页面的败笔。</span></p><div class="img-container"><img src="https://t12.baidu.com/it/u=3044151248,3218909247&amp;fm=173&amp;app=49&amp;f=JPEG?w=640&amp;h=320&amp;s=61F2A36715E2BB0102B54D8603007092&amp;access=215967317" data-save="true" class="original" style="max-width:100%;text-align:center"></div><p class=""><span class="bjh-p">在最新的iOS 13中，当我们调节音量的时候，不会再像之前在页面的最中间区域显示，而是该到了屏幕的左上角，这主要是因为音量调节的物理按键也在机身的左侧。此外，之前音量调剂的UI为方块形，而最新的iOS 13改为了圆角矩形。</span></p><p class=""><span class="bjh-p">之前iOS的音量调节区域确实十分影响用户的使用，比如当我们看视频的时候调节音量，就会明显感觉到遮挡画面，而采用全新的设计后，我们的画面再也不会被音量调节遮挡。</span></p><p class=""><span class="bjh-p">此外，iOS 13的音量调节区域也可以通过手指拖动来调节，比如我们可以在唤出音量调节区域后，通过手指的滑动精准的调节自己需要的音量大小。</span></p></div>
`,
  'post_date': () => Random.date('yyyy-mm-dd'),
  'total_comments': () => Random.integer(20, 100),
  'category_name': () => Random.ctitle(),
  'like_count': () => Random.integer(20, 100),
  'pageviews': () => Random.integer(20, 100),
  'prev_page': {
    'id': () => Random.integer(20, 100),
    'title': () => Random.ctitle()
  },
  'next_page': {
    'id': () => Random.integer(20, 100),
    'title': () => Random.ctitle()
  },
  'comments_info|1-2': [{
    'thumb|1': [
      '@image(40x40, #4C2329, #fff, M)',
      '@image(40x40, #FAE7D8, #6C6C6C, Z)',
      '@image(40x40, #F2B287, #fff, A)'
    ],
    'time': () => Random.date('yyyy-mm-dd'),
    'name': () => Random.cname(),
    'content': () => Random.cparagraph(1, 5),
    'reply|0-2': [
      {
        'responder': '傲娇的',
        'reviewers': '有毒的黄同学',
        'time': '2016-09-05',
        'content': '你说得对你说得对你说得对你说得对你说得对'
      }
    ]
  }],
  'praise|1-10': [{
    'praise_user_thumb|1': [
      '@image(40x40, #4C2329, #fff, E)',
      '@image(40x40, #FAE7D8, #6C6C6C, Q)',
      '@image(40x40, #F2B287, #fff, O)'
    ]
  }]

}

export {post, categories, articleDetail}
