# Twisted Tower 网站页面规划

根据 `keywords.json`，建议不要按 18 个关键词机械地建 18 个页面，而是合并相近搜索意图，先做 **10 个核心内容页 + 2 个站点结构页**。这样能覆盖全部关键词，同时避免薄内容和关键词内耗。

## 一、推荐站点结构

### 1. 首页

- **页面类型：** 首页
- **建议路径：** `/`
- **对应关键词：** 不强行承接单一长尾词
- **用户问题：**
  - What is Twisted Tower?
  - Where can I buy Twisted Tower?
  - Is there a demo?
  - How do I find guides and walkthroughs?
- **页面内容：**
  - 游戏简介
  - Steam 购买入口
  - Demo 入口
  - 核心攻略入口
  - 故事、武器、Boss、成就等导航
  - Launch Trailer 视频
- **作用：** 品牌承接页和全站流量分发页，不与具体攻略页竞争。

### 2. 攻略导航页

- **页面类型：** 导航页 / 攻略分类页
- **建议路径：** `/guides/`
- **对应关键词：** Guide 分类
- **用户问题：**
  - Where can I find all Twisted Tower guides?
  - How do I solve puzzles?
  - Where can I find boss and collectible guides?
- **页面内容：**
  - Walkthrough
  - Puzzle Solutions
  - Boss Guide
  - Collectibles and Secrets
  - Weapons
  - Achievements
- **作用：** 作为攻略内容的目录页，不单独堆砌长尾词。

## 二、优先制作的核心页面

| 优先级 | 页面 | 类型 | 对应关键词 | 主要用户问题 |
|---|---|---|---|---|
| P0 | `/guides/walkthrough/` | 攻略总流程页 | `twisted tower walkthrough` | How do I complete Twisted Tower? What is the correct route through every area? |
| P0 | `/guides/puzzle-solutions/` | 谜题攻略页 | `twisted tower puzzle solutions` | How do I solve every puzzle? Where are the required switches, keys and clues? |
| P0 | `/guides/bosses/` | Boss 攻略页 | `twisted tower boss guide` | How do I defeat each boss? What are the boss weaknesses and attack patterns? |
| P0 | `/guides/collectibles/` | 收集品与秘密页 | `twisted tower collectibles`、`twisted tower secrets` | Where are all collectibles, hidden areas and secret locations? |
| P0 | `/guides/weapons/` | 武器 / 物品页 | `twisted tower weapons` | What weapons are available? Which weapon is best for each enemy or situation? |
| P0 | `/guides/achievements/` | 成就攻略页 | `twisted tower achievements` | How do I unlock every achievement? Which achievements are missable? |
| P0 | `/story/` | 剧情解析页 | `twisted tower story`、`twisted tower ending` | What is the story about? What does the ending mean? Are there spoilers or multiple endings? |
| P0 | `/steam/` | 游戏资料 / 商店页 | `twisted tower steam`、`twisted tower steamdb`、`twisted tower price`、`twisted tower release date` | Where can I buy it? How much does it cost? When was it released? What is the Steam App information? |
| P1 | `/demo/` | Demo 下载 / 试玩页 | `twisted tower demo` | Is there a free demo? Where can I download and play it? What content does the demo include? |
| P1 | `/review/` | 游戏评测页 | `twisted tower review`、`twisted tower game length`、`twisted tower thomas brush` | Is Twisted Tower worth buying? How long is the game? Who developed it? What are its strengths and weaknesses? |

## 三、各页面应重点覆盖的内容

### 1. Walkthrough 总流程页

这是全站最重要的攻略页。

建议包含：

- 完整流程顺序
- 每个区域的进入条件
- 关键道具和钥匙位置
- 必经战斗
- 容易卡住的机关
- 分支路线说明
- 通往最终区域的路线
- 与谜题、Boss、收集品页面的内部链接

**页面目标：** 承接最高价值的通关搜索，并作为其他攻略页的总入口。

### 2. Puzzle Solutions 谜题页

不要只写简单谜题答案，建议按区域拆分：

- Puzzle 1
- Puzzle 2
- Puzzle 3
- 机关触发顺序
- 密码、开关和钥匙位置
- 卡关原因
- 图文或视频解决步骤

**页面目标：** 解决用户“卡在哪里、下一步怎么做”的即时需求。

### 3. Boss Guide Boss 页

建议每个 Boss 使用统一结构：

- Boss 名称
- 出现位置
- Boss 攻击方式
- 弱点
- 推荐武器
- 战斗阶段
- 躲避方法
- 奖励和后续路线

**页面目标：** 承接高转化的战斗问题，适合从 Walkthrough 和 Weapons 页面互相导流。

### 4. Collectibles and Secrets 收集品与秘密页

将两个关键词合并到一个页面，但内容分成两个独立区块：

- All Collectibles
- Secret Areas
- Hidden Items
- Missable Secrets
- 区域清单
- 是否需要在特定章节获取

这样可以避免单独创建一个内容很薄的 Secrets 页面，同时覆盖：

- `twisted tower collectibles`
- `twisted tower secrets`

### 5. Weapons 武器页

这是典型的物品页，建议包含：

- 全部武器列表
- 武器解锁方式
- 武器升级方式
- 武器伤害和适用场景
- 推荐武器组合
- 对不同敌人的使用建议

**页面目标：** 承接“有什么武器、哪把武器最好、怎么升级”等搜索。

### 6. Achievements 成就页

建议做成可检查的清单：

- Achievement 名称
- 解锁条件
- 是否容易错过
- 解锁章节
- 最快完成方法
- 全成就完成路线

**页面目标：** 适合长期获取搜索流量，也能承接通关后的二次需求。

### 7. Story and Ending 剧情页

`story` 和 `ending` 不建议分成两个页面，因为用户搜索意图高度重叠。

建议页面结构：

- 无剧透剧情简介
- 主要角色
- 故事背景
- 关键剧情节点
- Ending Explained
- 结局细节
- 结局后的含义
- Spoiler 警告

**主要关键词：**

- `twisted tower story`
- `twisted tower ending`

### 8. Steam / Price / Release Date 游戏资料页

这几个词都属于购买和游戏资料意图，适合合并到一个持续更新的页面。

建议页面结构：

- Steam 商店入口
- Steam App ID
- SteamDB 信息
- 当前价格
- 发售价格和折扣
- Release Date
- 支持平台
- 系统要求
- 是否有中文
- Launch Trailer

**主要关键词：**

- `twisted tower steam`
- `twisted tower steamdb`
- `twisted tower price`
- `twisted tower release date`
- `twisted tower launch trailer`

其中 `launch trailer` 不建议单独建页面，只需要作为本页的视频模块或首页模块。

### 9. Demo 页面

建议页面结构：

- Demo 是否免费
- Demo 下载入口
- Steam Demo 页面
- Demo 包含哪些区域
- Demo 与正式版区别
- Demo 存档是否继承
- Demo 常见问题

**页面目标：** 承接用户试玩和下载需求，属于较强的转化页面。

### 10. Review / Game Length / Developer 评测页

这三个关键词可以合并，但需要设置清晰的小节，避免页面主题过散。

建议页面结构：

- Twisted Tower Review
- 游戏玩法评价
- 恐怖氛围和画面
- 武器与战斗体验
- 谜题难度
- 游戏优缺点
- 游戏时长
- 主线通关时间
- 全收集时间
- Thomas Brush 和 Atmos Games 简介
- 是否值得购买

**主要关键词：**

- `twisted tower review`
- `twisted tower game length`
- `twisted tower thomas brush`

## 四、关键词合并关系

| 原关键词 | 最终承接页面 |
|---|---|
| `twisted tower walkthrough` | Walkthrough 总流程页 |
| `twisted tower puzzle solutions` | 谜题解决页 |
| `twisted tower boss guide` | Boss 攻略页 |
| `twisted tower collectibles` | 收集品与秘密页 |
| `twisted tower secrets` | 收集品与秘密页 |
| `twisted tower weapons` | 武器页 |
| `twisted tower achievements` | 成就页 |
| `twisted tower story` | 剧情与结局页 |
| `twisted tower ending` | 剧情与结局页 |
| `twisted tower steam` | Steam 游戏资料页 |
| `twisted tower steamdb` | Steam 游戏资料页 |
| `twisted tower price` | Steam 游戏资料页 |
| `twisted tower release date` | Steam 游戏资料页 |
| `twisted tower launch trailer` | Steam 游戏资料页 / 首页视频模块 |
| `twisted tower demo` | Demo 页面 |
| `twisted tower review` | 评测页 |
| `twisted tower game length` | 评测页中的游戏时长模块 |
| `twisted tower thomas brush` | 评测页中的开发者介绍模块 |

## 五、最终建议

第一阶段优先上线：

1. Walkthrough 总流程页  
2. Puzzle Solutions 谜题页  
3. Boss Guide 页  
4. Collectibles and Secrets 页  
5. Weapons 武器页  
6. Achievements 成就页  
7. Story and Ending 剧情页  
8. Steam / Price / Release Date 资料页  
9. Demo 页面  
10. Review / Game Length 评测页  

首页和攻略导航页作为站点结构页同步建立。

**不建议单独创建的页面：**

- Launch Trailer 页面
- Thomas Brush 开发者页面
- Game Length 单独页面
- Secrets 单独页面
- SteamDB 单独页面
- Release Date 单独页面

这些内容放在相关主页面中更容易形成完整内容，也能避免页面过薄和关键词互相竞争。