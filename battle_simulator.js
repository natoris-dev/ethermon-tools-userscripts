// ==UserScript==
// @name         Ethermon Battle Simulator
// @namespace    https://etheremon-tools.firebaseapp.com/userscript/battle_simulator.js
// @version      1.0.2021102901
// @description  Ethermon Battle Simulator
// @author       natoris
// @match        https://ethermon.io/*
// @icon         https://ethermon.io/assets/images/icon.ico
// @grant        none
// ==/UserScript==

EthermonData = function () {
  this.ETHERMON_TYPES = {
    1: { name: "Insect", advantageType: 14 },
    2: { name: "Dragon", advantageType: 16 },
    3: { name: "Mystic", advantageType: 8 },
    4: { name: "Fire", advantageType: 9 },
    5: { name: "Phantom", advantageType: 2 },
    6: { name: "Earth", advantageType: 11 },
    7: { name: "Neutral", advantageType: 3 },
    8: { name: "Telepath", advantageType: 5 },
    9: { name: "Iron", advantageType: 15 },
    11: { name: "Lightning", advantageType: 18 },
    12: { name: "Combat", advantageType: 7 },
    13: { name: "Flyer", advantageType: 6 },
    14: { name: "Leaf", advantageType: 17 },
    15: { name: "Ice", advantageType: 13 },
    16: { name: "Toxin", advantageType: 12 },
    17: { name: "Rock", advantageType: 1 },
    18: { name: "Water", advantageType: 4 },
  };

  this.ETHERMON_MONSTERS = {
    1: { Name: "Dilloom", NameJa: "ジローン" },
    2: { Name: "Dynamouse", NameJa: "ダイナマウス" },
    3: { Name: "Nageel", NameJa: "ナガウナギ" },
    4: { Name: "Eekape", NameJa: "エーケイプ" },
    5: { Name: "Palytid", NameJa: "ペイリタイド" },
    6: { Name: "Mianari", NameJa: "ミーアナリ" },
    7: { Name: "Berrball", NameJa: "ベリーボール" },
    8: { Name: "Cesstoid", NameJa: "チェストイド" },
    9: { Name: "Mizumi", NameJa: "ミズミ" },
    10: { Name: "Chulember", NameJa: "クレンバー" },
    11: { Name: "Geckno", NameJa: "ヤモリー" },
    12: { Name: "Blockid", NameJa: "ブロックキッド" },
    13: { Name: "Thermolophus", NameJa: "サーモロフス" },
    14: { Name: "Keradon", NameJa: "ケラドン" },
    15: { Name: "Vermillios", NameJa: "バーメリオン" },
    16: { Name: "Vivorin", NameJa: "ビボリン" },
    17: { Name: "Windora", NameJa: "ウィンドラ" },
    18: { Name: "GeeNee", NameJa: "ギーネー" },
    19: { Name: "Quillster", NameJa: "羽ジェロ" },
    20: { Name: "Baulder", NameJa: "バルダー" },
    22: { Name: "Vibe", NameJa: "バイブ" },
    23: { Name: "Swifty", NameJa: "スイフティ" },
    24: { Name: "Pangrass", NameJa: "草パンダ" },
    25: { Name: "Mintol", NameJa: "ミントル" },
    26: { Name: "Omnon", NameJa: "オムノン" },
    27: { Name: "Kyari", NameJa: "キャリ" },
    28: { Name: "Lectrobe", NameJa: "レクトローブ" },
    29: { Name: "Mirrie", NameJa: "ミリー" },
    30: { Name: "Cobrus", NameJa: "コブロス" },
    31: { Name: "Lollopunch", NameJa: "ロリパンチ" },
    32: { Name: "Odwig", NameJa: "オドウイッグ" },
    33: { Name: "Tygloo", NameJa: "ティグルー" },
    34: { Name: "Pudde", NameJa: "パッデ" },
    35: { Name: "Mushmite", NameJa: "マッシュマイト" },
    36: { Name: "Polynimo", NameJa: "ポリニモ" },
    37: { Name: "Fuirrel", NameJa: "毛リス" },
    38: { Name: "Dillow", NameJa: "ジロール" },
    39: { Name: "Pyrode", NameJa: "パイロネズミ" },
    40: { Name: "Moranagi", NameJa: "モラナギ" },
    41: { Name: "Moldec", NameJa: "カビック" },
    42: { Name: "Oculid", NameJa: "オキュリッド" },
    43: { Name: "Surinari", NameJa: "スリナリ" },
    44: { Name: "Silvyx", NameJa: "シルビックス" },
    45: { Name: "Coronoid", NameJa: "コロノイド" },
    46: { Name: "Watadzumi", NameJa: "ワタドズミ" },
    47: { Name: "Fuenago", NameJa: "フューナゴ" },
    48: { Name: "Geckelic", NameJa: "ヤモリック" },
    49: { Name: "Blockall", NameJa: "ブロッカール" },
    50: { Name: "Geerex", NameJa: "ギーレックス" },
    51: { Name: "Dredrock", NameJa: "ドレッドロック" },
    52: { Name: "Florost", NameJa: "フロロスト" },
    53: { Name: "Yumee", NameJa: "ウメー" },
    54: { Name: "Candeliria", NameJa: "キャンデリーナ" },
    55: { Name: "Wrektric", NameJa: "レクティック" },
    56: { Name: "Reflectre", NameJa: "ウツシン" },
    57: { Name: "Dracobra", NameJa: "ドラコブラ" },
    58: { Name: "Mawverize", NameJa: "マーべライズ" },
    59: { Name: "Occlusk", NameJa: "オックラスト" },
    60: { Name: "Mechloo", NameJa: "メチルー" },
    61: { Name: "Aquary", NameJa: "アクアリー" },
    62: { Name: "Squake", NameJa: "スクアーク" },
    63: { Name: "Qairrel", NameJa: "クアイレール" },
    64: { Name: "Dillossus", NameJa: "ジロクス" },
    65: { Name: "Raxplode", NameJa: "爆発ネズミ" },
    66: { Name: "Dehedra", NameJa: "デヘドラ" },
    67: { Name: "Aphroxid", NameJa: "アプロッド" },
    68: { Name: "Tekagon", NameJa: "テカゴン" },
    69: { Name: "Aromerita", NameJa: "アロメリータ" },
    70: { Name: "Liscious", NameJa: "ウマミン" },
    71: { Name: "Resurvy", NameJa: "リザービー" },
    72: { Name: "Morinori", NameJa: "モリノリ" },
    73: { Name: "Gremin", NameJa: "グレミン" },
    74: { Name: "Spoxin", NameJa: "スポンク" },
    75: { Name: "Intelix", NameJa: "インテリックス" },
    76: { Name: "Lilspri", NameJa: "リルスプリ" },
    77: { Name: "Inkami", NameJa: "インカミ" },
    78: { Name: "Redhandit", NameJa: "ゲンゴーハーン" },
    79: { Name: "Endorr", NameJa: "エンドルー" },
    80: { Name: "Sonectid", NameJa: "ソネクテッド" },
    81: { Name: "Cryptise", NameJa: "クリプタイズ" },
    82: { Name: "Tenteink", NameJa: "テンテインク" },
    83: { Name: "Criminiac", NameJa: "ドロボーン" },
    84: { Name: "Endrowth", NameJa: "エンドロース" },
    85: { Name: "Nuklectid", NameJa: "ナクルテッド" },
    86: { Name: "Cremortus", NameJa: "クレモルス" },
    87: { Name: "Monstratos", NameJa: "モンストラトス" },
    88: { Name: "Duscre", NameJa: "ドゥスクレ" },
    89: { Name: "Mapla", NameJa: "マプラ" },
    90: { Name: "Barkindle", NameJa: "バーキンドル" },
    91: { Name: "Wolflaze", NameJa: "ウルフレイズ" },
    92: { Name: "Wolverize", NameJa: "ウルフライズ" },
    93: { Name: "Ruffski", NameJa: "ラフスキー" },
    94: { Name: "Arblizen", NameJa: "アルブリゼン" },
    95: { Name: "Siberizen", NameJa: "シベリゼン" },
    96: { Name: "Tundrill", NameJa: "ツンドリル" },
    97: { Name: "Matara", NameJa: "マタラ" },
    98: { Name: "Matarama", NameJa: "マタラマ" },
    99: { Name: "Malakel'e", NameJa: "マラケレ" },
    100: { Name: "Kahukel'e", NameJa: "カフケレ" },
    101: { Name: "Tobeno", NameJa: "トベノー" },
    102: { Name: "Puremu", NameJa: "プレミュー" },
    103: { Name: "Flaraton", NameJa: "フララトン" },
    104: { Name: "Inferacoon", NameJa: "アライグマリン" },
    105: { Name: "Scubella", NameJa: "スキューベラ" },
    106: { Name: "Ekopi", NameJa: "エコピー" },
    107: { Name: "Ekoraft", NameJa: "エコアラ" },
    108: { Name: "Expertri", NameJa: "エクスペトリ" },
    109: { Name: "Purgast", NameJa: "プルガスト" },
    110: { Name: "Smeltal", NameJa: "スメルタル" },
    111: { Name: "Vorvosip", NameJa: "ボルボシップ" },
    112: { Name: "Devostoric", NameJa: "デボストリック" },
    113: { Name: "Sauntler", NameJa: "サウントラー" },
    114: { Name: "Zapillar", NameJa: "ゼプラー" },
    115: { Name: "Infiluv", NameJa: "ズットラブ" },
    116: { Name: "Krubble", NameJa: "クルブル" },
    117: { Name: "Krabboul", NameJa: "クラボウル" },
    118: { Name: "Capareef", NameJa: "ケイパリーフ" },
    119: { Name: "Tipsillar", NameJa: "ティップシラー" },
    120: { Name: "Mesmerhys", NameJa: "メスメリー" },
    121: { Name: "Chromothic", NameJa: "クロモティック" },
    122: { Name: "Grubgas", NameJa: "クルブガス" },
    123: { Name: "Polupa", NameJa: "ポルパ" },
    124: { Name: "Noxibeet", NameJa: "ノキビート" },
    125: { Name: "Kelpony", NameJa: "ケルポニー" },
    126: { Name: "Chevalage", NameJa: "ケバラーゲ" },
    127: { Name: "Reefallion", NameJa: "リーファリオン" },
    128: { Name: "Lemeeni", NameJa: "レメーニ" },
    129: { Name: "Lemeeglar", NameJa: "レメーグラー" },
    130: { Name: "Primasham", NameJa: "プリマシャム" },
    131: { Name: "Iquander", NameJa: "イクワインダー" },
    132: { Name: "Iquanze", NameJa: "イクアンゼ" },
    133: { Name: "Wrecktile", NameJa: "レックティル" },
    134: { Name: "Mindallion", NameJa: "マインドーン" },
    135: { Name: "Talisment", NameJa: "タリスメント" },
    136: { Name: "Krakowee", NameJa: "クラクウィー" },
    137: { Name: "Alligwamp", NameJa: "ワニワンプ" },
    138: { Name: "Felistar", NameJa: "フェリスター" },
    139: { Name: "Galaleo", NameJa: "ガラレオ" },
    140: { Name: "Dusprite", NameJa: "ダスピー" },
    141: { Name: "Spoxie", NameJa: "スポッキー" },
    142: { Name: "Clothom", NameJa: "ヌノーン" },
    143: { Name: "Blankosu", NameJa: "フトーン" },
    144: { Name: "Pistaccoul", NameJa: "ピスタッキー" },
    145: { Name: "Fantasnut", NameJa: "ファンタスナッツ" },
    146: { Name: "Kikapole", NameJa: "キカポール" },
    147: { Name: "Ribibrawl", NameJa: "リビブロウル" },
    148: { Name: "Vexigon", NameJa: "ベクゴン" },
    149: { Name: "Noxareo", NameJa: "レックノオ" },
    150: { Name: "Darcastro", NameJa: "ドラカストロ" },
    151: { Name: "Greipawn", NameJa: "グレープリン" },
    152: { Name: "Vitisir", NameJa: "ビティサー" },
    153: { Name: "Vernirox", NameJa: "バーニロックス" },
    154: { Name: "Quadrossal", NameJa: "クアドロサル" },
    155: { Name: "Zedakazm", NameJa: "ゼダカン" },
    156: { Name: "Armadigoal", NameJa: "アルマジゴール" },
    157: { Name: "Armordigoal", NameJa: "アルモージゴール" },
    158: { Name: "Pangrove", NameJa: "パングローブ" },
    159: { Name: "Kyberra", NameJa: "カイバーラ" },
    160: { Name: "Kyberram", NameJa: "カイバーラム" },
    161: { Name: "Pigperus", NameJa: "Pigperus" },
    162: { Name: "Boarazer", NameJa: "Boarazer" },
    163: { Name: "Piggicius", NameJa: "Piggicius" },
    164: { Name: "Wartoink", NameJa: "Wartoink" },
    165: { Name: "Kumabagu", NameJa: "Kumabagu" },
    166: { Name: "Spoulder", NameJa: "Spoulder" },
    167: { Name: "Cavachnid", NameJa: "Cavachnid" },
    168: { Name: "Foxeez", NameJa: "Foxeez" },
    169: { Name: "Coyoteez", NameJa: "Coyoteez" },
    170: { Name: "Roichirp", NameJa: "Roichirp" },
    171: { Name: "Hawkrey", NameJa: "Hawkrey" },
    172: { Name: "Emperazor", NameJa: "Emperazor" },
    173: { Name: "Batflare", NameJa: "Batflare" },
    174: { Name: "Inferbat", NameJa: "Inferbat" },
    175: { Name: "Zyracier", NameJa: "Zyracier" },
    176: { Name: "Watuber", NameJa: "Watuber" },
    177: { Name: "Floatuber", NameJa: "Floatuber" },
    178: { Name: "Chambrawl", NameJa: "Chambrawl" },
    179: { Name: "Vaudequin", NameJa: "Vaudequin" },
    180: { Name: "Helichrome", NameJa: "Helichrome" },
    181: { Name: "Boomergon", NameJa: "Boomergon" },
    182: { Name: "Flairon", NameJa: "Flairon" },
    183: { Name: "Onchor", NameJa: "Onchor" },
    184: { Name: "Opmarine", NameJa: "Opmarine" },
    185: { Name: "Opsidian", NameJa: "Opsidian" },
    186: { Name: "シュリー", NameJa: "シュリー" },
    187: { Name: "シリカ", NameJa: "シリカ" },
    188: { Name: "Sinexus", NameJa: "Sinexus" },
    189: { Name: "Cannubis", NameJa: "Cannubis" },
    190: { Name: "Keefo", NameJa: "Keefo" },
    191: { Name: "Duwat", NameJa: "Duwat" },
    192: { Name: "Finray", NameJa: "Finray" },
    193: { Name: "Ogoprowl", NameJa: "Ogoprowl" },
    194: { Name: "メガSephysar", NameJa: "メガSephysar" },
    195: { Name: "Sephysar", NameJa: "Sephysar" },
    196: { Name: "Dorentu", NameJa: "Dorentu" },
    197: { Name: "Grandorent", NameJa: "Grandorent" },
    198: { Name: "Pricktile", NameJa: "Pricktile" },
    199: { Name: "Cactodon", NameJa: "Cactodon" },
    200: { Name: "Yarmeow", NameJa: "Yarmeow" },
    201: { Name: "Tressemiao", NameJa: "Tressemiao" },
    202: { Name: "Naviumi", NameJa: "Naviumi" },
    221: { Name: "Fauneek", NameJa: "Fauneek" },
    222: { Name: "Satyreek", NameJa: "Satyreek" },
    223: { Name: "Coleeram", NameJa: "Coleeram" },
    224: { Name: "Elekitt", NameJa: "Elekitt" },
    225: { Name: "Velocikat", NameJa: "Velocikat" },
    227: { Name: "Hambrisk", NameJa: "Hambrisk" },
    228: { Name: "Chinchype", NameJa: "Chinchype" },
    229: { Name: "Moonara", NameJa: "Moonara" },
    230: { Name: "Lunaeire", NameJa: "Lunaeire" },
    231: { Name: "Clawconut", NameJa: "Clawconut" },
    232: { Name: "Clawgigus", NameJa: "Clawgigus" },
    233: { Name: "Wallopop", NameJa: "Wallopop" },
    234: { Name: "Samudangi", NameJa: "Samudangi" },
    235: { Name: "Snobbit", NameJa: "Snobbit" },
    236: { Name: "Frosslord", NameJa: "Frosslord" },
    237: { Name: "Eriegle", NameJa: "Eriegle" },
    238: { Name: "Albivore", NameJa: "Albivore" },
    239: { Name: "Emperiegle", NameJa: "Emperiegle" },
    240: { Name: "Mytier", NameJa: "魔法使い" },
    241: { Name: "Inch Inch", NameJa: "Inch Inch" },
    1002: { Name: "Dynamouse(GR)", NameJa: "ダイナマウス(GR)" },
    1003: { Name: "Nageel(GR)", NameJa: "ナガウナギ(GR)" },
    1004: { Name: "Eekape(GR)", NameJa: "エーケイプ(GR)" },
    1005: { Name: "Palytid(GR)", NameJa: "ペイリタイド(GR)" },
    1006: { Name: "Mianari(GR)", NameJa: "ミーアナリ(GR)" },
    1007: { Name: "Berrball(GR)", NameJa: "ベリーボール(GR)" },
    1008: { Name: "Cesstoid(GR)", NameJa: "チェストイド(GR)" },
    1009: { Name: "Mizumi(GR)", NameJa: "ミズミ(GR)" },
    1010: { Name: "Chulember(GR)", NameJa: "クレンバー(GR)" },
    1011: { Name: "Geckno(GR)", NameJa: "ヤモリー(GR)" },
    1012: { Name: "Blockid(GR)", NameJa: "ブロックキッド(GR)" },
    1013: { Name: "Thermolophus(GR)", NameJa: "サーモロフス(GR)" },
    1014: { Name: "Keradon(GR)", NameJa: "ケラドン(GR)" },
    1015: { Name: "Vermillios(GR)", NameJa: "バーメリオン(GR)" },
    1016: { Name: "Vivorin(GR)", NameJa: "ビボリン(GR)" },
    1017: { Name: "Windora(GR)", NameJa: "ウィンドラ(GR)" },
    1018: { Name: "GeeNee(GR)", NameJa: "ギーネー(GR)" },
  };

  // language ----------------
  this.__ethermon_data_language = null;
};

/**
 * Get monster name by class id
 * @param {integer} classId class id of monster
 */
EthermonData.prototype.getMonsterName = function (classId) {
  if (this.__ethermon_data_language === null) {
    this.__ethermon_data_language =
      (window.navigator.languages && window.navigator.languages[0]) ||
      window.navigator.language ||
      window.navigator.userLanguage ||
      window.navigator.browserLanguage;
  }

  if (
    this.__ethermon_data_language !== undefined &&
    this.__ethermon_data_language.toLowerCase().indexOf("ja") !== -1
  ) {
    // japanese
    return this.ETHERMON_MONSTERS[classId].NameJa;
  } else {
    return this.ETHERMON_MONSTERS[classId].Name;
  }
};

/**
 * Get advantage type id of specified type
 * @param {integer} typeId type id
 */
EthermonData.prototype.getAdvantageType = function (typeId) {
  if (typeId <= 0) {
    return null;
  }
  return this.ETHERMON_TYPES[typeId].advantageType;
};

EthermonData.prototype.STATS_INDEX_HP = 0;
EthermonData.prototype.STATS_INDEX_PA = 1;
EthermonData.prototype.STATS_INDEX_PD = 2;
EthermonData.prototype.STATS_INDEX_SA = 3;
EthermonData.prototype.STATS_INDEX_SD = 4;
EthermonData.prototype.STATS_INDEX_SP = 5;

(function () {
  "use strict";

  const API_GET_USER_SESSION = "https://ethermon.io/api/auth/get_user_session";
  const API_RANK_CASTLES_LADDER_1 =
    "https://ethermon.io/api/ema_battle/get_rank_castles_t3";
  const API_RANK_CASTLES_LADDER_2 =
    "https://ethermon.io/api/ema_battle/get_rank_castles_rkt";
  const API_RANK_CASTLES_LADDER_3 =
    "https://ethermon.io/api/ema_battle/get_rank_castles";
  const API_RANK_CASTLES_LADDER_4 =
    "https://ethermon.io/api/ema_battle/get_rank_castles_ladder4";
  const API_RANK_CASTLES_LADDER_5 =
    "https://ethermon.io/api/ema_battle/get_rank_castles_ladder5";
  const API_RANK_CASTLES_LADDER_6 =
    "https://ethermon.io/api/ema_battle/get_rank_castles_ladder6";

  const isDebug = false;

  let playerInfo = {
    userAddress: null,
    userName: null,
  };
  let battleTypes = {
    Ladder1: { Name: "Ladder1", API: API_RANK_CASTLES_LADDER_1 },
    Ladder2: { Name: "Ladder2", API: API_RANK_CASTLES_LADDER_2 },
    Ladder3: { Name: "Ladder3", API: API_RANK_CASTLES_LADDER_3 },
    Ladder4: { Name: "Ladder4", API: API_RANK_CASTLES_LADDER_4 },
    Ladder5: { Name: "Ladder5", API: API_RANK_CASTLES_LADDER_5 },
    Ladder6: { Name: "Ladder6", API: API_RANK_CASTLES_LADDER_6 },
  };
  let ethermonData = new EthermonData();
  let battleLogs = [];

  initializeSimulator();

  /**
   * initialize simulator
   */
  async function initializeSimulator() {
    // get user ethereum address
    let userSessionResponse = await fetch(
      API_GET_USER_SESSION + `?trainer_address=null`
    );
    let userSession = await userSessionResponse.json();

    playerInfo.userAddress = userSession.data.user_address;

    // add control
    addSimulationControl();
  }

  /**
   * add simulation control to screen
   */
  function addSimulationControl() {
    const simulationControl = createElement(
      "div",
      "simulationControl",
      "simulationControl"
    );
    const simulationControlIcon = createElement(
      "i",
      "simulationControlIcon",
      "hand rock outline icon",
      ["aria-hidden", "true"]
    );
    simulationControl.appendChild(simulationControlIcon);
    simulationControl.appendChild(document.createTextNode("Battle Simulator"));
    simulationControl.addEventListener("click", (e) => {
      showSimulationResult();
    });

    addCss(`
    #simulationControl {
        border-radius: 100px;
        position: fixed;
        width: 151px;
        height: 48px;
        background-color: #e96b58;
        bottom: 8px;
        left: 10px;
        z-index: 10;
        cursor: pointer;
        font-size: 13px;
        color: white;
        font-weight: 700;
        padding: 12px;
        text-align: center;
    }
    #simulationControl:hover {
        background-color: #de6654;
    }
    `);
    document.body.appendChild(simulationControl);

    // Result modal
    addSimulationResultControl();
  }

  /**
   * start simulation
   * @param {property} battleType Battle type
   * @returns 
   */
  async function startSimulation(battleType) {
    let rankCastlesResponse = await fetch(
      battleType.API + "?trainer_address=" + playerInfo.userAddress
    );
    let rankCastles = await rankCastlesResponse.json();

    if (rankCastles.data.player_info.player_id === 0) {
      // not ready for battle
      console.log("Team has not been formed yet.");
      return;
    }

    // playyer info
    playerInfo.userName = rankCastles.data.player_info.username;
    let playerMonsters = rankCastles.data.player_info.monsters;
    let defenders = rankCastles.data.defender_list;

    let battleLog = "====================\n";
    battleLog += "[ " + battleType.Name + " ]\n";
    defenders.forEach((defender) => {
      writeBattleLog(
        "### " +
          battleType.Name +
          " battle ### [" +
          playerInfo.userName +
          "] vs [" +
          defender.username +
          "]"
      );
      let battleResult = battle(playerMonsters, defender.monster_info);
      writeBattleLog(
        "battle result : " + (battleResult.isWinner ? "Win" : "Lose")
      );
      writeBattleLog("##############");
      battleLog +=
        "### [" +
        playerInfo.userName +
        "] vs [" +
        defender.username +
        "] " +
        (battleResult.isWinner ? "Win" : "Lose") +
        "\n";
      console.log(
        defender.username + " : " + (battleResult.isWinner ? "Win" : "Lose")
      );
      console.log(
        "  " +
          ethermonData.getMonsterName(defender.monster_info[0].class_id) +
          " : " +
          (battleResult.battleResult1 ? "Win" : "Lose")
      );
      console.log(
        "  " +
          ethermonData.getMonsterName(defender.monster_info[1].class_id) +
          " : " +
          (battleResult.battleResult2 ? "Win" : "Lose")
      );
      console.log(
        "  " +
          ethermonData.getMonsterName(defender.monster_info[2].class_id) +
          " : " +
          (battleResult.battleResult3 ? "Win" : "Lose")
      );
    });

    battleLog += "====================\n";
    battleLog += "[ battle details ]\n";
    battleLog += dumpBattleLog();
    outputBattleLog(battleLog);
  }

  /**
   * add simulation result control to screen
   */
  function addSimulationResultControl() {
    let resultElement = createElementFromHTML(`
        <div class="ui page modals dimmer transition" id="simulationResultWapper">
            <div class="ui scrolling modal transition visible active">
                <i aria-hidden="true" class="close icon" id="simulatorClose"></i>
                <div class="page-container">
                    <span id="simulationResultTitle">-- Battle Simulation --</span>
                    <span id="simulationLadder3" class="simulationBattleType">Ladder3</span> | 
                    <span id="simulationLadder5" class="simulationBattleType">Ladder5</span>
                    <div id="simulationResultText"></div>
                </div>
            </div>
        </div>    
        `);

    addCss(`
        #simulationResultWapper .page-container {
            padding-top: 10px;
        }
        #simulationResultTitle {
            margin: 10px;
            font-size: 20px;
        }
        .simulationBattleType {
            cursor: pointer;
        }
        .simulationBattleType:hover {
            text-decoration: underline;
        }
        #simulationResultText {
            white-space: pre;
            min-height: 500px;
            max-height: 500px;
            overflow-y: scroll;
            padding: 10px;
            line-height: 16px;
        }
        `);

    document.body.appendChild(resultElement);
    document.querySelector("#simulatorClose").addEventListener("click", () => {
      hideSimulationResult();
    });
    document
      .querySelector("#simulationLadder3")
      .addEventListener("click", () => {
        startSimulation(battleTypes.Ladder3);
      });
    document
      .querySelector("#simulationLadder5")
      .addEventListener("click", () => {
        startSimulation(battleTypes.Ladder5);
      });
  }

  function showSimulationResult() {
    document.querySelector("#simulationResultWapper").classList.add("visible");
    document.querySelector("#simulationResultWapper").classList.add("active");
    document.querySelector("#simulationResultText").textContent =
      "Please select battle type.";
  }
  function hideSimulationResult() {
    document
      .querySelector("#simulationResultWapper")
      .classList.remove("visible");
    document
      .querySelector("#simulationResultWapper")
      .classList.remove("active");
    document.querySelector("#simulationResultText").textContent = "";
  }

  /**
   * battle monsters
   * @param {object} playerMonsters Player monster data
   * @param {object} opponentMonsters Opponet monster data
   */
  function battle(playerMonsters, opponentMonsters) {
    logDebug("[start] battle -----");

    // buffs
    let playerBuffs, opponentBuffs;

    // player backends ----------
    let playerBackend1 = playerMonsters.length >= 4 ? playerMonsters[3] : null;
    let playerBackend2 = playerMonsters.length >= 5 ? playerMonsters[4] : null;
    let playerBackend3 = playerMonsters.length >= 6 ? playerMonsters[5] : null;
    let playerBackends = [playerBackend1, playerBackend2, playerBackend3];

    // opponent backends ----------
    let opponentBackend1 =
      opponentMonsters.length >= 4 ? opponentMonsters[3] : null;
    let opponentBackend2 =
      opponentMonsters.length >= 5 ? opponentMonsters[4] : null;
    let opponentBackend3 =
      opponentMonsters.length >= 6 ? opponentMonsters[5] : null;
    let opponentBackends = [
      opponentBackend1,
      opponentBackend2,
      opponentBackend3,
    ];

    // battle each monsters ----------
    let battleResults = [];
    for (let i = 0; i < 3; i++) {
      logDebug("battle[" + i + "] ----------");
      playerBuffs = calcBuffs(playerMonsters[i], playerBackends);
      opponentBuffs = calcBuffs(opponentMonsters[i], opponentBackends);
      battleResults.push(
        battleMonster(
          playerMonsters[i],
          opponentMonsters[i],
          playerBuffs,
          opponentBuffs
        )
      );

      logDebug(playerMonsters[i]);
      logDebug(opponentMonsters[i]);
      logDebug(playerBuffs);
      logDebug(opponentBuffs);
      logDebug(battleResults[battleResults.length - 1]);
    }

    logDebug("[end  ] battle ----------");

    return {
      isWinner:
        (battleResults[0] ? 1 : 0) +
          (battleResults[1] ? 1 : 0) +
          (battleResults[2] ? 1 : 0) >=
        2,
      battleResult1: battleResults[0],
      battleResult2: battleResults[1],
      battleResult3: battleResults[2],
    };
  }

  /**
   * battle
   * @param {object} playerMonster Player monster data
   * @param {object} opponentMonster Opponent monster data
   * @param {array} playerBuffs Buff data for player monster
   * @param {array} defenderBuffs Buff data for opponent monster
   */
  function battleMonster(
    playerMonster,
    opponentMonster,
    playerBuffs,
    defenderBuffs
  ) {
    logDebug("[start] battleMonster -----");

    logDebug("Player monster");
    logDebug(playerMonster);
    logDebug("Opponent monster");
    logDebug(opponentMonster);
    let primaryBuffs = calcBuffsStatus(
      playerMonster,
      opponentMonster,
      playerBuffs,
      defenderBuffs
    );
    let secondaryBuffs = calcBuffsStatus(
      opponentMonster,
      playerMonster,
      defenderBuffs,
      playerBuffs
    );
    logDebug(
      "Player monster [" +
        ethermonData.getMonsterName(playerMonster.class_id) +
        "]" +
        " HP:" +
        playerMonster.total_battle_stats[ethermonData.STATS_INDEX_HP] +
        " PA:" +
        playerMonster.total_battle_stats[ethermonData.STATS_INDEX_PA] +
        (primaryBuffs.attacker.PA != 0
          ? "(+" + primaryBuffs.attacker.PA + ")"
          : "") +
        " PD:" +
        playerMonster.total_battle_stats[ethermonData.STATS_INDEX_PD] +
        (secondaryBuffs.defender.PD != 0
          ? "(+" + secondaryBuffs.defender.PD + ")"
          : "") +
        " SA:" +
        playerMonster.total_battle_stats[ethermonData.STATS_INDEX_SA] +
        (primaryBuffs.attacker.SA != 0
          ? "(+" + primaryBuffs.attacker.SA + ")"
          : "") +
        " SD:" +
        playerMonster.total_battle_stats[ethermonData.STATS_INDEX_SD] +
        (secondaryBuffs.defender.SD != 0
          ? "(+" + secondaryBuffs.defender.SD + ")"
          : "") +
        " SP:" +
        playerMonster.total_battle_stats[ethermonData.STATS_INDEX_SP]
    );
    logDebug(
      "Opponent monster [" +
        ethermonData.getMonsterName(opponentMonster.class_id) +
        "]" +
        " HP:" +
        opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_HP] +
        " PA:" +
        opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_PA] +
        (secondaryBuffs.attacker.PA != 0
          ? "(+" + secondaryBuffs.attacker.PA + ")"
          : "") +
        " PD:" +
        opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_PD] +
        (primaryBuffs.defender.PD != 0
          ? "(+" + primaryBuffs.defender.PD + ")"
          : "") +
        " SA:" +
        opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_SA] +
        (secondaryBuffs.attacker.SA != 0
          ? "(+" + secondaryBuffs.attacker.SA + ")"
          : "") +
        " SD:" +
        opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_SD] +
        (primaryBuffs.defender.SD != 0
          ? "(+" + primaryBuffs.defender.SD + ")"
          : "") +
        " SP:" +
        opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_SP]
    );
    writeBattleLog(
      "P [" + ethermonData.getMonsterName(playerMonster.class_id) + "]"
    );
    writeBattleLog(
      "HP:" +
        playerMonster.total_battle_stats[ethermonData.STATS_INDEX_HP] +
        " " +
        "PA:" +
        (playerMonster.total_battle_stats[ethermonData.STATS_INDEX_PA] +
          primaryBuffs.attacker.PA) +
        (primaryBuffs.attacker.PA != 0
          ? "(+" + primaryBuffs.attacker.PA + ")"
          : "") +
        " " +
        "PD:" +
        (playerMonster.total_battle_stats[ethermonData.STATS_INDEX_PD] +
          secondaryBuffs.defender.PD) +
        (secondaryBuffs.defender.PD != 0
          ? "(+" + secondaryBuffs.defender.PD + ")"
          : "") +
        " " +
        "SA:" +
        (playerMonster.total_battle_stats[ethermonData.STATS_INDEX_SA] +
          primaryBuffs.attacker.SA) +
        (primaryBuffs.attacker.SA != 0
          ? "(+" + primaryBuffs.attacker.SA + ")"
          : "") +
        " " +
        "SD:" +
        (playerMonster.total_battle_stats[ethermonData.STATS_INDEX_SD] +
          secondaryBuffs.defender.SD) +
        (secondaryBuffs.defender.SD != 0
          ? "(+" + secondaryBuffs.defender.SD + ")"
          : "") +
        " " +
        "SP:" +
        playerMonster.total_battle_stats[ethermonData.STATS_INDEX_SP]
    );
    writeBattleLog(
      "O [" + ethermonData.getMonsterName(opponentMonster.class_id) + "]"
    );
    writeBattleLog(
      "HP:" +
        opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_HP] +
        " " +
        "PA:" +
        (opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_PA] +
          secondaryBuffs.attacker.PA) +
        (secondaryBuffs.attacker.PA != 0
          ? "(+" + secondaryBuffs.attacker.PA + ")"
          : "") +
        " " +
        "PD:" +
        (opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_PD] +
          primaryBuffs.defender.PD) +
        (primaryBuffs.defender.PD != 0
          ? "(+" + primaryBuffs.defender.PD + ")"
          : "") +
        " " +
        "SA:" +
        (opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_SA] +
          secondaryBuffs.attacker.SA) +
        (secondaryBuffs.attacker.SA != 0
          ? "(+" + secondaryBuffs.attacker.SA + ")"
          : "") +
        " " +
        "SD:" +
        (opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_SD] +
          primaryBuffs.defender.SD) +
        (primaryBuffs.defender.SD != 0
          ? "(+" + primaryBuffs.defender.SD + ")"
          : "") +
        " " +
        "SP:" +
        opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_SP]
    );

    let isBattleEnd = false;
    let isPlayerWin = false;
    let turnCount = 0;
    let playerHP =
      playerMonster.total_battle_stats[ethermonData.STATS_INDEX_HP];
    let playerSP =
      playerMonster.total_battle_stats[ethermonData.STATS_INDEX_SP];
    let defenderHP =
      opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_HP];
    let defenderSP =
      opponentMonster.total_battle_stats[ethermonData.STATS_INDEX_SP];

    let isPlayerTurn = playerSP >= defenderSP ? true : false;

    let attacker, defender, attackerBuff, defenderBuff, damage;

    // loop --- 1 turn (each monster attacks)
    do {
      if (isPlayerTurn) {
        attacker = playerMonster;
        attackerBuff = playerBuffs;
        defender = opponentMonster;
        defenderBuff = defenderBuffs;
      } else {
        attacker = opponentMonster;
        attackerBuff = defenderBuffs;
        defender = playerMonster;
        defenderBuff = playerBuffs;
      }

      // first attack of turn ----------
      logDebug(
        "attacker: " +
          ethermonData.getMonsterName(attacker.class_id) +
          " defender: " +
          ethermonData.getMonsterName(defender.class_id)
      );
      damage = calcDamage(attacker, defender, attackerBuff, defenderBuff);
      if (isPlayerTurn) {
        defenderHP -= damage;
        logDebug(
          "[turn " +
            (turnCount + 1) +
            "-1] player turn! damage: " +
            damage +
            " opponent HP: " +
            defenderHP
        );
        writeBattleLog(
          "P [" +
            ethermonData.getMonsterName(attacker.class_id) +
            "] -> O [" +
            ethermonData.getMonsterName(defender.class_id) +
            "] dmg  " +
            damage +
            " / HP " +
            defenderHP
        );
        if (defenderHP <= 0) {
          // battle end. winner: player
          isPlayerWin = true;
          isBattleEnd = true;
          break;
        }
        attacker = opponentMonster;
        attackerBuff = defenderBuffs;
        defender = playerMonster;
        defenderBuff = playerBuffs;
      } else {
        playerHP -= damage;
        logDebug(
          "[turn " +
            (turnCount + 1) +
            "-1] opponent turn! damage: " +
            damage +
            " player HP: " +
            playerHP
        );
        writeBattleLog(
          "O [" +
            ethermonData.getMonsterName(attacker.class_id) +
            "] -> P [" +
            ethermonData.getMonsterName(defender.class_id) +
            "] dmg " +
            damage +
            " / HP " +
            playerHP
        );
        if (playerHP <= 0) {
          // battle end. winner: defender
          isPlayerWin = false;
          isBattleEnd = true;
          break;
        }
        attacker = playerMonster;
        attackerBuff = playerBuffs;
        defender = opponentMonster;
        defenderBuff = defenderBuffs;
      }

      isPlayerTurn = !isPlayerTurn;

      // second attack of turn ----------
      logDebug(
        "attacker: " +
          ethermonData.getMonsterName(attacker.class_id) +
          " defender: " +
          ethermonData.getMonsterName(defender.class_id)
      );
      damage = calcDamage(attacker, defender, attackerBuff, defenderBuff);
      if (isPlayerTurn) {
        defenderHP -= damage;
        logDebug(
          "[turn " +
            (turnCount + 1) +
            "-2] player turn! damage: " +
            damage +
            " opponent HP: " +
            defenderHP
        );
        writeBattleLog(
          "P [" +
            ethermonData.getMonsterName(attacker.class_id) +
            "] -> O [" +
            ethermonData.getMonsterName(defender.class_id) +
            "] dmg " +
            damage +
            " / HP " +
            defenderHP
        );
        if (defenderHP <= 0) {
          // battle end. winner: player
          isPlayerWin = true;
          isBattleEnd = true;
          break;
        }
        attacker = opponentMonster;
        attackerBuff = defenderBuffs;
        defender = playerMonster;
        defenderBuff = playerBuffs;
      } else {
        playerHP -= damage;
        logDebug(
          "[turn " +
            (turnCount + 1) +
            "-2] opponent turn! damage: " +
            damage +
            " player HP: " +
            playerHP
        );
        writeBattleLog(
          "O [" +
            ethermonData.getMonsterName(attacker.class_id) +
            "] -> P [" +
            ethermonData.getMonsterName(defender.class_id) +
            "] dmg " +
            damage +
            " / HP " +
            playerHP
        );
        if (playerHP <= 0) {
          // battle end. winner: defender
          isPlayerWin = false;
          isBattleEnd = true;
          break;
        }
        attacker = playerMonster;
        attackerBuff = playerBuffs;
        defender = opponentMonster;
        defenderBuff = defenderBuffs;
      }

      // turn end -------------
      if (turnCount >= 4) {
        logDebug("turn count 10");
        writeBattleLog("turn count 10");
        isBattleEnd = true;
        isPlayerWin = playerHP >= defenderHP;
      }
      turnCount++;

      isPlayerTurn = !isPlayerTurn;
    } while (!isBattleEnd);

    logDebug(isPlayerWin ? "player win!" : "opponent win!");
    logDebug("[end  ] battleMonster -----");
    writeBattleLog(
      (isPlayerWin ? "P" : "O") +
        " [" +
        (isPlayerWin
          ? ethermonData.getMonsterName(playerMonster.class_id)
          : ethermonData.getMonsterName(opponentMonster.class_id)) +
        "] Win"
    );
    writeBattleLog("----------");

    return isPlayerWin;
  }

  /**
   * Calculate damage of attack
   * @param {object} attackerMonster Attacker monster data
   * @param {object} defenderMonster Defender monster data
   * @param {array} attackerBuff Buff data for attacker monster
   * @param {array} defenderBuff Buff data for defender monster
   */
  function calcDamage(
    attackerMonster,
    defenderMonster,
    attackerBuff,
    defenderBuff
  ) {
    logDebug("[start] calcDamage -----");

    // calculate buffs
    let monsterBuffs = calcBuffsStatus(
      attackerMonster,
      defenderMonster,
      attackerBuff,
      defenderBuff
    );

    let attack = 0.0;
    let defense = 0.0;

    // Primary ---------------

    attack =
      attackerMonster.total_battle_stats[ethermonData.STATS_INDEX_PA] +
      monsterBuffs.attacker.PA;
    defense =
      defenderMonster.total_battle_stats[ethermonData.STATS_INDEX_PD] +
      monsterBuffs.defender.PD;

    let primaryDamage = attack - defense;
    if (primaryDamage < 0) primaryDamage = 0;

    // Secondary ----------

    attack =
      attackerMonster.total_battle_stats[ethermonData.STATS_INDEX_SA] +
      monsterBuffs.attacker.SA;
    defense =
      defenderMonster.total_battle_stats[ethermonData.STATS_INDEX_SD] +
      monsterBuffs.defender.SD;

    let secondaryDamage = attack - defense;
    if (secondaryDamage < 0) secondaryDamage = 0;

    // Total damage ----------
    let totalDamage =
      primaryDamage >= secondaryDamage ? primaryDamage : secondaryDamage;
    if (totalDamage < 10) totalDamage = 10;

    logDebug("[end  ] calcDamage " + totalDamage + " -----");

    return totalDamage;
  }

  /**
   * judge advantage of target monster against opponent mons
   * @param {object} targetMonster target monster
   * @param {object} opponentMonster opponent monster
   */
  function isAdvantageMonsterType(targetMonster, opponentMonster) {
    // monsterTypes ex) 1: {"name":"Insect", "advantageType":14}
    for (let i in targetMonster.types) {
      let advantageType = ethermonData.getAdvantageType(targetMonster.types[i]);
      if (opponentMonster.types.indexOf(advantageType) >= 0) {
        logDebug(
          "advantage!!! " +
            targetMonster.class_id +
            " -> " +
            opponentMonster.class_id
        );
        return true;
      }
    }

    return false;
  }

  function calcBuffsStatusCritical(
    attackerMonster,
    defenderMonster,
    attackerBuff,
    defenderBuff
  ) {}

  /**
   * Calculate buffs of monsters
   * @param {object} attackerMonster Attacker monster data
   * @param {object} defenderMonster Defender monster data
   * @param {array} attackerBuff Buff data for attacker monster
   * @param {array} defenderBuff Buff data for defender monster
   */
  function calcBuffsStatus(
    attackerMonster,
    defenderMonster,
    attackerBuff,
    defenderBuff
  ) {
    logDebug("[start] calcBuffsStatus -----");

    let monsterBuffs = {
      attacker: {
        PA: 0,
        SA: 0,
      },
      defender: {
        PD: 0,
        SD: 0,
      },
    };

    // ancestor: 10% Attack
    // gason: 10% Defense
    // type: 30% Attack & Defense

    let attack = 0.0;
    let defense = 0.0;

    // Primary ---------------

    // attacker buff : ancestor
    attack =
      attackerMonster.total_battle_stats[ethermonData.STATS_INDEX_PA] +
      attackerMonster.total_battle_stats[ethermonData.STATS_INDEX_PA] *
        attackerBuff.ancestorNum *
        0.1;
    // defender buff : gason
    defense =
      defenderMonster.total_battle_stats[ethermonData.STATS_INDEX_PD] +
      defenderMonster.total_battle_stats[ethermonData.STATS_INDEX_PD] *
        defenderBuff.gasonNum *
        0.1;

    // attacker type buf
    if (isAdvantageMonsterType(attackerMonster, defenderMonster)) {
      attack +=
        attackerMonster.total_battle_stats[ethermonData.STATS_INDEX_PA] * 0.3;
    }
    // defender type buf
    if (isAdvantageMonsterType(defenderMonster, attackerMonster)) {
      defense +=
        defenderMonster.total_battle_stats[ethermonData.STATS_INDEX_PD] * 0.3;
    }

    // round parameters: attack, defense
    attack = Math.floor(attack);
    defense = Math.floor(defense);

    monsterBuffs.attacker.PA =
      attack - attackerMonster.total_battle_stats[ethermonData.STATS_INDEX_PA];
    monsterBuffs.defender.PD =
      defense - defenderMonster.total_battle_stats[ethermonData.STATS_INDEX_PD];

    // Secondary ----------

    // attacker buff : ancestor
    attack =
      attackerMonster.total_battle_stats[ethermonData.STATS_INDEX_SA] +
      attackerMonster.total_battle_stats[ethermonData.STATS_INDEX_SA] *
        attackerBuff.ancestorNum *
        0.1;
    // defender buff : gason
    defense =
      defenderMonster.total_battle_stats[ethermonData.STATS_INDEX_SD] +
      defenderMonster.total_battle_stats[ethermonData.STATS_INDEX_SD] *
        defenderBuff.gasonNum *
        0.1;

    // attacker type buf
    if (isAdvantageMonsterType(attackerMonster, defenderMonster)) {
      attack +=
        attackerMonster.total_battle_stats[ethermonData.STATS_INDEX_SA] * 0.3;
    }
    // defender type buf
    if (isAdvantageMonsterType(defenderMonster, attackerMonster)) {
      defense +=
        defenderMonster.total_battle_stats[ethermonData.STATS_INDEX_SD] * 0.3;
    }

    // round parameters: attack, defense
    attack = Math.floor(attack);
    defense = Math.floor(defense);

    monsterBuffs.attacker.SA =
      attack - attackerMonster.total_battle_stats[ethermonData.STATS_INDEX_SA];
    monsterBuffs.defender.SD =
      defense - defenderMonster.total_battle_stats[ethermonData.STATS_INDEX_SD];

    logDebug(monsterBuffs);
    logDebug("[end  ] calcBuffsStatus -----");

    return monsterBuffs;
  }

  /**
   * calc buff monsters
   * @param {object} targetMonster target monster
   * @param {array} backendMonsters backend monsters
   * @returns {array} [gasonNum, ancestorNum]
   */
  function calcBuffs(targetMonster, backendMonsters) {
    // buffs
    let buffs = {
      gasonNum: 0,
      ancestorNum: 0,
    };

    // backend monsters --------------------------------------------------
    let backendMonster1 =
      backendMonsters.length >= 1 ? backendMonsters[0] : null;
    let backendMonster2 =
      backendMonsters.length >= 2 ? backendMonsters[1] : null;
    let backendMonster3 =
      backendMonsters.length >= 3 ? backendMonsters[2] : null;

    // gason buff
    for (let i in targetMonster.types) {
      if (
        backendMonster1 !== null &&
        backendMonster1.is_gason &&
        backendMonster1.types.indexOf(targetMonster.types[i]) >= 0
      ) {
        buffs.gasonNum++;
      }
      if (
        backendMonster2 !== null &&
        backendMonster2.is_gason &&
        backendMonster2.types.indexOf(targetMonster.types[i]) >= 0
      ) {
        buffs.gasonNum++;
      }
      if (
        backendMonster3 !== null &&
        backendMonster3.is_gason &&
        backendMonster3.types.indexOf(targetMonster.types[i]) >= 0
      ) {
        buffs.gasonNum++;
      }
    }

    // ancestor buff
    for (let i in targetMonster.ancestors) {
      if (
        backendMonster1 !== null &&
        !backendMonster1.is_gason &&
        backendMonster1.class_id === targetMonster.ancestors[i]
      ) {
        buffs.ancestorNum++;
      }
      if (
        backendMonster2 !== null &&
        !backendMonster2.is_gason &&
        backendMonster2.class_id === targetMonster.ancestors[i]
      ) {
        buffs.ancestorNum++;
      }
      if (
        backendMonster3 !== null &&
        !backendMonster3.is_gason &&
        backendMonster3.class_id === targetMonster.ancestors[i]
      ) {
        buffs.ancestorNum++;
      }
    }

    return buffs;
  }

  /**
   * create HTMLElement
   * @param {string} tagName tag name
   * @param {string} id ID
   * @param {string} className class name
   * @param {array} attributes [[0:name, 1:value]...]
   * @returns HTMLElement
   */
  function createElement(tagName, id, className, attributes = []) {
    const newElement = document.createElement(tagName);
    newElement.id = id;
    newElement.className = className;

    attributes.forEach((item, index, array) => {
      newElement.setAttribute(item[0], item[1]);
    });

    return newElement;
  }

  /**
   * HTML文字列をElementへ変換する。
   * @param html HTML文字列
   * @returns {Element}
   */
  function createElementFromHTML(html) {
    const tempEl = document.createElement("div");
    tempEl.innerHTML = html;
    return tempEl.firstElementChild;
  }

  /**
   * append style
   * @param {string} styleText Style text
   */
  function addCss(styleText) {
    const styleElement = document.createElement("style");
    styleElement.textContent = styleText;
    document.head.appendChild(styleElement);
  }

  /**
   * output debug log
   * @param {object} object Object for log
   */
  function logDebug(object) {
    if (isDebug) {
      console.log(object);
    }
  }

  /**
   * write battle log
   * @param {string} logMessage log message
   */
  function writeBattleLog(logMessage) {
    battleLogs.push(logMessage);
  }

  /**
   * dump battle log
   * @returns {string} log message
   */
  function dumpBattleLog() {
    let battleLogText = "* P:Player, O:Opponent" + "\n";
    for (let i = 0; i < battleLogs.length; i++) {
      const message = battleLogs[i];
      battleLogText += i + 1 + " : " + message + "\n";
    }
    battleLogs.length = 0;

    return battleLogText;
  }

  /**
   * Output text as battle log
   * @param {string} battleLogText log text to output
   */
  function outputBattleLog(battleLogText) {
    document.querySelector("#simulationResultText").textContent = battleLogText;
  }

})();
