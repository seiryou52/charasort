dataSetVersion = "2021-04-29"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
  }
];

dataSet[dataSetVersion].characterData = [{
  name: "後方のアックア (Acqua of the Back)",
  img: "8/87/AcquaAnime.jpg/revision/latest?cb=20181019191849",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "アガター (Agata)",
  img: "2/23/Agata_profile.jpg/revision/latest?cb=20110122092043",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "アニェーゼ＝サンクティス (Agnese Sanctis)",
  img: "b/bd/Agnese_profile.png/revision/latest?cb=20110205035809",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "アルバート＝ダイイング (Albert Dying)",
  img: "1/1f/Albert_Dying.png/revision/latest?cb=20201206132904",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "アンジェレネ (Angelene)",
  img: "5/50/Angelene_profile.jpg/revision/latest?cb=20101023022015",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "アンナ＝シュプレンゲル (Anna Sprengel)",
  img: "9/91/Anna_Sprengel_%28GT2%29.jpg/revision/latest?cb=20201003041022",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "神の力（ガブリエル） (Archangel Gabriel)",
  img: "f/f0/Archangel_Gabriel_%28Anime%29.png/revision/latest?cb=20190308140902",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "錬金の真似事 (Aureolus Dummy)",
  img: "a/ad/Aureolus_Dummy_Profile.jpg/revision/latest?cb=20160224084310",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "アウレオルス＝イザード (Aureolus Izzard)",
  img: "e/eb/Aureolus.png/revision/latest?cb=20120310110256",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "バルビナ (Balbina)",
  img: "2/2e/Balbina_Novel.jpg/revision/latest?cb=20160612023336",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ベイロープ (Bayloupe)",
  img: "d/d2/Bayloupe_%28Anime%29.jpg/revision/latest?cb=20181214211824",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["magic"] }
},
{
  name: "ビアージオ＝ブゾーニ (Biagio Busoni)",
  img: "8/85/Biagio_profile.jpg/revision/latest?cb=20110122132857",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ブリュンヒルド＝エイクトベル (Brunhild Eiktobel)",
  img: "5/50/Brunhild_Eiktobel.jpg/revision/latest?cb=20100915024944",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "キャーリサ (Carissa)",
  img: "7/70/Carissa_%28Anime%29.png/revision/latest?cb=20181214143151",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "カテリナ (Caterina)",
  img: "4/4e/Caterina_Manga.jpg/revision/latest?cb=20191121115847",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "サンドリヨン (Cendrillon)",
  img: "8/85/Cendrillon_profile.jpg/revision/latest?cb=20131019120956",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "キメラ (Chimera)",
  img: "3/36/Chimera.png/revision/latest?cb=20160430121856",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "コロンゾン (Coronzon)",
  img: "4/45/Coronzon.png/revision/latest?cb=20170610130341",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "シンシア＝エクスメント (Cynthia Exment)",
  img: "8/84/Cynthia_Exment.jpg/revision/latest?cb=20140406015252",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "エリザード (Elizard)",
  img: "8/8f/Elizard_%28Anime%29.png/revision/latest?cb=20181214142602",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "エーラソーン (Ellasone)",
  img: "4/4a/Ellasone_profile.jpg/revision/latest?cb=20140617101126",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "エリス＝ウォリアー (Ellis Warrior)",
  img: "d/d8/Ellis_profile.png/revision/latest?cb=20110213094449",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "エステル＝ローゼンタール (Esther Rosenthal)",
  img: "2/21/Esther_Rosenthal_%28Anime%29.png/revision/latest?cb=20190719150118",
  opt: { series: ["一方通行"], affiliation: ["magic"] }
},
{
  name: "エツァリ (Etzali)",
  img: "8/8c/Etzali_%28Anime%29.png/revision/latest?cb=20190201140032",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "右方のフィアンマ (Fiamma of the Right)",
  img: "2/2a/Fiamma_of_the_Right_%28Anime%29.png/revision/latest?cb=20190208135334",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "フラック＝アンカース (Flack Anchors)",
  img: "f/f1/Flack_Headshot.jpg/revision/latest?cb=20140421170908",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "フロリス (Floris)",
  img: "2/2d/Floris_%28Anime%29.png/revision/latest?cb=20181226163839",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["magic"] }
},
{
  name: "フリーディア＝ストライカーズ (Freadia Strikers)",
  img: "f/f7/Freadia_Strikers.png/revision/latest?cb=20140223120408",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "フレイヤ (Freyja)",
  img: "5/56/Freyja_profile.jpg/revision/latest?cb=20131017183809",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "僧正 (High Priest)",
  img: "a/ab/High_Priest.png/revision/latest?cb=20150520231531",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "禁書目録（インデックス） (Index Librorum Prohibitorum)",
  img: "0/09/Indexlibrorumprohibitorum.png/revision/latest?cb=20160704014949",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["magic"] }
},
{
  name: "イサク＝ローゼンタール (Isaac Rosenthal)",
  img: "e/ef/Isaac_Rosenthal_%28Anime%29.png/revision/latest?cb=20190913134748",
  opt: { series: ["一方通行"], affiliation: ["magic"] }
},
{
  name: "イザベラ＝テイズム (Isabella Theism)",
  img: "4/4d/Isabella_Theism.jpg/revision/latest?cb=20201010151027",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "諫早 (Isahaya)",
  img: "e/e8/Isahaya_%28Anime%29.PNG/revision/latest?cb=20190223213450",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "五和 (Itsuwa)",
  img: "7/7a/Itsuwa_profile.jpg/revision/latest?cb=20110323092139",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ジェーン＝エルブス (Jane Elves)",
  img: "f/f8/JaneElves_profile.jpg/revision/latest?cb=20130917131106",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ジーンズ店主 (Jeans Shop Owner)",
  img: "b/b2/Jeans_Shop_Owner_Novel.jpg/revision/latest?cb=20160612054354",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ジーンズ切り裂き魔 (Jeans Slasher)",
  img: "a/a4/Jean_Slasher.jpg/revision/latest?cb=20140520010140",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "神裂 火織 (Kanzaki Kaori)",
  img: "b/b4/Kanzaki_Kaori_%28Index_III%29.png/revision/latest?cb=20181124035242",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "木原 加群 (Kihara Kagun)",
  img: "e/e6/KiharaKagun_profile.jpg/revision/latest?cb=20131019120417",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "騎士団長（ナイトリーダー） (Knight Leader)",
  img: "1/16/Knight_Leader_%28Anime%29.png/revision/latest?cb=20181207151313",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "香焼 (Kouyagi)",
  img: "b/bc/Kouyagi_%28Anime%29.PNG/revision/latest?cb=20190223213458",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "クランス＝R＝ツァールスキー (Krans R. Tsarskiy)",
  img: "2/24/Krans_R._Tsarskiy%28Anime%29.png/revision/latest?cb=20190329144448",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "レディリー＝タングルロード (Ladylee Tangleroad)",
  img: "0/0c/Ladylee.png/revision/latest?cb=20130912163458",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "ランシス (Lancis)",
  img: "c/cd/Lancis_%28Anime%29.png/revision/latest?cb=20181207150541",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["magic"] }
},
{
  name: "ローラ＝スチュアート (Laura Stuart)",
  img: "6/6b/Laura_Stuart.jpg/revision/latest?cb=20130715074930",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "リープ (Leep)",
  img: "a/a6/Priestess_of_Bastet.png/revision/latest?cb=20140912115649",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "レイヴィニア＝バードウェイ (Leivinia Birdway)",
  img: "3/32/Leivinia_Birdway%28Anime%29.png/revision/latest?cb=20190329142638",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "レッサー (Lessar)",
  img: "2/2c/Lessar_%28Anime%29.png/revision/latest?cb=20190212105959",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["magic"] }
},
{
  name: "リドヴィア＝ロレンツェッティ (Lidvia Lorenzetti)",
  img: "d/d1/LidviaLorenzetti-IndexIII.jpg/revision/latest?cb=20181016044019",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ルチア (Lucia)",
  img: "7/77/Lucia_profile.jpg/revision/latest?cb=20101023020903",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ヴェルサイユの聖女 (Maiden of Versailles)",
  img: "3/3d/Maiden_of_Versailles_%28Anime%29.png/revision/latest?cb=20190222135253",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "マリーベート＝ブラックボール (Mallybath Blackball)",
  img: "7/71/MallybathBlackball_profile.jpg/revision/latest?cb=20130917104143",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "マリアン＝スリンゲナイヤー (Marian Slingeneyer)",
  img: "8/8c/MarianSlingeneyer_profile.jpg/revision/latest?cb=20131019112128",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "メアリエ＝スピアヘッド (Marie Spearhead)",
  img: "5/55/MarieSpearhead_profile.jpg/revision/latest?cb=20130917071059",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "マーク＝スペース (Mark Space)",
  img: "0/07/Mark_Space_%28Anime%29.PNG/revision/latest?cb=20190405154253",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "マタイ＝リース (Matthai Reese)",
  img: "7/77/Pope2.jpg/revision/latest?cb=20110130154328",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ミナ＝メイザース (Mina Mathers)",
  img: "5/5c/Mina_Mathers.png/revision/latest?cb=20170610130629",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "投擲の槌（ミョルニル） (Mjölnir)",
  img: "a/a0/Mjolnir_profile.jpg/revision/latest?cb=20131111150139",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ネフティス (Nephthys)",
  img: "e/e7/Nephthys.png/revision/latest?cb=20150519212515",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "娘々 (Niang-Niang)",
  img: "e/e8/Niang_Niang.png/revision/latest?cb=20150520231617",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ニコライ＝トルストイ (Nikolai Tolstoy)",
  img: "8/81/Nikolai_Tolstoy_%28Anime%29.png/revision/latest?cb=20190308145616",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "野母崎 (Nomozaki)",
  img: "2/2f/Nomozaki_%28Anime%29.PNG/revision/latest?cb=20190223213506",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "オッレルス (Ollerus)",
  img: "e/e5/Ollerus_%28Anime%29.png/revision/latest?cb=20190405154237",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "オリアナ＝トムソン (Oriana Thomson)",
  img: "a/a9/Oriana_Thomson.jpg/revision/latest?cb=20101218153715",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "オルソラ＝アクィナス (Orsola Aquinas)",
  img: "8/8a/Index3026.jpg/revision/latest?cb=20101014015732",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ペテロ＝ヨグディス (Pietro Yogdis)",
  img: "6/69/Pietro_Yogdis_%28Anime%29.png/revision/latest?cb=20190308142411",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "クリファパズル545 (Qliphah Puzzle 545)",
  img: "d/d6/Qliphah_Puzzle_545.png/revision/latest?cb=20180702004157",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "リメエア (Riméa)",
  img: "6/6b/Rimea_%28Anime%29.png/revision/latest?cb=20181214141233",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "サローニャ＝Ａ＝イリヴィカ (Saronia A. Irivika)",
  img: "0/05/Saronia-Irivika_profile.jpg/revision/latest?cb=20131019121925",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "サーシャ＝クロイツェフ (Sasha Kreutzev)",
  img: "1/1c/Sasha_Kreutzev_NewProfile.jpg/revision/latest?cb=20190309083208",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "シェリー＝クロムウェル (Sherry Cromwell)",
  img: "c/cb/Sherry.jpg/revision/latest?cb=20120919051157",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "シギュン (Sigyn)",
  img: "3/30/Sigyn_profile.jpg/revision/latest?cb=20131019115418",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "シルビア (Silvia)",
  img: "8/86/Silvia_%28Anime%29.PNG/revision/latest?cb=20201023105637",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ソーズティ＝エキシカ (Sozty Exica)",
  img: "0/0a/Sozty_Exica_Novel.jpg/revision/latest?cb=20160526111540",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "サンジェルマン (St. Germain)",
  img: "c/c1/St-Germain.png/revision/latest?cb=20150520231929",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ステイル＝マグヌス (Stiyl Magnus)",
  img: "7/75/Stiylmagnus.jpg/revision/latest?cb=20101128203607",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "建宮 斎字 (Tatemiya Saiji)",
  img: "2/2d/Tatemiya_Saiji.PNG/revision/latest?cb=20101023073948",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "テクパトル (Tecpatl)",
  img: "d/d0/Tecpatl.png/revision/latest?cb=20190228032103",
  opt: { series: ["超電磁砲", "禁書"], affiliation: ["magic"] }
},
{
  name: "左方のテッラ (Terra of the Left)",
  img: "3/3f/TerraAnime.jpg/revision/latest?cb=20210404014242",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "トール (Thor)",
  img: "2/23/Thor.jpg/revision/latest?cb=20131019112913",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "トチトリ (Tochtli)",
  img: "3/36/Tochtli.png/revision/latest?cb=20190228032258",
  opt: { series: ["超電磁砲", "禁書"], affiliation: ["magic"] }
},
{
  name: "ツアーガイドの少女 (Tour Guide Girl)",
  img: "b/b3/Tour_Guide_Girl_%28Novel%29.PNG/revision/latest?cb=20190511094056",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "土御門 元春 (Tsuchimikado Motoharu)",
  img: "e/ef/Motoprofile.png/revision/latest?cb=20120315061015",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "対馬 (Tsushima)",
  img: "e/e9/Tsushima_%28Anime%29.png/revision/latest?cb=20190223213516",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "浦上 (Uragami)",
  img: "7/79/Uragami_profile.jpg/revision/latest?cb=20101023023134",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ウレアパディー＝エキシカ (Ureapaddy Exica)",
  img: "0/07/Ureapaddy_Exica_Novel.jpg/revision/latest?cb=20160526104109",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "牛深 (Ushibuka)",
  img: "2/27/Ushibuka_%28Anime%29.png/revision/latest?cb=20190223213524",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ワシリーサ (Vasilisa)",
  img: "e/e8/Vasilisa_profile-2.jpg/revision/latest?cb=20190303130216",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "前方のヴェント (Vento of the Front)",
  img: "3/3d/Vento_of_the_Front.jpg/revision/latest?cb=20190331230252",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ヴィリアン (Villian)",
  img: "f/f5/Villian_%28Anime%29.png/revision/latest?cb=20181214142015",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ショチトル (Xochitl)",
  img: "d/d5/Xochitl_%28Anime%29.png/revision/latest?cb=20181102213323",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "闇咲 逢魔 (Yamisaka Ouma)",
  img: "6/6b/Ouma_profile.png/revision/latest?cb=20101008192216",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ゾーィ＝マクレガー (Zoe McGregor)",
  img: "c/ce/Zoe_Profile_Crop.jpg/revision/latest?cb=20160223084844",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "ウートガルザ・ロキ (Útgarða-Loki)",
  img: "c/c9/Utgarda-Loki_profile.JPG/revision/latest?cb=20131019114411",
  opt: { series: ["禁書"], affiliation: ["magic"] }
},
{
  name: "一方通行（アクセラレータ） (Accelerator)",
  img: "d/db/Accelerator_%28Anime%29.png/revision/latest?cb=20190208142344",
  opt: { series: ["禁書", "一方通行", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "藍花 悦 (Aihana Etsu)",
  img: "b/ba/Aihana_Etsu_ambiguous_pfp.jpg/revision/latest?cb=20200719024739",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "エイワス (Aiwass)",
  img: "6/65/Aiwass_%28Anime%29.png/revision/latest?cb=20190201210140",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "相園 美央 (Aizono Mio)",
  img: "c/cc/AizonoMio_profile.jpg/revision/latest?cb=20121019140146",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "アケミ (Akemi)",
  img: "d/d2/Akemi.png/revision/latest?cb=20100530181316",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "アレイスター＝クロウリー (Aleister Crowley)",
  img: "1/19/Aleister_Crowley_%28Anime%29.jpg/revision/latest?cb=20110220101621",
  opt: { series: ["禁書", "一方通行", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "天井 亜雄 (Amai Ao)",
  img: "7/72/Amai_Ao.png/revision/latest?cb=20130622074056",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "網目 (Amime)",
  img: "c/c3/Amime_%28Anime%29.png/revision/latest?cb=20200117141227",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "青髪 ピアス (Aogami Pierce)",
  img: "e/e4/Aopi.png/revision/latest?cb=20120309051043",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "青星鈴蘭 (Aohoshi Suzuran)",
  img: "5/5d/Aohoshi_Suzuran_Profile_Railgun.png/revision/latest?cb=20200319012655",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "あおき (Aoki)",
  img: "d/d9/Aoki_%28Anime%29.png/revision/latest?cb=20200117153948",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "アツシ (Atsushi)",
  img: "b/bc/Atsushi.jpg/revision/latest?cb=20140412044118",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "泡浮 万彬 (Awatsuki Maaya)",
  img: "4/42/Awatsuki_Maaya_RailgunT_%28Anime%29.png/revision/latest?cb=20200214152156",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "アズミ (Azumi)",
  img: "a/a9/Azumi_profile.jpg/revision/latest?cb=20190526163900",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "馬場 芳郎 (Baba Yoshio)",
  img: "c/ce/BabaYoshio-AnimeProfile.png/revision/latest?cb=20181118052042",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "ベニゾメ＝ゼリーフィッシュ (Benizome Jellyfish)",
  img: "9/98/Benizome_Jellyfish.jpg/revision/latest?cb=20201122031654",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "ちさ (Chisa)",
  img: "8/81/Chisa_%28Anime%29.png/revision/latest?cb=20200731141016",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "クロウ7 (Crow 7)",
  img: "b/ba/Crow7-profile.jpg/revision/latest?cb=20130916043053",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "大圄 (Daigo)",
  img: "4/43/Daigo_sensei.png/revision/latest?cb=20141223222653",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "雑貨稼業（デパート） (Depart)",
  img: "3/31/Depart_%28Anime%29.png/revision/latest?cb=20190118150322",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "ドリー (Dolly)",
  img: "0/08/Dolly_Anime_%28New_Body%29.png/revision/latest?cb=20200522142032",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "ドレンチャー＝木原＝レパトリ (Drencher Kihara Repatri)",
  img: "4/49/Drencher_Kihara_Repatri.jpg/revision/latest?cb=20201122044904",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "枝先 絆理 (Edasaki Banri)",
  img: "5/5b/Edasaki_Banri_Railgun_S_%28Anime%29.png/revision/latest?cb=20200919133743",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "姉御 (Elder Sister)",
  img: "2/21/Anego.png/revision/latest?cb=20100529125509",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "女性研究員 (Female Researcher)",
  img: "b/ba/Female_Scientist_%28Anime%29.png/revision/latest?cb=20200912045422",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "フレメア＝セイヴェルン (Fremea Seivelun)",
  img: "b/be/Fremea.jpg/revision/latest?cb=20130704100635",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "フレンダ＝セイヴェルン (Frenda Seivelun)",
  img: "c/c3/FrendaSeivelunAnime_profile.jpg/revision/latest?cb=20130601112240",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "フリルサンド#G (Frillsand #G)",
  img: "5/5c/Frillsand_-G.jpg/revision/latest?cb=20201122032830",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "フロイライン＝クロイトゥーネ (Fräulein Kreutune)",
  img: "9/97/Fraulein_Kreutune.png/revision/latest?cb=20121027103100",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "吹寄 制理 (Fukiyose Seiri)",
  img: "7/76/Fukiyose_Seiri_Index_III_%28Anime%29.png/revision/latest?cb=20200917013318",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "扶桑 彩愛 (Fusou Ayame)",
  img: "4/4b/FusouAyame.jpg/revision/latest?cb=20160223101333",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "二石 香車 (Futaishi Kyousha)",
  img: "7/7a/Futaishi_Kyousha.jpg/revision/latest?cb=20181219055656",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "原石の少女 (Gemstone Girl)",
  img: "5/57/Gemstone_Girl.jpg/revision/latest?cb=20130716172227",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "眼鏡少女 (Glasses Girl)",
  img: "c/ce/Glasses_Girl_Anime.png/revision/latest?cb=20170514095926",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "郷一 (Go Hazime)",
  img: "2/2a/Go_Hazime.PNG/revision/latest?cb=20190831151209",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "獄彩雨空 (Gokusai Amazora)",
  img: "6/63/Gokusai_Amazora.PNG/revision/latest?cb=20200109191800",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "獄彩海美 (Gokusai Kaibi)",
  img: "5/5c/Gokusai_Kaibi_Railgun_%28Anime%29.png/revision/latest?cb=20200110141743",
  opt: { series: ["超電磁砲", "禁書"], affiliation: ["science"] }
},
{
  name: "浜面 仕上 (Hamazura Shiage)",
  img: "e/e2/HamazuraShiage-profile.jpg/revision/latest?cb=20190215120557",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "花河雛鳥 (Hanakawa Hinadori)",
  img: "f/f7/Hanakawa_Hinadori.png/revision/latest?cb=20190609141211",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "花露過愛 (Hanatsuyu Kaai)",
  img: "8/89/Hanatsuyu_Kaai.jpg/revision/latest?cb=20201122032107",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "花露妖宴 (Hanatsuyu Youen)",
  img: "c/cb/Hanatsuyu_Youen.jpg/revision/latest?cb=20201122032127",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "春上 衿衣 (Haruue Erii)",
  img: "2/23/Haruue_Erii.png/revision/latest?cb=20130414090902",
  opt: { series: ["超電磁砲", "禁書"], affiliation: ["science"] }
},
{
  name: "服部 半蔵 (Hattori Hanzou)",
  img: "7/74/Hattori_Hanzou_Novel.jpg/revision/latest?cb=20200228075228",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "硲舎 佳茄 (Hazamaya Kana)",
  img: "3/38/Hazamaya_Kana_RailgunT_%28Anime%29.png/revision/latest?cb=20200828134935",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "カチューシャ子 (Headband Girl)",
  img: "4/4c/Headband_girl_headshot.jpg/revision/latest?cb=20140620151439",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "冥土帰し (Heaven Canceller)",
  img: "4/48/Heaven_canceller.png/revision/latest?cb=20120504171410",
  opt: { series: ["禁書", "一方通行", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "蛇谷 次雄 (Hebitani Tsuguo)",
  img: "3/36/Hebitani_Tsuguo.png/revision/latest?cb=20100602014915",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "ヒコイチ (Hikoichi)",
  img: "5/58/Hikoichi.png/revision/latest?cb=20141106153118",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "姫神 秋沙 (Himegami Aisa)",
  img: "1/16/Aisa_Himegami.jpg/revision/latest?cb=20100326104845",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "姫戲茉離 (Himegi Matsuri)",
  img: "7/71/Himegi_Matsuri_Accel.png/revision/latest?cb=20180401002129",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "菱形 蛭魅 (Hishigata Hirumi)",
  img: "f/fe/Hishigata_Hirumi_%28Anime%29.jpg/revision/latest?cb=20190809133150",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "菱形幹比古 (Hishigata Mikihiko)",
  img: "2/2c/Hishigata_Mikihiko_%28Anime%29.png/revision/latest?cb=20190719135035",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "人皮 挟美 (Hitokawa Hasami)",
  img: "2/2e/Hitokawa_Hasami_%28Huotou%29.png/revision/latest?cb=20190802154804",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "帆風潤子 (Hokaze Junko)",
  img: "a/a1/Hokaze_Junko_Winter_Clothing_%28Anime%29.png/revision/latest?cb=20200925134356",
  opt: { series: ["禁書", "アストラル・バディ", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "北条彩鈴 (Houjou Arei)",
  img: "b/b6/Houjou_Arei_%28Astral_Buddy%29.png/revision/latest?cb=20201003042022",
  opt: { series: ["アストラル・バディ"], affiliation: ["science"] }
},
{
  name: "北条静護 (Houjou Seigo)",
  img: "d/de/Scarred_Doctor_Profile.jpg/revision/latest?cb=20191214032919",
  opt: { series: ["アストラル・バディ"], affiliation: ["science"] }
},
{
  name: "一澤 暁子 (Ichizawa Akiko)",
  img: "2/24/Ichizawa_Akiko.jpg/revision/latest?cb=20181219060441",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "イーコ (Iiko)",
  img: "8/88/Iiko.JPG/revision/latest?cb=20190401062017",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "飯塚 (Iizuka)",
  img: "e/e9/Iizuka_Railgun.png/revision/latest?cb=20201127010532",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "飯棲リタ (Iizumi Rita)",
  img: "f/fd/Iizumi_Rita_RailgunT_%28Anime%29.png/revision/latest?cb=20200828160039",
  opt: { series: ["超電磁砲", "一方通行"], affiliation: ["science"] }
},
{
  name: "居村 (Imura)",
  img: "a/a0/Imura.PNG/revision/latest?cb=20190610082847",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "伊東 (Itou)",
  img: "0/0a/Itou.png/revision/latest?cb=20190712175259",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "城南 朝来 (Jounan Asako)",
  img: "3/3e/Jounan_Asako_profile.jpg/revision/latest?cb=20101113105635",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "ジュンタ (Junta (Railgun anime))",
  img: "f/f1/Junta_%28anime%29.JPG/revision/latest?cb=20110628105548",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "ジュンタ (Junta (Railgun manga))",
  img: "7/73/Junta.JPG/revision/latest?cb=20110628110319",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "重福省帆 (Juufuku Miho)",
  img: "3/34/Juufuku_Miho.jpg/revision/latest?cb=20100511130109",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "鏑木 由美 (Kaburagi Yumi)",
  img: "f/f4/Kaburagi_Yumi.jpg/revision/latest?cb=20181219061214",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "介旅 初矢 (Kaitabi Hatsuya)",
  img: "f/fb/Kaitabi_Hatsuya.png/revision/latest?cb=20100521220419",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "垣根 帝督 (Kakine Teitoku)",
  img: "7/7a/Kakine_Teitoku_%28Anime%29.png/revision/latest?cb=20181103092657",
  opt: { series: ["禁書", "未元物質", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "垣根 帝督 (Kakine Teitoku (Beetle 05))",
  img: "1/1a/Beetle_05.jpg/revision/latest?cb=20140515104838",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "加納 神華 (Kanou Shinka)",
  img: "5/54/NT_12.jpg/revision/latest?cb=20150328101027",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "風斬 氷華 (Kazakiri Hyouka)",
  img: "c/ce/Hyouka.jpg/revision/latest?cb=20150103173458",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "カイツ＝ノックレーベン (Keitz Nokleben)",
  img: "7/78/Keitz_Nokleben_%28Anime%29.png/revision/latest?cb=20200131143511",
  opt: { series: ["超電磁砲", "アストラル・バディ"], affiliation: ["science"] }
},
{
  name: "潔斎 雪紫 (Kessai Kiyoshi)",
  img: "9/98/Kessai_Kiyoshi.png/revision/latest?cb=20210327024600",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "木寺実莉 (Kidera Minori)",
  img: "2/28/Kidera_Minori.png/revision/latest?cb=20190712175312",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "木原数多 (Kihara Amata)",
  img: "c/c5/Toaru_Majutsu_no_Index_II_E19_08m_15s.jpg/revision/latest?cb=20110218165440",
  opt: { series: ["禁書", "未元物質"], affiliation: ["science"] }
},
{
  name: "木原 病理 (Kihara Byouri)",
  img: "e/e9/KiharaByouri_profile.jpg/revision/latest?cb=20130619212522",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "木原 円周 (Kihara Enshuu)",
  img: "d/d5/KiharaEnshuu_profile.jpg/revision/latest?cb=20130619212439",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "木原 幻生 (Kihara Gensei)",
  img: "6/60/Kihara_Gensei_%28Railgun_T%29.png/revision/latest?cb=20200321034219",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "木原端数 (Kihara Hasuu)",
  img: "7/74/Kihara_Hasuu.jpg/revision/latest?cb=20201201150641",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "木原那由他 (Kihara Nayuta)",
  img: "9/93/Kihara_Nayuta.png/revision/latest?cb=20110614165242",
  opt: { series: ["超電磁砲", "禁書"], affiliation: ["science"] }
},
{
  name: "木原 脳幹 (Kihara Noukan)",
  img: "a/ac/Kihara_Noukan_Novel.jpg/revision/latest?cb=20160223102828",
  opt: { series: ["禁書", "アストラル・バディ"], affiliation: ["science"] }
},
{
  name: "木原 乱数 (Kihara Ransuu)",
  img: "c/cd/KiharaRansuu_profile.jpg/revision/latest?cb=20130619212624",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "木原 唯一 (Kihara Yuiitsu)",
  img: "7/7a/Kihara_Yuiitsu_Novel.jpg/revision/latest?cb=20160223122704",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "絹旗 最愛 (Kinuhata Saiai)",
  img: "1/1d/Kinuhata-Saiai.jpg/revision/latest?cb=20190715101744",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "切斑 芽美 (Kirifu Megumi)",
  img: "1/18/Kirifu_Megumi_%28Anime%29.png/revision/latest?cb=20200124054513",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "口囃子早鳥 (Kobayashi Satori)",
  img: "8/8a/Kobayashi_Satori_%28Anime%29.png/revision/latest?cb=20200730131239",
  opt: { series: ["超電磁砲", "アストラル・バディ"], affiliation: ["science"] }
},
{
  name: "駒場 利徳 (Komaba Ritoku)",
  img: "a/a3/Komaba.jpg/revision/latest?cb=20110326024712",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "婚后 光子 (Kongou Mitsuko)",
  img: "b/b2/Kongou_Mitsuko_in_Winter_Clothing_%28Anime%29.png/revision/latest?cb=20200925141300",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "固法 美偉 (Konori Mii)",
  img: "2/25/Konori_Mii_Winter_Clothing_%28Anime%29.png/revision/latest?cb=20200731150018",
  opt: { series: ["超電磁砲", "禁書"], affiliation: ["science"] }
},
{
  name: "鋼盾 掬彦 (Koujun Kikuhiko)",
  img: "9/9c/Koujun_Kikuhiko.png/revision/latest?cb=20100524143055",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "鴻野江 遥希 (Kounoe Haruki)",
  img: "1/10/Kounoe_Haruki.png/revision/latest?cb=20100609022631",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "警策 看取 (Kouzaku Mitori)",
  img: "6/66/Kouzaku_Mitori_%28Anime%29.png/revision/latest?cb=20201001065113",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "雲川 鞠亜 (Kumokawa Maria)",
  img: "1/14/Kumokawa_Maria.jpg/revision/latest?cb=20120415012004",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "雲川 芹亜 (Kumokawa Seria)",
  img: "c/ce/Kumokawa_Seria_Novel.jpg/revision/latest?cb=20170514131633",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "黒夜 海鳥 (Kuroyoru Umidori)",
  img: "e/ee/Kuroyoru_Umidori.jpg/revision/latest?cb=20130706134153",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "黒妻 綿流 (Kurozuma Wataru)",
  img: "8/87/Kurozuma_Wataru.png/revision/latest?cb=20100601190157",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "郭 (Kuruwa)",
  img: "1/15/Kuruwa_Novel.jpg/revision/latest?cb=20160225081644",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "釧路帷子 (Kushiro Katabira)",
  img: "8/87/Kushiro_Katabira.png/revision/latest?cb=20140731174743",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "橋国 亮太 (Kyougoku Ryouta)",
  img: "9/99/Kyougoku_Ryouta.png/revision/latest?cb=20180811005248",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "レディバード (Ladybird)",
  img: "0/06/Ladybird.jpg/revision/latest?cb=20201122034641",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "打ち止め (Last Order)",
  img: "8/84/LastOrder_Profile.png/revision/latest?cb=20110321095954",
  opt: { series: ["禁書", "一方通行", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "舞殿星見（まいどのほしみ） (Maidono Hoshimi)",
  img: "8/8c/Maidono_Hoshimi_headshot.jpg/revision/latest?cb=20200215101326",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "マキ (Maki)",
  img: "a/a5/Maki_%28Anime%29.png/revision/latest?cb=20200731140318",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "牧上 小牧 (Makigami Komaki)",
  img: "a/ad/Makigami_Komaki_%28Astral_Buddy%29.png/revision/latest?cb=20170512130630",
  opt: { series: ["アストラル・バディ"], affiliation: ["science"] }
},
{
  name: "マコ (Mako)",
  img: "f/ff/Makochin.png/revision/latest?cb=20100530194007",
  opt: { series: ["超電磁砲", "アストラル・バディ"], affiliation: ["science"] }
},
{
  name: "マナベ リツキ (Manabe Ritsuki)",
  img: "9/94/Manabe_Ritsuki_%28Anime%29.png/revision/latest?cb=20190803144208",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "鳴護 アリサ (Meigo Arisa)",
  img: "7/71/MeigoArisa_profile.png/revision/latest?cb=20130921135213",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "美濃部 (Minobe)",
  img: "4/4e/Minobe_%28Anime%29.PNG/revision/latest?cb=20190129030656",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "みのり (Minori)",
  img: "1/1a/Minori.png/revision/latest?cb=20130526140537",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "ミサカ一号 (Misaka 1)",
  img: "1/15/Misaka1_profile.jpg/revision/latest?cb=20130710175144",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "ミサカ一〇〇三一号 (Misaka 10031)",
  img: "e/e3/Misaka10031_animeProfile.jpg/revision/latest?cb=20130623103107",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "ミサカ一〇〇三二号 (Misaka 10032)",
  img: "c/ce/Misaka_10032_in_Winter_Clothing_%28Anime%29.png/revision/latest?cb=20200926035942",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "ミサカ一〇〇三九号 (Misaka 10039)",
  img: "8/88/Misaka10039_animeProfile.jpg/revision/latest?cb=20130712083459",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "ミサカ一〇〇四六号 (Misaka 10046)",
  img: "5/59/Misaka_10046_%28Anime%29.png/revision/latest?cb=20190802135736",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "ミサカ一〇七七七号 (Misaka 10777)",
  img: "d/df/Misaka_10777_%28Anime%29.jpg/revision/latest?cb=20190301125222",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "ミサカ一三五七七号 (Misaka 13577)",
  img: "a/ad/Misaka13577_animeProfile.jpg/revision/latest?cb=20130712083500",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "ミサカ一九〇九〇号 (Misaka 19090)",
  img: "c/cf/Misaka_19090_profile.png/revision/latest?cb=20131101092152",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "ミサカ八九一二号 (Misaka 8912)",
  img: "f/f9/Misaka8912_animeProfile.jpg/revision/latest?cb=20130524121847",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "ミサカ九九八二号 (Misaka 9982)",
  img: "c/c7/Misaka9982_animeProfile.jpg/revision/latest?cb=20130504185340",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "御坂 美琴 (Misaka Mikoto)",
  img: "1/19/Misaka.png/revision/latest?cb=20120511115657",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "番外個体（ミサカワースト） (Misaka Worst)",
  img: "1/16/Misaka_Worst_%28Anime%29.png/revision/latest?cb=20190215134933",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "蜜蟻 愛愉 (Mitsuari Ayu)",
  img: "a/a5/Mitsuari_Ayu_profile.jpg/revision/latest?cb=20190826140440",
  opt: { series: ["禁書", "アストラル・バディ"], affiliation: ["science"] }
},
{
  name: "美山 写影 (Miyama Shaei)",
  img: "e/e9/Miyama_Shaei_%28Anime%29.png/revision/latest?cb=20200724161835",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "実生 好子 (Miyoshi Yoshiko)",
  img: "6/64/Miyoshi_Yoshiko.png/revision/latest?cb=20111224133022",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "モガリ タクミ (Mogari Takumi)",
  img: "9/97/Mogari_Takumi_%28Anime%29.png/revision/latest?cb=20190803144152",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "麦野 沈利 (Mugino Shizuri)",
  img: "7/7d/Mugino-Railgun.png/revision/latest?cb=20130531214206",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "結標 淡希 (Musujime Awaki)",
  img: "e/e4/Musujime_Awaki.jpg/revision/latest?cb=20101112155812",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "むーちゃん (Muu)",
  img: "1/1e/Muu_profile.png/revision/latest?cb=20120507081042",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "名荷原弘見 (Nakahara Hiromi)",
  img: "4/4f/Nakahara_Hiromi.png/revision/latest?cb=20190712175331",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "中邑 (Nakamura (manager))",
  img: "8/85/Nakamura.png/revision/latest?cb=20210228150512",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "亡本 裏蔵 (Nakimoto Rizou)",
  img: "e/e5/Nakimoto_Rizou_%28Anime%29.png/revision/latest?cb=20190810135753",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "亡本裏蔵の祕書 (Nakimoto Rizou's Secretary)",
  img: "1/15/Nakimoto_Rizou%27s_Secretary_%28Anime%29.png/revision/latest?cb=20191027002736",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "ナオ (Nao)",
  img: "d/d3/Nao_profile.jpg/revision/latest?cb=20130504184950",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "ナオヤ (Naoya)",
  img: "9/99/Naoya.jpg/revision/latest?cb=20140412044727",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "西雄 (Nishio)",
  img: "b/b2/Nishio_%28Anime%29.png/revision/latest?cb=20190719134711",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "ノリコ (Noriko)",
  img: "4/45/Noriko.PNG/revision/latest?cb=20191108232942",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "布束 砥信 (Nunotaba Shinobu)",
  img: "0/02/Nunotaba_shinobu.png/revision/latest?cb=20130420062620",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "丘原 燎多 (Okahara Ryouta)",
  img: "0/02/Okahara_Ryouta.png/revision/latest?cb=20100526144939",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "重石 (Omoshi)",
  img: "f/fc/Omoshi_%28Anime%29.png/revision/latest?cb=20200124143422",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "大河内 巡観 (Ookawachi Megumi)",
  img: "3/3a/Ookawachi_Megumi_%28Anime%29.png/revision/latest?cb=20200731141325",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "親船 最中 (Oyafune Monaka)",
  img: "2/23/OyafuneMonaka-AnimeProfile.jpg/revision/latest?cb=20181012183026",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "親船最中の祕書 (Oyafune Monaka's Secretary)",
  img: "6/6e/Oyafune_Monaka%27s_Secretary.png/revision/latest?cb=20191028222301",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "親船 素甘 (Oyafune Suama)",
  img: "0/0b/OyafuneSuama-AnimeProfile.jpg/revision/latest?cb=20181012183031",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "紙袋をかぶったバニーガール (Paper Bag Bunny Girl)",
  img: "c/ce/Paper_Bag_Bunny_Girl_Profile.jpg/revision/latest?cb=20160223100637",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "海賊ラジオDJ (Pirate Radio DJ)",
  img: "9/97/Pirate_Radio_DJ_%28Anime%29.png/revision/latest?cb=20200117142302",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "博士 (Professor)",
  img: "d/d0/Professor_%28Anime%29.png/revision/latest?cb=20181103090213",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "わんこ検察官 (Puppy Prosecutor)",
  img: "e/e2/Puppy_Prosecutor.jpg/revision/latest?cb=20180307221837",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "楽丘豊富 (Rakuoka Houfu)",
  img: "6/6a/Rakuoka_Houfu.jpg/revision/latest?cb=20201122033959",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "恋査 #028 (Rensa #28)",
  img: "9/9e/Rensa28_Profile.jpg/revision/latest?cb=20130706135928",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "恋査 #029 (Rensa #29)",
  img: "c/c2/Rensa29_Profile.jpg/revision/latest?cb=20130709180703",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "リエ (Rie)",
  img: "b/ba/Rie.jpg/revision/latest?cb=20140412044816",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "災誤 (Saigo)",
  img: "9/95/Saigo_%28Anime%29.PNG/revision/latest?cb=20181209232457",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "才郷 良太 (Saigou Ryouta)",
  img: "5/51/SaigouRyouta_profile.jpg/revision/latest?cb=20110307162517",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "西東颯太 (Saitou Souta)",
  img: "d/df/Saitou_Souta.PNG/revision/latest?cb=20191109061036",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "坂島 道端 (Sakashima Michibata)",
  img: "d/d1/Sakashima_Michibata_Novel.jpg/revision/latest?cb=20160612061038",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "咲蓮誘璃 (Sakibasu Yuri)",
  img: "b/ba/Sakibasu_Yuri.jpg/revision/latest?cb=20181116195402",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "作楽木ナルハ (Sakuragi Naruha)",
  img: "b/b6/Sakuragi_Naruha_RailgunT_%28Anime%29.png/revision/latest?cb=20200828160818",
  opt: { series: ["超電磁砲", "一方通行"], affiliation: ["science"] }
},
{
  name: "査楽 (Saraku)",
  img: "0/03/Saraku-AnimeProfile.png/revision/latest?cb=20181118053425",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "佐天 涙子 (Saten Ruiko)",
  img: "7/7f/Saten_Ruiko_Winter_Clothing_%28Anime%29.png/revision/latest?cb=20200814135039",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "サトシ (Satoshi)",
  img: "1/13/Satoshi_profile.png/revision/latest?cb=20141106150459",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "清ヶ太郞丸 (Seike Taroumaru)",
  img: "6/60/Seike_Taroumaru_RailgunT_%28Anime%29.png/revision/latest?cb=20200905110710",
  opt: { series: ["超電磁砲", "一方通行"], affiliation: ["science"] }
},
{
  name: "神苑小路 瑠璃懸巣 (Shin'enkouji Rurikakesu)",
  img: "f/fc/Shinenkouji_Rurikakesu.png/revision/latest?cb=20210226013124",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "潮岸 (Shiokishi)",
  img: "2/2a/Shiokishi_without_suit_%28Anime%29.png/revision/latest?cb=20190125144011",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "白井 黒子 (Shirai Kuroko)",
  img: "e/e4/Shirai_Kuroko_Winter_Clothing_%28Anime%29.png/revision/latest?cb=20200731141815",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "白絹仄火 (Shirakinu Honoka)",
  img: "d/dd/Shirakinu_Honoka.png/revision/latest?cb=20190929070804",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "食蜂 操祈 (Shokuhou Misaki)",
  img: "a/a5/Shokuhou_Misaki_in_Winter_Clothing_%28Anime%29.png/revision/latest?cb=20201005134844",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "春暖嬉美 (Shundan Kimi)",
  img: "f/f8/Kimi_%28color%29.jpg/revision/latest?cb=20200307194259",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "蠢動 俊三 (Shundou Toshizou)",
  img: "8/88/Shundou_Toshizou_%28Astral_Buddy%29.PNG/revision/latest?cb=20181228123946",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "シャットアウラ＝セクウェンツィア (Shutaura Sequenzia)",
  img: "a/a3/Shutaura_sequenzia-movie.jpg/revision/latest?cb=20130915154929",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "削板 軍覇 (Sogiita Gunha)",
  img: "1/13/GunhaRailgunT.png/revision/latest?cb=20191215052228",
  opt: { series: ["禁書", "アストラル・バディ", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "ステファニー＝ゴージャスパレス (Stephanie Gorgeouspalace)",
  img: "a/a6/Stephanie_Gorgeouspalace_%28Anime%29.jpg/revision/latest?cb=20190722201514",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "杉谷 (Sugitani)",
  img: "1/16/Sugitani_%28Anime%29.png/revision/latest?cb=20190205035435",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "杉山 枝雄 (Sugiyama Edao)",
  img: "4/4c/SugiyamaEdao_profile.jpg/revision/latest?cb=20140508222932",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "砂皿 緻密 (Sunazara Chimitsu)",
  img: "1/1a/Sunazara_Anime_.png/revision/latest?cb=20181104082219",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "たっ (Ta)",
  img: "e/e4/Ta_kun_%28Anime%29.png/revision/latest?cb=20200731140720",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "鷹田杳子 (Takada Youko)",
  img: "d/df/Takada_Youko.png/revision/latest?cb=20190712175322",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "高梁 (Takahashi)",
  img: "0/03/Takahashi.png/revision/latest?cb=20190712175348",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "滝壺 理后 (Takitsubo Rikou)",
  img: "d/d8/Takitsubo_Rikou_%28Anime%29.png/revision/latest?cb=20210220145832",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "タメゾウ (Tamezou)",
  img: "0/0f/Tamezou.png/revision/latest?cb=20100602123554",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "道（タオ） (Tao)",
  img: "e/e8/Tao_%28Accelerator%29.PNG/revision/latest?cb=20190128023002",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "鉄装 綴里 (Tessou Tsuzuri)",
  img: "e/ea/Tessou_Tsuzuri.png/revision/latest?cb=20100625124939",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "テツ (Tetsu)",
  img: "6/62/Tetsu_profile.png/revision/latest?cb=20141106150555",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "鉄網 (Tetsumou)",
  img: "a/a1/Tetsumou-AnimeProfile.JPG/revision/latest?cb=20190206193756",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "テレスティーナ＝木原＝ライフライン (Therestina Kihara Lifeline)",
  img: "2/2b/Toaru_Kagaku_no_Railgun_S_E21_23m_11s.jpg/revision/latest?cb=20130908110054",
  opt: { series: ["超電磁砲", "禁書"], affiliation: ["science"] }
},
{
  name: "トマス＝プラチナバーグ (Thomas Platinaburg)",
  img: "a/a2/Thomas_Platinaburg_%28Anime%29.png/revision/latest?cb=20190118145818",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "飛緒 まみ (Tobio Mami)",
  img: "8/85/Tobio_Mami_Accel.png/revision/latest?cb=20190706192006",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "飛緒 ゆみ (Tobio Yumi)",
  img: "c/c5/Tobio_Yumi_Accel.png/revision/latest?cb=20180506105201",
  opt: { series: ["一方通行"], affiliation: ["science"] }
},
{
  name: "等々力 (Todoroki)",
  img: "e/e8/Todoroki_%28Anime%29.png/revision/latest?cb=20201019082856",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "十河 麻実 (Togawa Asami)",
  img: "f/f5/Sogou_Mami.PNG/revision/latest?cb=20190224230753",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "寮監 (Tokiwadai Dorm Supervisor)",
  img: "7/75/Ryoukan.png/revision/latest?cb=20200726094554",
  opt: { series: ["禁書", "アストラル・バディ", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "遠峰叶理 (Toomine Kanari)",
  img: "3/3b/Toomine_face.png/revision/latest?cb=20181001014515",
  opt: { series: ["アストラル・バディ"], affiliation: ["science"] }
},
{
  name: "トリック (Trick)",
  img: "3/3d/Trick.png/revision/latest?cb=20100529193453",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "土御門 舞夏 (Tsuchimikado Maika)",
  img: "5/5d/Maika.jpg/revision/latest?cb=20111118134850",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "月詠 小萌 (Tsukuyomi Komoe)",
  img: "d/d0/Komoe.png/revision/latest?cb=20120310184253",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "釣鐘茶寮 (Tsurigane Saryou)",
  img: "1/1b/Tsurigane.jpg/revision/latest?cb=20201202084431",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "初春 飾利 (Uiharu Kazari)",
  img: "e/e9/Uiharu_Kazari_Winter_Clothing_%28Anime%29.png/revision/latest?cb=20200731150526",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "海原 光貴 (Unabara Mitsuki)",
  img: "8/80/Mitsuki_hahhh.jpg/revision/latest?cb=20100617202439",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "ウサミミ (Usamimi)",
  img: "a/a5/Usamimi_profile.jpg/revision/latest?cb=20160223122155",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "観光喰い（バキュームピース） (Vacuum Piece)",
  img: "8/8f/Vacuum_Piece.jpg/revision/latest?cb=20201124153033",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "ヴィヴァーナ＝オニグマ (Vivana Oniguma)",
  img: "1/1f/Vivana_Oniguma.jpg/revision/latest?cb=20201122033518",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "鰐河雷斧 (Wanigawa Raifu)",
  img: "9/92/Raifu.png/revision/latest?cb=20191008040112",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "湾内 絹保 (Wannai Kinuho)",
  img: "c/c7/Wannai_Kinuho_RailgunT_%28Anime%29.png/revision/latest?cb=20200215023023",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "綿辺 (Watanabe)",
  img: "3/38/Watanabe_%28Anime%29.png/revision/latest?cb=20200117142535",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "ミサカネットワーク総体 (Will of the Whole Misaka Network)",
  img: "d/dc/Misaka_Will_Novel.jpg/revision/latest?cb=20170514082113",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "薬丸医月 (Yakumaru Itsuki)",
  img: "0/0a/Yakumaru_Itsuki_RailgunT_%28Anime%29.jpg/revision/latest?cb=20200907144458",
  opt: { series: ["超電磁砲", "一方通行"], affiliation: ["science"] }
},
{
  name: "薬味 久子 (Yakumi Hisako)",
  img: "7/75/Yakumi.jpg/revision/latest?cb=20130525182830",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "山根 (Yamane)",
  img: "b/b5/Yamane.JPG/revision/latest?cb=20111210021123",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "山城 府昭 (Yamashiro Shoubu)",
  img: "2/22/Yamashiro_Shoubu_%28Railgun%29.png/revision/latest?cb=20201027033844",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "山手 (Yamate)",
  img: "1/1f/Yamate-AnimeProfile.png/revision/latest?cb=20181027212317",
  opt: { series: ["禁書"], affiliation: ["science"] }
},
{
  name: "柳迫 碧美 (Yanagisako Aomi)",
  img: "e/e3/Yanagisako_Aomi_%28Anime%29.png/revision/latest?cb=20200731144609",
  opt: { series: ["超電磁砲"], affiliation: ["science"] }
},
{
  name: "誉望 万化 (Yobou Banka)",
  img: "0/04/Yobou_Banka-AnimeProfile.png/revision/latest?cb=20181027211938",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "黄泉川 愛穂 (Yomikawa Aiho)",
  img: "5/5a/Yomi.jpg/revision/latest?cb=20120308130041",
  opt: { series: ["禁書", "一方通行", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "芳川 桔梗 (Yoshikawa Kikyou)",
  img: "5/50/Yoshikawa.jpg/revision/latest?cb=20100620232632",
  opt: { series: ["禁書", "一方通行", "超電磁砲"], affiliation: ["science"] }
},
{
  name: "弓箭入鹿 (Yumiya Iruka)",
  img: "2/27/Yumiya_Iruka_Color_%28Astral_Buddy%29.png/revision/latest?cb=20201101055215",
  opt: { series: ["アストラル・バディ"], affiliation: ["science"] }
},
{
  name: "弓箭 猟虎 (Yumiya Rakko)",
  img: "0/0b/Yumiya_Rakko_%28Anime%29.png/revision/latest?cb=20200814134550",
  opt: { series: ["超電磁砲", "禁書"], affiliation: ["science"] }
},
{
  name: "悠里千夜 (Yuuri Senya)",
  img: "8/8c/Yuuri_Senya_%28Astral_Buddy%29.png/revision/latest?cb=20201002132306",
  opt: { series: ["アストラル・バディ"], affiliation: ["science"] }
},
{
  name: "杠林檎 (Yuzuriha Ringo)",
  img: "7/71/Yuzuriha_Ringo_DM_profile.png/revision/latest?cb=20201202084836",
  opt: { series: ["未元物質"], affiliation: ["science"] }
},
{
  name: "ビバリー＝シースルー (Beverly Seethrough)",
  img: "1/1f/BeverlySeethrough_profile.jpg/revision/latest?cb=20140615112329",
  opt: { series: ["超電磁砲", "禁書"], affiliation: ["other"] }
},
{
  name: "チャールズ＝コンダー (Charles Conder)",
  img: "6/6a/Charles_ConderProfile.jpg/revision/latest?cb=20101212032417",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "ディダロス＝セクウェンツィア (Daedalus Sequenzia)",
  img: "2/2e/Daedalus_sequenzia-movie.jpg/revision/latest?cb=20130908152941",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "ディグルヴ (Digurv)",
  img: "9/92/Digurv_%28Anime%29.png/revision/latest?cb=20190215135537",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "エーカー＝ルゴーニ (Eiker Lugoni)",
  img: "f/f9/Eiker_%28Anime%29.png/revision/latest?cb=20181207144747",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "エカリエーリャ＝A＝プロンスカヤ (Ekalielya A. Pronskaya)",
  img: "c/c5/Ekalielya_Pronskaya_%28Anime%29.jpg/revision/latest?cb=20190301170932",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "平山ラミ (Hirayama Rami)",
  img: "5/55/Hirayama_Rami.PNG/revision/latest?cb=20180529045033",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "人皮扶美の母 (Hitokawa Hasami's Mother)",
  img: "6/6c/Hitokawa_Hasami%27s_mother.png/revision/latest?cb=20190728025007",
  opt: { series: ["一方通行"], affiliation: ["other"] }
},
{
  name: "一一一 (ひとついはじめ)  (Hitotsui Hajime)",
  img: "0/03/Hitotsui_Hajime.JPG/revision/latest?cb=20110807031056",
  opt: { series: ["超電磁砲", "禁書"], affiliation: ["other"] }
},
{
  name: "上条 詩菜 (Kamijou Shiina)",
  img: "0/02/Shiina.jpg/revision/latest?cb=20110412014149",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "上条 刀夜 (Kamijou Touya)",
  img: "a/ac/Kamijou_Touya.PNG/revision/latest?cb=20101104040204",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "婚后光子の父親 (Kongou Mitsuko's Father)",
  img: "0/05/Kongou_Mitsuko_Father_Anime.png/revision/latest?cb=20160523123950",
  opt: { series: ["超電磁砲"], affiliation: ["other"] }
},
{
  name: "李 (Li)",
  img: "1/11/Ranger_General_Li.PNG/revision/latest?cb=20190612060200",
  opt: { series: ["一方通行"], affiliation: ["other"] }
},
{
  name: "李芳蘭 (Li Fanglan)",
  img: "e/e2/Li_Fanglan.PNG/revision/latest?cb=20190612060149",
  opt: { series: ["一方通行"], affiliation: ["other"] }
},
{
  name: "松乃山繁美 (Matsunoyama Shigemi)",
  img: "2/23/Matsunoyama_Shigemi.png/revision/latest?cb=20200807160643",
  opt: { series: ["超電磁砲"], affiliation: ["other"] }
},
{
  name: "御坂 美鈴 (Misaka Misuzu)",
  img: "7/75/Misaka_Misuzu_profile.png/revision/latest?cb=20140816183928",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["other"] }
},
{
  name: "御坂 旅掛 (Misaka Tabigake)",
  img: "4/45/Misaka_Tabigake.jpg/revision/latest?cb=20140520005308",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "ミュッセ (Musset)",
  img: "e/e6/Musset_%28Anime%29.png/revision/latest?cb=20181207150019",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "オリーブ＝ホリデイ (Olive Holiday)",
  img: "3/36/OliveHoliday_profile.jpg/revision/latest?cb=20140615112424",
  opt: { series: ["超電磁砲"], affiliation: ["other"] }
},
{
  name: "近江 手裏 (Oumi Shuri)",
  img: "1/1c/OumiShuriNovel.jpg/revision/latest?cb=20191219040640",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["other"] }
},
{
  name: "パトリシア＝バードウェイ (Patricia Birdway)",
  img: "a/a3/Patricia_profile.jpg/revision/latest?cb=20110815204504",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "リッチモンド (Richmond)",
  img: "4/41/Richmond_%28Anime%29.png/revision/latest?cb=20181209173800",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "ロベルト＝カッツェ (Roberto Katze)",
  img: "b/b8/Robert-Katze_Profile.jpg/revision/latest?cb=20111212023213",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "ローズライン＝クラックハルト (Roseline Krackhart)",
  img: "9/91/RoselineKrackhart.jpg/revision/latest?cb=20200527115420",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "サフリー＝オープンディズ (Saflee Opendays)",
  img: "a/a2/SafleeOpendays_profile.png/revision/latest?cb=20190427020706",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "ソールジエ＝Ｉ＝クライニコフ (Soldier I. Krainikov)",
  img: "3/3c/Soldier_I._Krainikov_%28Anime%29.png/revision/latest?cb=20190208135351",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "田中 (Tanaka)",
  img: "a/ad/Tanaka.PNG/revision/latest?cb=20181230153442",
  opt: { series: ["禁書"], affiliation: ["other"] }
},
{
  name: "野洲 (Yasu)",
  img: "d/df/Yasu_Railgun.png/revision/latest?cb=20180401034207",
  opt: { series: ["禁書", "超電磁砲"], affiliation: ["other"] }
}
];
