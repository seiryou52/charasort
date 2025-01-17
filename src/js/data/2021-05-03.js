dataSetVersion = "2021-05-03";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "禁書 (Index)", key: "禁書" },
      { name: "超電磁砲 (Railgun)", key: "超電磁砲" },
      { name: "アストラル・バディ (Astral Buddy)", key: "アストラル・バディ" },
      { name: "一方通行 (Accelerator)", key: "一方通行" },
      { name: "未元物質 (Dark Matter)", key: "未元物質" }
    ]
  },
  {
    name: "Filter by Affiliation",
    key: "affiliation",
    tooltip: "Check this to restrict to characters with certain affiliations.",
    checked: false,
    sub: [
      { name: "科学サイド (Science)", key: "science" },
      { name: "魔術サイド (Magic)", key: "magic" },
      { name: "一般サイド (Other)", key: "other" }
    ]
  },
  {
    name: "Remove Minor/Supporting Characters (beta)",
    key: "is_supporting_character",
    tooltip: "Check this to remove minor/supporting characters."
  }
];


dataSet[dataSetVersion].characterData = [
  {
    name: '後方のアックア (Acqua of the Back)',
    img: '20181019191849.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'アガター (Agata)',
    img: '20110122092043.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'アニェーゼ＝サンクティス (Agnese Sanctis)',
    img: '20110205035809.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'アルバート＝ダイイング (Albert Dying)',
    img: '20201206132904.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'アンジェレネ (Angelene)',
    img: '20101023022015.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'アンナ＝シュプレンゲル (Anna Sprengel)',
    img: '20201003041022.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '神の力（ガブリエル） (Archangel Gabriel)',
    img: '20190308140902.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '錬金の真似事 (Aureolus Dummy)',
    img: '20160224084310.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'アウレオルス＝イザード (Aureolus Izzard)',
    img: '20120310110256.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'バルビナ (Balbina)',
    img: '20160612023336.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ベイロープ (Bayloupe)',
    img: '20181214211824.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ビアージオ＝ブゾーニ (Biagio Busoni)',
    img: '20110122132857.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ブリュンヒルド＝エイクトベル (Brunhild Eiktobel)',
    img: '20100915024944.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'キャーリサ (Carissa)',
    img: '20181214143151.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'カテリナ (Caterina)',
    img: '20191121115847.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'サンドリヨン (Cendrillon)',
    img: '20131019120956.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'キメラ (Chimera)',
    img: '20160430121856.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'コロンゾン (Coronzon)',
    img: '20170610130341.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'シンシア＝エクスメント (Cynthia Exment)',
    img: '20140406015252.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'エリザード (Elizard)',
    img: '20181214142602.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'エーラソーン (Ellasone)',
    img: '20140617101126.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'エリス＝ウォリアー (Ellis Warrior)',
    img: '20110213094449.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'エステル＝ローゼンタール (Esther Rosenthal)',
    img: '20190719150118.png',
    opts: {
      affiliation: ['magic'],
      series: ['一方通行'],
      is_supporting_character: false
    }
  },
  {
    name: 'エツァリ (Etzali)',
    img: '20190201140032.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '右方のフィアンマ (Fiamma of the Right)',
    img: '20190208135334.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'フラック＝アンカース (Flack Anchors)',
    img: '20140421170908.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'フロリス (Floris)',
    img: '20181226163839.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'フリーディア＝ストライカーズ (Freadia Strikers)',
    img: '20140223120408.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'フレイヤ (Freyja)',
    img: '20131017183809.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '僧正 (High Priest)',
    img: '20150520231531.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '禁書目録（インデックス） (Index Librorum Prohibitorum)',
    img: '20160704014949.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'イサク＝ローゼンタール (Isaac Rosenthal)',
    img: '20190913134748.png',
    opts: {
      affiliation: ['magic'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: 'イザベラ＝テイズム (Isabella Theism)',
    img: '20201010151027.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '諫早 (Isahaya)',
    img: '20190223213450.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '五和 (Itsuwa)',
    img: '20110323092139.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ジェーン＝エルブス (Jane Elves)',
    img: '20130917131106.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ジーンズ店主 (Jeans Shop Owner)',
    img: '20160612054354.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ジーンズ切り裂き魔 (Jeans Slasher)',
    img: '20140520010140.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '神裂 火織 (Kanzaki Kaori)',
    img: '20181124035242.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '木原 加群 (Kihara Kagun)',
    img: '20131019120417.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '騎士団長（ナイトリーダー） (Knight Leader)',
    img: '20181207151313.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '香焼 (Kouyagi)',
    img: '20190223213458.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'クランス＝R＝ツァールスキー (Krans R. Tsarskiy)',
    img: '20190329144448.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'レディリー＝タングルロード (Ladylee Tangleroad)',
    img: '20130912163458.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ランシス (Lancis)',
    img: '20181207150541.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ローラ＝スチュアート (Laura Stuart)',
    img: '20130715074930.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'リープ (Leep)',
    img: '20140912115649.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'レイヴィニア＝バードウェイ (Leivinia Birdway)',
    img: '20190329142638.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'レッサー (Lessar)',
    img: '20190212105959.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'リドヴィア＝ロレンツェッティ (Lidvia Lorenzetti)',
    img: '20181016044019.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ルチア (Lucia)',
    img: '20101023020903.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ヴェルサイユの聖女 (Maiden of Versailles)',
    img: '20190222135253.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'マリーベート＝ブラックボール (Mallybath Blackball)',
    img: '20130917104143.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'マリアン＝スリンゲナイヤー (Marian Slingeneyer)',
    img: '20131019112128.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'メアリエ＝スピアヘッド (Marie Spearhead)',
    img: '20130917071059.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'マーク＝スペース (Mark Space)',
    img: '20190405154253.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'マタイ＝リース (Matthai Reese)',
    img: '20110130154328.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ミナ＝メイザース (Mina Mathers)',
    img: '20170610130629.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '投擲の槌（ミョルニル） (Mjölnir)',
    img: '20131111150139.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ネフティス (Nephthys)',
    img: '20150519212515.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '娘々 (Niang-Niang)',
    img: '20150520231617.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ニコライ＝トルストイ (Nikolai Tolstoy)',
    img: '20190308145616.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '野母崎 (Nomozaki)',
    img: '20190223213506.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'オッレルス (Ollerus)',
    img: '20190405154237.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'オリアナ＝トムソン (Oriana Thomson)',
    img: '20101218153715.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'オルソラ＝アクィナス (Orsola Aquinas)',
    img: '20101014015732.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ペテロ＝ヨグディス (Pietro Yogdis)',
    img: '20190308142411.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'クリファパズル545 (Qliphah Puzzle 545)',
    img: '20180702004157.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'リメエア (Riméa)',
    img: '20181214141233.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'サローニャ＝Ａ＝イリヴィカ (Saronia A. Irivika)',
    img: '20131019121925.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'サーシャ＝クロイツェフ (Sasha Kreutzev)',
    img: '20190309083208.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'シェリー＝クロムウェル (Sherry Cromwell)',
    img: '20120919051157.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'シギュン (Sigyn)',
    img: '20131019115418.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'シルビア (Silvia)',
    img: '20201023105637.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ソーズティ＝エキシカ (Sozty Exica)',
    img: '20160526111540.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'サンジェルマン (St. Germain)',
    img: '20150520231929.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ステイル＝マグヌス (Stiyl Magnus)',
    img: '20101128203607.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '建宮 斎字 (Tatemiya Saiji)',
    img: '20101023073948.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'テクパトル (Tecpatl)',
    img: '20190228032103.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '左方のテッラ (Terra of the Left)',
    img: '20210404014242.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'トール (Thor)',
    img: '20131019112913.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'トチトリ (Tochtli)',
    img: '20190228032258.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'ツアーガイドの少女 (Tour Guide Girl)',
    img: '20190511094056.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '土御門 元春 (Tsuchimikado Motoharu)',
    img: '20120315061015.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '対馬 (Tsushima)',
    img: '20190223213516.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '浦上 (Uragami)',
    img: '20101023023134.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ウレアパディー＝エキシカ (Ureapaddy Exica)',
    img: '20160526104109.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '牛深 (Ushibuka)',
    img: '20190223213524.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ワシリーサ (Vasilisa)',
    img: '20190303130216.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '前方のヴェント (Vento of the Front)',
    img: '20190331230252.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ヴィリアン (Villian)',
    img: '20210502130439.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ショチトル (Xochitl)',
    img: '20181102213323.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '闇咲 逢魔 (Yamisaka Ouma)',
    img: '20101008192216.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ゾーィ＝マクレガー (Zoe McGregor)',
    img: '20160223084844.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ウートガルザ・ロキ (Útgarða-Loki)',
    img: '20131019114411.png',
    opts: {
      affiliation: ['magic'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '一方通行（アクセラレータ） (Accelerator)',
    img: '20190208142344.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '一方通行', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '藍花 悦 (Aihana Etsu)',
    img: '20200719024739.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'エイワス (Aiwass)',
    img: '20190201210140.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '相園 美央 (Aizono Mio)',
    img: '20121019140146.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'アケミ (Akemi)',
    img: '20100530181316.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'アレイスター＝クロウリー (Aleister Crowley)',
    img: '20110220101621.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲', '一方通行'],
      is_supporting_character: false
    }
  },
  {
    name: '天井 亜雄 (Amai Ao)',
    img: '20130622074056.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '網目 (Amime)',
    img: '20200117141227.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '青髪 ピアス (Aogami Pierce)',
    img: '20120309051043.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '青星鈴蘭 (Aohoshi Suzuran)',
    img: '20200319012655.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'あおき (Aoki)',
    img: '20200117153948.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'アツシ (Atsushi)',
    img: '20140412044118.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '泡浮 万彬 (Awatsuki Maaya)',
    img: '20200214152156.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'アズミ (Azumi)',
    img: '20190526163900.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '馬場 芳郎 (Baba Yoshio)',
    img: '20181118052042.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ベニゾメ＝ゼリーフィッシュ (Benizome Jellyfish)',
    img: '20201122031654.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ちさ (Chisa)',
    img: '20200731141016.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'クロウ7 (Crow 7)',
    img: '20130916043053.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '大圄 (Daigo)',
    img: '20141223222653.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '雑貨稼業（デパート） (Depart)',
    img: '20190118150322.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ドリー (Dolly)',
    img: '20200522142032.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ドレンチャー＝木原＝レパトリ (Drencher Kihara Repatri)',
    img: '20201122044904.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '枝先 絆理 (Edasaki Banri)',
    img: '20200919133743.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '姉御 (Elder Sister)',
    img: '20100529125509.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '女性研究員 (Female Researcher)',
    img: '20200912045422.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'フレメア＝セイヴェルン (Fremea Seivelun)',
    img: '20130704100635.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'フレンダ＝セイヴェルン (Frenda Seivelun)',
    img: '20130601112240.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'フリルサンド#G (Frillsand #G)',
    img: '20201122032830.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'フロイライン＝クロイトゥーネ (Fräulein Kreutune)',
    img: '20121027103100.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '吹寄 制理 (Fukiyose Seiri)',
    img: '20200917013318.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '扶桑 彩愛 (Fusou Ayame)',
    img: '20160223101333.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '二石 香車 (Futaishi Kyousha)',
    img: '20181219055656.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '原石の少女 (Gemstone Girl)',
    img: '20130716172227.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '眼鏡少女 (Glasses Girl)',
    img: '20170514095926.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '郷一 (Go Hazime)',
    img: '20190831151209.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '獄彩雨空 (Gokusai Amazora)',
    img: '20200109191800.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '獄彩海美 (Gokusai Kaibi)',
    img: '20200110141743.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '浜面 仕上 (Hamazura Shiage)',
    img: '20190215120557.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '花河雛鳥 (Hanakawa Hinadori)',
    img: '20190609141211.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '花露過愛 (Hanatsuyu Kaai)',
    img: '20201122032107.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '花露妖宴 (Hanatsuyu Youen)',
    img: '20201122032127.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '春上 衿衣 (Haruue Erii)',
    img: '20130414090902.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '服部 半蔵 (Hattori Hanzou)',
    img: '20200228075228.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '硲舎 佳茄 (Hazamaya Kana)',
    img: '20200828134935.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'カチューシャ子 (Headband Girl)',
    img: '20140620151439.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '冥土帰し (Heaven Canceller)',
    img: '20120504171410.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '一方通行', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '蛇谷 次雄 (Hebitani Tsuguo)',
    img: '20100602014915.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'ヒコイチ (Hikoichi)',
    img: '20141106153118.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '姫神 秋沙 (Himegami Aisa)',
    img: '20100326104845.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '姫戲茉離 (Himegi Matsuri)',
    img: '20180401002129.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '菱形 蛭魅 (Hishigata Hirumi)',
    img: '20190809133150.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '菱形幹比古 (Hishigata Mikihiko)',
    img: '20190719135035.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: false
    }
  },
  {
    name: '人皮 挟美 (Hitokawa Hasami)',
    img: '20190802154804.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: false
    }
  },
  {
    name: '帆風潤子 (Hokaze Junko)',
    img: '20200925134356.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '北条彩鈴 (Houjou Arei)',
    img: '20201003042022.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ'],
      is_supporting_character: true
    }
  },
  {
    name: '北条静護 (Houjou Seigo)',
    img: '20191214032919.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ'],
      is_supporting_character: true
    }
  },
  {
    name: '一澤 暁子 (Ichizawa Akiko)',
    img: '20181219060441.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'イーコ (Iiko)',
    img: '20190401062017.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '飯塚 (Iizuka)',
    img: '20201127010532.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '飯棲リタ (Iizumi Rita)',
    img: '20200828160039.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲', '一方通行'],
      is_supporting_character: false
    }
  },
  {
    name: '居村 (Imura)',
    img: '20190610082847.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '伊東 (Itou)',
    img: '20190712175259.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '城南 朝来 (Jounan Asako)',
    img: '20101113105635.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'ジュンタ (Junta (Railgun anime))',
    img: '20110628105548.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'ジュンタ (Junta (Railgun manga))',
    img: '20110628110319.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '重福省帆 (Juufuku Miho)',
    img: '20100511130109.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '鏑木 由美 (Kaburagi Yumi)',
    img: '20181219061214.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '介旅 初矢 (Kaitabi Hatsuya)',
    img: '20100521220419.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '垣根 帝督 (Kakine Teitoku)',
    img: '20181103092657.png',
    opts: {
      affiliation: ['science'],
      series: ['未元物質', '禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '垣根 帝督 (Kakine Teitoku (Beetle 05))',
    img: '20140515104838.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '加納 神華 (Kanou Shinka)',
    img: '20150328101027.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '風斬 氷華 (Kazakiri Hyouka)',
    img: '20150103173458.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'カイツ＝ノックレーベン (Keitz Nokleben)',
    img: '20200131143511.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '潔斎 雪紫 (Kessai Kiyoshi)',
    img: '20210327024600.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '木寺実莉 (Kidera Minori)',
    img: '20190712175312.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '木原数多 (Kihara Amata)',
    img: '20110218165440.png',
    opts: {
      affiliation: ['science'],
      series: ['未元物質', '禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '木原 病理 (Kihara Byouri)',
    img: '20130619212522.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '木原 円周 (Kihara Enshuu)',
    img: '20130619212439.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '木原 幻生 (Kihara Gensei)',
    img: '20200321034219.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '木原端数 (Kihara Hasuu)',
    img: '20201201150641.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '木原那由他 (Kihara Nayuta)',
    img: '20110614165242.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '木原 脳幹 (Kihara Noukan)',
    img: '20160223102828.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '木原 乱数 (Kihara Ransuu)',
    img: '20130619212624.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '木原 唯一 (Kihara Yuiitsu)',
    img: '20160223122704.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '絹旗 最愛 (Kinuhata Saiai)',
    img: '20190715101744.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '切斑 芽美 (Kirifu Megumi)',
    img: '20200124054513.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '口囃子早鳥 (Kobayashi Satori)',
    img: '20200730131239.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '駒場 利徳 (Komaba Ritoku)',
    img: '20110326024712.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '婚后 光子 (Kongou Mitsuko)',
    img: '20200925141300.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '固法 美偉 (Konori Mii)',
    img: '20200731150018.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '鋼盾 掬彦 (Koujun Kikuhiko)',
    img: '20100524143055.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '鴻野江 遥希 (Kounoe Haruki)',
    img: '20100609022631.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '警策 看取 (Kouzaku Mitori)',
    img: '20201001065113.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '雲川 鞠亜 (Kumokawa Maria)',
    img: '20120415012004.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '雲川 芹亜 (Kumokawa Seria)',
    img: '20170514131633.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '黒夜 海鳥 (Kuroyoru Umidori)',
    img: '20130706134153.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '黒妻 綿流 (Kurozuma Wataru)',
    img: '20100601190157.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '郭 (Kuruwa)',
    img: '20160225081644.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '釧路帷子 (Kushiro Katabira)',
    img: '20140731174743.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '橋国 亮太 (Kyougoku Ryouta)',
    img: '20180811005248.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'レディバード (Ladybird)',
    img: '20201122034641.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '打ち止め (Last Order)',
    img: '20110321095954.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '一方通行', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '舞殿星見（まいどのほしみ） (Maidono Hoshimi)',
    img: '20200215101326.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'マキ (Maki)',
    img: '20200731140318.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '牧上 小牧 (Makigami Komaki)',
    img: '20170512130630.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ'],
      is_supporting_character: true
    }
  },
  {
    name: 'マコ (Mako)',
    img: '20100530194007.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'マナベ リツキ (Manabe Ritsuki)',
    img: '20190803144208.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '鳴護 アリサ (Meigo Arisa)',
    img: '20130921135213.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '美濃部 (Minobe)',
    img: '20190129030656.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'みのり (Minori)',
    img: '20130526140537.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'ミサカ一号 (Misaka 1)',
    img: '20130710175144.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ミサカ一〇〇三一号 (Misaka 10031)',
    img: '20130623103107.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ミサカ一〇〇三二号 (Misaka 10032)',
    img: '20200926035942.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ミサカ一〇〇三九号 (Misaka 10039)',
    img: '20130712083459.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ミサカ一〇〇四六号 (Misaka 10046)',
    img: '20190802135736.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: 'ミサカ一〇七七七号 (Misaka 10777)',
    img: '20190301125222.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ミサカ一三五七七号 (Misaka 13577)',
    img: '20130712083500.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ミサカ一九〇九〇号 (Misaka 19090)',
    img: '20131101092152.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ミサカ八九一二号 (Misaka 8912)',
    img: '20130524121847.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ミサカ九九八二号 (Misaka 9982)',
    img: '20130504185340.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '御坂 美琴 (Misaka Mikoto)',
    img: '20120511115657.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '番外個体（ミサカワースト） (Misaka Worst)',
    img: '20190215134933.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '蜜蟻 愛愉 (Mitsuari Ayu)',
    img: '20190826140440.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '美山 写影 (Miyama Shaei)',
    img: '20200724161835.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '実生 好子 (Miyoshi Yoshiko)',
    img: '20111224133022.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'モガリ タクミ (Mogari Takumi)',
    img: '20190803144152.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '麦野 沈利 (Mugino Shizuri)',
    img: '20130531214206.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '結標 淡希 (Musujime Awaki)',
    img: '20101112155812.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'むーちゃん (Muu)',
    img: '20120507081042.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '名荷原弘見 (Nakahara Hiromi)',
    img: '20190712175331.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '中邑 (Nakamura (manager))',
    img: '20210228150512.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '亡本 裏蔵 (Nakimoto Rizou)',
    img: '20190810135753.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: "亡本裏蔵の祕書 (Nakimoto Rizou's Secretary)",
    img: '20191027002736.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: 'ナオ (Nao)',
    img: '20130504184950.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'ナオヤ (Naoya)',
    img: '20140412044727.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '西雄 (Nishio)',
    img: '20190719134711.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: false
    }
  },
  {
    name: 'ノリコ (Noriko)',
    img: '20191108232942.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '布束 砥信 (Nunotaba Shinobu)',
    img: '20130420062620.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '丘原 燎多 (Okahara Ryouta)',
    img: '20100526144939.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '重石 (Omoshi)',
    img: '20200124143422.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '大河内 巡観 (Ookawachi Megumi)',
    img: '20200731141325.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '親船 最中 (Oyafune Monaka)',
    img: '20181012183026.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: "親船最中の祕書 (Oyafune Monaka's Secretary)",
    img: '20191028222301.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '親船 素甘 (Oyafune Suama)',
    img: '20181012183031.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '紙袋をかぶったバニーガール (Paper Bag Bunny Girl)',
    img: '20160223100637.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '海賊ラジオDJ (Pirate Radio DJ)',
    img: '20200117142302.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '博士 (Professor)',
    img: '20181103090213.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'わんこ検察官 (Puppy Prosecutor)',
    img: '20180307221837.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '楽丘豊富 (Rakuoka Houfu)',
    img: '20201122033959.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '恋査 #028 (Rensa #28)',
    img: '20130706135928.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '恋査 #029 (Rensa #29)',
    img: '20130709180703.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'リエ (Rie)',
    img: '20140412044816.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '災誤 (Saigo)',
    img: '20181209232457.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '才郷 良太 (Saigou Ryouta)',
    img: '20110307162517.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '西東颯太 (Saitou Souta)',
    img: '20191109061036.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '坂島 道端 (Sakashima Michibata)',
    img: '20160612061038.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '咲蓮誘璃 (Sakibasu Yuri)',
    img: '20181116195402.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '作楽木ナルハ (Sakuragi Naruha)',
    img: '20200828160818.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲', '一方通行'],
      is_supporting_character: false
    }
  },
  {
    name: '査楽 (Saraku)',
    img: '20181118053425.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '佐天 涙子 (Saten Ruiko)',
    img: '20200814135039.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'サトシ (Satoshi)',
    img: '20141106150459.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '清ヶ太郞丸 (Seike Taroumaru)',
    img: '20200905110710.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲', '一方通行'],
      is_supporting_character: false
    }
  },
  {
    name: "神苑小路 瑠璃懸巣 (Shin'enkouji Rurikakesu)",
    img: '20210226013124.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '潮岸 (Shiokishi)',
    img: '20190125144011.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '白井 黒子 (Shirai Kuroko)',
    img: '20200731141815.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '白絹仄火 (Shirakinu Honoka)',
    img: '20190929070804.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '食蜂 操祈 (Shokuhou Misaki)',
    img: '20201005134844.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '春暖嬉美 (Shundan Kimi)',
    img: '20200307194259.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '蠢動 俊三 (Shundou Toshizou)',
    img: '20181228123946.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'シャットアウラ＝セクウェンツィア (Shutaura Sequenzia)',
    img: '20130915154929.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '削板 軍覇 (Sogiita Gunha)',
    img: '20191215052228.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'ステファニー＝ゴージャスパレス (Stephanie Gorgeouspalace)',
    img: '20190722201514.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '杉谷 (Sugitani)',
    img: '20190205035435.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '杉山 枝雄 (Sugiyama Edao)',
    img: '20140508222932.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '砂皿 緻密 (Sunazara Chimitsu)',
    img: '20181104082219.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'たっ (Ta)',
    img: '20200731140720.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '鷹田杳子 (Takada Youko)',
    img: '20190712175322.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '高梁 (Takahashi)',
    img: '20190712175348.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '滝壺 理后 (Takitsubo Rikou)',
    img: '20210220145832.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'タメゾウ (Tamezou)',
    img: '20100602123554.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '道（タオ） (Tao)',
    img: '20190128023002.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '鉄装 綴里 (Tessou Tsuzuri)',
    img: '20100625124939.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'テツ (Tetsu)',
    img: '20141106150555.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '鉄網 (Tetsumou)',
    img: '20190206193756.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'テレスティーナ＝木原＝ライフライン (Therestina Kihara Lifeline)',
    img: '20130908110054.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'トマス＝プラチナバーグ (Thomas Platinaburg)',
    img: '20190118145818.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '飛緒 まみ (Tobio Mami)',
    img: '20190706192006.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '飛緒 ゆみ (Tobio Yumi)',
    img: '20180506105201.png',
    opts: {
      affiliation: ['science'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '等々力 (Todoroki)',
    img: '20201019082856.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '十河 麻実 (Togawa Asami)',
    img: '20190224230753.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '寮監 (Tokiwadai Dorm Supervisor)',
    img: '20200726094554.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '遠峰叶理 (Toomine Kanari)',
    img: '20181001014515.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ'],
      is_supporting_character: true
    }
  },
  {
    name: 'トリック (Trick)',
    img: '20100529193453.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '土御門 舞夏 (Tsuchimikado Maika)',
    img: '20111118134850.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '月詠 小萌 (Tsukuyomi Komoe)',
    img: '20120310184253.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '釣鐘茶寮 (Tsurigane Saryou)',
    img: '20201202084431.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '初春 飾利 (Uiharu Kazari)',
    img: '20200731150526.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ', '禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '海原 光貴 (Unabara Mitsuki)',
    img: '20100617202439.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ウサミミ (Usamimi)',
    img: '20160223122155.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '観光喰い（バキュームピース） (Vacuum Piece)',
    img: '20201124153033.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ヴィヴァーナ＝オニグマ (Vivana Oniguma)',
    img: '20201122033518.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '鰐河雷斧 (Wanigawa Raifu)',
    img: '20191008040112.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '湾内 絹保 (Wannai Kinuho)',
    img: '20200215023023.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '綿辺 (Watanabe)',
    img: '20200117142535.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'ミサカネットワーク総体 (Will of the Whole Misaka Network)',
    img: '20170514082113.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '薬丸医月 (Yakumaru Itsuki)',
    img: '20200907144458.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲', '一方通行'],
      is_supporting_character: false
    }
  },
  {
    name: '薬味 久子 (Yakumi Hisako)',
    img: '20130525182830.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '山根 (Yamane)',
    img: '20111210021123.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '山城 府昭 (Yamashiro Shoubu)',
    img: '20201027033844.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '山手 (Yamate)',
    img: '20181027212317.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '柳迫 碧美 (Yanagisako Aomi)',
    img: '20200731144609.png',
    opts: {
      affiliation: ['science'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '誉望 万化 (Yobou Banka)',
    img: '20181027211938.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '黄泉川 愛穂 (Yomikawa Aiho)',
    img: '20120308130041.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '一方通行', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '芳川 桔梗 (Yoshikawa Kikyou)',
    img: '20100620232632.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '一方通行', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '弓箭入鹿 (Yumiya Iruka)',
    img: '20201101055215.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ'],
      is_supporting_character: true
    }
  },
  {
    name: '弓箭 猟虎 (Yumiya Rakko)',
    img: '20200814134550.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '悠里千夜 (Yuuri Senya)',
    img: '20201002132306.png',
    opts: {
      affiliation: ['science'],
      series: ['アストラル・バディ'],
      is_supporting_character: false
    }
  },
  {
    name: '杠林檎 (Yuzuriha Ringo)',
    img: '20201202084836.png',
    opts: {
      affiliation: ['science'],
      series: ['未元物質'],
      is_supporting_character: true
    }
  },
  {
    name: 'ビバリー＝シースルー (Beverly Seethrough)',
    img: '20140615112329.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: 'チャールズ＝コンダー (Charles Conder)',
    img: '20101212032417.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ディダロス＝セクウェンツィア (Daedalus Sequenzia)',
    img: '20130908152941.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ディグルヴ (Digurv)',
    img: '20190215135537.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'エーカー＝ルゴーニ (Eiker Lugoni)',
    img: '20181207144747.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'エカリエーリャ＝A＝プロンスカヤ (Ekalielya A. Pronskaya)',
    img: '20190301170932.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '平山ラミ (Hirayama Rami)',
    img: '20180529045033.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: "人皮扶美の母 (Hitokawa Hasami's Mother)",
    img: '20190728025007.png',
    opts: {
      affiliation: ['other'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '一一一 (ひとついはじめ)  (Hitotsui Hajime)',
    img: '20110807031056.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '上条 詩菜 (Kamijou Shiina)',
    img: '20110412014149.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: '上条 刀夜 (Kamijou Touya)',
    img: '20101104040204.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: "婚后光子の父親 (Kongou Mitsuko's Father)",
    img: '20160523123950.png',
    opts: {
      affiliation: ['other'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '李 (Li)',
    img: '20190612060200.png',
    opts: {
      affiliation: ['other'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '李芳蘭 (Li Fanglan)',
    img: '20190612060149.png',
    opts: {
      affiliation: ['other'],
      series: ['一方通行'],
      is_supporting_character: true
    }
  },
  {
    name: '松乃山繁美 (Matsunoyama Shigemi)',
    img: '20200807160643.png',
    opts: {
      affiliation: ['other'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '御坂 美鈴 (Misaka Misuzu)',
    img: '20140816183928.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: '御坂 旅掛 (Misaka Tabigake)',
    img: '20140520005308.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ミュッセ (Musset)',
    img: '20181207150019.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'オリーブ＝ホリデイ (Olive Holiday)',
    img: '20140615112424.png',
    opts: {
      affiliation: ['other'],
      series: ['超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '近江 手裏 (Oumi Shuri)',
    img: '20191219040640.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  },
  {
    name: 'パトリシア＝バードウェイ (Patricia Birdway)',
    img: '20110815204504.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'リッチモンド (Richmond)',
    img: '20181209173800.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ロベルト＝カッツェ (Roberto Katze)',
    img: '20111212023213.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'ローズライン＝クラックハルト (Roseline Krackhart)',
    img: '20200527115420.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: 'サフリー＝オープンディズ (Saflee Opendays)',
    img: '20190427020706.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: false
    }
  },
  {
    name: 'ソールジエ＝Ｉ＝クライニコフ (Soldier I. Krainikov)',
    img: '20190208135351.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '田中 (Tanaka)',
    img: '20181230153442.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書'],
      is_supporting_character: true
    }
  },
  {
    name: '野洲 (Yasu)',
    img: '20180401034207.png',
    opts: {
      affiliation: ['other'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: true
    }
  },
  {
    name: '上条 当麻 (Kamijou Touma)',
    img: 'kamijou.png',
    opts: {
      affiliation: ['science'],
      series: ['禁書', '超電磁砲'],
      is_supporting_character: false
    }
  }
];