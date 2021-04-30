dataSetVersion = "2021-04-30"; 
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Index", tooltip: "禁書", key: "禁書" },
      { name: "Railgun", tooltip: "超電磁砲", key: "超電磁砲" },
      { name: "Astral Buddy", tooltip: "アストラル・バディ", key: "アストラル・バディ" },
      { name: "Accelerator", tooltip: "一方通行", key: "一方通行" },
      { name: "Dark Matter", tooltip: "未元物質", key: "未元物質" }
    ]
  },
  {
    name: "Filter by Affiliation",
    key: "affiliation",
    tooltip: "Check this to restrict to characters with certain affiliations.",
    checked: false,
    sub: [
      { name: "Science", tooltip: "科学サイド", key: "science" },
      { name: "Magic", tooltip: "魔術サイド", key: "magic" },
      { name: "Other", tooltip: "一般サイド", key: "other" }
    ]
  },
  {
    name: "Remove Minor/Supporting Characters",
    key: "is_supporting_character",
    tooltip: "Check this to remove minor/supporting characters."
  }
];

dataSet[dataSetVersion].characterData = [{
  name: "後方のアックア (Acqua of the Back)",
  img: "20181019191849",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "アガター (Agata)",
  img: "20110122092043",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "アニェーゼ＝サンクティス (Agnese Sanctis)",
  img: "20110205035809",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "アルバート＝ダイイング (Albert Dying)",
  img: "20201206132904",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "アンジェレネ (Angelene)",
  img: "20101023022015",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "アンナ＝シュプレンゲル (Anna Sprengel)",
  img: "20201003041022",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "神の力（ガブリエル） (Archangel Gabriel)",
  img: "20190308140902",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "錬金の真似事 (Aureolus Dummy)",
  img: "20160224084310",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "アウレオルス＝イザード (Aureolus Izzard)",
  img: "20120310110256",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "バルビナ (Balbina)",
  img: "20160612023336",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ベイロープ (Bayloupe)",
  img: "20181214211824",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ビアージオ＝ブゾーニ (Biagio Busoni)",
  img: "20110122132857",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ブリュンヒルド＝エイクトベル (Brunhild Eiktobel)",
  img: "20100915024944",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "キャーリサ (Carissa)",
  img: "20181214143151",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "カテリナ (Caterina)",
  img: "20191121115847",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "サンドリヨン (Cendrillon)",
  img: "20131019120956",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "キメラ (Chimera)",
  img: "20160430121856",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "コロンゾン (Coronzon)",
  img: "20170610130341",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "シンシア＝エクスメント (Cynthia Exment)",
  img: "20140406015252",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "エリザード (Elizard)",
  img: "20181214142602",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "エーラソーン (Ellasone)",
  img: "20140617101126",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "エリス＝ウォリアー (Ellis Warrior)",
  img: "20110213094449",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "エステル＝ローゼンタール (Esther Rosenthal)",
  img: "20190719150118",
  opts: {
    series: ["一方通行"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "エツァリ (Etzali)",
  img: "20190201140032",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "右方のフィアンマ (Fiamma of the Right)",
  img: "20190208135334",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "フラック＝アンカース (Flack Anchors)",
  img: "20140421170908",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: True
  }
},
{
  name: "フロリス (Floris)",
  img: "20181226163839",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "フリーディア＝ストライカーズ (Freadia Strikers)",
  img: "20140223120408",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "フレイヤ (Freyja)",
  img: "20131017183809",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "僧正 (High Priest)",
  img: "20150520231531",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "禁書目録（インデックス） (Index Librorum Prohibitorum)",
  img: "20160704014949",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "イサク＝ローゼンタール (Isaac Rosenthal)",
  img: "20190913134748",
  opts: {
    series: ["一方通行"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "イザベラ＝テイズム (Isabella Theism)",
  img: "20201010151027",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "諫早 (Isahaya)",
  img: "20190223213450",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "五和 (Itsuwa)",
  img: "20110323092139",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ジェーン＝エルブス (Jane Elves)",
  img: "20130917131106",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ジーンズ店主 (Jeans Shop Owner)",
  img: "20160612054354",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ジーンズ切り裂き魔 (Jeans Slasher)",
  img: "20140520010140",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "神裂 火織 (Kanzaki Kaori)",
  img: "20181124035242",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "木原 加群 (Kihara Kagun)",
  img: "20131019120417",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "騎士団長（ナイトリーダー） (Knight Leader)",
  img: "20181207151313",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "香焼 (Kouyagi)",
  img: "20190223213458",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "クランス＝R＝ツァールスキー (Krans R. Tsarskiy)",
  img: "20190329144448",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "レディリー＝タングルロード (Ladylee Tangleroad)",
  img: "20130912163458",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ランシス (Lancis)",
  img: "20181207150541",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ローラ＝スチュアート (Laura Stuart)",
  img: "20130715074930",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "リープ (Leep)",
  img: "20140912115649",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "レイヴィニア＝バードウェイ (Leivinia Birdway)",
  img: "20190329142638",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "レッサー (Lessar)",
  img: "20190212105959",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "リドヴィア＝ロレンツェッティ (Lidvia Lorenzetti)",
  img: "20181016044019",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ルチア (Lucia)",
  img: "20101023020903",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ヴェルサイユの聖女 (Maiden of Versailles)",
  img: "20190222135253",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "マリーベート＝ブラックボール (Mallybath Blackball)",
  img: "20130917104143",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "マリアン＝スリンゲナイヤー (Marian Slingeneyer)",
  img: "20131019112128",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "メアリエ＝スピアヘッド (Marie Spearhead)",
  img: "20130917071059",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "マーク＝スペース (Mark Space)",
  img: "20190405154253",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "マタイ＝リース (Matthai Reese)",
  img: "20110130154328",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ミナ＝メイザース (Mina Mathers)",
  img: "20170610130629",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "投擲の槌（ミョルニル） (Mjölnir)",
  img: "20131111150139",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ネフティス (Nephthys)",
  img: "20150519212515",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "娘々 (Niang-Niang)",
  img: "20150520231617",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ニコライ＝トルストイ (Nikolai Tolstoy)",
  img: "20190308145616",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: True
  }
},
{
  name: "野母崎 (Nomozaki)",
  img: "20190223213506",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "オッレルス (Ollerus)",
  img: "20190405154237",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "オリアナ＝トムソン (Oriana Thomson)",
  img: "20101218153715",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "オルソラ＝アクィナス (Orsola Aquinas)",
  img: "20101014015732",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ペテロ＝ヨグディス (Pietro Yogdis)",
  img: "20190308142411",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "クリファパズル545 (Qliphah Puzzle 545)",
  img: "20180702004157",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "リメエア (Riméa)",
  img: "20181214141233",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "サローニャ＝Ａ＝イリヴィカ (Saronia A. Irivika)",
  img: "20131019121925",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "サーシャ＝クロイツェフ (Sasha Kreutzev)",
  img: "20190309083208",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "シェリー＝クロムウェル (Sherry Cromwell)",
  img: "20120919051157",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "シギュン (Sigyn)",
  img: "20131019115418",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "シルビア (Silvia)",
  img: "20201023105637",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ソーズティ＝エキシカ (Sozty Exica)",
  img: "20160526111540",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "サンジェルマン (St. Germain)",
  img: "20150520231929",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ステイル＝マグヌス (Stiyl Magnus)",
  img: "20101128203607",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "建宮 斎字 (Tatemiya Saiji)",
  img: "20101023073948",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "テクパトル (Tecpatl)",
  img: "20190228032103",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "左方のテッラ (Terra of the Left)",
  img: "20210404014242",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "トール (Thor)",
  img: "20131019112913",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "トチトリ (Tochtli)",
  img: "20190228032258",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ツアーガイドの少女 (Tour Guide Girl)",
  img: "20190511094056",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: True
  }
},
{
  name: "土御門 元春 (Tsuchimikado Motoharu)",
  img: "20120315061015",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "対馬 (Tsushima)",
  img: "20190223213516",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "浦上 (Uragami)",
  img: "20101023023134",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ウレアパディー＝エキシカ (Ureapaddy Exica)",
  img: "20160526104109",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "牛深 (Ushibuka)",
  img: "20190223213524",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ワシリーサ (Vasilisa)",
  img: "20190303130216",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "前方のヴェント (Vento of the Front)",
  img: "20190331230252",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ヴィリアン (Villian)",
  img: "20181214142015",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ショチトル (Xochitl)",
  img: "20181102213323",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "闇咲 逢魔 (Yamisaka Ouma)",
  img: "20101008192216",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "ゾーィ＝マクレガー (Zoe McGregor)",
  img: "20160223084844",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: True
  }
},
{
  name: "ウートガルザ・ロキ (Útgarða-Loki)",
  img: "20131019114411",
  opts: {
    series: ["禁書"],
    affiliation: ["magic"],
    is_supporting_character: False
  }
},
{
  name: "一方通行（アクセラレータ） (Accelerator)",
  img: "20190208142344",
  opts: {
    series: ["超電磁砲", "一方通行", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "藍花 悦 (Aihana Etsu)",
  img: "20200719024739",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "エイワス (Aiwass)",
  img: "20190201210140",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "相園 美央 (Aizono Mio)",
  img: "20121019140146",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "アケミ (Akemi)",
  img: "20100530181316",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "アレイスター＝クロウリー (Aleister Crowley)",
  img: "20110220101621",
  opts: {
    series: ["超電磁砲", "一方通行", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "天井 亜雄 (Amai Ao)",
  img: "20130622074056",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "網目 (Amime)",
  img: "20200117141227",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "青髪 ピアス (Aogami Pierce)",
  img: "20120309051043",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "青星鈴蘭 (Aohoshi Suzuran)",
  img: "20200319012655",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "あおき (Aoki)",
  img: "20200117153948",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "アツシ (Atsushi)",
  img: "20140412044118",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "泡浮 万彬 (Awatsuki Maaya)",
  img: "20200214152156",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "アズミ (Azumi)",
  img: "20190526163900",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "馬場 芳郎 (Baba Yoshio)",
  img: "20181118052042",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ベニゾメ＝ゼリーフィッシュ (Benizome Jellyfish)",
  img: "20201122031654",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "ちさ (Chisa)",
  img: "20200731141016",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "クロウ7 (Crow 7)",
  img: "20130916043053",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "大圄 (Daigo)",
  img: "20141223222653",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "雑貨稼業（デパート） (Depart)",
  img: "20190118150322",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ドリー (Dolly)",
  img: "20200522142032",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ドレンチャー＝木原＝レパトリ (Drencher Kihara Repatri)",
  img: "20201122044904",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "枝先 絆理 (Edasaki Banri)",
  img: "20200919133743",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "姉御 (Elder Sister)",
  img: "20100529125509",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "女性研究員 (Female Researcher)",
  img: "20200912045422",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "フレメア＝セイヴェルン (Fremea Seivelun)",
  img: "20130704100635",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "フレンダ＝セイヴェルン (Frenda Seivelun)",
  img: "20130601112240",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "フリルサンド#G (Frillsand #G)",
  img: "20201122032830",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "フロイライン＝クロイトゥーネ (Fräulein Kreutune)",
  img: "20121027103100",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "吹寄 制理 (Fukiyose Seiri)",
  img: "20200917013318",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "扶桑 彩愛 (Fusou Ayame)",
  img: "20160223101333",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "二石 香車 (Futaishi Kyousha)",
  img: "20181219055656",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "原石の少女 (Gemstone Girl)",
  img: "20130716172227",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "眼鏡少女 (Glasses Girl)",
  img: "20170514095926",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "郷一 (Go Hazime)",
  img: "20190831151209",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "獄彩雨空 (Gokusai Amazora)",
  img: "20200109191800",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "獄彩海美 (Gokusai Kaibi)",
  img: "20200110141743",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "浜面 仕上 (Hamazura Shiage)",
  img: "20190215120557",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "花河雛鳥 (Hanakawa Hinadori)",
  img: "20190609141211",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "花露過愛 (Hanatsuyu Kaai)",
  img: "20201122032107",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "花露妖宴 (Hanatsuyu Youen)",
  img: "20201122032127",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "春上 衿衣 (Haruue Erii)",
  img: "20130414090902",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "服部 半蔵 (Hattori Hanzou)",
  img: "20200228075228",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "硲舎 佳茄 (Hazamaya Kana)",
  img: "20200828134935",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "カチューシャ子 (Headband Girl)",
  img: "20140620151439",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "冥土帰し (Heaven Canceller)",
  img: "20120504171410",
  opts: {
    series: ["超電磁砲", "一方通行", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "蛇谷 次雄 (Hebitani Tsuguo)",
  img: "20100602014915",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ヒコイチ (Hikoichi)",
  img: "20141106153118",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "姫神 秋沙 (Himegami Aisa)",
  img: "20100326104845",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "姫戲茉離 (Himegi Matsuri)",
  img: "20180401002129",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "菱形 蛭魅 (Hishigata Hirumi)",
  img: "20190809133150",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "菱形幹比古 (Hishigata Mikihiko)",
  img: "20190719135035",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "人皮 挟美 (Hitokawa Hasami)",
  img: "20190802154804",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "帆風潤子 (Hokaze Junko)",
  img: "20200925134356",
  opts: {
    series: ["超電磁砲", "アストラル・バディ", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "北条彩鈴 (Houjou Arei)",
  img: "20201003042022",
  opts: {
    series: ["アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "北条静護 (Houjou Seigo)",
  img: "20191214032919",
  opts: {
    series: ["アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "一澤 暁子 (Ichizawa Akiko)",
  img: "20181219060441",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "イーコ (Iiko)",
  img: "20190401062017",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "飯塚 (Iizuka)",
  img: "20201127010532",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "飯棲リタ (Iizumi Rita)",
  img: "20200828160039",
  opts: {
    series: ["超電磁砲", "一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "居村 (Imura)",
  img: "20190610082847",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "伊東 (Itou)",
  img: "20190712175259",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "城南 朝来 (Jounan Asako)",
  img: "20101113105635",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ジュンタ (Junta (Railgun anime))",
  img: "20110628105548",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ジュンタ (Junta (Railgun manga))",
  img: "20110628110319",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "重福省帆 (Juufuku Miho)",
  img: "20100511130109",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "鏑木 由美 (Kaburagi Yumi)",
  img: "20181219061214",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "介旅 初矢 (Kaitabi Hatsuya)",
  img: "20100521220419",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "垣根 帝督 (Kakine Teitoku)",
  img: "20181103092657",
  opts: {
    series: ["超電磁砲", "未元物質", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "垣根 帝督 (Kakine Teitoku (Beetle 05))",
  img: "20140515104838",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "加納 神華 (Kanou Shinka)",
  img: "20150328101027",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "風斬 氷華 (Kazakiri Hyouka)",
  img: "20150103173458",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "カイツ＝ノックレーベン (Keitz Nokleben)",
  img: "20200131143511",
  opts: {
    series: ["超電磁砲", "アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "潔斎 雪紫 (Kessai Kiyoshi)",
  img: "20210327024600",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "木寺実莉 (Kidera Minori)",
  img: "20190712175312",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "木原数多 (Kihara Amata)",
  img: "20110218165440",
  opts: {
    series: ["未元物質", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "木原 病理 (Kihara Byouri)",
  img: "20130619212522",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "木原 円周 (Kihara Enshuu)",
  img: "20130619212439",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "木原 幻生 (Kihara Gensei)",
  img: "20200321034219",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "木原端数 (Kihara Hasuu)",
  img: "20201201150641",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "木原那由他 (Kihara Nayuta)",
  img: "20110614165242",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "木原 脳幹 (Kihara Noukan)",
  img: "20160223102828",
  opts: {
    series: ["アストラル・バディ", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "木原 乱数 (Kihara Ransuu)",
  img: "20130619212624",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "木原 唯一 (Kihara Yuiitsu)",
  img: "20160223122704",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "絹旗 最愛 (Kinuhata Saiai)",
  img: "20190715101744",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "切斑 芽美 (Kirifu Megumi)",
  img: "20200124054513",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "口囃子早鳥 (Kobayashi Satori)",
  img: "20200730131239",
  opts: {
    series: ["超電磁砲", "アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "駒場 利徳 (Komaba Ritoku)",
  img: "20110326024712",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "婚后 光子 (Kongou Mitsuko)",
  img: "20200925141300",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "固法 美偉 (Konori Mii)",
  img: "20200731150018",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "鋼盾 掬彦 (Koujun Kikuhiko)",
  img: "20100524143055",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "鴻野江 遥希 (Kounoe Haruki)",
  img: "20100609022631",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "警策 看取 (Kouzaku Mitori)",
  img: "20201001065113",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "雲川 鞠亜 (Kumokawa Maria)",
  img: "20120415012004",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "雲川 芹亜 (Kumokawa Seria)",
  img: "20170514131633",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "黒夜 海鳥 (Kuroyoru Umidori)",
  img: "20130706134153",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "黒妻 綿流 (Kurozuma Wataru)",
  img: "20100601190157",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "郭 (Kuruwa)",
  img: "20160225081644",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "釧路帷子 (Kushiro Katabira)",
  img: "20140731174743",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "橋国 亮太 (Kyougoku Ryouta)",
  img: "20180811005248",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "レディバード (Ladybird)",
  img: "20201122034641",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "打ち止め (Last Order)",
  img: "20110321095954",
  opts: {
    series: ["超電磁砲", "一方通行", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "舞殿星見（まいどのほしみ） (Maidono Hoshimi)",
  img: "20200215101326",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "マキ (Maki)",
  img: "20200731140318",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "牧上 小牧 (Makigami Komaki)",
  img: "20170512130630",
  opts: {
    series: ["アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "マコ (Mako)",
  img: "20100530194007",
  opts: {
    series: ["超電磁砲", "アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "マナベ リツキ (Manabe Ritsuki)",
  img: "20190803144208",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "鳴護 アリサ (Meigo Arisa)",
  img: "20130921135213",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "美濃部 (Minobe)",
  img: "20190129030656",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "みのり (Minori)",
  img: "20130526140537",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ミサカ一号 (Misaka 1)",
  img: "20130710175144",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ミサカ一〇〇三一号 (Misaka 10031)",
  img: "20130623103107",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ミサカ一〇〇三二号 (Misaka 10032)",
  img: "20200926035942",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ミサカ一〇〇三九号 (Misaka 10039)",
  img: "20130712083459",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ミサカ一〇〇四六号 (Misaka 10046)",
  img: "20190802135736",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "ミサカ一〇七七七号 (Misaka 10777)",
  img: "20190301125222",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "ミサカ一三五七七号 (Misaka 13577)",
  img: "20130712083500",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ミサカ一九〇九〇号 (Misaka 19090)",
  img: "20131101092152",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ミサカ八九一二号 (Misaka 8912)",
  img: "20130524121847",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ミサカ九九八二号 (Misaka 9982)",
  img: "20130504185340",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "御坂 美琴 (Misaka Mikoto)",
  img: "20120511115657",
  opts: {
    series: ["超電磁砲", "禁書", "アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "番外個体（ミサカワースト） (Misaka Worst)",
  img: "20190215134933",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "蜜蟻 愛愉 (Mitsuari Ayu)",
  img: "20190826140440",
  opts: {
    series: ["アストラル・バディ", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "美山 写影 (Miyama Shaei)",
  img: "20200724161835",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "実生 好子 (Miyoshi Yoshiko)",
  img: "20111224133022",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "モガリ タクミ (Mogari Takumi)",
  img: "20190803144152",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "麦野 沈利 (Mugino Shizuri)",
  img: "20130531214206",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "結標 淡希 (Musujime Awaki)",
  img: "20101112155812",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "むーちゃん (Muu)",
  img: "20120507081042",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "名荷原弘見 (Nakahara Hiromi)",
  img: "20190712175331",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "中邑 (Nakamura (manager))",
  img: "20210228150512",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "亡本 裏蔵 (Nakimoto Rizou)",
  img: "20190810135753",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "亡本裏蔵の祕書 (Nakimoto Rizou's Secretary)",
  img: "20191027002736",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "ナオ (Nao)",
  img: "20130504184950",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ナオヤ (Naoya)",
  img: "20140412044727",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "西雄 (Nishio)",
  img: "20190719134711",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ノリコ (Noriko)",
  img: "20191108232942",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "布束 砥信 (Nunotaba Shinobu)",
  img: "20130420062620",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "丘原 燎多 (Okahara Ryouta)",
  img: "20100526144939",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "重石 (Omoshi)",
  img: "20200124143422",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "大河内 巡観 (Ookawachi Megumi)",
  img: "20200731141325",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "親船 最中 (Oyafune Monaka)",
  img: "20181012183026",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "親船最中の祕書 (Oyafune Monaka's Secretary)",
  img: "20191028222301",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "親船 素甘 (Oyafune Suama)",
  img: "20181012183031",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "紙袋をかぶったバニーガール (Paper Bag Bunny Girl)",
  img: "20160223100637",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "海賊ラジオDJ (Pirate Radio DJ)",
  img: "20200117142302",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "博士 (Professor)",
  img: "20181103090213",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "わんこ検察官 (Puppy Prosecutor)",
  img: "20180307221837",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "楽丘豊富 (Rakuoka Houfu)",
  img: "20201122033959",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "恋査 #028 (Rensa #28)",
  img: "20130706135928",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "恋査 #029 (Rensa #29)",
  img: "20130709180703",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "リエ (Rie)",
  img: "20140412044816",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "災誤 (Saigo)",
  img: "20181209232457",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "才郷 良太 (Saigou Ryouta)",
  img: "20110307162517",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "西東颯太 (Saitou Souta)",
  img: "20191109061036",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "坂島 道端 (Sakashima Michibata)",
  img: "20160612061038",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "咲蓮誘璃 (Sakibasu Yuri)",
  img: "20181116195402",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "作楽木ナルハ (Sakuragi Naruha)",
  img: "20200828160818",
  opts: {
    series: ["超電磁砲", "一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "査楽 (Saraku)",
  img: "20181118053425",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "佐天 涙子 (Saten Ruiko)",
  img: "20200814135039",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "サトシ (Satoshi)",
  img: "20141106150459",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "清ヶ太郞丸 (Seike Taroumaru)",
  img: "20200905110710",
  opts: {
    series: ["超電磁砲", "一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "神苑小路 瑠璃懸巣 (Shin'enkouji Rurikakesu)",
  img: "20210226013124",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "潮岸 (Shiokishi)",
  img: "20190125144011",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "白井 黒子 (Shirai Kuroko)",
  img: "20200731141815",
  opts: {
    series: ["超電磁砲", "禁書", "アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "白絹仄火 (Shirakinu Honoka)",
  img: "20190929070804",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "食蜂 操祈 (Shokuhou Misaki)",
  img: "20201005134844",
  opts: {
    series: ["超電磁砲", "禁書", "アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "春暖嬉美 (Shundan Kimi)",
  img: "20200307194259",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "蠢動 俊三 (Shundou Toshizou)",
  img: "20181228123946",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "シャットアウラ＝セクウェンツィア (Shutaura Sequenzia)",
  img: "20130915154929",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "削板 軍覇 (Sogiita Gunha)",
  img: "20191215052228",
  opts: {
    series: ["超電磁砲", "アストラル・バディ", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ステファニー＝ゴージャスパレス (Stephanie Gorgeouspalace)",
  img: "20190722201514",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "杉谷 (Sugitani)",
  img: "20190205035435",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "杉山 枝雄 (Sugiyama Edao)",
  img: "20140508222932",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "砂皿 緻密 (Sunazara Chimitsu)",
  img: "20181104082219",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "たっ (Ta)",
  img: "20200731140720",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "鷹田杳子 (Takada Youko)",
  img: "20190712175322",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "高梁 (Takahashi)",
  img: "20190712175348",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "滝壺 理后 (Takitsubo Rikou)",
  img: "20210220145832",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "タメゾウ (Tamezou)",
  img: "20100602123554",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "道（タオ） (Tao)",
  img: "20190128023002",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "鉄装 綴里 (Tessou Tsuzuri)",
  img: "20100625124939",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "テツ (Tetsu)",
  img: "20141106150555",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "鉄網 (Tetsumou)",
  img: "20190206193756",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "テレスティーナ＝木原＝ライフライン (Therestina Kihara Lifeline)",
  img: "20130908110054",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "トマス＝プラチナバーグ (Thomas Platinaburg)",
  img: "20190118145818",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "飛緒 まみ (Tobio Mami)",
  img: "20190706192006",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "飛緒 ゆみ (Tobio Yumi)",
  img: "20180506105201",
  opts: {
    series: ["一方通行"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "等々力 (Todoroki)",
  img: "20201019082856",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "十河 麻実 (Togawa Asami)",
  img: "20190224230753",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "寮監 (Tokiwadai Dorm Supervisor)",
  img: "20200726094554",
  opts: {
    series: ["超電磁砲", "アストラル・バディ", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "遠峰叶理 (Toomine Kanari)",
  img: "20181001014515",
  opts: {
    series: ["アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "トリック (Trick)",
  img: "20100529193453",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "土御門 舞夏 (Tsuchimikado Maika)",
  img: "20111118134850",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "月詠 小萌 (Tsukuyomi Komoe)",
  img: "20120310184253",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "釣鐘茶寮 (Tsurigane Saryou)",
  img: "20201202084431",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "初春 飾利 (Uiharu Kazari)",
  img: "20200731150526",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "海原 光貴 (Unabara Mitsuki)",
  img: "20100617202439",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ウサミミ (Usamimi)",
  img: "20160223122155",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "観光喰い（バキュームピース） (Vacuum Piece)",
  img: "20201124153033",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "ヴィヴァーナ＝オニグマ (Vivana Oniguma)",
  img: "20201122033518",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "鰐河雷斧 (Wanigawa Raifu)",
  img: "20191008040112",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "湾内 絹保 (Wannai Kinuho)",
  img: "20200215023023",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "綿辺 (Watanabe)",
  img: "20200117142535",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "ミサカネットワーク総体 (Will of the Whole Misaka Network)",
  img: "20170514082113",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "薬丸医月 (Yakumaru Itsuki)",
  img: "20200907144458",
  opts: {
    series: ["超電磁砲", "一方通行"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "薬味 久子 (Yakumi Hisako)",
  img: "20130525182830",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "山根 (Yamane)",
  img: "20111210021123",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "山城 府昭 (Yamashiro Shoubu)",
  img: "20201027033844",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "山手 (Yamate)",
  img: "20181027212317",
  opts: {
    series: ["禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "柳迫 碧美 (Yanagisako Aomi)",
  img: "20200731144609",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "誉望 万化 (Yobou Banka)",
  img: "20181027211938",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "黄泉川 愛穂 (Yomikawa Aiho)",
  img: "20120308130041",
  opts: {
    series: ["超電磁砲", "一方通行", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "芳川 桔梗 (Yoshikawa Kikyou)",
  img: "20100620232632",
  opts: {
    series: ["超電磁砲", "一方通行", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "弓箭入鹿 (Yumiya Iruka)",
  img: "20201101055215",
  opts: {
    series: ["アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "弓箭 猟虎 (Yumiya Rakko)",
  img: "20200814134550",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "悠里千夜 (Yuuri Senya)",
  img: "20201002132306",
  opts: {
    series: ["アストラル・バディ"],
    affiliation: ["science"],
    is_supporting_character: False
  }
},
{
  name: "杠林檎 (Yuzuriha Ringo)",
  img: "20201202084836",
  opts: {
    series: ["未元物質"],
    affiliation: ["science"],
    is_supporting_character: True
  }
},
{
  name: "ビバリー＝シースルー (Beverly Seethrough)",
  img: "20140615112329",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "チャールズ＝コンダー (Charles Conder)",
  img: "20101212032417",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: True
  }
},
{
  name: "ディダロス＝セクウェンツィア (Daedalus Sequenzia)",
  img: "20130908152941",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "ディグルヴ (Digurv)",
  img: "20190215135537",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "エーカー＝ルゴーニ (Eiker Lugoni)",
  img: "20181207144747",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "エカリエーリャ＝A＝プロンスカヤ (Ekalielya A. Pronskaya)",
  img: "20190301170932",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "平山ラミ (Hirayama Rami)",
  img: "20180529045033",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "人皮扶美の母 (Hitokawa Hasami's Mother)",
  img: "20190728025007",
  opts: {
    series: ["一方通行"],
    affiliation: ["other"],
    is_supporting_character: True
  }
},
{
  name: "一一一 (ひとついはじめ)  (Hitotsui Hajime)",
  img: "20110807031056",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "上条 詩菜 (Kamijou Shiina)",
  img: "20110412014149",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "上条 刀夜 (Kamijou Touya)",
  img: "20101104040204",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "婚后光子の父親 (Kongou Mitsuko's Father)",
  img: "20160523123950",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "李 (Li)",
  img: "20190612060200",
  opts: {
    series: ["一方通行"],
    affiliation: ["other"],
    is_supporting_character: True
  }
},
{
  name: "李芳蘭 (Li Fanglan)",
  img: "20190612060149",
  opts: {
    series: ["一方通行"],
    affiliation: ["other"],
    is_supporting_character: True
  }
},
{
  name: "松乃山繁美 (Matsunoyama Shigemi)",
  img: "20200807160643",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "御坂 美鈴 (Misaka Misuzu)",
  img: "20140816183928",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "御坂 旅掛 (Misaka Tabigake)",
  img: "20140520005308",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "ミュッセ (Musset)",
  img: "20181207150019",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "オリーブ＝ホリデイ (Olive Holiday)",
  img: "20140615112424",
  opts: {
    series: ["超電磁砲"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "近江 手裏 (Oumi Shuri)",
  img: "20191219040640",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "パトリシア＝バードウェイ (Patricia Birdway)",
  img: "20110815204504",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "リッチモンド (Richmond)",
  img: "20181209173800",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "ロベルト＝カッツェ (Roberto Katze)",
  img: "20111212023213",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "ローズライン＝クラックハルト (Roseline Krackhart)",
  img: "20200527115420",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "サフリー＝オープンディズ (Saflee Opendays)",
  img: "20190427020706",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "ソールジエ＝Ｉ＝クライニコフ (Soldier I. Krainikov)",
  img: "20190208135351",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: True
  }
},
{
  name: "田中 (Tanaka)",
  img: "20181230153442",
  opts: {
    series: ["禁書"],
    affiliation: ["other"],
    is_supporting_character: False
  }
},
{
  name: "野洲 (Yasu)",
  img: "20180401034207",
  opts: {
    series: ["超電磁砲", "禁書"],
    affiliation: ["other"],
    is_supporting_character: True
  }
}
];
