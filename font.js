function getWholeChar(text, code) {
    var textDump = text.charCodeAt(code)
    if (Number.isNaN(textDump)) {
        return ''
    }
    if (textDump < 55296 || textDump > 57343) {
        return text.charAt(code)
    }
    if (55296 <= textDump && textDump <= 56319) {
        if (text.length <= code + 1) {
            throw 'High surrogate without following low surrogate'
        }
        var nxt = text.charCodeAt(code + 1)
        if (56320 > nxt || nxt > 57343) {
            throw 'High surrogate without following low surrogate'
        }
        return text.charAt(code) + text.charAt(code + 1)
    }
    if (code === 0) {
        throw 'Low surrogate without preceding high surrogate'
    }
    var bef = text.charCodeAt(code - 1)
    if (55296 > bef || bef > 56319) {
        throw 'Low surrogate without preceding high surrogate'
    }
    return false
}
let font = function (text) {
    let arr = new Array(153)
    arr.fill('', 0, 153)
    for (
        var i = 0, dump;
        i < arr.length;
        i++
    ) {
        if (!(dump = getWholeChar(text, i))) {
            continue
        }
        if (text[i] == ' ') {
            arr = arr.map((e) => e += ' ')
            continue
        }
        arr[1 - 1] += '' + dump + '꙼̈'
        arr[2 - 1] += '' + dump + '̆̈'
        arr[3 - 1] += '' + dump + '̑̈'
        arr[4 - 1] += '' + dump + '̆̎'
        arr[5 - 1] += '' + dump + '̑̎'
        arr[6 - 1] += '' + dump + '̄̈'
        arr[7 - 1] += '' + dump + '̌̈'
        arr[8 - 1] += '' + dump + '̊̈'
        arr[9 - 1] += '' + dump + '̐̎'
        arr[10 - 1] += '' + dump + '̐̈'
        arr[11 - 1] += '' + dump + '̄̎'
        arr[12 - 1] += '' + dump + '̊̎'
        arr[13 - 1] += '' + dump + '̤̮'
        arr[14 - 1] += '' + dump + '͈̮'
        arr[15 - 1] += '' + dump + '̤̥'
        arr[16 - 1] += '' + dump + '͈̥'
        arr[17 - 1] += '' + dump + '̤̻'
        arr[18 - 1] += '' + dump + '͈̻'
        arr[19 - 1] += '' + dump + '̤̫'
        arr[20 - 1] += '' + dump + '͈̫'
        arr[21 - 1] += '' + dump + '̤̯'
        arr[22 - 1] += '' + dump + '͈̯'
        arr[23 - 1] += '' + dump + '̤̱'
        arr[24 - 1] += '' + dump + 'ͣ'
        arr[25 - 1] += '' + dump + 'ͨ'
        arr[26 - 1] += '' + dump + 'ͩ'
        arr[27 - 1] += '' + dump + 'ͤ'
        arr[28 - 1] += '' + dump + 'ͪ'
        arr[29 - 1] += '' + dump + 'ͥ'
        arr[30 - 1] += '' + dump + 'ͫ'
        arr[31 - 1] += '' + dump + 'ͦ'
        arr[32 - 1] += '' + dump + 'ͬ'
        arr[33 - 1] += '' + dump + 'ͭ'
        arr[34 - 1] += '' + dump + 'ͧ'
        arr[35 - 1] += '' + dump + 'ͮ'
        arr[36 - 1] += '' + dump + 'ͯ'
        arr[37 - 1] += '' + dump + '⃫'
        arr[38 - 1] += '' + dump + '⃦'
        arr[39 - 1] += '' + dump + '⃥'
        arr[40 - 1] += '' + dump + '̸'
        arr[41 - 1] += '' + dump + '̷'
        arr[42 - 1] += '' + dump + '⃰'
        arr[43 - 1] += '' + dump + '⃔'
        arr[44 - 1] += '' + dump + '⃕'
        arr[45 - 1] += '' + dump + '︠'
        arr[46 - 1] += '' + dump + '︡'
        arr[47 - 1] += '' + dump + '︢'
        arr[48 - 1] += '' + dump + '︣'
        arr[49 - 1] += '' + dump + '︤'
        arr[50 - 1] += '' + dump + '︥'
        arr[51 - 1] += '' + dump + '︦'
        arr[52 - 1] += '' + dump + '̇'
        arr[53 - 1] += '' + dump + '̈'
        arr[54 - 1] += '' + dump + '⃛'
        arr[55 - 1] += '' + dump + '⃜'
        arr[56 - 1] += '' + dump + '\u20E0'
        arr[57 - 1] += '' + dump + '\u0488'
        arr[58 - 1] += '' + dump + '\u0489'
        arr[59 - 1] += '' + dump + '̺͆'
        arr[60 - 1] += '' + dump + '̲̅'
        arr[61 - 1] += '' + dump + '̣'
        arr[62 - 1] += '' + dump + '̤'
        arr[63 - 1] += '' + dump + '⃨'
        arr[64 - 1] += '' + dump + '⃘'
        arr[65 - 1] += '' + dump + '⃙'
        arr[66 - 1] += '' + dump + '⃚'
        arr[67 - 1] += '' + dump + '\u20DD'
        arr[68 - 1] += '' + dump + '\u20DE'
        arr[69 - 1] += '' + dump + '\u20DF'
        arr[70 - 1] += '' + dump + '\u20E2'
        arr[71 - 1] += '' + dump + '\u20E3'
        arr[72 - 1] += '' + dump + '\u20E4'
        arr[73 - 1] += '' + dump + '͜͡'
        arr[74 - 1] += '' + dump + '͓̽'
        arr[75 - 1] += '' + dump + '͓'
        arr[76 - 1] += '' + dump + '̽'
        arr[77 - 1] += '' + dump + '͜'
        arr[78 - 1] += '' + dump + '͡'
        arr[79 - 1] += '' + dump + '͝'
        arr[80 - 1] += '' + dump + '⃰'
        arr[81 - 1] += '' + dump + '͙'
        arr[82 - 1] += '' + dump + '̼'
        arr[83 - 1] += '' + dump + '͠'
        arr[84 - 1] += '' + dump + '̲'
        arr[85 - 1] += '' + dump + '̅'
        arr[86 - 1] += '' + dump + '⃐'
        arr[87 - 1] += '' + dump + '⃑'
        arr[88 - 1] += '' + dump + '⃖'
        arr[89 - 1] += '' + dump + '⃗'
        arr[90 - 1] += '' + dump + '⃬'
        arr[91 - 1] += '' + dump + '⃭'
        arr[92 - 1] += '' + dump + '⃮'
        arr[93 - 1] += '' + dump + '⃯'
        arr[94 - 1] += '' + dump + '⃡'
        arr[95 - 1] += '' + dump + '̊'
        arr[96 - 1] += '' + dump + '͛'
        arr[97 - 1] += '' + dump + '̶'
        arr[98 - 1] += '' + dump + '̾'
        arr[99 - 1] += '' + dump + '͌'
        arr[100 - 1] += '' + dump + '͚'
        arr[101 - 1] += '' + dump + '̤͓'
        arr[102 - 1] += '' + dump + '̮'
        arr[103 - 1] += '' + dump + '̯'
        arr[104 - 1] += '' + dump + '̆'
        arr[105 - 1] += '' + dump + '̑'
        arr[106 - 1] += '' + dump + '͈͓'
        arr[107 - 1] += '' + dump + '͈'
        arr[108 - 1] += '' + dump + '̫'
        arr[109 - 1] += '' + dump + '̟'
        arr[110 - 1] += '' + dump + '̠'
        arr[111 - 1] += '' + dump + '͎'
        arr[112 - 1] += '' + dump + '͍'
        arr[113 - 1] += '' + dump + 'ྉ'
        arr[114 - 1] += '' + dump + '͖'
        arr[115 - 1] += '' + dump + '̼̫'
        arr[116 - 1] += '' + dump + '͑̈'
        arr[117 - 1] += '' + dump + '͗̈'
        arr[118 - 1] += '' + dump + '͑̎'
        arr[119 - 1] += '' + dump + '͗̎'
        arr[120 - 1] += '' + dump + '̤̜'
        arr[121 - 1] += '' + dump + '̤̹'
        arr[122 - 1] += '' + dump + '͈̜'
        arr[123 - 1] += '' + dump + '͈̹'
        arr[124 - 1] += '' + dump + 'ૢ'
        arr[125 - 1] += '' + dump + 'ૣ'
        arr[126 - 1] += '' + dump + 'ౢ'
        arr[127 - 1] += '' + dump + 'ೢ'
        arr[128 - 1] += '' + dump + 'ᩚ'
        arr[129 - 1] += '' + dump + 'ྀི'
        arr[130 - 1] += '' + dump + '᪻'
        arr[131 - 1] += '' + dump + '᪼'
        arr[132 - 1] += '' + dump + '᪽'
        arr[133 - 1] += '' + dump + '\u1ABE'
        arr[134 - 1] += '' + dump + '֟'
        arr[135 - 1] += '' + dump + 'ི'
        arr[136 - 1] += '' + dump + 'ྀ'
        arr[137 - 1] += '\u2014̳͟͞͞' + dump
        arr[138 - 1] += '\u02D7ˋˏ' + dump + 'ˎˊ\u02D7'
        arr[139 - 1] += '\u2022͛ ' + dump + '̷̷̷ \u2022͛'
        arr[140 - 1] += '' + dump + '͙͛'
        arr[141 - 1] += '' + dump + 'ั'
        arr[142 - 1] += '' + dump + '҇'
        arr[143 - 1] += '' + dump + '᪷'
        arr[144 - 1] += '' + dump + '᪸'
        arr[145 - 1] += '' + dump + '᪹'
        arr[146 - 1] += '' + dump + '᪺'
        arr[147 - 1] += '' + dump + '҅'
        arr[148 - 1] += '' + dump + '҆'
        arr[149 - 1] += '' + dump + '͋'
        arr[150 - 1] += '' + dump + 'ᷳ'
        arr[151 - 1] += '[̲̅' + dump + ']'
        arr[152 - 1] += '=͟͟͞͞' + dump
        arr[153 - 1] += '(' + dump + '͜͡ ̲)'
    }
    return arr
}

console.log(font("한글"))
