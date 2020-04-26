"use strict";
var defly = function() {
    var i, o, s, best_ping, r, w, n, t, l, is_connected, username, E, B, M, T, C, P, O, S, L, F, X, z, A, D, H, R, U, Y, _, N, G, W, b, c, u, m, g, p, f, q, Z, V, base_server = "http://s.defly.io", demo_server = "192.168.0.12:3000", connections = {}, best_pings_by_region = {}, K = !1, J = 0, I = !1, Q = 1, ee = 0, te = 0, ne = [], ie = 0, oe = 0, ae = 0, re = [], le = [], se = 0, de = 0, ce = 0, ue = 0, me = {}, ge = !1, he = 20, pe = [], ye = 0, fe = 0, ve = -1, Ie = 0, be = !1, we = 0, ke = {}, xe = {}, Ee = {}, Be = 1, Me = -1, Te = !0, Ce = !1, Pe = !1, Se = !1, Le = 0, Fe = 0, Xe = 0, ze = 0, Ae = !1, De = 0;
    var He, Re, Ue, Oe, Ye, _e, Ne, Ge, We, qe, Ze, Ve, je = !1, Ke = !1, Je = !1, $e = !1, Qe = !1, et = !1, tt = null, nt = !1, logged_in = !1, ot = !1, at = !1, rt = !1, lt = -1, st = 2, dt = 9, ct = 48, ut = 24, mt = .6763066483560869, gt = .1, ht = 0, pt = 0, yt = 0, ft = !1, vt = {}, It = {}, bt = {}, wt = {}, kt = -1, xt = -1, Et = {}, Bt = 0, Mt = 0, Tt = 4, Ct = mt / .5036440950091954, Pt = [4021759, 9587711, 16144895, 16736174, 16594229, 16747050, 9698816, 1630751, 32823, 65468, 5625343], St = [4021759, 16594229, 32823, 16747050, 9587711, 5625343, 1630751, 16144895, 16252714, 16736174, 9698816, 65468], Lt = St.slice(), Ft = [5066061, 4021759, 16594229], colors_list = ["Blue", "Red", "Dark Green", "Orange", "Purple", "Sky Blue", "Green", "Pink", "Yellow", "Rose", "Lime", "Turquoise"], colors_list2 = colors_list.slice(), At = ["", "Blue", "Red"], Dt = {};
    function Ht(e) {
        if (Dt[e])
            return Dt[e];
        if (Et[e])
            return Dt[e] = Lt[Et[e] - 1],
            Dt[e];
        if (e == kt && 0 <= Me)
            return Dt[e] = Pt[Me],
            Dt[e];
        do {
            var t = Pt[Math.floor(Math.random() * Pt.length)]
        } while (e != kt && Dt[kt] == t);return Dt[e] = t
    }
    function Rt(e) {
        return Lt[e - 1]
    }
    var teams_dict = {
        EU1: "Europe",
        EU2: "Europe Central",
        USE1: "US East",
        USW1: "US West",
        TOK1: "Asia East",
        SA1: "South America",
        RU1: "Russia",
        TR: "Tournament",
        AU: "Australia"
    };
    function Ot(e) {
        return e
    }
    var e, Yt = (e = document.createElement("canvas").getContext("2d"),
    (window.devicePixelRatio || 1) / (e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1));
    function _t() {
        var e = {
            dpi: 96,
            dpcm: 96 / 2.54
        };
        function t() {
            return "undefined" == typeof window ? 0 : +window.devicePixelRatio || Math.sqrt(screen.deviceXDPI * screen.deviceYDPI) / e.dpi || 0
        }
        return {
            dppx: t,
            dpi: function() {
                return t() * e.dpi
            },
            dpcm: function() {
                return t() * e.dpcm
            }
        }
    }
    var Nt = _t().dpcm();
    function save_game_quality(quality) {
        1 == (Q = quality) ? document.getElementById("button-quality-high").classList.remove("unselected") : document.getElementById("button-quality-high").classList.add("unselected"),
        .8 == quality ? document.getElementById("button-quality-medium").classList.remove("unselected") : document.getElementById("button-quality-medium").classList.add("unselected"),
        .6 == quality ? document.getElementById("button-quality-low").classList.remove("unselected") : document.getElementById("button-quality-low").classList.add("unselected");
        try {
            "undefined" != typeof Storage && localStorage.setItem("quality", quality)
        } catch (e) {}
        E && (E.resolution = Q * Yt,
        E.rootRenderTarget && (E.rootRenderTarget.resolution = Q * Yt),
        ea())
    }
    function Wt(e, t) {
        var n = t < 0 ? 0 : 255
          , i = t < 0 ? -1 * t : t
          , o = e >> 16
          , a = e >> 8 & 255
          , r = 255 & e;
        return 65536 * (Math.round((n - o) * i) + o) + 256 * (Math.round((n - a) * i) + a) + (Math.round((n - r) * i) + r)
    }
    function html_santize(phrase) {
        return phrase.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    }
    var badword_list = ["4r5e", "5h1t", "5hit", "a_s_s", "a55", "analbead", "anal", "analconda", "anus", "ar5e", "arrse", "arse", "arsehole", "ass", "ass fuck", "asses", "assfucker", "ass-fucker", "assfukka", "asshole", "assholes", "assmucus", "asswhole", "b!tch", "b00bs", "b17ch", "b1tch", "ballbag", "balls", "bangmywife", "ballsack", "bastard", "bastards", "beastial", "beastiality", "bellend", "bestial", "bestiality", "bi+ch", "biatch", "bitch", "bitcher", "bitchers", "bitches", "bitchin", "bitching", "bloody", "blow job", "blowjob", "blowjobs", "blumpkin", "boiolas", "bollock", "bollocks", "bollok", "boner", "boob", "boobs", "booobs", "boooobs", "booooobs", "booooooobs", "breasts", "buceta", "bugger", "buggery", "bum", "bunny fucker", "butt", "butthole", "buttmuch", "buttplug", "c0ck", "c0cksucker", "carpet muncher", "cawk", "chink", "cipa", "cl1t", "clit", "clitoris", "clits", "cnut", "cock", "cockface", "cockhead", "cockmunch", "cockmuncher", "cocks", "cocksuck", "cocksucked", "cocksucker", "cock-sucker", "cocksucker", "cocksucking", "cocksucks", "cocksuka", "cocksukka", "cok", "cokmuncher", "coksucka", "coon", "cox", "crap", "cum", "cum freak", "cumdump", "cumjunkie", "cummer", "cumming", "cums", "cumshot", "cunilingus", "cunillingus", "cunnilingus", "cunt", "cuntbag", "cuntlick", "cuntlicker", "cuntlicking", "cunts", "cuntsicle", "cyalis", "cyberfuc", "cyberfuck", "cyberfucked", "cyberfucker", "cyberfuckers", "cyberfucking", "d1ck", "damn", "darn", "dick", "dickhead", "dildo", "dildos", "dink", "dinks", "dirsa", "dlck", "dog-fucker", "doggin", "dogging", "donkeyribber", "doosh", "douche", "duche", "dyke", "ejaculate", "ejaculated", "ejaculates", "ejaculating", "ejaculatings", "ejaculation", "ejakulate", "f u c k", "f u c k e r", "f_u_c_k", "f4nny", "facialize", "fag", "fagging", "faggitt", "faggot", "faggs", "fagot", "fagots", "fags", "fanny", "fannyflaps", "fannyfucker", "fanyy", "fart", "fatass", "fcuk", "fcuker", "fcuking", "feck", "fecker", "felch", "felching", "fellate", "fellatio", "fingerfuck", "fingerfucked", "fingerfucker", "fingerfuckers", "fingerfucking", "fingerfucks", "fistfuck", "fistfucked", "fistfucker", "fistfuckers", "fistfucking", "fistfuckings", "fistfucks", "flange", "fook", "fooker", "fuck", "fucka", "fuck-bitch", "fucked", "fucker", "fuckers", "fuckhead", "fuckheads", "fuckin", "fucking", "fucking ", "fuckings", "fuckingshitmotherfucker", "fuckme", "fuckmeat", "fucks", "fucktoy", "fuckwhit", "fuckwit", "fudge packer", "fudgepacker", "fuk", "fuker", "fukker", "fukkin", "fuks", "fukwhit", "fukwit", "fux", "fux0r", "gangbang", "gangbang", "gangbanged", "gangbangs", "gaylord", "gaysex", "goatse", "God", "god-dam", "goddamn", "goddamned", "god-damned", "hardcoresex", "heshe", "hoar", "hoare", "hoer", "homo", "hore", "horniest", "horny", "hotsex", "jackoff", "jack-off", "jap", "jerk-off", "jism", "jiz", "jizm", "jizz", "kawk", "knob", "knobead", "knobed", "knobend", "knobhead", "knobjocky", "knobjokey", "kock", "kondum", "kondums", "kum", "kummer", "kumming", "kums", "kunilingus", "l3i+ch", "l3itch", "labia", "liter", "lust", "lusting", "m0f0", "m0fo", "m45terbate", "ma5terb8", "ma5terbate", "masochist", "masterb8", "masterbat*", "masterbat3", "masterbate", "master-bate", "masterbation", "masterbations", "masturbate", "mof0", "mofo", "mo-fo", "mothafuck", "mothafucka", "mothafuckas", "mothafuckaz", "mothafucked", "mothafucker", "mothafuckers", "mothafuckin", "mothafucking", "mothafuckings", "mothafucks", "mother fucker", "motherfuck", "motherfucked", "motherfucker", "motherfucker", "motherfuckers", "motherfuckin", "motherfucking", "motherfucking", "motherfuckings", "motherfuckka", "motherfucks", "muff", "mutha", "muthafecker", "muthafuckker", "muther", "mutherfucker", "n1gga", "n1gger", "nazi", "nigg3r", "nigg4h", "nigga", "niggah", "niggas", "niggaz", "nigger", "niggers", "nlgger", "nlggers", "nob", "nob jokey", "nobhead", "nobjocky", "nobjokey", "numbnuts", "nutsack", "orgasim", "orgasims", "orgasm", "orgasms", "p0rn", "pawn", "pecker", "penis", "penisfucker", "phonesex", "phuck", "phuk", "phuked", "phuking", "phukked", "phukking", "phuks", "phuq", "pigfucker", "pimpis", "piss", "pissed", "pisser", "pissers", "pisses", "pissflaps", "pissin", "pissing", "pissoff", "poop", "porn", "porno", "pornography", "pornos", "prick", "pricks", "pron", "pube", "pusse", "pussi", "pussies", "pussy", "pussys", "rapist", "rectum", "retard", "rimjaw", "rimming", "s hit", "s_h_i_t", "sadist", "schlong", "screwing", "scroat", "scrote", "scrotum", "semen", "sex", "sh!+", "sh!t", "sh1t", "shag", "shagger", "shaggin", "shagging", "shemale", "shi+", "shit", "shit ass", "shitass", "shitdick", "shite", "shited", "shitey", "shitfuck", "shitfull", "shithead", "shiting", "shitings", "shits", "shitted", "shitter", "shitters", "shitting", "shittings", "shitty", "skank", "skullfuck", "slaptard", "slich", "slut", "sluts", "smegma", "smut", "snatch", "sob", "son-of-a-bitch", "spac", "spunk", "sucker", "suckmydick", "suckmydlck", "t1tt1e5", "t1tties", "teets", "teez", "testical", "testicle", "tit", "titfuck", "tits", "titt", "tittie5", "tittiefucker", "titties", "tittyfuck", "tittywank", "titwank", "tosser", "turd", "tw4t", "twat", "twathead", "twatty", "twunt", "twunter", "v14gra", "v1gra", "vagina", "viagra", "vulva", "w00se", "wang", "wank", "wanker", "wanky", "whoar", "whore", "willies", "willy", "xrated", "xxx", "卍", "﷽"]
      , badword_dict_tree = {};
    function check_badword(phrase, t) {
        for (var n = (phrase = phrase.replace(/[\u00AD\u200A\u200B\u200C\u200D\u200E\u200F\u2060\ufeff]/g, "").replace(/\u0391/g, "A").replace(/\u0392/g, "B").replace(/\u0395/g, "E").replace(/\u0396/g, "Z").replace(/\u0397/g, "H").replace(/\u039A/g, "K").replace(/\u039C/g, "M").replace(/\u039D/g, "N").replace(/\u039F/g, "O").replace(/\u03A1/g, "P").replace(/\u03A4/g, "T").replace(/\u03A5/g, "Y").replace(/\u03A7/g, "X").replace(/\u03BF/g, "o").replace(/\u0415/g, "E").replace(/\u0405/g, "S").replace(/\u0410/g, "A").replace(/\u0412/g, "B").replace(/\u041A/g, "K").replace(/\u041C/g, "M").replace(/\u041D/g, "H").replace(/\u041E/g, "O").replace(/\u0420/g, "P").replace(/\u0421/g, "C").replace(/\u0422/g, "T").replace(/\u0425/g, "X")).split(" "), idx = 0; idx < n.length; idx++) {
            var leader_char = n[idx].toUpperCase()
              , a = (leader_char.match(/[a-zA-Z0-9]/) || []).pop();
            if (void 0 !== badword_dict_tree[a])
                for (var r = 0; r < badword_dict_tree[a].length; r++) {
                    var l = badword_dict_tree[a][r];
                    -1 != leader_char.indexOf(l) && (n[idx] = t)
                }
        }
        phrase = n.join(" ");
        for (r = 0; r < badword_dict_tree[" "].length; r++) {
            l = badword_dict_tree[" "][r];
            -1 !== phrase.toUpperCase().indexOf(l.toUpperCase()) && (phrase = phrase.replace(new RegExp(badword_dict_tree[" "][r],"ig"), t))
        }
        return phrase
    }
    !function() {
        for (var idx = 0; idx < badword_list.length; idx++) {
            var bad_word = badword_list[idx].toUpperCase()
              , bad_char = bad_word.charAt(0);
            -1 !== bad_word.indexOf(" ") && (bad_char = " "),
            void 0 === badword_dict_tree[bad_char] && (badword_dict_tree[bad_char] = []),
            badword_dict_tree[bad_char].push(bad_word)
        }
    }();
    var Kt = !1;
    var Jt = !1;
    var $t, Qt, en = ($t = navigator.userAgent || navigator.vendor || window.opera,
    !(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test($t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test($t.substr(0, 4))) || "MacIntel" === navigator.platform && void 0 !== navigator.maxTouchPoints && 1 < navigator.maxTouchPoints), tn = -1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && -1 === navigator.userAgent.indexOf("Chromium"), nn = en && tn, on = -1 !== document.referrer.indexOf("kongregate.com"), an = -1 !== document.referrer.indexOf("newgrounds.com"), rn = -1 !== document.referrer.indexOf("crazygames.com") || -1 !== document.referrer.indexOf("speelspelletjes.nl") || -1 !== document.referrer.indexOf("gioca.re") || -1 !== document.referrer.indexOf(" onlinegame.co.id") || -1 !== document.referrer.indexOf("1001juegos.com") || -1 !== document.referrer.indexOf("crazygames.fr") || -1 !== document.referrer.indexOf("crazygames.ru") || -1 !== document.referrer.indexOf("crazygames.com.br"), ln = -1 !== document.referrer.indexOf("pacogames.com") || -1 !== document.referrer.indexOf("gamearter.com");
    var sn = [];
    function dn(e, t, n, i) {
        sn.push("t=" + (new Date).getTime() + "&u=" + encodeURIComponent(function() {
            if (!Qt) {
                try {
                    "undefined" != typeof Storage && localStorage.getItem("eventUserId") && (Qt = localStorage.getItem("eventUserId"))
                } catch (e) {
                    console.error(e)
                }
                if (!Qt) {
                    Qt = Math.round(2147483647 * Math.random());
                    try {
                        "undefined" != typeof Storage && localStorage.setItem("eventUserId", Qt)
                    } catch (e) {
                        console.error(e)
                    }
                }
            }
            return Qt
        }()) + "&c=" + (void 0 !== e ? encodeURIComponent(e) : "") + "&a=" + (void 0 !== t ? encodeURIComponent(t) : "") + "&l=" + (void 0 !== n ? encodeURIComponent(n) : "") + "&p=" + (void 0 !== i ? encodeURIComponent(i) : "")),
        un()
    }
    var cn = !1;
    function un() {
        if (!cn && 0 != sn.length) {
            cn = !0;
            var e = sn[0]
              , t = new XMLHttpRequest;
            t.onreadystatechange = function() {
                4 == t.readyState && (cn = !1,
                200 == t.status && "OK" == t.responseText ? (sn.splice(0, 1),
                setTimeout(un, 0)) : setTimeout(un, 5e3))
            }
            ,
            t.onerror = function() {
                cn = !1,
                setTimeout(un, 5e3)
            }
            ,
            t.open("GET", base_server + "/e?" + e, !0),
            t.send(null)
        }
    }
    function get_websocket_addres(host_adress) {
        return "https:" === window.location.protocol.toLowerCase() ? "wss://" + host_adress.replace(":", "/") : "ws://" + host_adress
    }
    function gn(region_name) {
        connections[region_name] = new WebSocket(get_websocket_addres(r[region_name].uri)),
        connections[region_name].binaryType = "arraybuffer",
        connections[region_name].pings = [],
        connections[region_name].sendPing = function() {
            this.lastPingTime = (new Date).getTime();
            var ping_buffer = new Uint8Array(1);
            ping_buffer.set([99], 0),
            this.send(ping_buffer)
        }
        ,
        connections[region_name].addEventListener("open", function(connection) {
            connection.target.sendPing()
        }),
        connections[region_name].addEventListener("error", function(error) {
            this.cancelled || li((new Date).toLocaleTimeString() + " - Error reaching server in " + region_name + " " + error.type + " " + error.code, "")
        }),
        connections[region_name].addEventListener("close", function(e) {}),
        connections[region_name].addEventListener("message", function(message) {
            var ping_code = new DataView(message.data).getUint8(0);
            99 == ping_code ? (message.target.pings.push((new Date).getTime() - message.target.lastPingTime),
            3 <= message.target.pings.length ? (message.target.close(),
            delete connections[region_name],
            best_pings_by_region[region_name] = Math.min.apply(Math, message.target.pings),
            console.log("Best ping for region", region_name, best_pings_by_region[region_name]),
            function() {
                var ping = 999999
                  , ping_list_option = "";
                for (var region in best_pings_by_region)
                    best_pings_by_region[region] < ping && (ping = best_pings_by_region[region],
                    best_ping != region && console.log("Best region", region),
                    best_ping = region),
                    ping_list_option += '<option value="' + region + '" data-ping="' + best_pings_by_region[region] + '">' + teams_dict[region] + "</option>";
                i || (document.getElementById("server-block").style.display = "block"),
                document.getElementById("server").innerHTML = ping_list_option,
                document.getElementById("server").value = best_ping,
                $("#server").selectmenu("refresh"),
                logged_in && at && try_to_join()
            }()) : message.target.sendPing()) : console.log("unexpected code from server", ping_code)
        })
    }
    var hn, pn = 0;
    function yn() {
        r && (!function() {
            for (var e in r)
                connections[e] && (connections[e].cancelled = !0,
                connections[e].close()),
                delete connections[e];
            best_pings_by_region = [],
            document.getElementById("server").innerHTML = "<option>Loading...</option>",
            $("#server").selectmenu("refresh")
        }(),
        clearTimeout(hn));
        var n = new XMLHttpRequest;
        n.onreadystatechange = function() {
            if (4 == n.readyState && 200 == n.status)
                try {
                    r = JSON.parse(n.responseText),
                    logged_in ? r = {
                        TR: r.TR
                    } : delete r.TR;
                    var e = !1;
                    for (var t in r)
                        r[t] && (gn(t),
                        e = !0);
                    e || (hn = setTimeout(yn, 3e3),
                    li((new Date).toLocaleTimeString() + " - Downloaded server list was empty", "error"))
                } catch (e) {
                    console.error(e),
                    hn = setTimeout(yn, 3e3),
                    li((new Date).toLocaleTimeString() + " - Downloaded server list was invalid: " + n.responseText, "error")
                }
        }
        ,
        n.onerror = function(e) {
            li((new Date).toLocaleTimeString() + " - Error downloading server list", "error"),
            setTimeout(yn, 3e3),
            ++pn < 5 && dn("Error", "getServersToPing")
        }
        ,
        n.open("GET", base_server + "/servers?m=" + ue, !0),
        n.send(null)
    }
    function try_to_join() {
        if (document.getElementById("play-button").style.display = "none",
        document.getElementById("play-spinner").style.display = "block",
        best_ping) {
            var e = document.getElementById("server").value ? document.getElementById("server").value : best_ping
              , t = document.getElementById("username").value.substring(0, 14)
              , n = new XMLHttpRequest;
            n.onreadystatechange = function() {
                if (4 == n.readyState && 200 == n.status)
                    if (-1 != n.responseText.indexOf("LOGIN_ERROR"))
                        alert("The session has expired, please reload the page and try again"),
                        document.location.reload();
                    else if (-1 != n.responseText.indexOf("ERROR"))
                        i ? (alert("Can't connect to the specified server, it's probably not open right now"),
                        history.replaceState("", document.title, window.location.pathname + window.location.search),
                        join_via_link(),
                        document.getElementById("play-button").style.display = "block",
                        document.getElementById("play-spinner").style.display = "none",
                        I = !1) : (setTimeout(try_to_join, 3e3),
                        li((new Date).toLocaleTimeString() + " - Error selecting server: " + n.responseText, "error"));
                    else if (-1 != n.responseText.indexOf("RESERVED_NICKNAME"))
                        document.getElementById("play-button").style.display = "block",
                        document.getElementById("play-spinner").style.display = "none",
                        I = !1,
                        alert("This nickname is reserved by a premium account, please choose another one"),
                        document.getElementById("username").value = "",
                        dn("Error", "ReservedNickname", t);
                    else {
                        var e = n.responseText.split(" ");
                        if (demo_server = e[0],
                        s = e[1],
                        "undefined" != typeof Storage)
                            try {
                                localStorage.setItem("sessionId", s)
                            } catch (e) {
                                console.log(e)
                            }
                        console.log("Server", demo_server, "reservationKey", o),
                        join()
                    }
            }
            ,
            n.onerror = function(e) {
                li((new Date).toLocaleTimeString() + " - Error selecting server", "error"),
                setTimeout(try_to_join, 3e3),
                dn("Error", "getServer")
            }
            ,
            n.open("POST", base_server + "?r=" + (e || "") + "&m=" + ue + "&u=" + encodeURIComponent(t) + "&s=" + (s || "") + (Ce ? "&a=1" : "") + (!Ce && Pe ? "&a=2" : "") + (i ? "&p=" + encodeURIComponent(i) : ""), !0),
            Ce ? n.send(Sa) : Pe ? n.send(La) : n.send(null)
        } else
            setTimeout(try_to_join, 3e3)
    }
    function join() {
        is_connected ? console.error("Already connected to server") : (document.getElementById("play-button").style.display = "none",
        document.getElementById("play-spinner").style.display = "block",
        Dt = {},
        Ee = {},
        (is_connected = new WebSocket(get_websocket_addres(demo_server))).binaryType = "arraybuffer",
        is_connected.addEventListener("open", function(e) {
            console.log("socket connected"),
            function() {
                0 == (username = document.getElementById("username").value.substring(0, 14)).length && (username = "Player");
                if ("undefined" != typeof Storage)
                    try {
                        localStorage.setItem("username", username)
                    } catch (e) {
                        console.log(e)
                    }
                var e = s || ""
                  , socket_buffer = new DataView(new ArrayBuffer(2 + 2 * username.length + 1 + 2 * e.length + 4 + 4));
                socket_buffer.setUint8(0, 1),
                Xn(socket_buffer, 1, username),
                Xn(socket_buffer, 2 + 2 * username.length, e),
                socket_buffer.setInt32(2 + 2 * username.length + 1 + 2 * e.length, Be),
                socket_buffer.setInt32(2 + 2 * username.length + 1 + 2 * e.length + 4, de),
                is_connected.send(socket_buffer.buffer),
                dn("Game", "JoinMap", demo_server, "n=" + username)
            }()
        }),
        is_connected.addEventListener("error", function(e) {
            console.error(e),
            li((new Date).toLocaleTimeString() + " - Websocket error " + e.type + " " + e.code, "error"),
            dn("Error", "WebSocket", demo_server, e.type)
        }),
        is_connected.addEventListener("close", function(e) {
            if (console.log("socket closed", e),
            !K)
                if (0 == J)
                    Se ? (alert("You have been kicked out for inactivity."),
                    dn("Error", "WebSocket", demo_server, "Kicked inactivity")) : (alert("Connection to the server failed. Please try again in a few minutes and contact us if the problem persists."),
                    dn("Error", "WebSocket", demo_server, "Connect failed " + e.code)),
                    document.location.reload();
                else {
                    if (dn("Error", "WebSocket", demo_server, "Connection closed " + e.code),
                    wt[kt] && !D) {
                        var t = new DataView(new ArrayBuffer(10));
                        t.setUint8(0, 10),
                        t.setInt32(1, kt),
                        t.setUint8(5, 0),
                        t.setInt32(6, 0),
                        qi(t)
                    }
                    Se ? alert("You have been kicked out for inactivity.") : alert("The connection to the server has been lost."),
                    document.getElementById("internet-issue").style.display = "none",
                    document.getElementById("respawn-buttons").style.display = "none",
                    document.getElementById("respawn-buttons-gm2").style.display = "none",
                    MainLoop.stop()
                }
            K = !1,
            0,
            re = []
        }),
        is_connected.addEventListener("message", Sn),
        dn("Game", "ConnectToServer", demo_server))
    }
    function In() {
        document.getElementById("tuto-checkbox").checked = !Te,
        document.getElementById("homepage").classList.add("blurred"),
        document.getElementById("tuto-popup").style.display = "table-row",
        document.getElementById("tuto-video").currentTime = 0,
        document.getElementById("tuto-video").play()
    }
    var bn = !1;
    function wn() {
        I = !0,
        window.DEFLY_SERVER_URL ? (demo_server = window.DEFLY_SERVER_URL,
        join()) : try_to_join()
    }
    function kn() {
        if (!I) {
            if (en && !nn) {
                document.body.requestFullscreen ? document.body.requestFullscreen() : document.body.mozRequestFullScreen ? document.body.mozRequestFullScreen() : document.body.webkitRequestFullscreen ? document.body.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : document.body.msRequestFullscreen && document.body.msRequestFullscreen();
                try {
                    screen.orientation.lock("landscape")
                } catch (e) {}
            }
            En = 0,
            (2 == de || 2 < de && (de - 2) % 2 == 0) && Mn() ? (dn("Click", "StartGame", "VideoPromo", "sm=" + Be + " sc=" + Me),
            "undefined" != typeof gtag && gtag("event", "StartGame", {
                event_category: "Click",
                event_label: "VideoAd",
                playerSkin: Be,
                playerSkinColor: Me
            })) : (wn(),
            dn("Click", "StartGame", "NoVideoPromo", "sm=" + Be + " sc=" + Me),
            "undefined" != typeof gtag && gtag("event", "StartGame", {
                event_category: "Click",
                event_label: "NoVideoAd",
                playerSkin: Be,
                playerSkinColor: Me
            }))
        }
    }
    function xn() {
        for (var e = 0; e <= 3; e++)
            ue == e ? document.getElementById("gamemode-" + e).classList.add("selected") : document.getElementById("gamemode-" + e).classList.remove("selected")
    }
    var En = 0;
    var Bn = !1;
    function Mn() {
        if (qa)
            return !1;
        try {
            if (Bn = !0,
            window.famobi)
                window.famobi.showAd(Tn),
                dn("Ads", "ShowFamobiVideo", void 0, "ab=" + Kt),
                "undefined" != typeof gtag && gtag("event", "ShowFamobiVideo", {
                    event_category: "Ads"
                });
            else {
                if ("undefined" == typeof aiptag || !aiptag.cmd.player.push)
                    return Bn = !1,
                    dn("Ads", "BlockedAdInPlayVideo", void 0, void 0),
                    "undefined" != typeof gtag && gtag("event", "BlockedAdInPlayVideo", {
                        event_category: "Ads"
                    }),
                    !1;
                aiptag.cmd.player.push(function() {
                    adplayer.startPreRoll()
                }),
                dn("Ads", "ShowAdInPlayVideo", void 0, "ab=" + Kt),
                "undefined" != typeof gtag && gtag("event", "ShowAdInPlayVideo", {
                    event_category: "Ads"
                }),
                document.getElementById("defly-io_300x250").style.display = "none"
            }
            return !0
        } catch (e) {
            return console.error(e),
            Bn = !1
        }
    }
    function Tn() {
        Bn && (Bn = !1,
        0 == En ? wn() : 1 == En ? wo() : ko(),
        document.getElementById("defly-io_300x250").style.display = "block")
    }
    function Cn() {
        MainLoop.stop(),
        is_connected && 1 == is_connected.readyState && (K = !0,
        is_connected.close()),
        document.getElementById("fps").style.display = "none",
        E.view.style.display = "none",
        dn("Click", "BackToHomepage", void (J = 0), void 0),
        "undefined" != typeof gtag && gtag("event", "BackToHomepage", {
            event_category: "Click"
        }),
        history.replaceState("", document.title, window.location.pathname + window.location.search),
        window.location.reload()
    }
    var Pn = 0;
    function Sn(e) {
        var t, n, i, o, a, r, l, s, d, c, u, m, g, h, p, y = new DataView(e.data), f = y.getUint8(0);
        switch (f) {
        case 1:
            console.error("received map unavailable"),
            Pn++,
            1 == J ? setTimeout(wo, 250) : 1 == ue && -1 != ji ? setTimeout(function() {
                Ki(ji)
            }, 250) : (K = !0,
            is_connected.close(),
            setTimeout(try_to_join, 250)),
            20 <= Pn && (document.getElementById("spawn-warning").style.display = "block"),
            dn("Error", "MapFull", demo_server, void 0);
            break;
        case 2:
            !function(e) {
                2 == ue && (ft = !1);
                M.removeChildren(),
                T.removeChildren(),
                L.removeChildren(),
                O.removeChildren(),
                P.removeChildren(),
                C.removeChildren(),
                S.removeChildren(),
                F.removeChildren(),
                X.removeChildren(),
                W.removeChildren(),
                wt = {},
                vt = {},
                It = {},
                me = {},
                bt = {},
                pe = [U = R = pt = Pn = 0, 0, 0, 0, 0, 0, 0],
                A = {
                    shooting: !1,
                    moving: !1,
                    aimDirection: he = 0,
                    moveDirection: 0
                },
                le = [],
                ne = [],
                ui = [],
                aa = D = null,
                ve = -1,
                be = !1,
                ee = te = we = 0,
                Ma = 60,
                kt = e.getInt32(1),
                te = e.getInt32(5),
                _e = e.getFloat32(9),
                Ne = e.getFloat32(13),
                Ue = e.getFloat32(17),
                Ue *= Ct,
                Oe = e.getFloat32(21),
                Ye = e.getFloat32(25),
                mt = e.getFloat32(29),
                gt = e.getFloat32(33),
                84 * gt / 128,
                dt = e.getFloat32(37),
                ct = e.getFloat32(41),
                ut = e.getFloat32(45),
                e.getFloat32(49),
                qe = e.getFloat32(53),
                Ge = e.getFloat32(57),
                We = e.getFloat32(61);
                var t = e.getFloat32(65)
                  , n = e.getFloat32(69);
                76 <= e.byteLength && (xt = e.getInt32(73),
                Et[kt] = xt);
                80 <= e.byteLength && (Mt = e.getInt32(77));
                82 <= e.byteLength && (ae = e.getUint8(81),
                (0 == ue || 3 == ue) && 1 <= ae && (Dt[1] = 5066061));
                if (83 <= e.byteLength) {
                    var i = e.getUint8(82);
                    rt = 0 < (1 & i)
                }
                Zn = 1 == Mt ? 3 * Math.sqrt(3) / 2 * Math.pow(_e / 2, 2) : 2 == Mt ? Math.PI * _e / 2 * Ne / 2 : _e * Ne,
                Gn = [0 - 3 * (Nn = [Ne / _e * 2, Ne / -_e * 2, Ne / -_e * 2, Ne / _e * 2])[0] / 4 * _e, Ne - 3 * Nn[1] / 4 * _e, 0 - 1 * Nn[2] / 4 * _e, Ne - 1 * Nn[3] / 4 * _e],
                0 == ue || 1 == ue ? (q = new ra(_e,Ne,2),
                Z = new ra(_e,Ne,2)) : 3 == ue && (q = new ra(_e,Ne,2),
                Z = new ra(_e,Ne,2),
                V = new ra(_e,Ne,2));
                ke[kt] = username,
                Ee[kt] = Be,
                _n(kt);
                var o = Dt[kt]
                  , a = {};
                for (var r in Dt)
                    r != kt && Dt[r] == o && (a[r] = !0);
                for (var r in a)
                    delete Dt[r];
                wt[kt].x = t,
                wt[kt].y = n,
                (He = new PIXI.Sprite(PIXI.loader.resources["img/line1.png"].texture)).anchor.set(.5),
                He.height = gt,
                He.alpha = .2,
                He.tint = Ht(kt),
                He.visible = !1,
                P.addChild(He),
                (Re = new PIXI.Sprite(z.dot1)).anchor.set(.5),
                Re.width = 2 * Oe,
                Re.height = 2 * Oe,
                Re.alpha = .2,
                Re.tint = Ht(kt),
                Re.visible = !1,
                C.addChild(Re),
                J = 1,
                ea(),
                ne = [],
                MainLoop.start(),
                E.view.style.display = "block",
                (l = document.getElementById("defly-io_300x250")) && !qa && (l.parentElement.removeChild(l),
                document.getElementById("respawn-promo" + (2 == ue ? "-gm2" : "")).appendChild(l));
                if (2 == ue && !qa) {
                    var l = document.getElementById("defly-io_728x90");
                    l && (l.parentElement.removeChild(l),
                    document.getElementById("curse-promo-gm2").appendChild(l))
                }
                if (1 == ue) {
                    for (var s = "", d = 0; d < Bt; d++) {
                        var c = Lt[d + (1 <= ae ? 1 : 0)];
                        16252714 == c && (c = 13817893);
                        var u = Wt(c, .2);
                        s += '<div class="bar" ' + (xt == d + 1 + (1 <= ae ? 1 : 0) ? 'id="map-control-bar-value"' : 'id="map-control-bar-team-' + ((1 <= ae ? 2 : 0) + d) + '"') + ' style="background: linear-gradient(to bottom, ' + Ya(c) + ", " + Ya(u) + ');"></div>'
                    }
                    document.getElementById("score-bars").innerHTML = s
                }
                document.getElementById("play-button").style.display = "block",
                document.getElementById("play-spinner").style.display = "none",
                document.getElementById("respawn-button").style.display = "inline-block",
                document.getElementById("respawn-spinner").style.display = "none",
                document.getElementById("spawn-warning").style.display = "none",
                document.getElementById("homepage").style.display = "none",
                document.getElementById("respawn").style.display = "none",
                document.getElementById("upgrade-block").style.display = "none",
                document.getElementById("choose-team-popup") && (document.getElementById("choose-team-popup").style.display = "none");
                2 != ue && (document.getElementById("xp-block").style.display = "block");
                if (document.getElementById("level-value").innerHTML = 0,
                document.getElementById("xp-value").style.width = "0%",
                document.getElementById("upgrade-points").innerHTML = "0",
                document.getElementById("superpower-fuel").style.display = "none",
                document.getElementById("lb-player-points").innerHTML = 0,
                document.getElementById("lb-player-name").innerHTML = username,
                document.getElementById("fps").style.display = "block",
                document.getElementById("hide-xp-block").style.display = "none",
                Ne < _e) {
                    var m = Math.ceil(96 / _e * Ne);
                    Y.width = 96,
                    Y.height = m
                } else if (_e < Ne) {
                    var g = Math.ceil(96 / Ne * _e);
                    document.getElementById("minimap").style.width = g + "px",
                    Y.width = g,
                    Y.height = 96
                } else
                    Y.width = 96,
                    Y.height = 96;
                if (document.getElementById("minimap").style.width = Y.width + "px",
                document.getElementById("minimap").style.height = Y.height + "px",
                2 == ue) {
                    var h = document.getElementById("minimap-target-positions");
                    h || ((h = document.createElement("div")).setAttribute("id", "minimap-target-positions"),
                    document.getElementById("minimap").insertBefore(h, document.getElementById("minimap-team-positions"))),
                    h.innerHTML = ""
                }
                1 == Mt ? document.getElementById("minimap").style.clipPath = "polygon(0 50%, 25% 0, 75% 0, 100% 50%, 75% 100%, 25% 100%)" : 2 == Mt && (document.getElementById("minimap").style.borderRadius = "50%");
                Ui(),
                document.getElementById("minimap").style.display = "block",
                en && (document.getElementById("minimap").style.right = "unset",
                document.getElementById("minimap").style.left = "4px",
                document.getElementById("minimap").style.transformOrigin = "bottom left",
                1 != ue && 2 != ue || !document.getElementById("chat-button") || (document.getElementById("chat-button").style.display = "inline-block"));
                document.getElementById("score").style.display = "block";
                for (var d = 0; d < 7; d++)
                    document.getElementById("skill-plus-" + d).style.display = "block";
                document.getElementById("map-vote") && (document.getElementById("map-vote").style.display = "none");
                (function() {
                    w = (new Date).getTime();
                    var e = new Uint8Array(1);
                    e.set([99], 0),
                    is_connected.send(e)
                }
                )(),
                dn("Game", "EnterMap", demo_server),
                1 != ue && 2 != ue || en || (ci("Welcome to Team " + zt[xt - 1] + ". Press TAB to show your teammates positions", $e ? "info-dark" : "info"),
                ci("Press ENTER to chat with your teammates", $e ? "info-dark" : "info"));
                if (2 == ue)
                    document.getElementById("buy-screen").style.display = "block";
                else if (3 == ue) {
                    var p = document.getElementById("choose-superpower")
                      , y = p.getElementsByTagName("td");
                    y[3].innerHTML = "Grenade",
                    y[9].innerHTML = '<div class="icon" onclick="defly.selectSuperpower(6);"><img src="img/sp6.png"></div>'
                }
                if ($e) {
                    document.getElementById("respawn").style.color = "white",
                    document.getElementById("respawn").style.backgroundColor = "rgba(255, 255, 255, 0.2)",
                    document.getElementById("respawn-gm2").style.color = "white",
                    document.getElementById("respawn-gm2").style.backgroundColor = "rgba(255, 255, 255, 0.2)",
                    document.getElementById("chat-input").style.color = "white",
                    document.getElementById("chat-history").style.color = "white",
                    document.getElementById("fps").style.color = "white",
                    document.getElementById("choose-superpower").style.color = "white",
                    document.getElementById("upgrade-block").style.color = "white",
                    document.getElementById("countdown").style.color = "white";
                    for (var f = document.getElementsByClassName("bars-bg"), d = 0; d < f.length; d++)
                        f[d].style.backgroundColor = "rgba(84, 84, 84, 0.7)";
                    for (var f = document.getElementsByClassName("score-bar"), d = 0; d < f.length; d++)
                        f[d].style.backgroundColor = "rgba(255, 255, 255, 0.5)";
                    for (var f = document.getElementsByClassName("xp-bar"), d = 0; d < f.length; d++)
                        f[d].style.backgroundColor = "rgba(255, 255, 255, 0.5)"
                }
                Jn = (new Date).getTime(),
                xo && (wt[kt].visible = He.visible = Re.visible = !1,
                D = wt[kt].position,
                clearTimeout(Zi));
                logged_in || (window.location.hash = "#" + ue + "-" + demo_server.replace("defly.io", ""));
                xo || !ot || 0 != ue && 3 != ue || (Eo(1, window.prompt("?", "")),
                Eo(5),
                Wn = setInterval(function() {
                    Eo(5)
                }, 6e4))
            }(y);
            break;
        case 3:
            Ln((new Date).getTime() - re.shift());
            break;
        case 4:
            !function(e) {
                Jn = (new Date).getTime();
                var t = e.getInt32(1);
                if (4 <= te - (ee = t)) {
                    var n = Math.max(1, Math.ceil((te - ee) / 10));
                    0,
                    te -= Math.max(1, Math.ceil((te - ee) / 10)),
                    to(-n)
                }
                if (4 <= ee - te) {
                    var n = Math.max(1, Math.ceil((ee - te) / 10));
                    0,
                    te += n,
                    to(n)
                }
                if (te < ee)
                    return ne.push({
                        turn: ee,
                        dv: e
                    });
                if (Kn(e),
                0 < te - ee)
                    for (var i = 0; i < Math.min(60, te - ee); i++)
                        2 == ue && 1 == pt || (ha(!0, !1),
                        wt[kt] && da(wt[kt], !0))
            }(y);
            break;
        case 5:
            !function(e) {
                var t = e.getUint8(1);
                if (3 == t)
                    return;
                if (2 == t && 10 < ++ii)
                    return;
                var n = document.getElementById("user-error");
                n || ((n = document.createElement("div")).setAttribute("class", "user-error"),
                n.setAttribute("id", "user-error"),
                window.document.body.appendChild(n));
                n.innerHTML = ni[t - 1],
                n.style.opacity = 1,
                clearTimeout($n),
                clearInterval(Qn),
                $n = setTimeout(function() {
                    var t = (new Date).getTime();
                    Qn = setInterval(function() {
                        var e = (new Date).getTime() - t;
                        500 < e ? (clearInterval(Qn),
                        window.document.body.removeChild(n)) : n.style.opacity = 1 - e / 500
                    }, 20)
                }, 1e3)
            }(y);
            break;
        case 6:
            wi(y);
            break;
        case 49:
            !function(e) {
                for (var t = Oe, n = e.getInt16(1), i = 3, o = 0; o < n; o++) {
                    var a = e.getInt32(i)
                      , r = e.getInt32(i + 4)
                      , l = e.getFloat32(i + 8)
                      , s = e.getFloat32(i + 12)
                      , d = e.getUint8(i + 16)
                      , c = e.getUint8(i + 17)
                      , u = e.getFloat32(i + 18)
                      , m = e.getInt32(i + 22);
                    if (i += 26,
                    vt[a])
                        0;
                    else {
                        if (3 == ue)
                            var g = "dot" + d + "-" + c;
                        else if (!nt || 1 != ue && 2 != ue || r == xt)
                            if (nt && 0 == ue && r != kt)
                                var g = "dot1-enemy";
                            else
                                var g = "dot1";
                        else
                            var g = "dot1-enemy";
                        var h = new PIXI.Sprite(z[g]);
                        h.x = l,
                        h.y = s,
                        h.width = 2 * t,
                        h.height = 2 * t,
                        h.size = t,
                        h.anchor.set(.5),
                        h.owner = r,
                        h.hp = d,
                        h.maxHP = c,
                        h.creationTurn = m,
                        h.alpha = 1,
                        h.tint = 1 == ue || 2 == ue ? Rt(r) : Ht(r),
                        et && 1 == r && l >= tt.x1 && l <= tt.x2 && s >= tt.y1 && s <= tt.y2 && z["tower-kh"] && (h.texture = z["tower-kh"],
                        h.tint = 15642415),
                        h.lines = [],
                        h.dotId = a,
                        C.addChild(h),
                        (vt[a] = h).hp != h.maxHP && 3 != ue && (h.healthBar = Di(h),
                        S.addChild(h.healthBar),
                        h.healthBar.outer.width = h.healthBar.width * h.hp / h.maxHP),
                        0 < u && ki(h, u),
                        0 != ue && 3 != ue || r != kt || (wa = !0),
                        q && (q.add(h, h.position),
                        3 == ue && Si(h))
                    }
                }
            }(y);
            break;
        case 7:
            xi(y);
            break;
        case 50:
            !function(e) {
                for (var t = e.getInt16(1), n = 3, i = 0; i < t; i++) {
                    var o = e.getInt32(n)
                      , a = e.getInt32(n + 4)
                      , r = e.getInt32(n + 8)
                      , l = e.getInt32(n + 12)
                      , s = e.getInt32(n + 16)
                      , d = e.getInt32(n + 20);
                    n += 24;
                    var c = vt[r]
                      , u = vt[l];
                    if (c || console.error("could not find dot", r),
                    u || console.error("could not find dot", l),
                    It[o])
                        0;
                    else {
                        var m = zn(c, u);
                        m.lineId = o,
                        m.owner = a,
                        m.tint = 1 == ue || 2 == ue ? Rt(a) : Ht(a),
                        et && 15642415 == c.tint && (m.tint = 15642415),
                        m.dot1 = c,
                        m.dot2 = u,
                        m.leftZoneId = s,
                        m.rightZoneId = d,
                        P.addChild(m),
                        It[o] = m,
                        Z && Z.addLine(m, c.position, u.position),
                        t < 20 && (m.alpha = 0,
                        anime({
                            targets: m,
                            alpha: 3 == ue && c.isCaptured ? .6 : 1,
                            duration: 250,
                            easing: "linear"
                        }))
                    }
                }
            }(y);
            break;
        case 8:
            Mi(y, !0);
            break;
        case 20:
            Mi(y, !1);
            break;
        case 51:
            !function(e) {
                for (var t = e.getInt16(1), n = 3, i = 0; i < t; i++)
                    n = Ti(e, n, !1, !1);
                var o = e.getInt16(n);
                n += 2;
                for (var i = 0; i < o; i++)
                    n = Ti(e, n, !1, !0);
                var a = e.getInt16(n);
                n += 2;
                for (var i = 0; i < a; i++) {
                    var r = 0 == e.getUint8(n);
                    n = Ti(e, ++n, !0, r)
                }
            }(y);
            break;
        case 9:
            Yi(y);
            break;
        case 10:
            qi(y);
            break;
        case 52:
            Wi(y.getInt32(1));
            break;
        case 11:
            !function(e) {
                var t = e.getInt16(1)
                  , n = e.getInt16(3)
                  , i = e.getInt32(5)
                  , o = e.getFloat32(9);
                o < 0 && (o = 0);
                for (var a = e.getUint8(21), r = [], l = 22, s = "", d = 0; d < a; d++) {
                    r[d] = {
                        id: e.getInt32(l),
                        points: e.getInt32(l + 4)
                    },
                    l += 8;
                    var c = n == d;
                    if (!en || d < 5) {
                        var u = 1 == ue || 2 == ue ? Rt(Et[r[d].id]) : Ht(r[d].id);
                        s += '<div class="lb-item' + (c ? " is-self" : "") + '"><span class="color" style="background-color: ' + Ya(u) + '"></span><span class="rank">' + (d + 1) + '.</span><span class="player-name' + (10 <= d + 1 ? " l" : "") + '">' + html_santize(ke[r[d].id]) + '</span><span class="points">' + r[d].points + "</span></div>"
                    }
                }
                if (document.getElementById("lb-top").innerHTML = s,
                document.getElementById("player-count").innerHTML = t,
                document.getElementById("lb-player-rank").innerHTML = n + 1,
                document.getElementById("lb-player-points").innerHTML = i,
                document.getElementById("lb-player-line").style.display = n < (en ? 5 : r.length) ? "none" : "block",
                !xo) {
                    var m = 100 * o / Zn;
                    1 != ue && (document.getElementById("map-control-value").innerHTML = Qi(99.9 < m ? 100 : m),
                    document.getElementById("map-control-bar-value").style.width = m + "%"),
                    2 != ue && 3 != ue && eo < 80 && 80 <= m && !vi && oi("You reached 80%, now kill everyone to win!", 2e4),
                    eo = m
                }
                document.getElementById("leaderboard-block").style.display = D && !xo ? "none" : "block"
            }(y);
            break;
        case 12:
            !function(e) {
                var t = e.getInt32(1);
                if (0 == t)
                    aa = null,
                    He.visible = !1;
                else {
                    var n = vt[t];
                    aa = n
                }
            }(y);
            break;
        case 13:
            !function(e) {
                var t = e.getInt32(1)
                  , n = e.getInt32(5)
                  , i = e.getInt32(9)
                  , o = e.getInt32(13)
                  , a = e.getFloat32(17)
                  , r = e.getFloat32(21)
                  , l = e.getFloat32(25)
                  , s = e.getFloat32(29)
                  , d = e.getInt32(33);
                if (me[n])
                    var c = me[n];
                else {
                    if (!nt || 1 != ue && 2 != ue || i == xt)
                        if (nt && 0 == ue && i != kt)
                            var u = "shoot-enemy";
                        else
                            var u = "shoot";
                    else
                        var u = "shoot-enemy";
                    var c = new PIXI.Sprite(z[u]);
                    c.width = 2 * Ye * (Qe ? 1.1 : 1),
                    c.height = 2 * Ye * (Qe ? 1.1 : 1),
                    c.anchor.set(.5),
                    c.owner = i,
                    c.creator = o,
                    c.tint = Wt(1 == ue || 2 == ue ? Rt(i) : Ht(i), "shoot-enemy" == u ? 0 : -.2),
                    F.addChild(c),
                    c.shootId = n,
                    me[n] = c
                }
                c.x = a,
                c.y = r,
                c.sx = l,
                c.sy = s,
                c.initialTurn = t,
                c.initialX = a,
                c.initialY = r,
                c.lifetime = d;
                var m = te - t;
                no(c, m),
                0
            }(y);
            break;
        case 14:
            !function(e) {
                var t = e.getInt32(1);
                if (me[t]) {
                    var n = me[t];
                    delete me[t],
                    F.removeChild(n)
                }
            }(y);
            break;
        case 15:
            io(y);
            break;
        case 32:
            io(y, !0);
            break;
        case 16:
            oo(y, !0, !1);
            break;
        case 17:
            oo(y, !0, !0);
            break;
        case 18:
            oo(y, !1, !1);
            break;
        case 19:
            oo(y, !1, !0);
            break;
        case 21:
            !function(e) {
                var t = R;
                R = e.getUint8(1);
                U = e.getFloat32(2),
                he = e.getUint8(6);
                for (var n = 0, i = 0; i < pe.length; i++)
                    pe[i] = e.getUint8(7 + i),
                    n += pe[i],
                    document.getElementById("skill-bar-" + i).innerHTML = ao('<span class="full"></span>', pe[i]) + ao("<span></span>", 8 - pe[i]),
                    8 <= pe[i] && (document.getElementById("skill-plus-" + i).style.display = "none");
                0 < he ? (document.getElementById("upgrade-points").innerHTML = he,
                document.getElementById("upgrade-block").style.display = "block",
                anime({
                    targets: "#upgrade-block",
                    easing: "easeInQuad",
                    left: "16px",
                    duration: 250
                })) : "16px" == document.getElementById("upgrade-block").style.left && (document.getElementById("upgrade-block").style.display = "none");
                var o = t == R ? U : 1
                  , a = !0
                  , r = 1e3 / (R - t + 1)
                  , l = function() {
                    !a && t < R && (document.getElementById("xp-value").style.width = "0%",
                    t++,
                    document.getElementById("level-value").innerHTML = t,
                    o = t == R ? U : 1),
                    a = !1;
                    var e = {
                        targets: "#xp-value",
                        width: [document.getElementById("xp-value").style.width, 100 * o + "%"],
                        easing: "linear",
                        duration: r
                    };
                    t < R && (e.complete = l),
                    anime(e)
                };
                l(),
                t < R && dn("Game", "ReachLevel", R);
                t < R && 32 <= R ? (document.getElementById("hide-xp-block").style.display = "block",
                co = (new Date).getTime()) : 32 <= t && 6e4 < (new Date).getTime() - co && (document.getElementById("xp-bar").style.display = "none");
                xa = 0 < n
            }(y);
            break;
        case 22:
            !function(e) {
                var t = e.getInt32(1)
                  , n = e.getInt32(5);
                0;
                if (me[n]) {
                    var i = me[n];
                    delete me[n],
                    F.removeChild(i)
                }
                if (vt[t]) {
                    var o = vt[t];
                    o.healthBar || 3 == ue || (o.healthBar = Di(o),
                    S.addChild(o.healthBar)),
                    o.hp -= 1,
                    3 == ue ? o.texture = z["dot" + o.hp + "-" + o.maxHP] : o.healthBar.outer.width = o.healthBar.width * o.hp / o.maxHP
                }
            }(y);
            break;
        case 30:
            !function(e) {
                var t = e.getInt32(1);
                0;
                if (vt[t]) {
                    var n = vt[t];
                    if (10 <= e.byteLength) {
                        n.maxHP = e.getUint8(5);
                        var i = e.getFloat32(6);
                        n.shield || ki(n, i),
                        n.shield.appearPercent = i,
                        n.shield.lastAppearTurn = -1e3,
                        n.shield.state = 0,
                        n.shield.alpha = 0
                    }
                    n.hp = n.maxHP,
                    3 == ue ? n.texture = z["dot" + n.hp + "-" + n.maxHP] : n.healthBar && (S.removeChild(n.healthBar),
                    delete n.healthBar)
                }
            }(y);
            break;
        case 23:
            document.getElementById("choose-superpower").style.display = "block";
            break;
        case 24:
            !function(e) {
                Ie = e.getFloat32(1);
                var t = be;
                be = 1 == e.getUint8(5),
                uo(),
                !t && be && 4 != ve && 6 != ve && anime({
                    targets: "#superpower-fuel-value",
                    width: ["100%", "0%"],
                    easing: "linear",
                    duration: 5 == ve ? 1e3 : 1e4
                })
            }(y);
            break;
        case 25:
            var v = y.getInt32(1)
              , I = y.getInt32(5);
            Dt[I] || Ht(I),
            Dt[v] = Dt[I];
            break;
        case 26:
            !function(e) {
                var t = e.getInt32(1)
                  , n = e.getFloat32(5)
                  , i = e.getFloat32(9)
                  , o = e.getFloat32(13)
                  , a = e.getFloat32(17)
                  , r = new PIXI.Sprite(z.flashbang);
                r.anchor.set(.5),
                r.position.set(n, i),
                r.width = .75 * Ue,
                r.height = .75 * Ue,
                F.addChild(r);
                var l = 0;
                t == kt ? l = .5 : 1 == ue && Et[t] == xt ? l = .5 : D && (l = .5);
                return anime({
                    targets: r,
                    duration: 1500,
                    x: o,
                    y: a,
                    rotation: 2 * Math.PI,
                    easing: "easeOutCubic",
                    complete: (s = r,
                    function() {
                        F.removeChild(s),
                        anime({
                            targets: B,
                            alpha: [l, 1],
                            easing: "easeInQuint",
                            duration: 5e3
                        })
                    }
                    )
                });
                var s
            }(y);
            break;
        case 43:
            !function(e) {
                e.getInt32(1);
                var t = e.getFloat32(5)
                  , n = e.getFloat32(9)
                  , i = e.getFloat32(13)
                  , o = e.getFloat32(17)
                  , a = new PIXI.Sprite(z.emp);
                return a.anchor.set(.5),
                a.position.set(t, n),
                a.width = .75 * Ue,
                a.height = .75 * Ue,
                F.addChild(a),
                anime({
                    targets: a,
                    duration: 1500,
                    x: i,
                    y: o,
                    rotation: 2 * Math.PI,
                    easing: "easeOutCubic",
                    complete: (r = a,
                    function() {
                        setTimeout(function() {
                            F.removeChild(r),
                            _i(r.x, r.y, 6)
                        }, 1400)
                    }
                    )
                });
                var r
            }(y);
            break;
        case 53:
            d = (s = y).getInt32(1),
            c = s.getFloat32(5),
            u = s.getFloat32(9),
            m = s.getFloat32(13),
            g = s.getFloat32(17),
            (h = new PIXI.Sprite(z.grenade)).tint = Ht(d),
            h.anchor.set(.5),
            h.position.set(c, u),
            h.width = Ue,
            h.height = Ue,
            F.addChild(h),
            anime({
                targets: h,
                duration: 1500,
                x: m,
                y: g,
                rotation: 2 * Math.PI,
                easing: "easeOutCubic",
                complete: (p = h,
                function() {
                    setTimeout(function() {
                        F.removeChild(p),
                        _i(p.x, p.y, 6)
                    }, 1400)
                }
                )
            });
            break;
        case 27:
            !function(e) {
                var t = e.getInt32(1)
                  , n = e.getFloat32(5)
                  , i = e.getFloat32(9)
                  , o = new PIXI.Sprite(z.portal1);
                o.width = 2 * Ue,
                o.height = 2 * Ue,
                o.anchor.set(.5),
                wt[t] && o.position.set(wt[t].position.x, wt[t].position.y);
                X.addChildAt(o, 0);
                var a = new PIXI.Sprite(z.portal2);
                a.width = 2 * Ue,
                a.height = 2 * Ue,
                a.anchor.set(.5),
                a.position.set(n, i),
                X.addChildAt(a, 1);
                var r = wt[t] ? wt[t].scale.x : 0
                  , l = wt[t] ? wt[t].scale.y : 0;
                anime({
                    targets: wt[t] ? wt[t].scale : {
                        x: 1,
                        y: 1
                    },
                    x: 0,
                    y: 0,
                    easing: "easeInCubic",
                    duration: 500,
                    complete: (s = o,
                    d = a,
                    function() {
                        var e;
                        X.removeChild(s),
                        wt[t] ? (wt[t] && wt[t].position.set(n, i),
                        anime({
                            targets: wt[t] ? wt[t].scale : {
                                x: 0,
                                y: 0
                            },
                            x: r,
                            y: l,
                            easing: "easeOutCubic",
                            duration: 500,
                            complete: (e = d,
                            function() {
                                X.removeChild(e)
                            }
                            )
                        })) : X.removeChild(d)
                    }
                    )
                });
                var s, d
            }(y);
            break;
        case 28:
            we = y.getInt32(1),
            2 != ue || D || ((D = wt[kt].position) || (D = {
                x: _e / 2,
                y: Ne / 2
            }),
            H = -1e3,
            wt[kt].visible = !1,
            ze = -1,
            document.getElementById("buy-screen").style.display = "none",
            oi("You are spectating until end of round", 1e4),
            ro = setTimeout(function() {
                2 == pt && oi((en ? "Tap" : "Click") + " anywhere to spectate next teammate", 1e4),
                ro = null
            }, 1e4));
            break;
        case 29:
            !function(e) {
                var t = e.getInt32(1)
                  , n = Fn(e, 5)
                  , i = e.getInt32(6 + 2 * n.length)
                  , o = -1;
                e.byteLength >= 6 + 2 * n.length + 4 + 4 - 1 && (o = e.getInt32(6 + 2 * n.length + 4));
                var a = 0;
                e.byteLength >= 6 + 2 * n.length + 4 + 4 + 1 && (a = e.getUint8(6 + 2 * n.length + 4 + 4),
                xe[t] = a);
                0;
                ke[t] = check_badword(html_santize(n), " ").substring(0, 12),
                Ee[t] = i,
                wt[t] && (wt[t].usernameText.text = ke[t]);
                -1 != o && (Et[t] = o,
                t == kt && (xt = o));
                2 == ue && (delete Dt[t],
                t == kt && (He.tint = Ht(kt),
                Re.tint = Ht(kt)),
                wt[t] && ho(t));
                0 < a && t == kt && 0 < t && wt[kt] && "?skin-editor" !== window.location.search && ho(t)
            }(y);
            break;
        case 31:
            !function(e) {
                var t = e.getInt32(1);
                if (0 != t)
                    var n = 1 == ue || 2 == ue ? Rt(t) : Ht(t)
                      , i = (16711680 & n) >> 16
                      , o = (65280 & n) >> 8
                      , a = 255 & n
                      , r = 255;
                else
                    var i = 0
                      , o = 0
                      , a = 0
                      , r = 0;
                var l = 5
                  , s = [];
                for (; l + 3 <= e.byteLength; ) {
                    var d = e.getUint8(l)
                      , c = e.getUint8(l + 1)
                      , u = e.getUint8(l + 2);
                    s.push({
                        y: d,
                        x1: c,
                        x2: u
                    }),
                    l += 3
                }
                0 != t || xo || G.data.set(N.data);
                (function(e, t, n, i, o) {
                    for (var a = 0; a < e.length; a++)
                        for (var r = e[a].x1; r <= e[a].x2; r++) {
                            var l = 4 * (e[a].y * N.width + r);
                            N.data[l + 0] = t,
                            N.data[l + 1] = n,
                            N.data[l + 2] = i,
                            N.data[l + 3] = o
                        }
                }
                )(s, i, o, a, r),
                lo && clearTimeout(lo);
                lo = setTimeout(function() {
                    if (_.putImageData(N, 0, 0),
                    so && clearInterval(so),
                    0 == t && !xo) {
                        var e = 0;
                        so = setInterval(function() {
                            e++,
                            _.putImageData(e % 2 == 0 ? N : G, 0, 0),
                            10 <= e && clearInterval(so)
                        }, 250)
                    }
                }, 100)
            }(y);
            break;
        case 34:
            !function(e) {
                e.getUint8(1);
                var t = e.getFloat32(2)
                  , n = e.getFloat32(6)
                  , i = e.getFloat32(10)
                  , o = (e.getFloat32(14),
                100 * t / Zn);
                1 == ue && document.getElementById("respawn-max-control-label") && (document.getElementById("respawn-max-control-label").innerHTML = "Territory  built by you: ");
                2 != ue && (document.getElementById("respawn-max-control").innerHTML = Qi(o),
                document.getElementById("respawn-max-score").innerHTML = Math.floor(n));
                document.getElementById("respawn-earned-coins" + (2 == ue ? "-gm2" : "")).innerHTML = Ce || Pe || i < 1 ? Math.floor(i) : '<span style="text-decoration: line-through;">' + Math.floor(i) + "</span> 0";
                document.getElementById("respawn-panel-earnings" + (2 == ue ? "-gm2" : "")).style.display = "table-cell",
                Kt && !qa && (document.getElementById("respawn-promo" + (2 == ue ? "-gm2" : "")).innerHTML = '<img style="cursor: pointer;" onclick="defly.showMyAccount();" src="img/premium-inc.png">',
                document.getElementById("respawn-promo" + (2 == ue ? "-gm2" : "")).style.backgroundColor = "transparent");
                if (!qa && (Ce || Pe) && !Kt && 5 < de) {
                    var a = Math.random() < .5;
                    document.getElementById("respawn-feedback" + (2 == ue ? "-gm2" : "")).style.display = a ? "none" : "block",
                    document.getElementById("respawn-get-premium" + (2 == ue ? "-gm2" : "")).style.display = a ? "block" : "none"
                }
            }(y);
            break;
        case 35:
            !function(e) {
                var t = xo && 1 == J;
                2 == ue && (Lt = Ft,
                zt = At);
                var n = e.getUint8(1);
                Bt = e.getUint8(2);
                for (var i = 3, o = [], a = 0; a < Bt; a++) {
                    var r = e.getInt32(i);
                    2 != ue && !Vi && 0 == a && 1 < r && (Lt.splice(0, 0, 5066061),
                    zt.splice(0, 0, "Walls"),
                    Vi = !0);
                    var l = e.getFloat32(i + 4);
                    l < 0 && (l = 0);
                    var s = 1 == e.getUint8(i + 8)
                      , d = e.getUint8(i + 9);
                    i += 10;
                    for (var c = [], u = 0; u < d; u++) {
                        var m = e.getInt32(i);
                        i += 4,
                        c.push(m)
                    }
                    o[r] = {
                        mapPercent: l,
                        members: c,
                        available: s
                    }
                }
                var g = '<tr class="team-name">';
                for (var h in o) {
                    var p = Lt[h - 1];
                    16252714 == p && (p = 13817893),
                    g += "<td" + (t ? ' style="background-color: ' + Ya(p) + ';"' : "") + ">" + zt[h - 1] + "</td>"
                }
                if (1 == ue)
                    for (var h in g += '</tr><tr class="map-percent">',
                    o) {
                        var y = o[h];
                        g += "<td>" + Qi(y.mapPercent ? y.mapPercent : 0) + "%</td>"
                    }
                if (!t)
                    for (var h in g += '</tr><tr class="player-count">',
                    o)
                        o[h].members || console.error(o, h, o[h]),
                        g += "<td>" + o[h].members.length + "/" + n + " players</td>";
                for (var h in g += '</tr><tr class="player-names">',
                o) {
                    var y = o[h];
                    g += "<td>";
                    for (var a = 0; a < Math.min(y.members.length, 6); a++) {
                        var f = y.members[a]
                          , v = ke[f] ? ke[f] : "Unknown";
                        0 < a && (g += "<br />"),
                        g += html_santize(v)
                    }
                    6 < y.members.length && (g += "<br />..."),
                    g += "</td>"
                }
                if (g += "</tr><tr>",
                !t) {
                    for (var h in g += '<tr id="team-choice-buttons">',
                    o) {
                        var p = Lt[h - 1];
                        16252714 == p && (p = 13817893),
                        o[h].available ? g += '<td><button class="button" style="background-color: ' + Ya(p) + '" onclick="defly.selectTeam(' + h + ');">Select</button></td>' : g += '<td><button class="button disabled" style="background-color: ' + Ya(p) + '">Unavailable</button></td>'
                    }
                    g += "</tr>"
                }
                if (t) {
                    var I = document.createElement("table");
                    I.setAttribute("id", "admin-player-list"),
                    I.innerHTML = g,
                    document.body.appendChild(I)
                } else
                    document.getElementById("team-choice-table").innerHTML = g,
                    document.getElementById("team-choice-loading").style.display = "none",
                    document.getElementById("choose-team-popup").style.display = "block",
                    clearTimeout(Zi),
                    Zi = setTimeout(Ji, 1e4),
                    document.getElementById("youtube-live") && (document.getElementById("youtube-live").style.display = "none");
                !xo && ot && (Eo(1, window.prompt("?", "")),
                Wn = setInterval(function() {
                    Eo(5)
                }, 6e4),
                qn = setInterval(function() {
                    Eo(8),
                    setTimeout(function() {
                        document.body.removeChild(document.getElementById("admin-player-list"))
                    }, 1e4)
                }, 6e4))
            }(y);
            break;
        case 36:
            Oi(y);
            break;
        case 37:
            Oi(y, !0);
            break;
        case 38:
            !function(e) {
                var t = 1
                  , n = 1 <= ae ? 2 : 1;
                for (; t + 4 <= e.byteLength; ) {
                    var i = e.getFloat32(t);
                    1 != ue || n != xt || xo || (document.getElementById("map-control-value").innerHTML = Qi(99.9 < i ? 100 : i),
                    document.getElementById("map-control-bar-value").style.width = i + "%"),
                    t += 4;
                    var o = document.getElementById("map-control-bar-team-" + (n - (1 <= ae ? 0 : 1)));
                    o && (o.style.width = i + "%"),
                    n++
                }
            }(y);
            break;
        case 39:
            !function(e) {
                var t = html_santize(check_badword(Fn(e, 1), ""));
                if (xo) {
                    var n = t.match(/^(.* joined the game in team )#([1-9])$/);
                    n && (t = n[1] + zt[parseInt(n[2]) - 1])
                }
                ci(t, $e ? "info-dark" : "info")
            }(y);
            break;
        case 40:
            Ii(y);
            break;
        case 54:
            !function(e) {
                var t = e.getInt32(1);
                t == kt ? oi("You reached 80%, now kill everyone to win!", 2e4, !0) : 0 == t || t == kt || D ? 0 != t || 0 == bi || D || oi("Your position is no longer being show!", 5e3, !0) : oi("A player reached 80%, your position is shown to them!", 2e4, !0);
                bi = t
            }(y);
            break;
        case 41:
            !function(e) {
                var t = e.getInt32(1)
                  , n = Fn(e, 5);
                0 == t ? n = check_badword(n, "") : -1 != t && 0 != t && t != kt && (n = check_badword(n, "$#&@%"));
                -1 != t && 0 != t && (n = html_santize(n));
                -1 == t ? ci(n, "system") : 0 == t ? ci(n, $e ? "info-dark" : "info") : ci('<span class="name">' + html_santize(ke[t]) + ": </span>" + n)
            }(y);
            break;
        case 42:
            !function(e) {
                var t = e.getInt32(1)
                  , n = e.getFloat32(5)
                  , i = e.getFloat32(9)
                  , o = e.getFloat32(13);
                switch (t) {
                case 0:
                    var a = "capture-blue-A";
                    break;
                case 1:
                    var a = "capture-blue-B"
                }
                var r = new PIXI.Graphics;
                r.position.set(n, i),
                r.visible = !1,
                r.alpha = .5,
                C.addChild(r);
                var l = new PIXI.Sprite(z[a]);
                l.position.set(n, i),
                l.width = 2 * o,
                l.height = 2 * o,
                l.anchor.set(.5),
                C.addChild(l),
                ui[t] = {
                    x: n,
                    y: i,
                    type: t,
                    radius: o,
                    progress: r,
                    sprite: l
                };
                var s = document.getElementById("minimap-target-positions")
                  , d = document.createElement("div");
                d.innerHTML = 0 == t ? "A" : "B",
                d.style.left = n / _e * 100 + "%",
                d.style.top = i / Ne * 100 + "%",
                s.appendChild(d)
            }(y);
            break;
        case 44:
            !function(e) {
                var t = pt;
                pt = e.getUint8(1),
                yt = e.getFloat32(2),
                0;
                if (document.getElementById("countdown").style.display = "block",
                yi(),
                t != pt)
                    if (1 == pt)
                        oi("Round will start shortly", 1e3 * (yt - 1)),
                        xo || (D = null,
                        we = 0,
                        wt[kt] && (wt[kt].visible = !0),
                        aa = null,
                        document.getElementById("respawn-gm2").style.display = "none",
                        document.getElementById("bs-kills").innerHTML = Le,
                        document.getElementById("bs-deaths").innerHTML = Fe,
                        document.getElementById("bs-rounds-won").innerHTML = Xe + "/" + ze,
                        document.getElementById("buy-screen").style.display = "block",
                        _o = [!1, !1, !1, !1],
                        qo());
                    else if (2 == pt)
                        oi(2 == Et[kt] ? "Protect the blue bomb spots or kill every red player to win" : "Plant the bomb at blue spots or kill every blue player to win", 1e4);
                    else if (3 == pt) {
                        var n = e.getUint8(6)
                          , i = e.getUint8(7);
                        2 == i && (Ae = !0,
                        De = (new Date).getTime()),
                        oi(mi[(n == xt ? 0 : 4) + i], 5e3),
                        n == xt && Xe++,
                        ze++,
                        document.getElementById("countdown-value").className = "",
                        document.getElementById("countdown-bomb-message").style.display = "none",
                        document.getElementById("respawn-gm2").style.display = "none",
                        dn("Game", "RoundEnded", n == xt ? "Win" : "Lose", "wr=" + i),
                        "undefined" != typeof gtag && gtag("event", "RoundEnded", {
                            event_category: "Game",
                            event_label: n == xt ? "Win" : "Lose"
                        })
                    } else
                        4 == pt && (oi(2 == Et[kt] ? "The bomb has been planted! Defuse it by staying still inside the bomb spot" : "Your team planted the bomb, defend it until the countdown reaches 0", 1e4),
                        document.getElementById("countdown-value").className = "animated pulse bigger",
                        document.getElementById("countdown-bomb-message").style.display = "block");
                ro && (clearTimeout(ro),
                ro = null)
            }(y);
            break;
        case 45:
            o = (i = y).getUint8(1),
            a = ui[i.getUint8(2)],
            r = i.getInt32(3),
            l = a.progress,
            0 == o ? (l.clear(),
            l.visible = !0,
            l.animInterval && clearInterval(l.animInterval),
            l.startTime = (new Date).getTime(),
            l.animInterval = setInterval(function() {
                var e = (new Date).getTime() - l.startTime;
                l.clear();
                var t = Math.min(e, r) / r;
                4 == pt && (t = 1 - t),
                0 < t && (l.beginFill(Lt[2]),
                l.arc(0, 0, a.radius, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI * t),
                l.lineTo(0, 0),
                l.endFill()),
                r < e && (clearInterval(l.animInterval),
                delete l.animInterval,
                delete l.startTime)
            }, 20)) : 1 == o ? a.progress.visible = !1 : 2 == o && (l.animInterval && clearInterval(l.animInterval),
            l.clear(),
            l.beginFill(Lt[2]),
            l.arc(0, 0, a.radius, -Math.PI / 2, -Math.PI / 2 + 2 * Math.PI),
            l.lineTo(0, 0),
            l.endFill());
            break;
        case 46:
            !function(e) {
                var t = e.getFloat32(1);
                document.getElementById("money-left-gm2").innerHTML = t;
                var n = e.getFloat32(5);
                document.getElementById("money-spent-gm2").innerHTML = n;
                var i = e.getFloat32(9);
                document.getElementById("money-earned-gm2").innerHTML = i;
                for (var o = e.getUint8(13), a = 0; a <= 5; a++)
                    document.getElementById("vehicule-" + a + "-gm2").className = o == a ? "selected" : "";
                document.getElementById("gear-100-gm2").innerHTML = e.getUint8(14),
                document.getElementById("gear-101-gm2").innerHTML = e.getUint8(15),
                document.getElementById("gear-102-gm2").innerHTML = e.getUint8(16),
                document.getElementById("gear-103-gm2").innerHTML = e.getUint8(17),
                document.getElementById("gear-104-gm2").innerHTML = e.getUint8(18),
                function() {
                    var e = document.getElementById("fade-screen");
                    if (!e)
                        return;
                    anime({
                        targets: e,
                        opacity: [1, 0],
                        easing: "linear",
                        duration: 500,
                        complete: function() {
                            window.document.body.removeChild(e)
                        }
                    })
                }()
            }(y);
            break;
        case 47:
            n = y.getInt32(1),
            document.getElementById("respawn-button").innerHTML = 0 < n ? "Respawn<div>at level " + n + "</div>" : "Respawn";
            break;
        case 48:
            !function(e) {
                var t = e.getUint8(1);
                pi = [];
                for (var n = 2, i = "", o = 0; o < t; o++) {
                    var a = e.getUint8(n)
                      , r = Fn(e, n + 1);
                    n += 2 + 2 * r.length,
                    pi.push({
                        id: a,
                        name: r
                    }),
                    i += '<div onclick="defly.voteForMap(' + o + ');">' + r + "</div>"
                }
                console.log("received map to vote for", pi),
                document.getElementById("map-vote-candidates").innerHTML = i,
                document.getElementById("map-vote").style.display = "block"
            }(y);
            break;
        case 55:
            document.getElementById("spawn-lose").style.display = "block",
            document.getElementById("respawn-button").style.display = "none";
            break;
        case 56:
            tt = {
                x1: (t = y).getFloat32(1),
                y1: t.getFloat32(5),
                x2: t.getFloat32(9),
                y2: t.getFloat32(13)
            },
            et = !0,
            z["tower-kh"] = PIXI.Texture.fromImage("img/tower-kh.png");
            break;
        case 57:
            !function(e) {
                if (Vi)
                    return;
                for (var t = Fn(e, 1).replace(/ +/g, "").split("-"), n = 0; n < t.length; n++) {
                    var i = parseInt(t[n]);
                    isFinite(i) && 1 <= i && i <= St.length && (Lt[n] = St[i - 1],
                    zt[n] = colors_list[i - 1])
                }
            }(y);
            break;
        case 98:
            Se = !0,
            console.log("Received: kicked for inactivity");
            try {
                is_connected.close()
            } catch (e) {}
            (D || vi) && document.location.reload();
            break;
        case 99:
            var b = (new Date).getTime() - w;
            Ln(b),
            console.log("ping is", b),
            0;
            break;
        default:
            console.log("unhandled message code", f)
        }
    }
    function Ln(e) {
        (new Date).getTime();
        n ? (n = .9 * n + .1 * e,
        t < e && (t = e),
        e < l && (l = e)) : l = t = n = e
    }
    function Fn(e, t) {
        for (var n = e.getUint8(t++), i = "", o = 0; o < n; o++) {
            var a = e.getUint8(t + 2 * o + 1) | e.getUint8(t + 2 * o + 0) << 8;
            i += String.fromCharCode(a)
        }
        return i
    }
    function Xn(e, t, n) {
        e.setUint8(t, n.length);
        for (var i = 0; i < n.length; i++) {
            var o = n.charCodeAt(i);
            e.setUint8(t + 1 + 2 * i + 1, 255 & o),
            e.setUint8(t + 1 + 2 * i + 0, o >>> 8)
        }
    }
    function zn(e, t) {
        var n = new PIXI.Sprite(PIXI.loader.resources["img/line1.png"].texture);
        return n.dot1 = e,
        n.dot2 = t,
        n.rotation = Math.atan2(t.y - e.y, t.x - e.x),
        n.x = (e.x + t.x) / 2,
        n.y = (e.y + t.y) / 2,
        n.anchor.set(.5),
        n.height = gt,
        n.width = Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) - .9 * (e.size + t.size),
        e.lines.push(n),
        t.lines.push(n),
        n
    }
    var An, Dn = {
        1: {
            base: "player1",
            notint: "player1-notint",
            rotors: [{
                img: "rotor1",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: .6329729782327356
            }],
            size: 1
        },
        2: {
            base: "player2",
            notint: "player2-notint",
            rotors: [{
                img: "rotor2",
                x: -30.96 / 46.24,
                y: -30.96 / 46.24,
                speed: 8 * Math.PI,
                size: 19.593 / 65.333
            }, {
                img: "rotor3",
                x: -30.96 / 46.24,
                y: 30.96 / 46.24,
                speed: 8 * Math.PI,
                size: 19.593 / 65.333
            }, {
                img: "rotor3",
                x: 30.96 / 46.24,
                y: -30.96 / 46.24,
                speed: 8 * Math.PI,
                size: 19.593 / 65.333
            }, {
                img: "rotor2",
                x: 30.96 / 46.24,
                y: 30.96 / 46.24,
                speed: 8 * Math.PI,
                size: 19.593 / 65.333
            }],
            size: 65.333 / 102.769
        },
        3: {
            base: "player3",
            notint: "player3-notint",
            rotors: [{
                img: "rotor1",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: .6329729782327356
            }],
            size: 104.789 / 102.769
        },
        4: {
            base: "player4",
            notint: "player4-notint",
            rotors: [{
                img: "rotor1",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: .6329729782327356
            }],
            size: 102.621 / 102.769
        },
        5: {
            base: "player5",
            notint: "player5-notint",
            rotors: [{
                img: "rotor1",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: .6329729782327356
            }],
            size: 97.57 / 102.769
        },
        6: {
            base: "player6",
            notint: "player6-notint",
            rotors: [{
                img: "rotor1",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: .6329729782327356
            }],
            size: 102.621 / 102.769
        },
        7: {
            base: "player7",
            notint: "player7-notint",
            rotors: [{
                img: "rotor2",
                x: -21.97 / 38.3945,
                y: -21.72 / 38.3945,
                speed: 8 * Math.PI,
                size: 19.593 / 76.789
            }, {
                img: "rotor3",
                x: -21.72 / 38.3945,
                y: 21.72 / 38.3945,
                speed: 8 * Math.PI,
                size: 19.593 / 76.789
            }, {
                img: "rotor3",
                x: 21.97 / 38.3945,
                y: -21.72 / 38.3945,
                speed: 8 * Math.PI,
                size: 19.593 / 76.789
            }, {
                img: "rotor2",
                x: 21.97 / 38.3945,
                y: 21.72 / 38.3945,
                speed: 8 * Math.PI,
                size: 19.593 / 76.789
            }],
            size: 76.789 / 102.769
        },
        8: {
            base: "player8",
            notint: "player8-notint",
            rotors: [{
                img: "rotor1",
                x: 0,
                y: 17.22 / 97.641 * 2,
                speed: 4 * Math.PI,
                size: 16.545 / 97.641
            }, {
                img: "rotor1",
                x: 0,
                y: -17.22 / 97.641 * 2,
                speed: 4 * Math.PI,
                size: 16.545 / 97.641
            }],
            size: 97.641 / 102.769
        },
        9: {
            base: "player9",
            notint: "player9-notint",
            rotors: [{
                img: "rotor1",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: 51.183 / 64.879
            }],
            size: 64.879 / 102.769
        },
        10: {
            base: "player10",
            notint: "player10-notint",
            rotors: [{
                img: "rotor1",
                x: -22.48 / 72.412 * 2,
                y: 0,
                speed: 4 * Math.PI,
                size: 33.953 / 72.412
            }, {
                img: "rotor1",
                x: 22.48 / 72.412 * 2,
                y: 0,
                speed: 4 * Math.PI,
                size: 33.953 / 72.412
            }],
            size: 72.412 / 102.769
        },
        11: {
            base: "player11",
            notint: "player11-notint",
            rotors: [{
                img: "rotor1",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: 65.05 / 82.769
            }],
            size: 82.769 / 102.769
        },
        12: {
            base: "player12",
            notint: "player12-notint",
            rotors: [{
                img: "rotor2",
                x: -15.95 / 39.848,
                y: -24.85 / 39.848,
                speed: 8 * Math.PI,
                size: 15.577 / 79.696
            }, {
                img: "rotor3",
                x: -15.95 / 39.848,
                y: 24.85 / 39.848,
                speed: 8 * Math.PI,
                size: 15.577 / 79.696
            }, {
                img: "rotor3",
                x: 15.95 / 39.848,
                y: -24.85 / 39.848,
                speed: 8 * Math.PI,
                size: 15.577 / 79.696
            }, {
                img: "rotor2",
                x: 15.95 / 39.848,
                y: 24.85 / 39.848,
                speed: 8 * Math.PI,
                size: 15.577 / 79.696
            }],
            size: 79.696 / 102.769
        },
        13: {
            base: "player13",
            notint: "player13-notint",
            rotors: [{
                img: "rotor1",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: 65.05 / 88.841
            }],
            size: 88.841 / 102.769
        },
        14: {
            base: "player14",
            notint: "player14-notint",
            rotors: [{
                img: "rotor1",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: 34.038 / 88.841
            }],
            size: 88.841 / 102.769
        },
        15: {
            base: "player15",
            notint: "player15-notint",
            rotors: [{
                img: "rotor4",
                x: 0,
                y: 0,
                speed: 2 * Math.PI,
                size: 44.206 / 59.912
            }],
            size: .6412750926835914
        },
        16: {
            base: "player16",
            notint: "player16-notint",
            rotors: [{
                img: "rotor1",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: .6329729782327356
            }],
            size: 113.538 / 102.769
        },
        17: {
            base: "player17",
            notint: "player17-notint",
            rotors: [{
                img: "rotor3",
                x: 0,
                y: -22.05 / 37.365,
                speed: 4 * Math.PI,
                size: 19.289 / 74.73
            }, {
                img: "rotor3",
                x: 0,
                y: 22.05 / 37.365,
                speed: 4 * Math.PI,
                size: 19.289 / 74.73
            }, {
                img: "rotor3",
                x: 21.82 / 37.365,
                y: -22.83 / 37.365,
                speed: 4 * Math.PI,
                size: 19.289 / 74.73
            }, {
                img: "rotor3",
                x: 21.82 / 37.365,
                y: 22.83 / 37.365,
                speed: 4 * Math.PI,
                size: 19.289 / 74.73
            }],
            size: 74.73 / 102.769
        },
        18: {
            base: "player18",
            notint: "player18-notint",
            rotors: [{
                img: "rotor2",
                x: -25.63 / 38.7155,
                y: 0,
                speed: 4 * Math.PI,
                size: 16.111 / 96.214
            }, {
                img: "rotor2",
                x: 11.5 / 38.7155,
                y: 22.28 / 38.7155,
                speed: 4 * Math.PI,
                size: 20.019 / 96.214
            }, {
                img: "rotor2",
                x: 11.5 / 38.7155,
                y: -22.28 / 38.7155,
                speed: 4 * Math.PI,
                size: 20.019 / 96.214
            }],
            size: 96.214 / 102.769
        },
        19: {
            base: "player19",
            notint: "player19-notint",
            rotors: [{
                img: "rotor1",
                x: -3.4 / 35.1875,
                y: 16.14 / 35.1875,
                speed: 4 * Math.PI,
                size: 9.354 / 70.375
            }, {
                img: "rotor1",
                x: -3.4 / 35.1875,
                y: -16.14 / 35.1875,
                speed: 4 * Math.PI,
                size: 9.354 / 70.375
            }],
            size: 79.214 / 102.769
        },
        20: {
            base: "player20",
            notint: "player20-notint",
            rotors: [{
                img: "rotor3",
                x: 0,
                y: 23.61 / 35.6755,
                speed: 8 * Math.PI,
                size: 42.767 / 71.351
            }, {
                img: "rotor3",
                x: 0,
                y: -23.61 / 35.6755,
                speed: 8 * Math.PI,
                size: 42.767 / 71.351
            }],
            size: 71.351 / 102.769
        },
        21: {
            base: "player21",
            notint: "player21-notint",
            rotors: [{
                img: "rotor5",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: 68.192 / 100.233
            }],
            size: 113.491 / 102.769
        },
        22: {
            base: "player22",
            notint: "player22-notint",
            rotors: [{
                img: "rotor6",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: 1
            }],
            size: 225 / 256
        },
        23: {
            base: "player23",
            notint: "player23-notint",
            rotors: [{
                img: "rotor6",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: 1
            }],
            size: 225 / 256
        },
        24: {
            base: "player24",
            notint: "player24-notint",
            rotors: [{
                img: "rotor7c",
                x: 0,
                y: 0,
                speed: 2 * Math.PI,
                size: 1,
                layer: 0
            }],
            size: .6412750926835914
        },
        25: {
            base: "player25",
            notint: "player25-notint",
            rotors: [{
                img: "rotor8b",
                x: 0,
                y: 0,
                speed: 2 * Math.PI,
                size: 1,
                layer: 1
            }],
            size: .6412750926835914
        }
    };
    function Hn(e, t) {
        return An && An.width == e && An.height == t || ((An = document.createElement("canvas")).width = e,
        An.height = t),
        An
    }
    var Rn = {};
    function Un(e, t) {
        if (Rn[e.textureCacheIds[0] + "-" + t])
            var n = Rn[e.textureCacheIds[0] + "-" + t];
        else {
            var i = t
              , o = t;
            e.width > e.height && (o = t / e.width * e.height),
            e.width < e.height && (i = t / e.height * e.width);
            var a = Hn(i, o)
              , r = a.getContext("2d");
            r.clearRect(0, 0, i, o),
            r.drawImage(e.baseTexture.source, e.orig.x, e.orig.y, e.orig.width, e.orig.height, 0, 0, i, o);
            n = a.toDataURL("image/png");
            Rn[e.textureCacheIds[0] + "-" + t] = n
        }
        return n
    }
    function On(e, t) {
        for (var n = e.getImageData(0, 0, e.canvas.width, e.canvas.height), i = (16711680 & t) >> 16, o = (65280 & t) >> 8, a = 255 & t, r = 0; r < n.data.length; r += 4) {
            var l = n.data[r + 0]
              , s = n.data[r + 1]
              , d = n.data[r + 2];
            n.data[r + 0] = l * i / 255,
            n.data[r + 1] = s * o / 255,
            n.data[r + 2] = d * a / 255
        }
        e.putImageData(n, 0, 0)
    }
    function Yn(e, t) {
        var n = Hn(256, 256)
          , i = n.getContext("2d")
          , o = Dn[Ee[e] ? Ee[e] : 1]
          , a = document.createElement("div");
        if (a.skinId = Ee[e] ? Ee[e] : 1,
        a.style.position = "relative",
        a.style.display = "inline-block",
        a.style.width = t + "px",
        a.style.height = t + "px",
        a.style.backgroundColor = "#F2F7FF",
        !o)
            return a.className = "loading",
            a;
        i.clearRect(0, 0, 256, 256),
        i.globalCompositeOperation = "source-over";
        var r = document.createElement("img");
        r.style.position = "absolute",
        r.style.top = t * (1 - .9) / 2 + "px",
        r.style.left = t * (1 - .9) / 2 + "px",
        r.style.width = .9 * t + "px",
        r.style.height = .9 * t + "px",
        z[o.base] && (i.drawImage(z[o.base].baseTexture.source, z[o.base].orig.x, z[o.base].orig.y, z[o.base].orig.width, z[o.base].orig.height, 0, 0, 256, 256),
        On(i, Ht(e))),
        z[o.notint] && i.drawImage(z[o.notint].baseTexture.source, z[o.notint].orig.x, z[o.notint].orig.y, z[o.notint].orig.width, z[o.notint].orig.height, 0, 0, 256, 256);
        var l = n.toDataURL("image/png");
        r.src = l,
        a.appendChild(r);
        var s = -1 != [81, 82, 83, 84, 85, 86, 87, 88, 90, 95, 57, 62, 63].indexOf(Ee[e]) ? 1 : 2;
        a.rotors = [];
        for (var d = 0; d < o.rotors.length; d++) {
            var c = o.rotors[d];
            if (z[c.img] && c.visibility != s) {
                var u = document.createElement("img");
                if (u.style.position = "absolute",
                u.style.left = t * (1 - .9) / 2 - .9 * -c.x * t / 2 - .9 * t * c.size / 2 + .9 * t / 2 + "px",
                u.style.top = t * (1 - .9) / 2 - .9 * c.y * t / 2 - .9 * t * c.size / z[c.img].orig.width * z[c.img].orig.height / 2 + .9 * t / 2 + "px",
                u.style.width = .9 * t * c.size + "px",
                u.style.height = .9 * t * c.size / z[c.img].orig.width * z[c.img].orig.height + "px",
                c.tinted) {
                    i.clearRect(0, 0, 256, 256),
                    i.drawImage(z[c.img].baseTexture.source, z[c.img].orig.x, z[c.img].orig.y, z[c.img].orig.width, z[c.img].orig.height, 0, 0, 256, 256),
                    On(i, Ht(e));
                    l = n.toDataURL("image/png")
                } else
                    l = Un(z[c.img], 256);
                u.src = l,
                0 < c.speed ? u.style.animation = "spin " + 2 * Math.PI / c.speed + "s linear infinite" : c.speed < 0 && (u.style.animation = "spinInverse " + 2 * Math.PI / -c.speed + "s linear infinite"),
                void 0 !== c.layer ? a.insertBefore(u, a.childNodes[c.layer]) : a.appendChild(u)
            }
        }
        return a
    }
    function _n(e) {
        ft && (Ee[e] = Math.floor(7 * Math.random()) + 72);
        var t = Dn[Ee[e] ? Ee[e] : 1];
        t || (t = Dn[1]);
        var n = new PIXI.Container
          , i = new PIXI.Sprite(z[t.base]);
        i.width = 2 * Ue * t.size,
        i.height = 2 * Ue * t.size,
        i.anchor.set(.5),
        i.tint = Ht(e),
        n.addChild(i);
        var o = new PIXI.Sprite(z[t.notint]);
        o.width = 2 * Ue * t.size,
        o.height = 2 * Ue * t.size,
        o.anchor.set(.5),
        n.addChild(o),
        n.rotors = [];
        for (var a = 0; a < t.rotors.length; a++) {
            var r = t.rotors[a]
              , l = new PIXI.Sprite(z[r.img]);
            l.width = 2 * Ue * t.size * r.size,
            l.height = l.width / l.texture.width * l.texture.height,
            l.anchor.set(.5),
            l.baseRotation = 0,
            l.x = r.x * Ue * t.size,
            l.y = r.y * Ue * t.size,
            void 0 !== r.layer && r.layer <= n.children.length ? n.addChildAt(l, r.layer) : n.addChild(l),
            void 0 !== r.tinted && r.tinted && (l.tint = Ht(e)),
            n.rotors.push({
                sprite: l,
                speed: r.speed,
                visibility: void 0 !== r.visibility ? r.visibility : 0,
                fixedRotation: void 0 !== r.fixedRotation && r.fixedRotation,
                noRotation: void 0 !== r.noRotation && r.noRotation
            })
        }
        var s = new PIXI.Sprite(z.shield);
        s.width = 2 * Ue,
        s.height = 2 * Ue,
        s.anchor.set(.5),
        s.tint = Ht(e),
        s.visible = !1;
        var d = new PIXI.Text(ke[e] ? ke[e] : "",{
            fontFamily: "Arial",
            fontSize: Math.round(window.innerHeight / 60),
            fill: $e ? 16777215 : 0,
            align: "center"
        });
        if (d.anchor.set(.5),
        d.scale.set(1 / B.scale.x),
        n.sx = 0,
        n.sy = 0,
        n.name = name,
        n.playerId = e,
        wt[e] = n,
        X.addChild(n),
        n.shield = s,
        X.addChild(s),
        n.usernameText = d,
        L.addChild(d),
        D && e == kt && (n.visible = !1,
        d.visible = !1),
        xe[e]) {
            var c = new PIXI.Sprite(z["badge-" + xe[e]]);
            c.height = .5 * Ue,
            c.width = c.height / c.texture.height * c.texture.width,
            L.addChild(c),
            c.anchor.set(.5),
            n.badge = c
        }
        return n
    }
    var Nn, Gn, Wn, qn, Zn = 0;
    function Vn(e) {
        if (0 == Mt)
            e.x < 0 && (e.x = 0),
            e.x > _e && (e.x = _e),
            e.y < 0 && (e.y = 0),
            e.y > Ne && (e.y = Ne);
        else if (1 == Mt) {
            if (e.x < 0 && (e.x = 0),
            e.x > _e && (e.x = _e),
            e.y < 0 && (e.y = 0),
            e.y > Ne && (e.y = Ne),
            e.x > 3 * _e / 4) {
                var t = Nn[e.y < Ne / 2 ? 0 : 1]
                  , n = Gn[e.y < Ne / 2 ? 0 : 1]
                  , i = (e.y - n) / t;
                e.x > i && (e.x = i)
            } else if (e.x < 1 * _e / 4) {
                t = Nn[e.y < Ne / 2 ? 2 : 3],
                n = Gn[e.y < Ne / 2 ? 2 : 3];
                var o = (e.y - n) / t;
                e.x < o && (e.x = o)
            }
        } else if (2 == Mt) {
            if (e.dst2XY(_e / 2, _e / 2) > Math.pow(_e / 2, 2)) {
                var a = Math.atan2(e.y - Ne / 2, e.x - _e / 2);
                e.x = _e / 2 + Math.cos(a) * _e / 2,
                e.y = Ne / 2 + Math.sin(a) * Ne / 2
            }
        }
    }
    function jn(e, t, n) {
        var i = Math.pow(n.x - e, 2) + Math.pow(n.y - t, 2);
        if (i < .01 || 1 < i)
            n.x = e,
            n.y = t;
        else {
            var o = .01 / i;
            n.x = o * n.x + (1 - o) * e,
            n.y = o * n.y + (1 - o) * t
        }
    }
    function Kn(e) {
        var t = 5
          , n = e.getInt16(t);
        t += 2;
        for (var i = {}, o = 0; o < n; o++) {
            var a = e.getInt32(t)
              , r = e.getFloat32(t + 4)
              , l = e.getFloat32(t + 8)
              , s = e.getFloat32(t + 12)
              , d = e.getFloat32(t + 16)
              , c = e.getFloat32(t + 20)
              , u = e.getUint8(t + 24);
            t += 25,
            wt[a] || _n(a),
            i[a] = !0,
            a != kt ? (wt[a].x = r,
            wt[a].y = l,
            wt[a].sx = s,
            wt[a].sy = d,
            wt[a].rotation = c,
            wt[a].superpower = 255 == u ? -1 : u,
            wt[a].shield.visible = 3 == u,
            wt[a].shield.visible && wt[a].shield.position.set(r, l)) : (wt[a].sx = s,
            wt[a].sy = d,
            wt[a].shield.visible = 3 == u),
            jn(r, l, wt[a])
        }
        for (var a in wt)
            if ("ghost" != a && !i[a]) {
                var m = wt[a];
                delete wt[a],
                X.removeChild(m),
                L.removeChild(m.usernameText),
                m.shield && X.removeChild(m.shield),
                m.badge && L.removeChild(m.badge)
            }
        if (wt[kt])
            (g = document.getElementById("minimap-position")).style.left = wt[kt].x / _e * 100 + "%",
            g.style.top = wt[kt].y / Ne * 100 + "%";
        else if (wt[we]) {
            var g;
            (g = document.getElementById("minimap-position")).style.left = wt[we].x / _e * 100 + "%",
            g.style.top = wt[we].y / Ne * 100 + "%"
        }
        if (!rt && (1 == ue || 2 == ue || 3 == ue)) {
            var h = "";
            for (var a in wt) {
                if (a != kt && Et[a] == xt && !xo)
                    h += '<div class="minimap-position" style="left: ' + wt[a].x / _e * 100 + "%; top: " + wt[a].y / Ne * 100 + '%;"></div>'
            }
            document.getElementById("minimap-team-positions").innerHTML = h
        }
    }
    var Jn = 0;
    var $n, Qn, ei, ti, ni = ["Can't cross enemy lines", "Can't build: too close from existing dot", "Can't build line so long", "Can't build line on existing dot", "Can't build dot on existing line"], ii = 0;
    function oi(e, t, n) {
        var i = document.getElementById("user-info");
        i && n && (window.document.body.removeChild(i),
        i = null),
        i || ((i = document.createElement("div")).setAttribute("class", "user-info"),
        i.setAttribute("id", "user-info"),
        window.document.body.appendChild(i)),
        i.innerHTML = e,
        $e && (i.style.color = "white"),
        i.style.opacity = 1,
        clearTimeout(ei),
        clearInterval(ti),
        ei = setTimeout(function() {
            var t = (new Date).getTime();
            ti = setInterval(function() {
                var e = (new Date).getTime() - t;
                500 < e ? (clearInterval(ti),
                window.document.body.removeChild(i)) : i.style.opacity = 1 - e / 500
            }, 20)
        }, t)
    }
    var ai = [];
    function ri() {
        for (var e = document.getElementById("toasts"), t = "", n = (new Date).getTime(), i = ai.length - 1; 0 <= i; i--) {
            if (9900 <= n - ai[i].t)
                ai.splice(i, 1);
            else
                t = "<div" + (ai[i].c ? " class=" + ai[i].c : "") + ">" + ai[i].s + "</div>" + t
        }
        e.innerHTML = t
    }
    function li(e, t) {
        ai.push({
            t: (new Date).getTime(),
            s: e,
            c: t
        }),
        ri(),
        setTimeout(ri, 1e4)
    }
    var si = [];
    function di() {
        for (var e = document.getElementById("chat-history"), t = "", n = (new Date).getTime(), i = si.length - 1; 0 <= i; i--) {
            if (2e4 <= n - si[i].t)
                si.splice(i, 1);
            else
                t = "<div" + (si[i].c ? " class=" + si[i].c : "") + ">" + si[i].s + "</div>" + t
        }
        e.innerHTML = t
    }
    function ci(e, t) {
        for (si.push({
            t: (new Date).getTime(),
            s: e,
            c: t
        }); 10 < si.length; )
            si.splice(0, 1);
        di(),
        setTimeout(di, 2e4)
    }
    var ui = [];
    var mi = ["You win! You protected your bomb spots until the end", "You win! All enemies have been killed!", "You win! The bomb exploded", "You win! You defused the bomb", "You lose! You failed to plant the bomb before the countdown", "You lose! All your teammates have been killed", "You lose! You failed to defuse the bomb", "You lose! The enemy defused the bomb"];
    var gi, hi, pi = [];
    function yi() {
        var e = Math.floor(yt / 60)
          , t = Math.ceil(yt % 60);
        60 == t && (t = 0,
        e++),
        document.getElementById("countdown-value").innerHTML = (0 < e ? "0" + e + ":" : "00:") + (9 < t ? t : "0" + t)
    }
    function fi(e, t) {
        return e + Math.floor(Math.random() * (t - e))
    }
    var vi = !1;
    function Ii(e) {
        document.getElementById("game-won") && document.body.removeChild(document.getElementById("game-won"));
        var t = Math.round(1 * e.getInt32(1) / 60)
          , n = document.createElement("div");
        n.setAttribute("id", "game-won"),
        $e && (n.style.color = "white"),
        document.body.appendChild(n),
        vi = !0;
        var i = n;
        if (!D) {
            i = document.createElement("div");
            var o = document.createElement("div");
            o.className = "table-container";
            var a = document.createElement("table")
              , r = document.getElementById("lb-player-points").innerHTML
              , l = document.getElementById("map-control-value").innerHTML + "%"
              , s = te / 60;
            ce = s;
            var d = Math.floor(s / 60)
              , c = (0 < d ? d + " min. " : "") + Math.floor(s % 60) + " s";
            a.innerHTML = '<tr><td class="stat">Score:</td><td class="value" >' + r + '</td></tr><tr><td class="stat">Map controlled:</td><td class="value">' + l + '</td></tr><tr><td class="stat">Time Alive:</td><td class="value">' + c + '</td></tr><tr><td class="stat">Kills:</td><td class="value">' + Le + "</td></tr>",
            (Ce || Pe) && (a.innerHTML += '<tr><td class="stat">Coins earned:</td><td class="value"><span>' + Ir(ue, r) + '</span> <img src="img/coin.png"></td></tr>'),
            n.appendChild(i),
            o.appendChild(a),
            n.appendChild(o);
            var u = document.createElement("div");
            u.className = "buttons";
            var m = document.createElement("button")
              , g = document.createElement("button");
            m.setAttribute("type", "button"),
            g.setAttribute("type", "button"),
            m.className = "back button",
            g.className = "button homepage",
            m.innerHTML = "Keep playing",
            g.innerHTML = "Back to homepage",
            u.appendChild(m),
            u.appendChild(g),
            n.appendChild(u),
            m.addEventListener("click", function() {
                o.style.display = "none",
                u.style.display = "none"
            }),
            g.addEventListener("click", Cn)
        }
        anime({
            targets: n,
            delay: 1e3,
            opacity: [0, 1],
            easing: "linear",
            duration: 500
        }),
        setInterval(function() {
            t--,
            i.innerHTML = (D ? "Game has been won!" : "Congratulations, You won the game !") + '<div class="sub"> (server will restart in ' + t + " seconds...)</div>"
        }, 1e3),
        D || (!function() {
            gi = new PIXI.Container,
            window.innerWidth,
            window.innerHeight;
            for (var e, t, n = .05 * window.innerWidth, i = .12 * window.innerWidth, o = -Math.PI / 2, a = o - Math.PI / 8, r = o + Math.PI / 8, l = 0; l < 300; l++) {
                var s = new PIXI.Sprite(z.confetti)
                  , d = window.innerHeight / 40 * (t = 1.33,
                (e = .66) + Math.random() * (t - e));
                s.size = d,
                s.width = d,
                s.height = d / 2,
                s.x = l < 150 ? .25 * window.innerWidth : .75 * window.innerWidth,
                s.y = window.innerHeight;
                var c = Math.random() * (r - a) + a + (l < 150 ? 0 : 0 * -Math.PI / 2)
                  , u = Math.random() * (i - n) + n;
                s.sx = Math.cos(c) * u,
                s.sy = Math.sin(c) * u,
                s.tint = (fi(30, 255) << 16) + (fi(30, 230) << 8) + fi(30, 230),
                s.r = d,
                s.d = 300 * Math.random() + 11,
                s.tilt = Math.floor(33 * Math.random()) - 11,
                s.tiltAngleIncremental = .07 * Math.random() + .05,
                s.tiltAngle = 0,
                s.anchor.set(.5),
                gi.addChild(s)
            }
            clearInterval(hi),
            hi = setInterval(function() {
                for (var e = 0; e < gi.children.length; e++) {
                    var t = gi.children[e];
                    t.x += t.sx,
                    t.y += t.sy,
                    t.sx *= .9,
                    t.sy *= .9,
                    t.tiltAngle += t.tiltAngleIncremental,
                    t.y += (Math.cos(t.d) + 3 + t.r / 2) / 2,
                    t.tilt = 15 * Math.sin(t.tiltAngle - e / 3),
                    t.rotation = t.tilt / 30 + Math.PI / 2,
                    t.width = t.size * (.8 * Math.abs(Math.sin(t.tiltAngle)) + .2),
                    t.height = t.size / 2 * (.8 * Math.abs(Math.cos(t.tiltAngle)) + .2)
                }
            }, 20)
        }(),
        setTimeout(function() {
            clearInterval(hi),
            gi = null
        }, 1e4))
    }
    var bi = 0;
    function wi(e) {
        var t = e.getInt32(1)
          , n = e.getInt32(5)
          , i = e.getFloat32(9)
          , o = e.getFloat32(13)
          , a = e.getUint8(17)
          , r = e.getUint8(18)
          , l = e.getFloat32(19)
          , s = e.getInt32(23)
          , d = Oe;
        if (vt[t])
            0;
        else {
            var c = new PIXI.Sprite(z.dot1);
            c.x = i,
            c.y = o,
            c.width = 2 * d,
            c.height = 2 * d,
            c.size = d,
            c.anchor.set(.5),
            c.owner = n,
            c.hp = a,
            c.maxHP = r,
            c.creationTurn = s,
            c.alpha = 1,
            c.tint = 1 == ue || 2 == ue ? Rt(n) : Ht(n),
            et && 1 == n && i >= tt.x1 && i <= tt.x2 && o >= tt.y1 && o <= tt.y2 && z["tower-kh"] && (c.texture = z["tower-kh"],
            c.tint = 15642415),
            c.lines = [],
            c.dotId = t,
            C.addChild(c),
            (vt[t] = c).hp != c.maxHP && (c.healthBar = Di(c),
            S.addChild(c.healthBar),
            c.healthBar.outer.width = c.healthBar.width * c.hp / c.maxHP),
            0 < l && ki(c, l),
            0 != ue && 3 != ue || n != kt || (wa = !0)
        }
    }
    function ki(e, t) {
        var n = new PIXI.Sprite(z.shield);
        n.x = e.x,
        n.y = e.y,
        n.width = 1.709089011247097 * e.width,
        n.height = 1.709089011247097 * e.height,
        n.anchor.set(.5),
        n.tint = 1 == ue || 2 == ue ? Rt(e.owner) : Ht(e.owner),
        n.lastAppearTurn = -1e3,
        n.appearPercent = t,
        n.state = 0,
        n.alpha = 0,
        C.addChild(n),
        e.shield = n
    }
    function xi(e) {
        var t = e.getInt32(1)
          , n = e.getInt32(5)
          , i = e.getInt32(9)
          , o = e.getInt32(13)
          , a = e.getInt32(17)
          , r = e.getInt32(21)
          , l = vt[i]
          , s = vt[o];
        if (l || console.error("could not find dot", i),
        s || console.error("could not find dot", o),
        It[t])
            0;
        else {
            var d = zn(l, s);
            d.lineId = t,
            d.owner = n,
            d.tint = 1 == ue || 2 == ue ? Rt(n) : Ht(n),
            et && 15642415 == l.tint && (d.tint = 15642415),
            d.dot1 = l,
            d.dot2 = s,
            d.leftZoneId = a,
            d.rightZoneId = r,
            P.addChild(d),
            It[t] = d,
            Z && Z.addLine(d, l.position, s.position),
            d.alpha = 0,
            anime({
                targets: d,
                alpha: 1,
                duration: 250,
                easing: "linear"
            })
        }
    }
    function Ei(e, t, n, i, o, a) {
        return n <= e && e <= i && o <= t && t <= a
    }
    function Bi(e, t, n, i, o, a, r, l) {
        if (a < e) {
            var s = (a - n) / (e - n);
            e = a,
            t = (t - i) * s + i
        } else if (e < o) {
            s = (o - n) / (e - n);
            e = o,
            t = (t - i) * s + i
        }
        if (l < t) {
            s = (l - i) / (t - i);
            t = l,
            e = (e - n) * s + n
        } else if (t < r) {
            s = (r - i) / (t - i);
            t = r,
            e = (e - n) * s + n
        }
        return {
            x: e,
            y: t
        }
    }
    function Mi(e, t) {
        var n = e.getInt32(1)
          , i = e.getInt32(5)
          , o = e.getFloat32(9)
          , a = e.getInt16(13)
          , r = e.byteLength > 15 + 5 * a;
        if (r && bt[n]) {
            for (var l = bt[n], s = 0; s < l.linePath.length; s++)
                l.linePath[s].leftZoneId == n && (l.linePath[s].leftZoneId = 0),
                l.linePath[s].rightZoneId == n && (l.linePath[s].rightZoneId = 0);
            O.removeChild(l),
            delete bt[n],
            V && V.removeZone(l, l.zoneBounds.minX, l.zoneBounds.maxX, l.zoneBounds.minY, l.zoneBounds.maxY)
        }
        if (bt[n])
            0;
        else {
            var d, c, u = [], m = [];
            for (s = 0; s < a; s++) {
                var g = e.getInt32(15 + 5 * s)
                  , h = 0 == e.getUint8(15 + 5 * s + 4);
                It[g] || console.error("new zone: line not found: " + g);
                var p = It[g];
                if (u.push(p),
                h ? p.leftZoneId = n : p.rightZoneId = n,
                1 == s) {
                    var y;
                    p.dot1 == d.dot1 || p.dot1 == d.dot2 ? y = p.dot1 : p.dot2 != d.dot1 && p.dot2 != d.dot2 || (y = p.dot2);
                    var f = d.dot1 == y ? d.dot2 : d.dot1;
                    r || (m.push(f.x, f.y),
                    m.push(y.x, y.y)),
                    c = p.dot1 == y ? p.dot2 : p.dot1
                } else
                    1 < s && (r || m.push(c.x, c.y),
                    c = p.dot1 != c ? p.dot1 : p.dot2);
                d = p
            }
            if (r) {
                var v = 15 + 5 * a
                  , I = e.getInt16(v)
                  , b = [];
                for (s = 0; s < I; s++) {
                    var w = e.getInt32(v + 2 + 4 * s);
                    vt[w] || console.error("new simplified zone: dot not found: " + w);
                    var k = vt[w].x
                      , x = vt[w].y;
                    m.push(k, x),
                    b.push(vt[w])
                }
                var E = 0
                  , B = 0
                  , M = _e
                  , T = Ne;
                if (e.byteLength >= v + 2 + 4 * I + 16) {
                    E = e.getFloat32(v + 2 + 4 * I),
                    M = e.getFloat32(v + 2 + 4 * I + 4),
                    B = e.getFloat32(v + 2 + 4 * I + 8),
                    T = e.getFloat32(v + 2 + 4 * I + 12);
                    var C = []
                      , P = m[m.length - 2]
                      , S = m[m.length - 1]
                      , L = m[0]
                      , F = m[1];
                    for (s = 0; s < m.length / 2; s++) {
                        if (k = L,
                        x = F,
                        s < m.length / 2 - 1)
                            L = m[2 * (s + 1) + 0],
                            F = m[2 * (s + 1) + 1];
                        else
                            L = m[0],
                            F = m[1];
                        var X = Ei(P, S, E, M, B, T)
                          , z = Ei(k, x, E, M, B, T)
                          , A = Ei(L, F, E, M, B, T);
                        if (z)
                            C.push(k, x);
                        else if (X || z || A) {
                            if (X) {
                                var D = Bi(k, x, P, S, E, M, B, T);
                                C.push(D.x, D.y)
                            }
                            if (A) {
                                D = Bi(k, x, L, F, E, M, B, T);
                                C.push(D.x, D.y)
                            }
                        } else
                            C.push(Math.max(E, Math.min(M, k)), Math.max(B, Math.min(T, x)));
                        P = k,
                        S = x
                    }
                    m = C
                }
            }
            if (((l = new PIXI.Graphics).simplified = r) && (l.simplifiedDotPath = b),
            l.zoneId = n,
            l.owner = i,
            l.linePath = u,
            l.areaScore = o,
            l.beginFill(1 == ue || 2 == ue ? Rt(i) : Ht(i), .5),
            et && 0 < u.length && 15642415 == u[0].tint && l.beginFill(15642415, .5),
            l.drawPolygon(m),
            l.endFill(),
            l.polygon = m,
            O.addChild(l),
            bt[n] = l,
            t && i == kt) {
                ye++,
                ia(l.areaScore / 4);
                var H = Math.ceil(l.areaScore / 4);
                if (ye <= 5 || 50 <= H) {
                    var R = {
                        x: (l.linePath[0].dot1.x + l.linePath[0].dot2.x) / 2,
                        y: (l.linePath[0].dot1.y + l.linePath[0].dot2.y) / 2
                    };
                    ta(R.x, R.y, "+" + H)
                }
            }
            t && (l.alpha = 0,
            anime({
                targets: l,
                alpha: 1,
                duration: 250,
                easing: "linear"
            })),
            0 != ue && 3 != ue || i != kt || (ka = !0)
        }
    }
    function Ti(e, t, n, i) {
        var o = e.getInt32(t)
          , a = e.getInt32(t + 4)
          , r = e.getFloat32(t + 8)
          , l = e.getInt16(t + 12);
        if (t += 14,
        n && bt[o]) {
            for (var s = bt[o], d = 0; d < s.linePath.length; d++)
                s.linePath[d].leftZoneId == o && (s.linePath[d].leftZoneId = 0),
                s.linePath[d].rightZoneId == o && (s.linePath[d].rightZoneId = 0);
            O.removeChild(s),
            delete bt[o],
            V && V.removeZone(s, s.zoneBounds.minX, s.zoneBounds.maxX, s.zoneBounds.minY, s.zoneBounds.maxY)
        }
        if (bt[o])
            t += 5 * l;
        else {
            var c, u, m = [], g = [];
            for (d = 0; d < l; d++) {
                var h = e.getInt32(t)
                  , p = 0 == e.getUint8(t + 4);
                t += 5,
                It[h] || console.error("new zone: line not found: " + h);
                var y = It[h];
                if (m.push(y),
                p ? y.leftZoneId = o : y.rightZoneId = o,
                1 == d) {
                    var f;
                    y.dot1 == c.dot1 || y.dot1 == c.dot2 ? f = y.dot1 : y.dot2 != c.dot1 && y.dot2 != c.dot2 || (f = y.dot2);
                    var v = c.dot1 == f ? c.dot2 : c.dot1;
                    n || (g.push(v.x, v.y),
                    g.push(f.x, f.y)),
                    u = y.dot1 == f ? y.dot2 : y.dot1
                } else
                    1 < d && (n || g.push(u.x, u.y),
                    u = y.dot1 != u ? y.dot1 : y.dot2);
                c = y
            }
            if (n) {
                var I = e.getInt16(t);
                t += 2;
                var b = [];
                for (d = 0; d < I; d++) {
                    var w = e.getInt32(t);
                    t += 4,
                    vt[w] || console.error("new simplified zone: dot not found: " + w);
                    var k = vt[w].x
                      , x = vt[w].y;
                    g.push(k, x),
                    b.push(vt[w])
                }
                var E = e.getFloat32(t)
                  , B = e.getFloat32(t + 4)
                  , M = e.getFloat32(t + 8)
                  , T = e.getFloat32(t + 12);
                t += 16;
                var C = []
                  , P = g[g.length - 2]
                  , S = g[g.length - 1]
                  , L = g[0]
                  , F = g[1];
                for (d = 0; d < g.length / 2; d++) {
                    if (k = L,
                    x = F,
                    d < g.length / 2 - 1)
                        L = g[2 * (d + 1) + 0],
                        F = g[2 * (d + 1) + 1];
                    else
                        L = g[0],
                        F = g[1];
                    var X = Ei(P, S, E, B, M, T)
                      , z = Ei(k, x, E, B, M, T)
                      , A = Ei(L, F, E, B, M, T);
                    if (z)
                        C.push(k, x);
                    else if (X || z || A) {
                        if (X) {
                            var D = Bi(k, x, P, S, E, B, M, T);
                            C.push(D.x, D.y)
                        }
                        if (A) {
                            D = Bi(k, x, L, F, E, B, M, T);
                            C.push(D.x, D.y)
                        }
                    } else
                        C.push(Math.max(E, Math.min(B, k)), Math.max(M, Math.min(T, x)));
                    P = k,
                    S = x
                }
                g = C
            }
            if (((s = new PIXI.Graphics).simplified = n) && (s.simplifiedDotPath = b),
            s.zoneId = o,
            s.owner = a,
            s.linePath = m,
            s.areaScore = r,
            s.beginFill(1 == ue || 2 == ue ? Rt(a) : Ht(a), .5),
            et && 0 < m.length && 15642415 == m[0].tint && s.beginFill(15642415, .5),
            s.drawPolygon(g),
            s.endFill(),
            s.polygon = g,
            O.addChild(s),
            bt[o] = s,
            i && a == kt) {
                ye++,
                ia(s.areaScore / 4);
                var H = Math.floor(s.areaScore / 4);
                if (ye <= 10 || 200 <= H) {
                    var R = {
                        x: (s.linePath[0].dot1.x + s.linePath[0].dot2.x) / 2,
                        y: (s.linePath[0].dot1.y + s.linePath[0].dot2.y) / 2
                    };
                    ta(R.x, R.y, "+" + H)
                }
            }
            if (i && (s.alpha = 0,
            anime({
                targets: s,
                alpha: 1,
                duration: 250,
                easing: "linear"
            })),
            0 != ue && 3 != ue || a != kt || (ka = !0),
            V) {
                for (E = g[0],
                B = g[0],
                M = g[1],
                T = g[1],
                d = 0; d < g.length / 2; d++) {
                    var U;
                    (U = g[2 * d]) < E ? E = U : B < U && (B = U),
                    (U = g[2 * d + 1]) < M ? M = U : T < U && (T = U)
                }
                s.zoneBounds = {
                    minX: E,
                    maxX: B,
                    minY: M,
                    maxY: T
                },
                V.addZone(s, E, B, M, T),
                3 == ue && function(e) {
                    for (var t = q.getAllInRect(e.zoneBounds.minX, e.zoneBounds.maxX, e.zoneBounds.minY, e.zoneBounds.maxY), n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.owner != e.owner && Fi(e.polygon, i.position) && Ci(i)
                    }
                }(s)
            }
        }
        return t
    }
    function Ci(e) {
        e.alpha = .6,
        e.isCaptured = !0;
        for (var t = 0; t < e.lines.length; t++)
            e.lines[t].alpha = .6
    }
    function Pi(e) {
        e.alpha = 1,
        e.isCaptured = !1;
        for (var t = 0; t < e.lines.length; t++)
            e.lines[t].alpha = 1
    }
    function Si(e) {
        for (var t = V.getAllInRange(e.position, 0, 0), n = 0; n < t.length; n++) {
            var i = t[n];
            e.owner != i.owner && Fi(i.polygon, e.position) && Ci(e)
        }
    }
    function Li(e) {
        for (var t = q.getAllInRect(e.zoneBounds.minX, e.zoneBounds.maxX, e.zoneBounds.minY, e.zoneBounds.maxY), n = 0; n < t.length; n++) {
            var i = t[n];
            i.owner != e.owner && Fi(e.polygon, i.position) && Pi(i)
        }
    }
    function Fi(e, t) {
        for (var n = e[e.length - 2], i = e[e.length - 1], o = !1, a = 0; a < e.length; a += 2) {
            var r = e[a]
              , l = e[a + 1];
            (l < t.y && i >= t.y || i < t.y && l >= t.y) && r + (t.y - l) / (i - l) * (n - r) < t.x && (o = !o),
            n = r,
            i = l
        }
        return o
    }
    function Xi(e) {
        var t = wt[kt] || wt[we] || D
          , n = Math.floor(t.x / Tt)
          , i = Math.floor(t.y / Tt)
          , o = Math.floor(e.x / Tt)
          , a = Math.floor(e.y / Tt)
          , r = Math.ceil(Ge / 2 / Tt)
          , l = Math.ceil(We / 2 / Tt);
        return o < n - r || (n + r < o || (a < i - l || i + l < a))
    }
    function zi(e) {
        if (e.shieldAppearAnim) {
            try {
                e.shieldAppearAnim.pause()
            } catch (e) {}
            e.shieldAppearAnim = null
        }
        e.shield.alpha = 1;
        var t = e.shield.width;
        e.dotBlastAnim = anime({
            targets: e.shield,
            width: [t, 1.5 * t],
            height: [t, 1.5 * t],
            alpha: 0,
            duration: 300,
            easing: "linear",
            complete: function() {
                e.shield.width = t,
                e.shield.height = t,
                e.dotBlastAnim = null
            }
        })
    }
    function Ai(e, t, n) {
        var i;
        delete bt[e.zoneId],
        V && (V.removeZone(e, e.zoneBounds.minX, e.zoneBounds.maxX, e.zoneBounds.minY, e.zoneBounds.maxY),
        3 == ue && t && Li(e)),
        t ? anime({
            targets: e,
            alpha: 0,
            duration: 250,
            easing: "linear",
            complete: (i = e,
            function() {
                O.removeChild(i)
            }
            )
        }) : O.removeChild(e),
        e.owner == kt && t && !n && ia(-e.areaScore / 4);
        for (var o = {}, a = 0; a < e.linePath.length; a++) {
            var r = e.linePath[a];
            r.leftZoneId == e.zoneId && (r.leftZoneId = 0),
            r.rightZoneId == e.zoneId && (r.rightZoneId = 0),
            t && !n && (r.leftZoneId || r.rightZoneId || (r.dot1.shield && !pa(r.dot1) && (o[r.dot1.dotId] = !0,
            r.dot1.shield.state = 0,
            r.dot1.shield.alpha = 0),
            r.dot2.shield && !pa(r.dot2) && (o[r.dot2.dotId] = !0,
            r.dot2.shield.state = 0,
            r.dot2.shield.alpha = 0))),
            bt[r.leftZoneId] || bt[r.rightZoneId] || wr || Xi(r.dot1) && Xi(r.dot2) && (P.removeChild(r),
            delete It[r.lineId],
            Z && Z.removeLine(r, r.dot1.position, r.dot2.position),
            r.dot1.lines.splice(r.dot1.lines.indexOf(r), 1),
            r.dot2.lines.splice(r.dot2.lines.indexOf(r), 1),
            Hi(r.dot1),
            Hi(r.dot2))
        }
        for (var l in o) {
            var s = vt[l];
            s && zi(s)
        }
    }
    function Di(e) {
        var t = new PIXI.Container
          , n = new PIXI.Graphics;
        n.beginFill(32768),
        n.drawRoundedRect(0, 0, 4 * Oe, Oe, Oe / 4),
        n.endFill(),
        t.addChild(n);
        var i = new PIXI.Graphics;
        return i.beginFill(65280),
        i.drawRoundedRect(0, 0, 4 * Oe, Oe, Oe / 4),
        i.endFill(),
        t.addChild(i),
        t.outer = i,
        t.position.set(e.position.x - t.width / 2, e.position.y + 1.5 * Oe),
        t
    }
    function Hi(e) {
        0 == e.lines.length && Xi(e) && (C.removeChild(e),
        delete vt[e.dotId],
        q && q.remove(e, e.position),
        e.healthBar && S.removeChild(e.healthBar),
        e.shield && C.removeChild(e.shield),
        e.text && C.removeChild(e.text))
    }
    function Ri(e, t, n, i, o, a, r) {
        e < 0 && (e = 0),
        t >= N.width && (t = N.width - 1);
        for (var l = 4 * (n * N.width + e), s = 4 * (n * N.width + t), d = l; d <= s; d += 4)
            N.data[d + 0] = i,
            N.data[d + 1] = o,
            N.data[d + 2] = a,
            N.data[d + 3] = r
    }
    function Ui() {
        N = _.createImageData(Y.width, Y.height),
        G = _.createImageData(Y.width, Y.height),
        _.putImageData(N, 0, 0)
    }
    function Oi(e, t) {
        if (xo && t && logged_in) {
            if (Ne < _e) {
                var n = Math.ceil(256 / _e * Ne);
                Y.width = 256,
                Y.height = n
            } else if (_e < Ne) {
                var i = Math.ceil(256 / Ne * _e);
                document.getElementById("minimap").style.width = i + "px",
                Y.width = i,
                Y.height = 256
            } else
                Y.width = 256,
                Y.height = 256;
            Y.style.transformOrigin = "top left",
            "256px" != document.getElementById("minimap").style.width && (Y.style.transform = "scale(0.375)")
        }
        Ui();
        for (var o = Ht(kt), a = (16711680 & o) >> 16, r = (65280 & o) >> 8, l = 255 & o, s = 1, d = t ? 7 : 3; s + d <= e.byteLength; ) {
            if (t) {
                var c = e.getInt32(s);
                a = (16711680 & (o = (1 <= ae || 2 == ue) && 1 == c ? 0 : 1 == ue || 2 == ue ? Rt(c) : Ht(c))) >> 16,
                r = (65280 & o) >> 8,
                l = 255 & o,
                s += 4
            }
            var u = e.getUint8(s)
              , m = e.getUint8(s + 1)
              , g = e.getUint8(s + 2);
            s += 3,
            Ri(m, g, u, a, r, l, 255)
        }
        lo && clearTimeout(lo),
        lo = setTimeout(function() {
            _.putImageData(N, 0, 0)
        }, 100)
    }
    function Yi(e) {
        var t = e.getInt32(1)
          , n = e.getInt32(5)
          , i = me[n];
        if (vt[t]) {
            var o = vt[t];
            delete vt[t],
            q && q.remove(o, o.position),
            C.removeChild(o),
            $i(1 == ue || 2 == ue ? Rt(o.owner) : Ht(o.owner), o.x, o.y, 6, Oe, 2, i ? {
                x: .25 * i.sx,
                y: .25 * i.sy
            } : void 0, 3 == ue && o.isCaptured ? .6 : 1),
            o.healthBar && S.removeChild(o.healthBar),
            o.shield && C.removeChild(o.shield),
            o.text && C.removeChild(o.text);
            for (var a = 0; a < o.lines.length; a++) {
                var r = o.lines[a];
                delete It[r.lineId],
                Z && Z.removeLine(r, r.dot1.position, r.dot2.position),
                anime({
                    targets: r,
                    alpha: 0,
                    duration: 250,
                    easing: "linear",
                    complete: function(e) {
                        return function() {
                            P.removeChild(e)
                        }
                    }(r)
                }),
                r.leftZoneId && bt[r.leftZoneId] && Ai(bt[r.leftZoneId], !0),
                r.rightZoneId && bt[r.rightZoneId] && Ai(bt[r.rightZoneId], !0);
                var l = r.dot1 == o ? r.dot2 : r.dot1;
                l.lines.splice(l.lines.indexOf(r), 1),
                Hi(l)
            }
        }
        i && (delete me[n],
        F.removeChild(i),
        i.creator == kt && de < 3 && (fe++,
        o && fe <= 10 && ta(o.x, o.y, "+10")))
    }
    function _i(e, t, n) {
        var i, o = new PIXI.Sprite(z.shoot);
        o.x = e,
        o.y = t,
        o.anchor.set(.5),
        o.tint = 16739353,
        S.addChild(o),
        anime({
            targets: o,
            alpha: [1, 0],
            width: [0, 2 * n * 1.2],
            height: [0, 2 * n * 1.2],
            duration: 500,
            easing: "linear",
            complete: (i = o,
            function() {
                S.removeChild(i)
            }
            )
        })
    }
    var Ni = !1;
    function Gi(e, t, n) {
        var i = new PIXI.Text(e,{
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: Math.round(Math.min(window.innerHeight, window.innerWidth) / 30),
            fill: t || 56576,
            align: "center"
        });
        i.anchor.set(.5),
        i.position.set(window.innerWidth / 2, .1 * window.innerHeight),
        W.addChild(i),
        anime({
            targets: i,
            easing: "linear",
            alpha: [1, 0],
            y: .02 * window.innerHeight,
            duration: 2e3,
            complete: function() {
                W.removeChild(i)
            }
        }),
        n && anime({
            targets: i.scale,
            x: [.5, 1],
            y: [.5, 1],
            easing: "easeOutBack",
            duration: 500
        })
    }
    function Wi(e) {
        var t = {}
          , n = {}
          , i = {};
        for (var o in bt)
            bt[o].owner == e && (t[o] = !0);
        for (var o in It)
            It[o].owner == e && (n[o] = !0);
        for (var o in vt)
            vt[o].owner == e && (i[o] = !0);
        for (var o in t) {
            anime({
                targets: bt[o],
                alpha: 0,
                duration: 250,
                easing: "linear",
                complete: function(e) {
                    return function() {
                        O.removeChild(e)
                    }
                }(bt[o])
            });
            var a = bt[o];
            delete bt[o],
            V && (V.removeZone(a, a.zoneBounds.minX, a.zoneBounds.maxX, a.zoneBounds.minY, a.zoneBounds.maxY),
            3 == ue && Li(a))
        }
        for (var o in n) {
            var r = It[o];
            anime({
                targets: r,
                alpha: 0,
                duration: 250,
                easing: "linear",
                complete: function(e) {
                    return function() {
                        P.removeChild(e)
                    }
                }(r)
            }),
            delete It[o],
            Z && Z.removeLine(r, r.dot1.position, r.dot2.position)
        }
        for (var o in i) {
            vt[o].healthBar && S.removeChild(vt[o].healthBar),
            vt[o].shield && C.removeChild(vt[o].shield),
            vt[o].text && C.removeChild(vt[o].text),
            anime({
                targets: vt[o],
                alpha: 0,
                duration: 250,
                easing: "linear",
                complete: function(e) {
                    return function() {
                        C.removeChild(e)
                    }
                }(vt[o])
            });
            var l = vt[o];
            delete vt[o],
            q && q.remove(l, l.position)
        }
    }
    function qi(e) {
        var t = e.getInt32(1)
          , n = e.getUint8(5)
          , i = e.getInt32(6)
          , o = 50;
        14 <= e.byteLength && (o = e.getFloat32(10));
        var a = 0;
        if (18 <= e.byteLength && (a = e.getInt32(14)),
        t == kt && Fe++,
        (1 == n && i == kt || 2 == n && a == kt || 5 == n && i == kt) && Le++,
        1 != ue && 2 != ue)
            3 == ue && 0 != n || Wi(t),
            t != kt && wt[t] && (1 == n ? i == kt ? (ci("You killed " + ke[t] + " (kills: " + Le + ")", $e ? "info-dark" : "info"),
            Gi("You killed " + ke[t] + "!", $e ? 16777215 : Wt(Ht(kt), -.7), !0)) : ci(ke[t] + " has been killed", $e ? "info-dark" : "info") : 2 == n ? (ci(ke[t] + " crashed into a wall" + (a == kt ? " (you get the kill)" : ""), $e ? "info-dark" : "info"),
            a == kt && Gi("You killed " + ke[t] + "!", $e ? 16777215 : Wt(Ht(kt), -.7), !0)) : 3 == n ? ci(ke[t] + " died in a collision", $e ? "info-dark" : "info") : 5 == n && (i == kt ? (ci("You exploded " + ke[t] + " (kills: " + Le + ")", $e ? "info-dark" : "info"),
            Gi("You exploded " + ke[t] + "!", $e ? 16777215 : Wt(Ht(kt), -.7), !0)) : ci(ke[t] + " has been exploded", $e ? "info-dark" : "info")));
        else
            try {
                1 == n && (Et[t] == xt || Et[i] == xt || logged_in && xo) ? i == kt ? (Gi("You killed " + ke[t] + "!", $e ? 16777215 : Wt(Ht(kt), -.7), !0),
                ci("You killed " + ke[t] + " (Team " + zt[Et[t] - 1] + ") (kills: " + Le + ")", $e ? "info-dark" : "info")) : ci(ke[t] + " (Team " + zt[Et[t] - 1] + ") has been killed by " + ke[i] + " (Team " + zt[Et[i] - 1] + ")", $e ? "info-dark" : "info") : 2 == n && (Et[t] == xt || a == kt || logged_in && xo) ? (ci(ke[t] + " (Team " + zt[Et[t] - 1] + ") crashed into a wall" + (a == kt ? " (you get the kill)" : ""), $e ? "info-dark" : "info"),
                a == kt && Gi("You killed " + ke[t] + "!", $e ? 16777215 : Wt(Ht(kt), -.7), !0)) : 3 == n && (Et[t] == xt || logged_in && xo) && ci(ke[t] + " (Team " + zt[Et[t] - 1] + ") died colliding with " + ke[i] + " (Team " + zt[Et[i] - 1] + ")", $e ? "info-dark" : "info")
            } catch (e) {}
        if (!wt[t] || 0 == n || 1 != ue && 2 != ue && 3 != ue || _i(wt[t].x, wt[t].y, o),
        t == kt) {
            if (de++,
            "undefined" != typeof Storage)
                try {
                    localStorage.setItem("gamesPlayed", de)
                } catch (e) {
                    console.log(e)
                }
            switch (He.visible = !1,
            Re.visible = !1,
            D = wt[kt].position,
            H = te,
            wt[kt].visible = !1,
            n) {
            case 0:
                var r = "The connection with the server has been lost";
                break;
            case 1:
                r = "You were killed by " + (ke[i] ? ke[i] : " an unknown player");
                break;
            case 2:
                var l = ke[i] ? ke[i] : "somebody";
                1 != ue && 2 != ue || (l = "Team " + zt[i - 1]);
                r = "You crashed into " + l + "'s wall";
                break;
            case 3:
                r = "You collided with " + (ke[i] ? ke[i] : " an unknown player");
                break;
            case 5:
                r = "You were exploded by " + (ke[i] ? ke[i] : " an unknown player")
            }
            if (2 == ue)
                document.getElementById("respawn-kill-reason-gm2").innerHTML = r,
                document.getElementById("respawn-score-gm2").innerHTML = document.getElementById("lb-player-points").innerHTML,
                document.getElementById("respawn-kills-gm2").innerHTML = Le,
                document.getElementById("respawn-deaths-gm2").innerHTML = Fe,
                document.getElementById("respawn-rounds-won-gm2").innerHTML = Xe + "/" + ze;
            else {
                document.getElementById("respawn-kill-reason").innerHTML = r,
                document.getElementById("respawn-score").innerHTML = document.getElementById("lb-player-points").innerHTML,
                document.getElementById("respawn-map").innerHTML = document.getElementById("map-control-value").innerHTML + "%";
                var s = te / 60;
                ce = s;
                var d = Math.floor(s / 60)
                  , c = Math.floor(s % 60);
                document.getElementById("respawn-alive").innerHTML = (0 < d ? d + " min. " : "") + c + " s",
                document.getElementById("respawn-level").innerHTML = document.getElementById("level-value").innerHTML
            }
            document.getElementById("choose-superpower").style.display = "none",
            document.getElementById("xp-block").style.display = "none",
            document.getElementById("upgrade-block").style.display = "none",
            Ni = !0,
            setTimeout(function() {
                xo || 2 == ue && 3 == pt || (document.getElementById("respawn" + (2 == ue ? "-gm2" : "")).style.display = "block"),
                Ni = !1
            }, 1500),
            He.visible = !1,
            Re.visible = !1,
            aa = null,
            "undefined" != typeof aiptag && aiptag.cmd.display.push && !qa && (aiptag.cmd.display.push(function() {
                aipDisplayTag.display("defly-io_300x250")
            }),
            aiptag.cmd.display.push(function() {
                aipDisplayTag.display("defly-io_728x90")
            })),
            dn("Game", "PlayerKilled", void 0, "s=" + parseInt(document.getElementById("lb-player-points").innerHTML) + " mp=" + parseInt(Math.floor(100 * document.getElementById("map-control-value").innerHTML)) + " gd=" + Math.floor(s) + " l=" + document.getElementById("level-value").innerHTML),
            "undefined" != typeof gtag && (gtag("event", "PlayerKilled", {
                event_category: "Game",
                score: parseInt(document.getElementById("lb-player-points").innerHTML),
                mapPercent: parseInt(Math.floor(100 * document.getElementById("map-control-value").innerHTML)),
                gameDuration: Math.floor(s)
            }),
            gtag("set", {
                page_title: "respawn" + (2 == ue ? "-gm2" : ""),
                page_path: "/respawn" + (2 == ue ? "-gm2" : "")
            }),
            gtag("event", "page_view"),
            dn("pv", "/respawn", void 0, "ab=" + Kt)),
            document.getElementById("respawn-panel-earnings").style.display = "none",
            document.getElementById("respawn-panel-earnings-gm2").style.display = "none",
            document.getElementById("buy-screen").style.display = "none",
            document.getElementById("game-won") && document.body.removeChild(document.getElementById("game-won"))
        } else
            t == we && wt[t] && (D = wt[t].position);
        wt[t] && $i(Ht(t), wt[t].x, wt[t].y, 10, .5 * Ue, 6),
        3 != ue && delete Dt[t],
        1 != n && 5 != n || i != kt || !wt[t] || (ta(wt[t].x, wt[t].y, "+500"),
        ia(500))
    }
    var Zi, Vi = !1;
    var ji = -1;
    function Ki(e) {
        clearTimeout(Zi),
        ji = e;
        var t = new DataView(new ArrayBuffer(5));
        t.setUint8(0, 8),
        t.setInt32(1, e),
        is_connected.send(t.buffer),
        document.getElementById("team-choice-buttons") && (document.getElementById("team-choice-buttons").style.display = "none"),
        document.getElementById("team-choice-loading").style.display = "block",
        dn("Game", "SelectTeam", e)
    }
    function Ji() {
        var e = new DataView(new ArrayBuffer(1));
        e.setUint8(0, 9),
        is_connected.send(e.buffer)
    }
    function $i(e, t, n, i, o, a, r, l) {
        void 0 === l && (l = 1);
        for (var s = r ? Math.atan2(r.y, r.x) : null, d = 0; d < i; d++) {
            var c = new PIXI.Sprite(z.debris);
            c.tint = e,
            c.alpha = l,
            c.width = o,
            c.height = o / c.texture.width * c.texture.height;
            var u = s ? s + Math.random() * Math.PI - Math.PI / 2 : Math.random() * Math.PI * 2
              , m = Math.random() * Ue * a
              , g = Math.random() * Math.PI / 4;
            c.x = t + Math.cos(u) * Ue * .25,
            c.y = n + Math.sin(u) * Ue * .25,
            c.rotation = Math.random() * Math.PI * 2,
            X.addChild(c),
            anime({
                targets: c,
                x: t + Math.cos(u) * m + (r ? r.x : 0),
                y: n + Math.sin(u) * m + (r ? r.y : 0),
                rotation: c.rotation + g,
                alpha: 0,
                duration: 2e3,
                easing: "easeOutQuart",
                complete: function(e) {
                    return function() {
                        X.removeChild(e)
                    }
                }(c)
            })
        }
    }
    function Qi(e) {
        return (e = Math.round(100 * e) / 100).toString().match(/^-?\d+(?:\.\d{2})?/)[0]
    }
    var eo = 0;
    function to(e) {
        for (var t in me)
            no(me[t], e)
    }
    function no(e, t) {
        if (te + t <= e.initialTurn)
            return e.x = e.initialX,
            void (e.y = e.initialY);
        e.lifetime -= t,
        e.x += 1 * e.sx / 60 * t,
        e.y += 1 * e.sy / 60 * t
    }
    function io(e, t) {
        var n = e.getInt32(1);
        bt[n] && Ai(bt[n], !0, t)
    }
    function oo(e, t, n) {
        var i = e.getFloat32(1);
        var o = function(e) {
            return t ? n ? e.x >= i : e.x < i : n ? e.y >= i : e.y < i
        }
          , a = {}
          , r = {}
          , l = {};
        for (var s in bt) {
            var d = !0;
            if ((u = bt[s]).simplified)
                for (var c = 0; c < u.simplifiedDotPath.length; c++) {
                    if (!o(h = u.simplifiedDotPath[c])) {
                        d = !1;
                        break
                    }
                }
            else
                for (c = 0; c < u.linePath.length; c++) {
                    if (!o((m = u.linePath[c]).dot1) || !o(m.dot2)) {
                        d = !1;
                        break
                    }
                }
            d && (a[s] = !0)
        }
        for (var s in a) {
            var u = bt[s];
            0,
            delete bt[s],
            V && V.removeZone(u, u.zoneBounds.minX, u.zoneBounds.maxX, u.zoneBounds.minY, u.zoneBounds.maxY),
            O.removeChild(u);
            for (c = 0; c < u.linePath.length; c++) {
                (m = u.linePath[c]).leftZoneId == u.zoneId && (m.leftZoneId = 0),
                m.rightZoneId == u.zoneId && (m.rightZoneId = 0),
                m.leftZoneId || m.rightZoneId || (m.dot1.shield && !pa(m.dot1) && (m.dot1.shield.state = 0,
                m.dot1.shield.alpha = 0),
                m.dot2.shield && !pa(m.dot2) && (m.dot2.shield.state = 0,
                m.dot2.shield.alpha = 0))
            }
        }
        for (var s in It) {
            var m = It[s];
            bt[m.leftZoneId] || bt[m.rightZoneId] || o(m.dot1) && o(m.dot2) && (r[m.lineId] = !0)
        }
        for (var s in r) {
            It[s] || console.error("could not find line ", s);
            m = It[s];
            delete It[s],
            Z && Z.removeLine(m, m.dot1.position, m.dot2.position),
            P.removeChild(m),
            m.dot1.lines.splice(m.dot1.lines.indexOf(m), 1),
            m.dot2.lines.splice(m.dot2.lines.indexOf(m), 1)
        }
        for (var s in vt) {
            if (0 == (h = vt[s]).lines.length)
                o(h) && (l[s] = !0);
            else
                for (var g = 0; g < h.lines.length; g++)
                    It[h.lines[g].lineId] || console.error("dot has removed line", s, h, h.lines[g].lineId)
        }
        for (var s in l) {
            var h = vt[s];
            delete vt[s],
            q && q.remove(h, h.position),
            C.removeChild(h),
            h.healthBar && S.removeChild(h.healthBar),
            h.shield && C.removeChild(h.shield),
            h.text && C.removeChild(h.text)
        }
    }
    function ao(e, t) {
        for (var n = "", i = 0; i < t; i++)
            n += e;
        return n
    }
    var ro, lo, so, co = 0;
    function uo() {
        document.getElementById("superpower-label").innerHTML = be ? "Superpower active" : 100 <= Ie ? "Superpower ready, " + (en ? "double-tap" : "press E or SHIFT") : "Recharging Superpower...",
        document.getElementById("superpower-fuel-value").style.width = Math.min(100, Ie) + "%"
    }
    function mo() {
        var e = new DataView(new ArrayBuffer(9));
        e.setUint8(0, 7),
        e.setFloat32(1, A.aimDirection),
        e.setFloat32(5, A.aimDistance),
        is_connected.send(e.buffer)
    }
    function go(e) {
        return ge ? Math.round(e / st) * st + st / 2 * 0 : e
    }
    function ho(e) {
        wt[e].parent.removeChild(wt[e]),
        wt[e].usernameText.parent.removeChild(wt[e].usernameText),
        wt[e].shield && wt[e].shield.parent.removeChild(wt[e].shield),
        wt[e].badge && wt[e].badge.parent.removeChild(wt[e].badge);
        var t = wt[e];
        delete wt[e],
        _n(e),
        wt[e].position.set(t.x, t.y),
        wt[e].rotation = t.rotation
    }
    anime.easings.flashbangCurve = function(e) {
        return e < .5 ? anime.easings.easeInQuad(2 * e) / 2 : anime.easings.easeInQuad(2 * (.5 - (e - .5))) + .5
    }
    ;
    var po = []
      , yo = !1;
    function fo() {
        for (var e = 0; e < po.length; e++)
            S.removeChild(po[e].playerText),
            S.removeChild(po[e]);
        yo = !(po = [])
    }
    function vo() {
        if (D)
            return D;
        var e = pe[4] / 2;
        !en && 0 < A.aimDistance && (e = Math.min(A.aimDistance, e));
        var t = new PIXI.Point(wt[kt].x + e * Math.cos(A.aimDirection),wt[kt].y + e * Math.sin(A.aimDirection));
        return Vn(t),
        t
    }
    function Io() {
        if (!D) {
            var e = vo();
            if (wr) {
                for (var t in vt) {
                    var n = vt[t];
                    if ((e = vo()).x = go(e.x),
                    e.y = go(e.y),
                    n.position.dst(e) < Oe) {
                        if (aa && aa != n)
                            if (!Sr(n, aa))
                                (i = new DataView(new ArrayBuffer(25))).setInt32(1, kr++),
                                i.setInt32(5, 1),
                                i.setInt32(9, aa.dotId),
                                i.setInt32(13, n.dotId),
                                i.setInt32(17, 0),
                                i.setInt32(21, 0),
                                xi(i);
                        return aa = n,
                        void (He.visible = !0)
                    }
                }
                var i = new DataView(new ArrayBuffer(27))
                  , o = kr++;
                if (i.setInt32(1, o),
                i.setInt32(5, 1),
                i.setFloat32(9, go(e.x)),
                i.setFloat32(13, go(e.y)),
                i.setUint8(17, 1),
                i.setUint8(18, 1),
                i.setFloat32(19, 0),
                i.setInt32(23, 0),
                wi(i),
                null != aa)
                    (i = new DataView(new ArrayBuffer(25))).setInt32(1, kr++),
                    i.setInt32(5, 1),
                    i.setInt32(9, aa.dotId),
                    i.setInt32(13, o),
                    i.setInt32(17, 0),
                    i.setInt32(21, 0),
                    xi(i);
                aa = vt[o],
                He.visible = !0,
                Uo = !1
            } else {
                (i = new DataView(new ArrayBuffer(9))).setUint8(0, 3),
                i.setFloat32(1, go(e.x)),
                i.setFloat32(5, go(e.y)),
                is_connected.send(i.buffer),
                Uo = !1
            }
        }
    }
    function bo(e) {
        if (!(he <= 0)) {
            var t = new DataView(new ArrayBuffer(2));
            t.setUint8(0, 5),
            t.setUint8(1, e),
            is_connected.send(t.buffer),
            pe[e] < 8 && --he <= 0 && anime({
                targets: "#upgrade-block",
                easing: "easeInQuad",
                left: "-264px",
                duration: 250
            }),
            dn("Game", "Upgrade", e, void 0),
            window.event && window.event.preventDefault()
        }
    }
    function wo() {
        var e = new DataView(new ArrayBuffer(5));
        e.setUint8(0, 4),
        e.setInt32(1, Be),
        is_connected.send(e.buffer)
    }
    function ko() {
        document.getElementById("respawn-gm2").style.display = "none",
        oi((en ? "Tap" : "Click") + " anywhere to spectate next player", 1e4)
    }
    var xo = !1;
    function Eo(e, t) {
        if (is_connected && 1 == is_connected.readyState) {
            t || (t = "");
            var n = new DataView(new ArrayBuffer(3 + 2 * t.length));
            n.setUint8(0, 128),
            n.setUint8(1, e),
            Xn(n, 2, t),
            is_connected.send(n.buffer),
            xo = !0
        }
    }
    var Bo = 0;
    function Mo() {
        if (is_connected && 1 == is_connected.readyState && (wt[kt] && !D || xo)) {
            var e = new DataView(new ArrayBuffer(20));
            e.setUint8(0, 2);
            var t = (A.shooting ? 1 : 0) + (A.moving ? 2 : 0) + (1 == ht ? 4 : 0);
            e.setUint8(1, t),
            e.setFloat32(2, A.moveDirection),
            e.setFloat32(6, A.aimDirection),
            e.setInt16(10, n || 0),
            e.setFloat32(12, A.aimDistance),
            is_connected.send(e.buffer),
            Bo = (new Date).getTime(),
            re.push(Bo),
            le.push({
                turn: te + 60 * (n || 0) / 1e3,
                input: {
                    shooting: A.shooting,
                    moving: A.moving,
                    aimDirection: A.aimDirection,
                    moveDirection: A.moveDirection
                }
            }),
            Ao = !1
        }
        wr && le.push({
            turn: te + 60 * (n || 0) / 1e3,
            input: {
                shooting: A.shooting,
                moving: A.moving,
                aimDirection: A.aimDirection,
                moveDirection: A.moveDirection
            }
        })
    }
    var To, Co, Po, So, Lo, Fo, Xo, zo = 0, Ao = !1;
    function Do(e) {
        if (0 != J || wr) {
            if (ie = e.clientX,
            oe = e.clientY,
            wt[kt]) {
                var t = Math.atan2(oe - window.innerHeight / 2, ie - window.innerWidth / 2);
                wt[kt].rotation = t,
                A.aimDirection = t,
                A.aimDistance = Math.sqrt(Math.pow(oe - window.innerHeight / 2, 2) + Math.pow(ie - window.innerWidth / 2, 2)) / B.scale.x,
                1 == se && (A.moveDirection = t + (No ? Math.PI : 0),
                A.moving = !0),
                Je && (A.moveDirection = A.aimDirection,
                A.moving = A.aimDistance > 4 * Ue);
                var n = (new Date).getTime();
                20 < n - zo ? (Mo(),
                zo = n) : Ao = !0
            }
            if (wr) {
                var i = vo();
                document.getElementById("defuse-editor-position").innerHTML = go(i.x).toFixed(2) + " " + go(i.y).toFixed(2)
            }
        }
    }
    function Ho(e) {
        if (0 != J) {
            var t, n = (new Date).getTime(), i = 1 * Nt;
            if ("touchend" === e.type || "touchcancel" === e.type)
                for (var o = 0; o < e.changedTouches.length; o++) {
                    var a = e.changedTouches[o];
                    if (To && To.identifier == a.identifier ? (A.moving = !1,
                    Mo(),
                    c.visible = !1,
                    u.visible = !1,
                    To = null) : So && So.identifier == a.identifier ? (A.shooting = !1,
                    Mo(),
                    m.visible = !1,
                    g.visible = !1,
                    So = null) : Po && Po.identifier == a.identifier && (Uo = !1,
                    Po = null),
                    Fo && a.identifier == Fo.identifier && n - Fo.time < 250)
                        if ((d = Math.sqrt(Math.pow(Fo.clientX - a.clientX, 2) + Math.pow(Fo.clientY - a.clientY, 2))) < .2 * Nt) {
                            if (Xo && n - Xo.time < 250)
                                if ((d = Math.sqrt(Math.pow(Xo.clientX - a.clientX, 2) + Math.pow(Xo.clientY - a.clientY, 2))) < .2 * Nt) {
                                    var r = A.aimDirection
                                      , l = A.aimDistance;
                                    A.aimDirection = Math.atan2(a.clientY - window.innerHeight / 2, a.clientX - window.innerWidth / 2),
                                    A.aimDistance = Math.sqrt(Math.pow(window.innerWidth / 2 - a.clientX, 2) + Math.pow(window.innerHeight / 2 - a.clientY, 2)) / B.scale.x,
                                    mo(),
                                    r = A.aimDirection = r,
                                    l = A.aimDistance = l
                                }
                            (Xo = {
                                clientX: a.clientX,
                                clientY: a.clientY,
                                identifier: a.identifier
                            }).time = n
                        }
                }
            else if ("touchstart" === e.type)
                for (o = 0; o < e.changedTouches.length; o++) {
                    a = e.changedTouches[o];
                    if ((Fo = {
                        clientX: a.clientX,
                        clientY: a.clientY,
                        identifier: a.identifier
                    }).time = n,
                    t = a,
                    Math.pow(t.clientX - p.x, 2) + Math.pow(t.clientY - p.y, 2) <= Math.pow(p.width, 2) && !A.shooting)
                        200 < (n = (new Date).getTime()) - Ro ? (Io(),
                        Ro = n) : Uo = !0,
                        3 == ue && (Uo = !0,
                        Po = {
                            clientX: a.clientX,
                            clientY: a.clientY,
                            identifier: a.identifier
                        }),
                        Fo = null;
                    else
                        a.clientX <= window.innerWidth / 2 ? (To = {
                            clientX: a.clientX,
                            clientY: a.clientY,
                            identifier: a.identifier
                        },
                        c.width = i,
                        c.height = i,
                        c.x = To.clientX,
                        c.y = To.clientY,
                        u.width = i / 2,
                        u.height = i / 2,
                        u.x = To.clientX,
                        u.y = To.clientY,
                        c.visible = !0,
                        u.visible = !0) : (So = {
                            clientX: a.clientX,
                            clientY: a.clientY,
                            identifier: a.identifier
                        },
                        m.width = i,
                        m.height = i,
                        m.x = So.clientX,
                        m.y = So.clientY,
                        g.width = i / 2,
                        g.height = i / 2,
                        g.x = So.clientX,
                        g.y = So.clientY,
                        m.visible = !0,
                        g.visible = !0)
                }
            else if ("touchmove" === e.type)
                for (o = 0; o < e.changedTouches.length; o++) {
                    a = e.changedTouches[o];
                    if (To && a.identifier == To.identifier && wt[kt]) {
                        if (Co = {
                            clientX: a.clientX,
                            clientY: a.clientY,
                            identifier: a.identifier
                        },
                        u.x = Co.clientX,
                        u.y = Co.clientY,
                        .2 * i <= (d = Math.sqrt(Math.pow(Co.clientX - To.clientX, 2) + Math.pow(Co.clientY - To.clientY, 2)))) {
                            var s = Math.atan2(Co.clientY - To.clientY, Co.clientX - To.clientX);
                            A.moveDirection = s,
                            A.moving = !0,
                            20 < (n = (new Date).getTime()) - zo ? (Mo(),
                            zo = n) : Ao = !0,
                            .4 * i <= d && (u.x = c.x + Math.cos(s) * i * .4,
                            u.y = c.y + Math.sin(s) * i * .4,
                            To.clientX = a.clientX + Math.cos(s + Math.PI) * Math.min(d, i),
                            To.clientY = a.clientY + Math.sin(s + Math.PI) * Math.min(d, i),
                            c.x = To.clientX,
                            c.y = To.clientY)
                        }
                    } else if (So && a.identifier == So.identifier && wt[kt]) {
                        Lo = {
                            clientX: a.clientX,
                            clientY: a.clientY,
                            identifier: a.identifier
                        },
                        g.x = Lo.clientX,
                        g.y = Lo.clientY;
                        var d = Math.sqrt(Math.pow(Lo.clientX - So.clientX, 2) + Math.pow(Lo.clientY - So.clientY, 2));
                        s = Math.atan2(Lo.clientY - So.clientY, Lo.clientX - So.clientX);
                        A.aimDirection = s,
                        wt[kt].rotation = s,
                        A.shooting = !0,
                        20 < (n = (new Date).getTime()) - zo ? (Mo(),
                        zo = n) : Ao = !0,
                        .4 * i <= d && (g.x = m.x + Math.cos(s) * i * .4,
                        g.y = m.y + Math.sin(s) * i * .4)
                    }
                }
            e.preventDefault()
        }
    }
    var Ro = 0
      , Uo = !1;
    function Oo(e) {
        if (xo || !D || Ni || 2 == ue || (document.getElementById("respawn").style.display = "block"),
        0 != J || wr) {
            if (2 == ue && D)
                return (t = new DataView(new ArrayBuffer(2))).setUint8(0, 12),
                t.setUint8(1, 0),
                void is_connected.send(t.buffer);
            var t;
            if (0 == e.button)
                A.shooting = !0,
                Mo(),
                He.visible = !1,
                e.preventDefault();
            else if (2 == e.button && !A.shooting) {
                var n = (new Date).getTime();
                200 < n - Ro ? (Io(),
                Ro = n) : Uo = !0,
                3 == ue && (Uo = !0)
            }
            window.focus()
        }
    }
    function Yo(e) {
        if (0 != J || wr) {
            if (0 == e.button) {
                if (A.shooting = !1,
                Mo(),
                He.visible = !!aa,
                wr)
                    for (var t in aa = null,
                    He.visible = !1,
                    vt) {
                        var n = vt[t]
                          , i = vo();
                        if (i.x = go(i.x),
                        i.y = go(i.y),
                        n.position.dst(i) < Oe) {
                            var o = new DataView(new ArrayBuffer(9));
                            return o.setInt32(1, n.dotId),
                            o.setInt32(5, 0),
                            void Yi(o)
                        }
                    }
            } else
                2 == e.button && 3 == ue && (Uo = !1);
            0
        }
    }
    var _o = [!1, !1, !1, !1]
      , No = !1
      , Go = !1
      , Wo = !1;
    function qo() {
        if ((xo || wt[kt]) && 1 != se)
            if (_o[0] || _o[1] || _o[2] || _o[3]) {
                var e = 0
                  , t = 0;
                _o[0] ? t -= 1 : _o[1] && (t += 1),
                _o[2] ? e -= 1 : _o[3] && (e += 1);
                var n = Math.atan2(t, e);
                A.moving && A.moveDirection == n || (A.moving = !0,
                A.moveDirection = n,
                Mo()),
                xo && (we = 0)
            } else
                A.moving = !1,
                Mo()
    }
    var Zo = !1;
    function Vo(e) {
        if (0 != J || wr) {
            var t = "string" == typeof e.code && 0 < e.code.length
              , n = document.getElementById("chat-input");
            if (!(n && document.activeElement == n)) {
                if (t && "KeyW" == e.code || !t && 87 == e.keyCode || !je && 38 == e.keyCode)
                    _o[0] = !0,
                    qo();
                else if (t && "KeyS" == e.code || !t && 83 == e.keyCode || !je && 40 == e.keyCode)
                    _o[1] = !0,
                    qo();
                else if (t && "KeyA" == e.code || !t && 65 == e.keyCode || !je && 37 == e.keyCode)
                    _o[2] = !0,
                    qo();
                else if (t && "KeyD" == e.code || !t && 68 == e.keyCode || !je && 39 == e.keyCode)
                    _o[3] = !0,
                    qo();
                else if (t && "Space" == e.code || !t && 32 == e.keyCode) {
                    if (!Zo && !A.shooting) {
                        Zo = !0;
                        var i = (new Date).getTime();
                        200 < i - Ro ? (Io(),
                        Ro = i) : Uo = !0,
                        3 == ue && (Uo = !0)
                    }
                } else if (je && 37 == e.keyCode)
                    Go = !0;
                else if (je && 39 == e.keyCode)
                    Wo = !0;
                else if (je && 38 == e.keyCode)
                    A.shooting = !0,
                    Mo(),
                    He.visible = !1;
                else if (t && "KeyE" == e.code || !t && 69 == e.keyCode)
                    be || mo();
                else if (16 == e.keyCode)
                    be || mo();
                else if (t && "Digit1" == e.code || !t && 49 == e.keyCode)
                    bo(0);
                else if (t && "Digit2" == e.code || !t && 50 == e.keyCode)
                    bo(1);
                else if (t && "Digit3" == e.code || !t && 51 == e.keyCode)
                    bo(2);
                else if (t && "Digit4" == e.code || !t && 52 == e.keyCode)
                    bo(3);
                else if (t && "Digit5" == e.code || !t && 53 == e.keyCode)
                    bo(4);
                else if (t && "Digit6" == e.code || !t && 54 == e.keyCode)
                    bo(5);
                else if (t && "Digit7" == e.code || !t && 55 == e.keyCode)
                    bo(6);
                else if (66 == e.keyCode) {
                    (o = document.getElementById("xp-block")).style.opacity && 1 != o.style.opacity ? 0 == o.style.opacity ? o.style.opacity = 1 : .5 == o.style.opacity && (o.style.opacity = 0) : o.style.opacity = .5
                } else if (76 == e.keyCode) {
                    var o;
                    (o = document.getElementById("leaderboard-block")).style.opacity && 1 != o.style.opacity ? 0 == o.style.opacity ? o.style.opacity = 1 : .5 == o.style.opacity && (o.style.opacity = 0) : o.style.opacity = .5
                } else if (9 == e.keyCode)
                    ;
                else if (!(9 == e.keyCode || 65 <= e.keyCode && e.keyCode <= 90 || 60 == e.keyCode))
                    return;
                D || e.preventDefault()
            }
        }
    }
    var jo = 0;
    function Ko(e) {
        if (0 != J || wr) {
            var t = document.getElementById("chat-input")
              , n = t && document.activeElement == t
              , i = "string" == typeof e.code && 0 < e.code.length;
            if (n)
                13 == e.keyCode && (0 < t.value.length && function(e) {
                    e = e.substring(0, 255);
                    var t = new DataView(new ArrayBuffer(2 + 2 * e.length));
                    t.setUint8(0, 10),
                    t.setUint8(1, e.length);
                    for (var n = 0; n < e.length; n++) {
                        var i = e.charCodeAt(n);
                        t.setUint8(2 + 2 * n + 1, 255 & i),
                        t.setUint8(2 + 2 * n + 0, i >>> 8)
                    }
                    is_connected.send(t.buffer)
                }(t.value),
                t.value = "",
                t.blur(),
                document.getElementById("chat-input").style.display = "none");
            else if (i && "KeyW" == e.code || !i && 87 == e.keyCode || !je && 38 == e.keyCode)
                _o[0] = !1,
                qo();
            else if (i && "KeyS" == e.code || !i && 83 == e.keyCode || !je && 40 == e.keyCode)
                _o[1] = !1,
                qo();
            else if (i && "KeyA" == e.code || !i && 65 == e.keyCode || !je && 37 == e.keyCode)
                _o[2] = !1,
                qo();
            else if (i && "KeyD" == e.code || !i && 68 == e.keyCode || !je && 39 == e.keyCode)
                _o[3] = !1,
                qo();
            else if (i && "Space" == e.code || !i && 32 == e.keyCode)
                Zo = !1,
                3 == ue && (Uo = !1);
            else if (je && 37 == e.keyCode)
                Go = !1;
            else if (je && 39 == e.keyCode)
                Wo = !1;
            else if (je && 38 == e.keyCode)
                A.shooting = !1,
                Mo(),
                He.visible = !!aa;
            else if (je && 40 == e.keyCode) {
                if (!A.shooting) {
                    var o = (new Date).getTime();
                    200 < o - Ro ? (Io(),
                    Ro = o) : Uo = !0
                }
            } else if (i && "KeyC" == e.code || !i && 67 == e.keyCode)
                Ke && (jo++,
                Je = !Je,
                ea(),
                A.moving = !1,
                Mo(),
                jo < 4 && oi("Move with mouse " + (Je ? "ENABLED" : "DISABLED") + " (shortcut: C)", 2e3));
            else if (xo && (i && "KeyJ" == e.code || !i && 74 == e.keyCode)) {
                var a = document.getElementById("xp-block");
                a.style.display = "block" == a.style.display ? "none" : "block",
                a.getElementsByClassName("xp-bar")[0].style.display = "none",
                a.getElementsByClassName("text")[1].style.display = "none";
                for (var r = "", l = 0; l < Bt; l++) {
                    var s = Lt[l + (1 <= ae ? 1 : 0)];
                    16252714 == s && (s = 13817893);
                    var d = Wt(s, .2);
                    r += '<div class="bar" id="map-control-bar-team-' + ((1 <= ae ? 1 : 0) + l) + '" style="background: linear-gradient(to bottom, ' + Ya(s) + ", " + Ya(d) + ');"></div>'
                }
                document.getElementById("score-bars").innerHTML = r
            } else if (xo && (i && "KeyI" == e.code || !i && 73 == e.keyCode)) {
                var c = document.getElementById("fps");
                c.style.display = "block" == c.style.display ? "none" : "block"
            } else if (xo && (i && "KeyO" == e.code || !i && 79 == e.keyCode))
                Eo(2);
            else if (xo && (i && "KeyR" == e.code || !i && 82 == e.keyCode))
                Eo(5);
            else if (xo && (i && "KeyT" == e.code || !i && 84 == e.keyCode))
                clearInterval(Wn);
            else if (xo && (i && "KeyY" == e.code || !i && 89 == e.keyCode))
                clearInterval(qn);
            else if (xo && (i && "KeyN" == e.code || !i && 78 == e.keyCode))
                Eo(6);
            else if (xo && (i && 77 == e.keyCode || !i && 77 == e.keyCode))
                "none" == Y.style.transform ? (document.getElementById("minimap").style.width = .375 * Y.width + "px",
                document.getElementById("minimap").style.height = .375 * Y.height + "px",
                Y.style.transform = "scale(0.375)") : (document.getElementById("minimap").style.width = Y.width + "px",
                document.getElementById("minimap").style.height = Y.height + "px",
                Y.style.transform = "none");
            else if (xo && (i && 70 == e.keyCode || !i && 70 == e.keyCode)) {
                var u = Math.min(window.innerWidth, window.innerHeight) - 32;
                document.getElementById("minimap").style.width = u + "px",
                document.getElementById("minimap").style.height = u / Y.width * Y.height + "px",
                Y.style.transform = "scale(" + u / 256 + ")"
            } else if (xo && (i && "KeyH" == e.code || !i && 72 == e.keyCode))
                document.getElementById("admin-player-list") ? document.body.removeChild(document.getElementById("admin-player-list")) : Eo(8);
            else {
                9 == e.keyCode ? 1 != ue && 2 != ue || (yo ? fo() : (fo(),
                yo = !0)) : 13 == e.keyCode ? Jo() : "KeyP" == e.code ? (oi("grid version = " + (Qo = (Qo + 1) % 2), 3e3),
                ea()) : "KeyO" == e.code && oi("interpolation = " + (Ea = !Ea), 3e3)
            }
            0
        }
    }
    function Jo() {
        var e = document.getElementById("chat-input");
        (1 == ue || 2 == ue || xo) && (document.getElementById("chat-input").style.display = "block",
        e.focus(),
        _o = [!1, !1, !1, !1],
        qo())
    }
    function $o(e) {}
    var Qo = 0;
    function ea() {
        E.resize(window.innerWidth, window.innerHeight),
        Ze = Ge,
        Ve = We;
        var e = window.innerWidth / window.innerHeight;
        if (Ze < Ve * e ? Ve = Ze / e : Ze = Ve * e,
        en && (Nt = Math.min(_t().dpcm(), window.innerHeight / 6),
        Ze *= .75,
        Ve *= .75,
        p && (p.width = 1 * Nt,
        p.height = 1 * Nt,
        p.x = window.innerWidth - .75 * Nt,
        p.y = window.innerHeight - .75 * Nt,
        p.visible = !0)),
        0 != J || wr) {
            var t = wt[kt] || wt[we] || D;
            if (t) {
                var n = t.x - Ze / 2
                  , i = t.y - Ve / 2
                  , o = window.innerWidth / Ze
                  , a = window.innerHeight / Ve;
                B.setTransform(-n * o, -i * a, o, a, 0, 0, 0, 0, 0)
            }
            M.removeChildren();
            var r = 1 / o;
            if (r <= 1) {
                var l = Math.round(st / r) * r;
                l <= 0 && (l = 1e-6);
                var s = Math.floor(window.innerWidth / l / o) + 2
                  , d = Math.floor(window.innerHeight / l / a) + 2;
                if (0 == Qo) {
                    for (var c = 0; c <= s; c++) {
                        (u = new PIXI.Sprite(z.gridpixel)).width = 1 / o,
                        u.height = Math.min(Ne, d * l),
                        u.x = c * l,
                        u.y = 0,
                        u.x <= _e && M.addChild(u),
                        0 != Mt || 0 != c && c != s && u.x != _e ? u.tint = $e ? 2236962 : 14540253 : u.tint = 4473924
                    }
                    for (c = 0; c <= d; c++) {
                        var u;
                        (u = new PIXI.Sprite(z.gridpixel)).width = Math.min(_e, s * l),
                        u.height = 1 / a,
                        u.x = 0,
                        u.y = c * l,
                        u.y <= Ne && M.addChild(u),
                        0 != Mt || 0 != c && c != d && u.y != Ne ? u.tint = $e ? 2236962 : 14540253 : u.tint = 4473924
                    }
                    var m = M.children[0];
                    M.removeChild(m),
                    M.addChild(m)
                } else if (1 == Qo) {
                    var g = new PIXI.Graphics;
                    for (c = 0; c <= s; c++)
                        0 != Mt || 0 != c && c != s ? g.lineStyle(1 / o / 2 / 2, $e ? 4473924 : 8947848) : g.lineStyle(1 / o, $e ? 8947848 : 4473924),
                        g.moveTo(c * l, 0).lineTo(c * l, d * l);
                    for (c = 0; c <= d; c++)
                        0 != Mt || 0 != c && c != d ? g.lineStyle(1 / o / 2 / 2, $e ? 4473924 : 8947848) : g.lineStyle(1 / o, $e ? 8947848 : 4473924),
                        g.moveTo(0, c * l).lineTo(s * l, c * l);
                    M.addChild(g)
                }
            }
            if (0 == Mt)
                ;
            else if (1 == Mt) {
                T.removeChildren(),
                (h = new PIXI.Graphics).lineStyle(1 / o, 4473924, 1, .5),
                h.moveTo(0, Ne / 2).lineTo(_e / 4, 0).lineTo(3 * _e / 4, 0).lineTo(_e, Ne / 2).lineTo(3 * _e / 4, Ne).lineTo(_e / 4, Ne).lineTo(0, Ne / 2),
                T.addChild(h)
            } else if (2 == Mt) {
                var h;
                T.removeChildren(),
                (h = new PIXI.Graphics).lineStyle(1 / o, 4473924, 1, .5),
                h.drawEllipse(_e / 2, Ne / 2, _e / 2, Ne / 2),
                T.addChild(h)
            }
            for (c = 0; c < L.children.length; c++)
                L.children[c]instanceof PIXI.Text && (L.children[c].scale.set(1 / B.scale.x),
                L.children[c].style.fontSize = Math.round(window.innerHeight / 60));
            f && b.removeChild(f),
            Je && ((f = new PIXI.Sprite(z.shoot)).width = 4 * Ue * 2 * B.scale.x,
            f.height = 4 * Ue * 2 * B.scale.y,
            f.tint = $e ? 16777215 : 0,
            f.alpha = .1,
            f.anchor.set(.5),
            f.position.set(window.innerWidth / 2, window.innerHeight / 2),
            b.addChild(f))
        }
    }
    function ta(e, t, n) {
        var i, o = new PIXI.Text(n,{
            fontFamily: "Arial",
            fontSize: 26,
            fontWeight: 700,
            fill: $e ? 16777215 : Wt(Ht(kt), -.7),
            align: "center"
        });
        o.x = e,
        o.y = t,
        o.anchor.set(.5),
        o.scale.set(.03),
        C.addChild(o),
        anime({
            targets: o,
            y: t - 5,
            alpha: {
                value: 0,
                easing: "easeInQuad"
            },
            easing: "linear",
            duration: 1e3,
            complete: (i = o,
            function() {
                C.removeChild(i)
            }
            )
        })
    }
    function na() {}
    function ia(e) {
        e
    }
    function oa(e) {
        for (; e < 2 * Math.PI; )
            e += 2 * Math.PI;
        for (; e > 2 * Math.PI; )
            e -= 2 * Math.PI;
        return e
    }
    var aa = null;
    function ra(e, t, n) {
        this.gridSize = n;
        var i = Math.ceil((e + 1) / n)
          , o = Math.ceil((t + 1) / n);
        this.grid = [];
        for (var a = 0; a < i; a++) {
            this.grid[a] = [];
            for (var r = 0; r < o; r++)
                this.grid[a][r] = new Set
        }
    }
    function la(e, t, n, i) {
        var o = 0
          , a = Math.abs(n - e)
          , r = Math.abs(i - t)
          , l = 2 * a
          , s = 2 * r
          , d = e < n ? 1 : -1
          , c = t < i ? 1 : -1
          , u = e
          , m = t
          , g = [];
        if (r <= a)
            for (; g.push(u, m),
            u != n; )
                u += d,
                a < (o += s) && (m += c,
                o -= l);
        else
            for (; g.push(u, m),
            m != i; )
                m += c,
                r < (o += l) && (u += d,
                o -= s);
        return g
    }
    function sa(e, t, n, i, o) {
        var a = (n.x - e.x) * (t.x - e.x) + (n.y - e.y) * (t.y - e.y)
          , r = e.dst(t);
        if ((a /= r * r) < 0)
            var l = new PIXI.Point(e.x,e.y);
        else if (1 < a)
            l = new PIXI.Point(t.x,t.y);
        else {
            var s = new PIXI.Point(t.x,t.y).sub(e);
            l = new PIXI.Point(e.x,e.y).add(s.scl(a))
        }
        return (r = l.dst(n)) < i ? (o.copy(l),
        o.sub(n).nor(),
        i - r) : 1 / 0
    }
    function da(e, t) {
        var n = new PIXI.Point;
        e.lastX = e.x,
        e.lastY = e.y;
        var i = t ? (1 + .3 * pe[0] / 8) * (1 == ve && be ? 1.5 : 1) : 1;
        if (e.moving)
            e.sx += Math.cos(e.moveDirection) * ct * i * 1 / 60,
            e.sy += Math.sin(e.moveDirection) * ct * i * 1 / 60;
        else {
            var o = Math.sqrt(e.sx * e.sx + e.sy * e.sy)
              , a = Math.atan2(e.sy, e.sx) + Math.PI;
            e.sx += Math.cos(a) * Math.min(o, ut * i * 1 / 60),
            e.sy += Math.sin(a) * Math.min(o, ut * i * 1 / 60)
        }
        var r = Math.sqrt(e.sx * e.sx + e.sy * e.sy)
          , l = dt * i;
        if (l < r) {
            a = Math.atan2(e.sy, e.sx);
            e.sx = Math.cos(a) * l,
            e.sy = Math.sin(a) * l
        }
        if (e.x += 1 * e.sx / 60,
        e.y += 1 * e.sy / 60,
        Vn(e.position),
        e.moving && (1 <= ae || 2 == ue) && 1 != Et[e.playerId])
            for (var s in It) {
                var d = It[s];
                if (1 == d.owner) {
                    var c = sa(d.dot1.position, d.dot2.position, e.position, Ue / Ct * mt, n);
                    if (isFinite(c)) {
                        e.x = e.lastX + n.x * gt * -.25,
                        e.y = e.lastY + n.y * gt * -.25;
                        break
                    }
                }
            }
    }
    function ca(e, t, n) {
        return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x)
    }
    function ua(e, t) {
        if (e.position.dst(t.position) < Oe + Ye && t.shield && 1 == t.shield.state && e.lastPosition) {
            var n = function(e, t, n, i) {
                var o = t.x - e.x
                  , a = t.y - e.y
                  , r = n.x - e.x
                  , l = n.y - e.y
                  , s = o * o + a * a
                  , d = (o * r + a * l) / s
                  , c = d * d - (r * r + l * l - i * i) / s;
                if (c < 0)
                    return null;
                var u = Math.sqrt(c)
                  , m = -d + u
                  , g = -d - u
                  , h = new PIXI.Point(e.x - o * m,e.y - a * m);
                return h.dst(e) <= e.dst(t) ? h : 0 == c ? (console.error("error getCircleSegmentIntersectionPoint", e, t, n, i),
                null) : (h.set(e.x - o * g, e.y - a * g),
                h)
            }(e.lastPosition, e.position, t.position, Oe + Ye);
            if (n) {
                var i = e.position.cpy().sub(e.lastPosition)
                  , o = t.position.cpy().sub(n).nor()
                  , a = i.cpy().sub(o.cpy().scl(2 * i.dot(o)))
                  , r = e.position.cpy();
                e.position.set(n.x, n.y),
                e.position.add(a.nor().scl(n.dst(r)));
                var l = Math.sqrt(e.sx * e.sx + e.sy * e.sy);
                return a.nor().scl(l),
                e.sx = a.x,
                e.sy = a.y,
                !0
            }
        }
        return !1
    }
    ra.prototype.add = function(e, t) {
        this.grid[Math.floor(t.x / this.gridSize)][Math.floor(t.y / this.gridSize)].add(e)
    }
    ,
    ra.prototype.addLine = function(e, t, n) {
        for (var i = la(Math.floor(t.x / this.gridSize), Math.floor(t.y / this.gridSize), Math.floor(n.x / this.gridSize), Math.floor(n.y / this.gridSize)), o = 0; o < i.length; o += 2)
            this.grid[i[o]][i[o + 1]].add(e)
    }
    ,
    ra.prototype.addZone = function(e, t, n, i, o) {
        for (var a = Math.floor(t / this.gridSize), r = Math.floor(i / this.gridSize), l = Math.floor(n / this.gridSize), s = Math.floor(o / this.gridSize), d = a; d <= l; d++)
            for (var c = r; c <= s; c++)
                this.grid[d][c].add(e)
    }
    ,
    ra.prototype.remove = function(e, t) {
        this.grid[Math.floor(t.x / this.gridSize)][Math.floor(t.y / this.gridSize)].delete(e)
    }
    ,
    ra.prototype.removeLine = function(e, t, n) {
        for (var i = la(Math.floor(t.x / this.gridSize), Math.floor(t.y / this.gridSize), Math.floor(n.x / this.gridSize), Math.floor(n.y / this.gridSize)), o = 0; o < i.length; o += 2)
            this.grid[i[o]][i[o + 1]].delete(e)
    }
    ,
    ra.prototype.removeZone = function(e, t, n, i, o) {
        for (var a = Math.floor(t / this.gridSize), r = Math.floor(i / this.gridSize), l = Math.floor(n / this.gridSize), s = Math.floor(o / this.gridSize), d = a; d <= l; d++)
            for (var c = r; c <= s; c++)
                this.grid[d][c].delete(e)
    }
    ,
    ra.prototype.update = function(e, t, n) {
        var i = Math.floor(t.x / this.gridSize)
          , o = Math.floor(t.y / this.gridSize)
          , a = Math.floor(n.x / this.gridSize)
          , r = Math.floor(n.y / this.gridSize);
        i == a && o == r || (this.grid[i][o].delete(e),
        this.grid[a][r].add(e))
    }
    ,
    ra.prototype.getAllInRange = function(e, t, n) {
        for (var i = new Set, o = Math.floor(e.x / this.gridSize), a = Math.floor(e.y / this.gridSize), r = -t; r <= t; r++)
            for (var l = -n; l <= n; l++)
                0 <= o + r && o + r < this.grid.length && 0 <= a + l && a + l < this.grid[0].length && this.grid[o + r][a + l].forEach(function(e) {
                    i.add(e)
                });
        var s = [];
        return i.forEach(function(e) {
            s.push(e)
        }),
        s
    }
    ,
    ra.prototype.getAllInRect = function(e, t, n, i) {
        for (var o = new Set, a = Math.floor(e / this.gridSize), r = Math.floor(n / this.gridSize), l = Math.floor(t / this.gridSize), s = Math.floor(i / this.gridSize), d = a; d <= l; d++)
            for (var c = r; c <= s; c++)
                this.grid[d][c].forEach(function(e) {
                    o.add(e)
                });
        var u = [];
        return o.forEach(function(e) {
            u.push(e)
        }),
        u
    }
    ,
    PIXI.ObservablePoint.prototype.dst = function(e) {
        var t = e.x - this.x
          , n = e.y - this.y;
        return Math.sqrt(t * t + n * n)
    }
    ,
    PIXI.ObservablePoint.prototype.dst2 = function(e) {
        var t = e.x - this.x
          , n = e.y - this.y;
        return t * t + n * n
    }
    ,
    PIXI.ObservablePoint.prototype.dst2XY = function(e, t) {
        var n = e - this.x
          , i = t - this.y;
        return n * n + i * i
    }
    ,
    PIXI.ObservablePoint.prototype.sub = function(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this
    }
    ,
    PIXI.ObservablePoint.prototype.add = function(e) {
        return this.x += e.x,
        this.y += e.y,
        this
    }
    ,
    PIXI.ObservablePoint.prototype.scl = function(e) {
        return this.x *= e,
        this.y *= e,
        this
    }
    ,
    PIXI.ObservablePoint.prototype.len = function(e) {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    ,
    PIXI.ObservablePoint.prototype.len2 = function(e) {
        return this.x * this.x + this.y * this.y
    }
    ,
    PIXI.ObservablePoint.prototype.nor = function() {
        var e = this.len2();
        return 0 == e || 1 == e ? this : this.scl(1 / Math.sqrt(e))
    }
    ,
    PIXI.ObservablePoint.prototype.cpy = function() {
        return new PIXI.Point(this.x,this.y)
    }
    ,
    PIXI.ObservablePoint.prototype.rotate90 = function(e) {
        var t = this.x;
        return 0 <= e ? (this.x = -this.y,
        this.y = t) : (this.x = this.y,
        y = -t),
        this
    }
    ,
    PIXI.ObservablePoint.prototype.dot = function(e) {
        return this.x * e.x + this.y * e.y
    }
    ,
    PIXI.Point.prototype.dst = PIXI.ObservablePoint.prototype.dst,
    PIXI.Point.prototype.dst2 = PIXI.ObservablePoint.prototype.dst2,
    PIXI.Point.prototype.dst2XY = PIXI.ObservablePoint.prototype.dst2XY,
    PIXI.Point.prototype.sub = PIXI.ObservablePoint.prototype.sub,
    PIXI.Point.prototype.add = PIXI.ObservablePoint.prototype.add,
    PIXI.Point.prototype.scl = PIXI.ObservablePoint.prototype.scl,
    PIXI.Point.prototype.len = PIXI.ObservablePoint.prototype.len,
    PIXI.Point.prototype.len2 = PIXI.ObservablePoint.prototype.len2,
    PIXI.Point.prototype.nor = PIXI.ObservablePoint.prototype.nor,
    PIXI.Point.prototype.cpy = PIXI.ObservablePoint.prototype.cpy,
    PIXI.Point.prototype.rotate90 = PIXI.ObservablePoint.prototype.rotate90,
    PIXI.Point.prototype.dot = PIXI.ObservablePoint.prototype.dot;
    var ma = new PIXI.Point;
    function ga(e, t) {
        var n = function(e, t, n, i, o) {
            var a = (n.x - e.x) * (t.x - e.x) + (n.y - e.y) * (t.y - e.y)
              , r = e.dst(t);
            if ((a /= r * r) < 0 || 1 < a)
                return 1 / 0;
            var l = new PIXI.Point(t.x,t.y).sub(e)
              , s = new PIXI.Point(e.x,e.y).add(l.scl(a));
            return (r = s.dst(n)) < i ? (o.copy(n),
            o.sub(s).nor(),
            r) : 1 / 0
        }(t.dot1.position, t.dot2.position, e.position, Ye, ma);
        if (isFinite(n) && e.lastPosition) {
            var i = e.position.cpy().sub(e.lastPosition);
            if (Math.sign(ca(e.position, t.dot1.position, t.dot2.position)) != Math.sign(ca(e.lastPosition, t.dot1.position, t.dot2.position)) && ma.scl(-1),
            i.dot(ma) < 0) {
                var o = t.dot2.position.cpy().sub(t.dot1.position).rotate90(1).nor()
                  , a = i.cpy().sub(o.cpy().scl(2 * i.dot(o)));
                e.position.sub(i.scl(n / Oe)).add(a.cpy().scl(Oe - n / Oe));
                var r = Math.sqrt(e.sx * e.sx + e.sy * e.sy);
                return a.nor().scl(r),
                e.sx = a.x,
                e.sy = a.y,
                !0
            }
        }
        return !1
    }
    function ha(e, t) {
        var n = new PIXI.Point;
        if (e)
            for (var i in wt)
                if (i != kt) {
                    var o = wt[i];
                    if (o.lastX = o.x,
                    o.lastY = o.y,
                    o.x += 1 * o.sx / 60,
                    o.y += 1 * o.sy / 60,
                    Vn(o.position),
                    2 == ue && (0 != o.sx || 0 != o.sy))
                        for (var a in It) {
                            if (1 == (m = It[a]).owner && Et[i] != m.owner) {
                                var r = sa(m.dot1.position, m.dot2.position, o.position, Ue / Ct * mt, n);
                                if (isFinite(r)) {
                                    o.x = o.lastX + n.x * gt * -.25,
                                    o.y = o.lastY + n.y * gt * -.25;
                                    break
                                }
                            }
                        }
                }
        if (t) {
            var l = {};
            for (var s in me)
                me[s].lifetime--,
                me[s].lifetime <= 0 ? l[s] = !0 : (me[s].lastPosition = me[s].position.cpy(),
                me[s].x += 1 * me[s].sx / 60,
                me[s].y += 1 * me[s].sy / 60,
                !me[s].endoflife && me[s].lifetime <= 20 && (me[s].endoflife = !0,
                anime({
                    targets: me[s],
                    alpha: 0,
                    width: 1.25 * me[s].width,
                    height: 1.25 * me[s].height,
                    duration: 1e3 / 3,
                    easing: "easeInCubic"
                })));
            for (var s in l)
                F.removeChild(me[s]),
                delete me[s];
            for (var s in me) {
                if (!((u = me[s]).initialTurn >= te))
                    if (q)
                        for (var d = q.getAllInRange(u.position, 0, 0), c = 0; c < d.length; c++) {
                            if ((r = d[c]).owner != u.owner && ua(u, r))
                                break
                        }
                    else
                        for (var c in vt) {
                            if ((r = vt[c]).owner != u.owner && ua(u, r))
                                break
                        }
            }
            e: for (var s in me) {
                var u = me[s];
                if (Z)
                    for (d = Z.getAllInRange(u.position, 0, 0),
                    c = 0; c < d.length; c++) {
                        if ((m = d[c]).owner != u.owner && ga(u, m))
                            continue e
                    }
                else
                    for (var c in It) {
                        var m;
                        if ((m = It[c]).owner != u.owner && ga(u, m))
                            continue e
                    }
            }
        }
    }
    function pa(e) {
        for (var t = 0; t < e.lines.length; t++) {
            var n = e.lines[t];
            if (n.leftZoneId && bt[n.leftZoneId] || n.rightZoneId && bt[n.rightZoneId])
                return !0
        }
        return !1
    }
    function ya(e) {
        var t = (new Date).getTime();
        if (0 < J || wr) {
            te++;
            for (var n = !1; 0 < ne.length && ne[0].turn <= te; )
                Kn(ne[0].dv),
                n = !0,
                ne.splice(0, 1);
            if (ha(!n && (2 != ue || 1 != pt), !0),
            D)
                n || wt[kt] && !wt[kt].visible && da(wt[kt], !0);
            else {
                for (; 0 < le.length && le[0].turn <= te; )
                    wt[kt] && (wt[kt].shooting = le[0].input.shooting,
                    wt[kt].moving = le[0].input.moving,
                    wt[kt].aimDirection = le[0].input.aimDirection,
                    wt[kt].moveDirection = le[0].input.moveDirection),
                    le.splice(0, 1);
                n || ba || be && 5 == ve || 2 == ue && 1 == pt || da(wt[kt], !0)
            }
        }
        for (var i in wt)
            for (var o = wt[i], a = 0; a < o.rotors.length; a++) {
                var r = o.rotors[a];
                if (r.noRotation ? r.sprite.rotation = -o.rotation : 0 != r.speed && (r.sprite.baseRotation += r.speed * e / 1e3,
                r.fixedRotation ? r.sprite.rotation = r.sprite.baseRotation : r.sprite.rotation = r.sprite.baseRotation - o.rotation),
                1 == r.visibility) {
                    var l = i == kt ? wt[i].moving : 0 != wt[i].sx || 0 != wt[i].sy;
                    r.sprite.visible = l,
                    ft && i != kt && (wt[i].usernameText.visible = l)
                } else if (2 == r.visibility) {
                    l = i == kt ? wt[i].moving : 0 != wt[i].sx || 0 != wt[i].sy;
                    r.sprite.visible = !l
                }
            }
        var s = 3 == ue && wt[kt];
        for (var i in vt) {
            var d = vt[i];
            if (d.shield) {
                var c = d.shield
                  , u = s && d.owner != kt && d.owner != we && d.position.dst2(wt[kt].position) <= 6.25;
                if (0 == c.state && c.lastAppearTurn <= te - 300 && pa(d) && !u) {
                    if (c.width = 2 * Oe * 1.709089011247097,
                    c.height = 2 * Oe * 1.709089011247097,
                    d.dotBlastAnim) {
                        try {
                            d.dotBlastAnim.pause()
                        } catch (e) {}
                        d.dotBlastAnim = null
                    }
                    Ca ? c.alpha = 1 : d.shieldAppearAnim = anime({
                        targets: c,
                        alpha: 1,
                        duration: 250,
                        easing: "linear",
                        complete: function(e) {
                            return function() {
                                0 != e.state || d.dotBlastAnim || (e.alpha = 0),
                                d.shieldAppearAnim = null
                            }
                        }(c)
                    }),
                    c.state = 1,
                    c.lastAppearTurn = d.creationTurn + 300 * Math.floor((te - d.creationTurn) / 300)
                }
                1 == c.state && te >= c.lastAppearTurn + 300 * c.appearPercent && c.appearPercent < 1 ? (Ca ? c.alpha = 0 : anime({
                    targets: c,
                    alpha: 0,
                    duration: 250,
                    easing: "linear"
                }),
                c.state = 0) : 1 == c.state && u && (c.alpha = 0,
                c.state = 0,
                c.lastAppearTurn = 0,
                zi(d))
            }
        }
        0 <= ve && (Ie += 100 / 1800,
        be || uo()),
        Ao ? Mo() : je && (Go || Wo) && (Go && (A.aimDirection -= .05),
        Wo && (A.aimDirection += .05),
        wt[kt].rotation = A.aimDirection,
        Mo());
        var m;
        t = (new Date).getTime();
        if ((!D || xo) && 500 < t - Bo && Mo(),
        Uo && 200 < t - Ro && (Io(),
        Ro = t,
        3 == ue && (Uo = !0)),
        2 == ue && 0 < yt && (4 == pt && 20 < yt && yt - e / 1e3 <= 20 && (document.getElementById("countdown-value").className = "animated pulse huge"),
        3 == pt & .5 < yt && yt - e / 1e3 <= .5 && ((m = document.getElementById("fade-screen")) || ((m = document.createElement("div")).setAttribute("id", "fade-screen"),
        window.document.body.appendChild(m)),
        anime({
            targets: m,
            opacity: [0, 1],
            easing: "linear",
            duration: 500
        })),
        yt -= e / 1e3,
        yi(),
        A.moving && !D && (2 == xt && 4 == pt || 3 == xt && 2 == pt)))
            for (a = 0; a < ui.length; a++) {
                if (4 != pt || ui[a].progress.visible)
                    Math.sqrt(Math.pow(ui[a].x - wt[kt].x, 2) + Math.pow(ui[a].y - wt[kt].y, 2)) < ui[a].radius && oi(2 == xt ? "Stay still to defuse the bomb" : "Stay still to plant the bomb", 100)
            }
    }
    function fa(e, t, n) {
        var i = e * Math.PI * 2 * t
          , o = e * (2 * Math.PI * n + Math.PI / 2);
        return Math.sin(i) * Math.cos(o)
    }
    function va(e) {
        return e * (2 - e)
    }
    var Ia, ba = !1, wa = !1, ka = !1, xa = !1, Ea = !1;
    function Ba(e) {
        var t, n, i, o = wt[we] || wt[kt] || D;
        if (o) {
            var a = {
                x: o.x,
                y: o.y
            };
            if (D && te - H <= 90)
                a = D;
            else if (D && 90 < te - H && te - H < 120) {
                var r = (te - H - 90) / 30;
                a = {
                    x: D.x * (1 - r) + o.x * r,
                    y: D.y * (1 - r) + o.y * r
                }
            }
            if (Ea) {
                var l = {
                    x: a.x,
                    y: a.y
                };
                Ia && (a.x = a.x * e + Ia.x * (1 - e),
                a.y = a.y * e + Ia.y * (1 - e)),
                Ia = l
            }
            var s = a.x - Ze / 2
              , d = a.y - Ve / 2
              , c = 0
              , u = 0;
            if (Ae) {
                var m = (new Date).getTime() - De;
                if (1e3 < m)
                    Ae = !1,
                    B.rotation = 0;
                else {
                    var g = m / 1e3;
                    c = 1 * fa(g, Math.PI, Math.PI / 2) * va(1 - g),
                    u = 1 * fa(g, .33 * Math.PI, .66 * Math.PI) * va(1 - g)
                }
            }
            if (B.position.set((-s + c) * B.scale.x, (-d + u) * B.scale.y),
            M.position.set(Math.floor(s / st) * st, Math.floor(d / st) * st),
            M.x < 0 && (M.x = 0),
            M.y < 0 && (M.y = 0),
            M.x + M.width > _e && (M.x = _e - M.width),
            M.y + M.height > Ne && (M.y = Ne - M.height),
            0 == Qo) {
                var h = 1 / B.scale.x
                  , p = B.position.x % 1 * h
                  , y = B.position.y % 1 * h;
                M.position.x = Math.round(M.position.x / h) * h - p + h / 2 * 0,
                M.position.y = Math.round(M.position.y / h) * h - y + h / 2 * 0
            }
            var f = vo();
            if (He && aa) {
                n = aa,
                i = f,
                (t = He).rotation = Math.atan2(go(i.y) - n.y, go(i.x) - n.x),
                t.x = (n.x + Math.cos(t.rotation) * (.9 * n.size) + go(i.x) - Math.cos(t.rotation) * (.9 * Re.width / 2)) / 2,
                t.y = (n.y + Math.sin(t.rotation) * (.9 * n.size) + go(i.y) - Math.sin(t.rotation) * (.9 * Re.width / 2)) / 2,
                t.width = Math.sqrt(Math.pow(n.x - go(i.x), 2) + Math.pow(n.y - go(i.y), 2)) - .9 * (n.size + Re.width / 2);
                var v = aa.position.dst(f);
                He.visible = !D && !A.shooting && v < qe,
                He.height = .8 * qe < v ? (1 - v / qe) / .2 * gt : gt
            }
            Re.visible = !D && !A.shooting,
            Re.visible && Re.position.set(go(f.x), go(f.y))
        }
        for (var I in wt)
            wt[I].shield.position.set(wt[I].position.x, wt[I].position.y),
            wt[I].usernameText.position.set(wt[I].position.x, wt[I].position.y - 1.3 * Ue),
            wt[I].badge && wt[I].badge.position.set(wt[I].position.x - wt[I].usernameText.width / 2 - wt[I].badge.width / 2 - .5 * Ue, wt[I].usernameText.y);
        wt[kt] && 300 < te && (wt[kt].usernameText.alpha = 360 < te ? 0 : 1 - (te - 300) / 60,
        wt[kt].badge && (wt[kt].badge.alpha = wt[kt].usernameText.alpha)),
        1 != ue && 2 != ue || function() {
            if (yo) {
                for (var e in wt)
                    if (Et[e] == xt) {
                        for (var t = !1, n = 0; n < po.length; n++)
                            if (po[n].playerId == e) {
                                t = !0;
                                break
                            }
                        if (!t) {
                            var i = new PIXI.Sprite(z.marker2);
                            i.width = Ue,
                            i.height = i.width / i.texture.width * i.texture.height,
                            i.anchor.set(.5),
                            i.tint = Ht(e),
                            i.playerId = e,
                            S.addChild(i),
                            po.push(i);
                            var o = new PIXI.Text(ke[e] ? ke[e] : "",{
                                fontFamily: "Arial",
                                fontSize: Math.round(window.innerHeight / 60),
                                fill: $e ? 16777215 : 0,
                                align: "center"
                            });
                            o.anchor.set(.5),
                            o.scale.set(1 / B.scale.x),
                            i.playerText = o,
                            S.addChild(o)
                        }
                    }
                for (n = 0; n < po.length; n++) {
                    var a = po[n]
                      , r = wt[a.playerId];
                    if (r) {
                        var l = B.localTransform.apply(r.position, new PIXI.Point);
                        if (l.x < 0 || l.y < 0 || l.x > window.innerWidth || l.y > window.innerHeight) {
                            var s = (d = l,
                            c = window.innerWidth / 2,
                            u = window.innerHeight / 2,
                            m = (d.y - u) / (d.x - c),
                            h = u / m,
                            -u <= (g = m * c) && g <= u ? d.x > c ? {
                                x: window.innerWidth,
                                y: u + m * c,
                                s: 0
                            } : {
                                x: 0,
                                y: u - m * c,
                                s: 2
                            } : -c <= h && h <= c ? d.y > u ? {
                                x: c + u / m,
                                y: window.innerHeight,
                                s: 3
                            } : {
                                x: c - u / m,
                                y: 0,
                                s: 1
                            } : null);
                            s && (a.visible = !0,
                            a.playerText.visible = !0,
                            B.localTransform.applyInverse(new PIXI.Point(s.x,s.y), a.position),
                            a.rotation = Math.atan2(l.y - window.innerHeight / 2, l.x - window.innerWidth / 2),
                            0 == s.s ? (a.x -= a.width / 2,
                            a.playerText.x = a.x - a.width / 2 - a.playerText.width / 2,
                            a.playerText.y = a.y + Math.sin(a.rotation + Math.PI) * a.width * 1.2) : 1 == s.s ? (a.y += a.height / 2,
                            a.playerText.x = a.x + Math.cos(a.rotation + Math.PI) * a.height * 1.2,
                            a.playerText.y = a.y + a.height + a.playerText.height / 2) : 2 == s.s ? (a.x += a.width / 2,
                            a.playerText.x = a.x + a.width / 2 + a.playerText.width / 2,
                            a.playerText.y = a.y + Math.sin(a.rotation + Math.PI) * a.width * 1.2) : (a.y -= a.height / 2,
                            a.playerText.x = a.x + Math.cos(a.rotation + Math.PI) * a.height * 1.2,
                            a.playerText.y = a.y - a.height - a.playerText.height / 2))
                        } else
                            a.visible = !1,
                            a.playerText.visible = !1
                    } else
                        S.removeChild(po[n].playerText),
                        S.removeChild(po[n]),
                        po.splice(n, 1),
                        n--
                }
                var d, c, u, m, g, h
            }
        }(),
        E.render(B),
        E.render(W, void 0, !1),
        (en || Je) && E.render(b, void 0, !1),
        gi && E.render(gi, void 0, !1),
        0 < J && !D && 1e3 < (new Date).getTime() - Jn ? (ba = !0,
        document.getElementById("internet-issue").style.display = "block") : ba && (document.getElementById("internet-issue").style.display = "none",
        ba = !1),
        (0 == ue || 3 == ue) && de < 3 && 600 <= te && !xo && (wa ? !ka && 1800 <= te ? oi("Level up by enclosing big areas with your towers", 100) : 1 <= R && !xa && oi("Upgrade your copter! " + (en ? "Tap" : "Click") + ' a <img src="img/plus-4-64.png">', 100) : oi(en ? "Build a tower by pressing the BUILD button" : "Build a tower with right-click or SPACE key", 100))
    }
    var Ma = 60
      , Ta = 0
      , Ca = !1;
    function Pa(e, t) {
        document.getElementById("fps").innerHTML = "server: " + demo_server + " fps: " + Math.round(e) + " ping: " + Math.round(n),
        t && (console.log("panic: simulation is too late, dropping updates"),
        MainLoop.resetFrameDelta(),
        te = ee),
        Ma < te && (Ma += ++Ta < 10 ? 600 : 3600,
        dn("Game", "Stats", void 0, "f=" + Math.round(e) + " p=" + Math.round(n))),
        Ca = e < 30
    }
    var Sa, La, Fa, Xa;
    Ce = !1,
    Pe = !1;
    function za() {
        if (s = null,
        "undefined" != typeof Storage)
            try {
                localStorage.removeItem("sessionId")
            } catch (e) {
                console.log(e)
            }
    }
    function gmail_sign_out() {
        gapi.auth2.getAuthInstance().signOut().then(function() {
            console.log("User signed out from google."),
            Ce = !1,
            za()
        })
    }
    function login_via_facebook(e) {
        console.log("Facebook login status", e),
        Ce || ("connected" === e.status ? (Pe = !0,
        La = e.authResponse.accessToken,
        FB.api("/me?fields=picture,email&redirect=false", function(e) {
            e && e.picture && e.picture.data && (Fa = e.picture.data.url),
            e && e.email && (Xa = e.email),
            Ra()
        })) : (Pe && za(),
        Pe = !1))
    }
    function Ha() {
        var t = new XMLHttpRequest;
        t.onreadystatechange = function() {
            if (4 == t.readyState && 200 == t.status)
                if (-1 != t.responseText.indexOf("ERROR"))
                    console.error("loginOnServer returned ERROR"),
                    Ua(),
                    dn("Error", "loginOnServer");
                else {
                    var e = t.responseText.split("\n");
                    s = e[0];
                    e[1];
                    Ga = e[2].split(" ").map(Number);
                    e[3];
                    if (Wa = new Number(e[4]),
                    6 <= e.length && (qa = 0 < new Number(e[5])) && (document.getElementById("curse-promo") && (document.getElementById("curse-promo").style.display = "none"),
                    document.getElementById("banner-on-homepage") && (document.getElementById("banner-on-homepage").style.display = "none")),
                    7 <= e.length && (Za = parseInt(e[6])),
                    document.getElementById("coins-owned").innerHTML = Math.floor(Wa),
                    "undefined" != typeof Storage)
                        try {
                            localStorage.setItem("sessionId", s)
                        } catch (e) {
                            console.log(e)
                        }
                    z && nr(!0),
                    "?my-account" == window.location.search ? vr() : "?tourney-mgr" == window.location.search ? zr() : 0 == window.location.search.indexOf("?tourney-join") && function() {
                        var e = document.getElementById("username").value.substring(0, 14);
                        if (e = window.prompt("Please enter your tournament username. Warning: this can't be changed afterwards: ", e)) {
                            var t = new XMLHttpRequest;
                            t.onreadystatechange = function() {
                                4 == t.readyState && 200 == t.status && (-1 != t.responseText.indexOf("ERROR") ? alert(t.responseText.replace("ERROR\n", "")) : zr())
                            }
                            ,
                            t.onerror = function(e) {
                                li((new Date).toLocaleTimeString() + " - Error joining team", "error")
                            }
                            ;
                            var n = window.location.search.replace("?tourney-join&c=", "");
                            t.open("GET", base_server + "/tourney/useInviteCode?s=" + (s || "") + "&c=" + encodeURIComponent(n) + "&n=" + encodeURIComponent(e), !0),
                            t.send(null)
                        }
                    }()
                }
        }
        ,
        t.onerror = function(e) {
            li((new Date).toLocaleTimeString() + " - Error at login on server", "error"),
            console.error("loginOnServer error"),
            Ua(),
            dn("Error", "loginOnServer")
        }
        ,
        t.open("POST", base_server + "/login?s=" + (s || "") + (Ce ? "&a=1" : "") + (!Ce && Pe ? "&a=2" : "") + "&app=" + (document.getElementById("privacy-policy-checkbox").checked ? 1 : 0) + "&ecs=" + (document.getElementById("emailing-consent-checkbox").checked ? 1 : 0) + "&ect=" + encodeURIComponent(document.getElementById("emailing-consent-text").innerHTML), !0),
        Ce ? t.send(Sa) : Pe ? t.send(La) : t.send(null)
    }
    function Ra() {
        document.getElementById("login-popup").style.display = "none",
        document.getElementById("unconnected-block").style.display = "none",
        document.getElementById("connected-block").style.display = "block",
        document.getElementById("profile-picture").src = Fa,
        document.getElementById("respawn-not-connected").style.display = "none",
        document.getElementById("respawn-not-connected-gm2").style.display = "none",
        Ha()
    }
    function Ua() {
        return Ce && gmail_sign_out(),
        Pe && FB.logout(login_via_facebook),
        document.getElementById("connected-block").style.display = "none",
        document.getElementById("unconnected-block").style.display = "block",
        ir(1),
        or(0),
        !1
    }
    function Oa() {
        document.getElementById("login-popup").style.display = "block",
        void 0 !== window.gapi && void 0 !== window.gapi.auth2 || (document.getElementById("google-login-button").innerHTML = '<div class="blocked">Your browser is blocking social media icons. Disable this feature to login in with Google.</div>')
    }
    function Ya(e) {
        return "rgb(" + [(16711680 & (e >>>= 0)) >>> 16, (65280 & e) >>> 8, 255 & e].join(",") + ")"
    }
    var _a = []
      , Na = {
        skinFacebookLiked: !1,
        skinTwitterTweet: !1,
        skinTwitterFollow: !1,
        skinYoutubeSubscribe: !1,
        skinFacebookShare: !1,
        skinDiscordJoin: !1
    }
      , Ga = []
      , Wa = 0
      , qa = !1
      , Za = 0;
    function Va(e, t, n, i, o, a, r, l) {
        e.className += " locked";
        var s = document.createElement("a");
        n && (s.href = n,
        s.target = "_blank"),
        s.innerHTML = i,
        s.className = "button " + o,
        e.appendChild(s),
        l || s.addEventListener("click", function() {
            if (e.className = "card",
            e.getElementsByTagName("a")[0].style.display = "none",
            a) {
                Na[a] = !0;
                try {
                    localStorage.setItem(a, !0)
                } catch (e) {}
            }
            dn("Click", r, void 0, void 0),
            "undefined" != typeof gtag && gtag("event", r, {
                event_category: "Click"
            })
        })
    }
    function ja(e, t) {
        document.getElementById("skin-popup").style.pointerEvents = "none";
        var n = new XMLHttpRequest;
        n.onreadystatechange = function() {
            if (4 == n.readyState && 200 == n.status) {
                if (document.getElementById("skin-popup").style.pointerEvents = "auto",
                "OK" != n.responseText)
                    return void alert("An error occured during the transation, please try again or contact us");
                Wa -= t,
                Ga.push(e),
                nr(!0),
                document.getElementById("coins-owned").innerHTML = Math.floor(Wa)
            }
        }
        ,
        n.onerror = function(e) {
            document.getElementById("skin-popup").style.pointerEvents = "auto",
            console.log(e),
            alert("An error occured during the transation, please try again or contact us")
        }
        ,
        n.open("POST", base_server + "/buyskin?s=" + s + "&skin=" + e, !0),
        n.send(null)
    }
    var Ka = [{
        name: "Holidays",
        list: [68, 64, 65, 66, 67, 69, 70]
    }, {
        name: "Helicopter",
        list: [1, 3, 4, 5, 6, 21, 26]
    }, {
        name: "Drone",
        list: [2, 7, 14, 18, 19, 12, 27]
    }, {
        name: "Gyrocopter",
        list: [8, 9, 10, 13, 11, 20, 28]
    }, {
        name: "UFO",
        list: [15, 29, 24, 25, 30, 31, 32]
    }, {
        name: "Space",
        list: [17, 40, 41, 42, 43, 44, 45]
    }, {
        name: "Jet",
        list: [33, 34, 35, 36, 37, 38, 39]
    }, {
        name: "Beast",
        list: [16, 46, 47, 23, 48, 22, 49]
    }, {
        name: "Blades",
        list: [50, 51, 52, 53, 54, 55, 56]
    }, {
        name: "Mythical",
        list: [57, 58, 59, 60, 61, 62, 63]
    }, {
        name: "Insects",
        list: [89, 90, 91, 92, 93, 94, 95]
    }, {
        name: "Premium",
        list: [81, 82, 83, 84, 85, 86, 87, 88]
    }, {
        name: "Special",
        list: [71, 79, 80, 96]
    }]
      , Ja = -1;
    function $a(e) {
        for (var t = 0; t < Ka.length; t++)
            if (-1 !== Ka[t].list.indexOf(e))
                return t;
        return -1
    }
    function Qa(e) {
        for (var t, n = $a(e), i = 0; i < Ka[n].list.length; i++)
            if (Ka[n].list[i] != e && (1 != (t = Ka[n].list[i]) && !(2 == t ? Na.skinFacebookLiked : 3 == t ? Na.skinFacebookShare : 4 == t ? Na.skinTwitterFollow : 5 == t ? Na.skinTwitterTweet : 6 == t ? Na.skinYoutubeSubscribe : 7 == t ? Ce || Pe : 8 == t ? Na.skinDiscordJoin : -1 !== Ga.indexOf(t))))
                return !1;
        return !0
    }
    function er(e) {
        document.getElementById("skin-tab-" + Ja).className = "skin-tab",
        document.getElementById("skin-tab-" + e).className = "skin-tab selected",
        Ja = e,
        nr(!0)
    }
    function tr(e, t, n) {
        var i = document.createElement("div");
        return i.setAttribute("id", "skin-tab-" + e),
        i.className = "skin-tab" + (n ? " selected" : ""),
        i.innerHTML = t,
        i.addEventListener("click", function() {
            er(e)
        }),
        i
    }
    function nr(e) {
        e && (document.getElementById("skin-homepage-canvas").innerHTML = "",
        document.getElementById("skin-popup-canvas").innerHTML = "",
        document.getElementById("skin-list").innerHTML = ""),
        Dt[-1] = Pt[0 <= Me ? Me : 0],
        Ee[-1] = Be;
        var t = Yn(-1, 50);
        document.getElementById("skin-homepage-canvas").appendChild(t);
        var n = Yn(-1, 100);
        document.getElementById("skin-popup-canvas").appendChild(n),
        _a = [t, n];
        for (var i = document.getElementById("skin-tabs"); i.firstChild; )
            i.removeChild(i.firstChild);
        i.appendChild(tr(-1, "All", -1 == Ja));
        for (var o = 0; o < Ka.length; o++)
            i.appendChild(tr(o, Ka[o].name, Ja == o));
        var a = [65, 66, 1, 2, 3, 4, 5, 6, 8, 7, 9, 10, 13, 14, 18, 81, 19, 11, 12, 89, 90, 91, 17, 40, 33, 34, 16, 50, 51, 92, 20, 21, 93, 15, 29, 41, 35, 46, 52, 53, 94, 42, 43, 36, 37, 24, 25, 47, 54, 44, 38, 23, 30, 31, 55, 57, 58, 59, 60, 61, 62, 95, 48, 22, 26, 27, 28, 32, 45, 39, 49, 56, 63];
        -1 != Ja && (a = Ka[Ja].list);
        for (o = 0; o < a.length; o++) {
            var r = a[o];
            if (Dn[r]) {
                Dt[-1] = Pt[0 <= Me ? Me : 0],
                Ee[-1] = r;
                var l = Yn(-1, 64)
            } else {
                (l = document.createElement("div")).innerHTML = "?",
                l.style.width = "64px",
                l.style.height = l.style.width,
                l.style.position = "relative",
                l.style.display = "inline-block",
                l.style.lineHeight = l.style.height,
                l.style.fontSize = "3vh"
            }
            var s = document.createElement("div")
              , d = -1 !== [26, 27, 28, 32, 39, 45, 49, 56, 63, 70, 95].indexOf(r);
            s.className = "card" + (d ? " highlight" : "") + (64 <= r && r <= 70 ? " season" : ""),
            s.style.cursor = "pointer",
            s.appendChild(l);
            var c = -1 == Ga.indexOf(r);
            if (!Dn[r] || c && -1 !== [67, 68, 64, 71, 79, 80, 96].indexOf(r))
                Va(s, 0, void 0, 40 <= r && r <= 45 ? "Jan. 2019" : 33 <= r && r <= 39 ? "Feb. 2019" : 46 <= r && r <= 49 ? "March 2019" : 50 <= r && r <= 56 ? "April 2019" : 57 <= r && r <= 63 ? "May 2019" : 71 == r ? "Tourney prize" : 79 == r ? "Tourney prize" : 80 == r ? "Tourney prize" : 96 == r ? "Tourney prize" : "Unavailable", "disabled", void 0, void 0, !0);
            else if (2 != r || Na.skinFacebookLiked)
                if (3 != r || Na.skinFacebookShare)
                    if (4 != r || Na.skinTwitterFollow)
                        if (5 != r || Na.skinTwitterTweet)
                            if (6 != r || Na.skinYoutubeSubscribe)
                                if (8 != r || Na.skinDiscordJoin)
                                    if (7 != r || Ce || Pe) {
                                        if (81 <= r && r <= 88 && c)
                                            Ce || Pe ? qa ? function(e) {
                                                Va(s, 0, void 0, "Premium", "login", void 0, "SkinActivatePremiumSkin", !0),
                                                s.getElementsByTagName("a")[0].addEventListener("click", function() {
                                                    return ja(e, 0),
                                                    !1
                                                })
                                            }(r) : (Va(s, 0, void 0, "Premium", "login", void 0, "SkinShowAccount", !0),
                                            s.getElementsByTagName("a")[0].addEventListener("click", function() {
                                                return vr(),
                                                !1
                                            })) : (Va(s, 0, void 0, "Premium", "login", void 0, "SkinCreateAccount", !0),
                                            s.getElementsByTagName("a")[0].addEventListener("click", function() {
                                                return Oa(),
                                                !1
                                            }));
                                        else if (9 <= r && c) {
                                            var u = 1e6;
                                            if (9 != r && 10 != r || (u = 500),
                                            13 != r && 14 != r || (u = 1e3),
                                            11 != r && 12 != r || (u = 2e3),
                                            17 == r && (u = 5e3),
                                            18 == r && (u = 1e3),
                                            19 == r && (u = 2e3),
                                            68 == r && (u = 5e3),
                                            64 == r && (u = 5e3),
                                            65 == r && (u = 5e3),
                                            66 == r && (u = 5e3),
                                            67 == r && (u = 5e3),
                                            20 == r && (u = 7500),
                                            21 == r && (u = 7500),
                                            15 == r && (u = 1e4),
                                            29 == r && (u = 1e4),
                                            24 == r && (u = 15e3),
                                            25 == r && (u = 15e3),
                                            30 == r && (u = 2e4),
                                            26 == r && (u = 2e4),
                                            27 == r && (u = 2e4),
                                            28 == r && (u = 2e4),
                                            31 == r && (u = 2e4),
                                            32 == r && (u = 3e4),
                                            16 == r && (u = 5e3),
                                            46 == r && (u = 1e4),
                                            47 == r && (u = 15e3),
                                            23 == r && (u = 2e4),
                                            48 == r && (u = 25e3),
                                            22 == r && (u = 25e3),
                                            49 == r && (u = 3e4),
                                            40 == r && (u = 5e3),
                                            41 == r && (u = 1e4),
                                            42 == r && (u = 15e3),
                                            43 == r && (u = 15e3),
                                            44 == r && (u = 2e4),
                                            45 == r && (u = 3e4),
                                            33 == r && (u = 5e3),
                                            34 == r && (u = 5e3),
                                            35 == r && (u = 1e4),
                                            36 == r && (u = 15e3),
                                            37 == r && (u = 15e3),
                                            38 == r && (u = 2e4),
                                            39 == r && (u = 3e4),
                                            50 == r && (u = 5e3),
                                            51 == r && (u = 5e3),
                                            52 == r && (u = 1e4),
                                            53 == r && (u = 1e4),
                                            54 == r && (u = 15e3),
                                            55 == r && (u = 2e4),
                                            56 == r && (u = 25e3),
                                            57 <= r && r <= 62 && (u = 2e4),
                                            63 == r && (u = 2e4),
                                            89 == r && (u = 2e3),
                                            90 == r && (u = 3e3),
                                            91 == r && (u = 4e3),
                                            92 == r && (u = 6e3),
                                            93 == r && (u = 8e3),
                                            94 == r && (u = 1e4),
                                            95 == r && (u = 2e4),
                                            d && !Qa(r)) {
                                                !function(e) {
                                                    Va(s, 0, void 0, "Unavailable", "disabled", void 0, void 0, !0),
                                                    s.getElementsByTagName("a")[0].addEventListener("click", function() {
                                                        alert("You must buy all skins in " + Ka[$a(e)].name + " to unlock this skin")
                                                    })
                                                }(r)
                                            } else
                                                Va(s, 0, void 0, '<img src="img/coin.png"> <span>' + u + "</span>", "buy", void 0, "SkinBuy", !0),
                                                s.getElementsByTagName("a")[0].addEventListener("click", function(e, t) {
                                                    return function() {
                                                        if (!Ce && !Pe)
                                                            return alert("You must login first to buy skins"),
                                                            Oa(),
                                                            !1;
                                                        Wa < t ? alert("You don't have enough coins to buy this skin (you own " + Math.floor(Wa) + " coins)") : confirm("You own " + Math.floor(Wa) + " coins. Buy skin for " + t + " coins?") && ja(e, t)
                                                    }
                                                }(r, u))
                                        }
                                    } else
                                        Va(s, 0, void 0, "Sign up", "login", void 0, "SkinCreateAccount", !0),
                                        s.getElementsByTagName("a")[0].addEventListener("click", function() {
                                            return Oa(),
                                            !1
                                        });
                                else
                                    Va(s, 0, "https://discord.gg/NXuuhv7", "Join discord", "discord", "skinDiscordJoin", "SkinDiscordJoin");
                            else
                                Va(s, 0, "https://www.youtube.com/channel/UCJw-612ZzkWmZuU5QsP_T-g?sub_confirmation=1", "Subscribe", "youtube", "skinYoutubeSubscribe", "SkinYoutubeSubscribe");
                        else {
                            var m = ["I've played this game way too much today", "I'm loving this game!", "don't play this game it will ruin your social life", "this game is going to ruin my social life", "I'm addicted to this game", "This game is so addictive", "Best game ever!"];
                            Va(s, 0, "https://twitter.com/intent/tweet?url=http%3A%2F%2Fdefly.io&hashtags=gaming,indiegames,deflyio&text=" + encodeURIComponent(m[Math.floor(Math.random() * m.length)]), "Tweet", "twitter", "skinTwitterTweet", "SkinTwitterTweet")
                        }
                    else
                        Va(s, 0, "https://twitter.com/DeflyIo", "Follow", "twitter", "skinTwitterFollow", "SkinTwitterFollow");
                else {
                    Va(s, 0, void 0, "Share", "facebook", "skinFacebookShare", "SkinFacebookShare", !0);
                    var g = s;
                    s.getElementsByTagName("a")[0],
                    s.getElementsByTagName("a")[0].addEventListener("click", function() {
                        var e = ["I've played this game way too much today", "I'm loving this game!", "don't play this game it will ruin your social life", "this game is going to ruin my social life", "I'm addicted to this game", "This game is so addictive", "Best game ever!", "this game is the best .io game I've ever played", "This is the best game ever and im addict to the game", "This is a fun game. I'm tweeting to get a free version of a helicopter to play.", "Really fun", "BEST GAME EVER", "my favorite .io game", "Such a great io game!"];
                        return dn("Click", "SkinFacebookShare", void 0, void 0),
                        "undefined" != typeof FB && FB.ui({
                            method: "share",
                            href: "https://defly.io",
                            quote: e[Math.floor(Math.random() * e.length)]
                        }, function(e) {
                            if (e && e.error_code)
                                dn("Click", "SkinFacebookShare", "Cancelled", e.error_code);
                            else {
                                g.className = "card",
                                g.getElementsByTagName("a")[0].style.display = "none",
                                Na.skinFacebookShare = !0;
                                try {
                                    localStorage.setItem("skinFacebookShare", !0)
                                } catch (e) {}
                                dn("Click", "SkinFacebookShare", "Validated", void 0),
                                "undefined" != typeof gtag && gtag("event", "SkinFacebookShare", {
                                    event_category: "Click"
                                })
                            }
                        }),
                        !1
                    })
                }
            else
                Va(s, 0, "https://www.facebook.com/deflyiogame/", "Like", "facebook", "skinFacebookLiked", "SkinFacebookLiked");
            document.getElementById("skin-list").appendChild(s),
            _a.push(l),
            s.addEventListener("click", function(e) {
                return function() {
                    (2 != e || Na.skinFacebookLiked) && (3 != e || Na.skinFacebookShare) && (4 != e || Na.skinTwitterFollow) && (5 != e || Na.skinTwitterTweet) && (6 != e || Na.skinYoutubeSubscribe) && (8 != e || Na.skinDiscordJoin) && (7 != e || Ce || Pe) && (9 <= e && !Ce && !Pe || 9 <= e && -1 == Ga.indexOf(e) || ir(e))
                }
            }(r))
        }
        if (!e)
            for (o = 0; o < Pt.length; o++) {
                var h = document.createElement("div");
                h.style.backgroundColor = Ya(Pt[o]),
                h.style.width = "32px",
                h.style.height = "32px",
                h.style.display = "inline-block",
                h.style.cursor = "pointer",
                h.style.marginLeft = "2px",
                h.addEventListener("click", function(e) {
                    return function() {
                        or(e)
                    }
                }(o)),
                document.getElementById("color-list").appendChild(h)
            }
    }
    function ir(e, t) {
        Be = e;
        for (var n = 0; n < 2; n++) {
            Ee[-1] = e;
            var i = _a[n]
              , o = Yn(-1, i.offsetWidth);
            i.parentNode.replaceChild(o, i),
            _a[n] = o
        }
        if (!t && "undefined" != typeof Storage)
            try {
                localStorage.setItem("playerSkin", Be)
            } catch (e) {
                console.log(e)
            }
        dn("Click", "ChangeSkinModel", e, void 0),
        "undefined" != typeof gtag && gtag("event", "ChangeSkinModel", {
            event_category: "Click",
            value: e
        })
    }
    function or(e, t) {
        Me = e;
        for (var n = 0; n < _a.length; n++)
            if (_a[n].skinId) {
                Dt[-1] = Pt[0 <= Me ? Me : 0],
                Ee[-1] = _a[n].skinId;
                var i = _a[n]
                  , o = Yn(-1, i.offsetWidth);
                i.parentNode.replaceChild(o, i),
                _a[n] = o
            }
        if (!t && "undefined" != typeof Storage)
            try {
                localStorage.setItem("playerSkinColor", Me)
            } catch (e) {
                console.log(e)
            }
        dn("Click", "ChangeSkinColor", e, void 0),
        "undefined" != typeof gtag && gtag("event", "ChangeSkinColor", {
            event_category: "Click",
            value: e
        })
    }
    var ar, rr, lr = 999, sr = {};
    function dr(t) {
        var n = new FileReader;
        n.onload = function() {
            var e = "data:image/png;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(n.result)));
            sr[t.name] = e,
            z[t.name] = PIXI.Texture.fromImage(e),
            localStorage.setItem("skinEditorImages", JSON.stringify(sr)),
            mr()
        }
        ,
        n.readAsArrayBuffer(t)
    }
    function cr() {
        if (delete wt[-2],
        Ee[-2] = lr,
        _n(-2),
        rr.stage.removeChildren(),
        rr.stage.addChild(wt[-2]),
        document.getElementById("show-collision-circle").checked) {
            var e = new PIXI.Graphics;
            e.lineStyle(1, 16711680),
            e.drawCircle(0, 0, Ue / Ct * mt),
            wt[-2].addChild(e)
        }
        rr.stage.setTransform(rr.width / 2 / Q, rr.height / 2 / Q, 1 / Dn[lr].size, 1 / Dn[lr].size, 0, 0, 0, 0, 0),
        localStorage.setItem("skinEditorSkinModel", JSON.stringify(Dn[lr]))
    }
    function ur(e, t) {
        var n = '<option name=""></option>';
        for (var i in sr)
            n += "<option " + (e.img == i ? "selected " : "") + 'name="' + i + '">' + i + "</option>";
        var o = document.createElement("div")
          , a = document.createElement("span");
        a.innerHTML = "Rotor: ";
        var r = document.createElement("select");
        r.innerHTML = n;
        var l = document.createElement("span");
        l.innerHTML = " X: ";
        var s = document.createElement("input");
        s.setAttribute("type", "number"),
        s.setAttribute("step", "0.1"),
        s.setAttribute("value", e.x);
        var d = document.createElement("span");
        d.innerHTML = " Y: ";
        var c = document.createElement("input");
        c.setAttribute("type", "number"),
        c.setAttribute("step", "0.1"),
        c.setAttribute("value", e.y);
        var u = document.createElement("span");
        u.innerHTML = " RPS: ";
        var m = document.createElement("input");
        m.setAttribute("type", "number"),
        m.setAttribute("step", "0.1"),
        m.setAttribute("value", e.speed / Math.PI / 2);
        var g = document.createElement("span");
        g.innerHTML = " Size: ";
        var h = document.createElement("input");
        h.setAttribute("type", "number"),
        h.setAttribute("step", "0.1"),
        h.setAttribute("value", e.size);
        var p = document.createElement("span");
        p.innerHTML = " Layer: ";
        var y = document.createElement("input");
        y.setAttribute("type", "number"),
        y.setAttribute("value", e.layer);
        var f = document.createElement("span");
        f.innerHTML = " Visibility: ";
        var v = document.createElement("input");
        v.setAttribute("type", "number"),
        v.setAttribute("title", "0=always\n1=only when moving\n2=only when standing still"),
        v.setAttribute("value", e.visibility);
        var I = document.createElement("span");
        I.innerHTML = " FixedRot";
        var b = document.createElement("input");
        b.setAttribute("type", "checkbox"),
        b.setAttribute("title", "on = rotation is not cumulative with copter hull"),
        e.fixedRotation && b.setAttribute("checked", "");
        var w = document.createElement("span");
        w.innerHTML = " NoRot";
        var k = document.createElement("input");
        k.setAttribute("type", "checkbox"),
        k.setAttribute("title", "on = the rotor does not rotate and has fixed direction independent from copter direction"),
        e.noRotation && k.setAttribute("checked", "");
        var x = document.createElement("span");
        x.innerHTML = " Tinted";
        var E = document.createElement("input");
        E.setAttribute("type", "checkbox"),
        E.setAttribute("title", "on = rotor is tinted with player color"),
        e.tinted && E.setAttribute("checked", "");
        var B = document.createElement("button");
        function M() {
            e.img = r.value,
            e.x = parseFloat(s.value),
            e.y = parseFloat(c.value),
            e.speed = parseFloat(m.value) * Math.PI * 2,
            e.size = parseFloat(h.value),
            e.layer = Math.max(0, y.value),
            e.visibility = v.value,
            e.fixedRotation = b.checked,
            e.noRotation = k.checked,
            e.tinted = E.checked,
            cr()
        }
        return B.className = "button",
        B.innerHTML = "remove",
        o.appendChild(a),
        o.appendChild(r),
        o.appendChild(l),
        o.appendChild(s),
        o.appendChild(d),
        o.appendChild(c),
        o.appendChild(u),
        o.appendChild(m),
        o.appendChild(g),
        o.appendChild(h),
        o.appendChild(p),
        o.appendChild(y),
        o.appendChild(f),
        o.appendChild(v),
        o.appendChild(I),
        o.appendChild(b),
        o.appendChild(w),
        o.appendChild(k),
        o.appendChild(x),
        o.appendChild(E),
        o.appendChild(B),
        r.addEventListener("change", M),
        s.addEventListener("input", M),
        c.addEventListener("input", M),
        m.addEventListener("input", M),
        h.addEventListener("input", M),
        y.addEventListener("input", M),
        v.addEventListener("input", M),
        b.addEventListener("input", M),
        k.addEventListener("input", M),
        E.addEventListener("input", M),
        B.addEventListener("click", function() {
            Dn[lr].rotors.splice(t, 1),
            cr(),
            mr()
        }),
        o
    }
    function mr() {
        var e = '<option name=""></option>';
        for (var t in sr)
            e += '<option name="' + t + '">' + t + "</option>";
        document.getElementById("skin-editor-base").innerHTML = e,
        document.getElementById("skin-editor-notint").innerHTML = e,
        document.getElementById("skin-editor-size").value = Dn[lr].size;
        for (var n = document.getElementById("skin-editor-rotors"); n.firstChild; )
            n.removeChild(n.firstChild);
        for (var t in Dn[lr].rotors) {
            var i = ur(Dn[lr].rotors[t], t);
            n.appendChild(i)
        }
        var o = document.createElement("button");
        o.innerHTML = "Add rotor",
        o.className = "button",
        n.appendChild(o),
        o.addEventListener("click", function() {
            Dn[lr].rotors.push({
                img: "rotor1",
                x: 0,
                y: 0,
                speed: 4 * Math.PI,
                size: 1
            }),
            mr()
        }),
        document.getElementById("skin-editor-base").value = Dn[lr].base,
        document.getElementById("skin-editor-notint").value = Dn[lr].notint
    }
    function gr() {
        ft = !1;
        Ue = 64;
        var o = PIXI.autoDetectRenderer(128, 128, {
            antialias: !0,
            transparent: !1,
            resolution: Q * Yt
        });
        o.plugins.interaction && (o.plugins.interaction.destroy(),
        o.plugins.interaction = null),
        o.backgroundColor = 15923199,
        rr = o;
        var a = new PIXI.Container;
        (o.stage = a).setTransform(o.width / 2 / Q, o.height / 2 / Q, 1, 1, 0, 0, 0, 0, 0),
        document.getElementById("skin-editor-canvas").appendChild(o.view),
        Dn[lr] = {
            base: "",
            notint: "",
            rotors: [],
            size: 1
        };
        try {
            if (localStorage.getItem("skinEditorSkinModel") && (Dn[lr] = JSON.parse(localStorage.getItem("skinEditorSkinModel"))),
            localStorage.getItem("skinEditorImages"))
                for (var e in sr = JSON.parse(localStorage.getItem("skinEditorImages")))
                    z[e] = PIXI.Texture.fromImage(sr[e])
        } catch (e) {}
        mr(),
        Ee[-2] = lr,
        Dt[-2] = Pt[0 <= Me ? Me : 0],
        setTimeout(cr, 0),
        rr.stance = 1,
        ar = setInterval(function() {
            for (var e = wt[-2], t = 0; t < e.rotors.length; t++) {
                var n = e.rotors[t];
                n.sprite.baseRotation += n.speed * (1e3 / 60) / 1e3,
                n.sprite.rotation = n.sprite.baseRotation - e.rotation;
                var i = 0 != rr.stance;
                1 == n.visibility ? n.sprite.visible = i : 2 == n.visibility && (n.sprite.visible = !i)
            }
            o.render(a)
        }, 1e3 / 60),
        defly.closeSkinEditor = hr,
        defly.saveSkin = pr,
        defly.clearSkin = function() {
            localStorage.removeItem("skinEditorImages"),
            localStorage.removeItem("skinEditorSkinModel"),
            Dn[lr] = {
                base: "",
                notint: "",
                rotors: [],
                size: 1
            },
            sr = {},
            cr(),
            mr()
        }
        ,
        document.getElementById("skin-upload-input").addEventListener("change", yr),
        document.getElementById("skin-editor-input").addEventListener("change", function() {
            !function(e) {
                for (var t = 0; t < e.files.length; t++)
                    dr(e.files[t])
            }(document.getElementById("skin-editor-input"))
        }),
        document.getElementById("skin-editor-size").addEventListener("input", function() {
            Dn[lr].size = parseFloat(document.getElementById("skin-editor-size").value),
            cr()
        }),
        document.getElementById("skin-editor-base").addEventListener("change", function() {
            Dn[lr].base = document.getElementById("skin-editor-base").value,
            cr()
        }),
        document.getElementById("skin-editor-notint").addEventListener("change", function() {
            Dn[lr].notint = document.getElementById("skin-editor-notint").value,
            cr()
        }),
        document.getElementById("show-collision-circle").addEventListener("change", cr),
        document.getElementById("stance-idle").addEventListener("click", function() {
            rr.stance = 0,
            document.getElementById("stance-idle").classList.remove("back"),
            document.getElementById("stance-moving").classList.add("back")
        }),
        document.getElementById("stance-moving").addEventListener("click", function() {
            rr.stance = 1,
            document.getElementById("stance-idle").classList.add("back"),
            document.getElementById("stance-moving").classList.remove("back")
        });
        var t = "";
        for (var e in z)
            t += '<option name="' + e + '">' + e + "</option>";
        document.getElementById("skin-editor-game-sprites").innerHTML = t,
        document.getElementById("skin-editor-input2").addEventListener("change", function() {
            var e = document.getElementById("skin-editor-input2").files[0]
              , n = new FileReader;
            n.onload = function() {
                var e = "data:image/png;base64," + btoa(String.fromCharCode.apply(null, new Uint8Array(n.result)))
                  , t = document.createElement("img");
                t.src = e,
                z[document.getElementById("skin-editor-game-sprites").value] = PIXI.Texture.fromImage(t.src),
                document.getElementById("skin-editor-input2").value = ""
            }
            ,
            n.readAsArrayBuffer(e)
        }),
        document.getElementById("skin-editor").style.display = "block"
    }
    function hr() {
        clearInterval(ar),
        document.getElementById("skin-editor").style.display = "none",
        ir(lr, !0)
    }
    function pr() {
        var e = {};
        for (var t in e[Dn[lr].base] = sr[Dn[lr].base],
        e[Dn[lr].notint] = sr[Dn[lr].notint],
        Dn[lr].rotors)
            e[Dn[lr].rotors[t].img] = sr[Dn[lr].rotors[t].img];
        var n = new Blob([JSON.stringify({
            spec: Dn[lr],
            images: e
        })],{
            type: "text/plain;charset=utf-8"
        });
        saveAs(n, (new Date).toISOString() + " defly.io skin.txt")
    }
    function yr() {
        var e = document.getElementById("skin-upload-input").files[0]
          , i = new FileReader;
        i.onload = function() {
            var e = JSON.parse(i.result);
            for (var t in console.log(e),
            Dn[lr] = e.spec,
            e.images) {
                var n = document.createElement("img");
                n.src = e.images[t],
                sr[t] = e.images[t],
                z[t] = PIXI.Texture.fromImage(n.src)
            }
            localStorage.setItem("skinEditorImages", JSON.stringify(sr)),
            cr(),
            mr(),
            document.getElementById("skin-upload-input").value = ""
        }
        ,
        i.readAsText(e)
    }
    function fr(e) {
        if (z) {
            var t = document.getElementById("ma-badge-canvas")
              , n = t.getContext("2d")
              , i = t.width
              , o = t.height;
            if (n.clearRect(0, 0, i, o),
            0 != e) {
                var a = z["badge-" + e];
                a && (a.orig.width > a.orig.height ? n.drawImage(a.baseTexture.source, a.orig.x, a.orig.y, a.orig.width, a.orig.height, 0, 0, i, i / a.orig.width * a.orig.height) : n.drawImage(a.baseTexture.source, a.orig.x, a.orig.y, a.orig.width, a.orig.height, 0, 0, o / a.orig.height * a.orig.width, o))
            }
        } else
            setTimeout(function() {
                fr(e)
            }, 500)
    }
    function vr() {
        if (Ce || Pe) {
            var n = new XMLHttpRequest;
            n.onreadystatechange = function() {
                if (4 == n.readyState && 200 == n.status) {
                    var e = n.responseText.split("\n");
                    qa = 0 < parseInt(e[0]),
                    Wa = e[1],
                    document.getElementById("ma-coins").innerHTML = Math.floor(Wa),
                    document.getElementById("account-premium").style.display = qa ? "block" : "none",
                    document.getElementById("account-standard").style.display = qa ? "none" : "block",
                    document.getElementById("reserved-nickname").value = e[2],
                    document.getElementById("ma-player-name").innerHTML = document.getElementById("username").value;
                    var t = parseInt(e[3]);
                    fr(document.getElementById("account-badge").value = t),
                    document.getElementById("my-account-button") && (document.getElementById("my-account-button").enabled = !0,
                    document.getElementById("my-account-button").innerHTML = Ot("My Account")),
                    document.getElementById("my-account").style.display = "block"
                }
            }
            ,
            n.onerror = function(e) {
                li((new Date).toLocaleTimeString() + " - Error getting account info", "error"),
                console.log(e)
            }
            ,
            n.open("POST", base_server + "/account/myInfo?s=" + s, !0),
            n.send(null),
            document.getElementById("my-account-button") && (document.getElementById("my-account-button").enabled = !1,
            document.getElementById("my-account-button").innerHTML = Ot("Loading...")),
            dn("Click", "ShowMyAccount")
        } else
            Oa()
    }
    function Ir(e, t, n, i) {
        switch (e) {
        case 0:
        case 3:
            return Math.floor(t / 100);
        case 1:
            return Math.floor(t / 200);
        case 2:
            return Math.floor(n / 20 + 5 * i)
        }
    }
    var br = ["FFA", "Team", "Defuse", "E-FFA"];
    var wr = !1
      , kr = 1
      , xr = []
      , Er = [];
    function Br(e, t, n) {
        xr[e] || (xr[e] = new PIXI.Sprite(z["capture-blue-" + (0 == e ? "A" : "B")]),
        xr[e].width = 12,
        xr[e].height = 12,
        xr[e].anchor.set(.5),
        C.addChild(xr[e])),
        xr[e].position.set(t, n)
    }
    function Mr(e, t, n) {
        Er[e] || (Er[e] = new PIXI.Graphics,
        Er[e].beginFill(Ft[e], .5),
        Er[e].drawRect(0, 0, 12, 12),
        C.addChild(Er[e])),
        Er[e].position.set(t, n)
    }
    function Tr(e, t, n) {
        var i = e.dst2(t);
        if (0 == i)
            return e;
        var o = ((n.x - e.x) * (t.x - e.x) + (n.y - e.y) * (t.y - e.y)) / i;
        return o < 0 ? e : 1 < o ? t : new PIXI.Point(e.x + o * (t.x - e.x),e.y + o * (t.y - e.y))
    }
    function ca(e, t, n) {
        return (e.x - t.x) * (n.y - t.y) - (e.y - t.y) * (n.x - t.x)
    }
    function Cr(e, t) {
        return e.dot1 == t ? e.rotation : 0 < e.rotation ? e.rotation - Math.PI : e.rotation + Math.PI
    }
    function Pr(i) {
        var e = [];
        for (var t in It)
            It[t].dot1 != i && It[t].dot2 != i || e.push(It[t]);
        return e.sort(function(e, t) {
            var n = oa(Cr(e, i));
            return oa(Cr(t, i)) - n
        }),
        e
    }
    function Sr(e, t) {
        for (var n = Pr(e), i = 0; i < n.length; i++)
            if (n[i].dot1 == t || n[i].dot2 == t)
                return !0;
        return !1
    }
    function Lr(e, t, n) {
        void 0 === n && (n = []);
        for (var i = [], o = 0; o < e.length; o++) {
            var a = e[o]
              , r = e[(o + 1) % e.length];
            if (void 0 !== t)
                var l = t[o];
            else
                for (var s in It)
                    if (It[s].dot1 == a && It[s].dot2 == r || It[s].dot1 == r && It[s].dot2 == a) {
                        l = It[s];
                        break
                    }
            i[o] = Cr(l, a),
            n[o] = l.dot1 == a
        }
        var d = 0
          , c = 0;
        for (o = 0; o < i.length; o++)
            d += oa(oa(i[o]) - oa(i[(o + 1) % i.length] + Math.PI)),
            c += oa(oa(i[(o + 1) % i.length]) - oa(i[o] + Math.PI));
        return c < d
    }
    function Fr(e) {
        for (var t = [], n = null, i = 0; i < e.length; i++) {
            var o = e[i];
            if (n)
                for (var a in It)
                    if (It[a].dot1 == o && It[a].dot2 == n || It[a].dot2 == o && It[a].dot1 == n) {
                        t.push(It[a]);
                        break
                    }
            n = o
        }
        for (var a in It)
            if (It[a].dot1 == e[0] && It[a].dot2 == n || It[a].dot2 == e[0] && It[a].dot1 == n) {
                t.push(It[a]);
                break
            }
        var r = []
          , l = Lr(e, t, r)
          , s = new DataView(new ArrayBuffer(15 + 5 * e.length));
        s.setInt32(1, kr++),
        s.setInt32(5, 1),
        s.setFloat32(9, 0),
        s.setInt16(13, e.length);
        for (i = 0; i < t.length; i++) {
            var d = t[i];
            s.setInt32(15 + 5 * i, d.lineId),
            s.setUint8(15 + 5 * i + 4, l && r[i] || !l && !r[i] ? 0 : 1)
        }
        Mi(s, !1)
    }
    function join_via_link() {
        try {
            if (best_ping && (document.getElementById("server-block").style.display = "block"),
            document.getElementById("preferred-server-block").style.display = "none",
            i = null,
            0 < window.location.hash.length) {
                var e = window.location.hash.replace(/^#/, "").split("-");
                2 <= e.length && (ue = parseInt(e.shift()),
                xn(),
                i = e.join("-"),
                document.getElementById("server-block").style.display = "none",
                document.getElementById("preferred-server-block").style.display = "block",
                document.getElementById("preferred-server").innerHTML = i)
            }
        } catch (e) {
            console.error(e)
        }
    }
    function zr() {
        document.getElementById("homepage-loading").style.display = "block",
        document.getElementById("homepage-loaded").style.display = "none";
        var l = new XMLHttpRequest;
        l.onreadystatechange = function() {
            if (4 == l.readyState && 200 == l.status) {
                var e = l.responseText.split("\n")
                  , n = document.createElement("div");
                n.className = "tourney-mgr",
                (i = document.createElement("div")).className = "title",
                i.innerHTML = "My Team",
                n.appendChild(i);
                for (var i, t = !1, o = 0; o < e.length - 1; o += 3)
                    e[o] == Za && 1 == e[o + 2] && (t = !0);
                for (o = 0; o < e.length - 1; o += 3) {
                    var a = document.createElement("div");
                    if (a.className = "member",
                    a.innerHTML = (1 == e[o + 2] ? "CAPTAIN - " : "") + e[o + 1],
                    t && 1 != e[o + 2]) {
                        var r = document.createElement("span");
                        r.className = "button remove",
                        r.innerHTML = "Remove",
                        a.appendChild(r),
                        r.addEventListener("click", function(t) {
                            return function() {
                                if (window.confirm("Really remove this player from the team?")) {
                                    var e = new XMLHttpRequest;
                                    e.onreadystatechange = function() {
                                        4 == e.readyState && 200 == e.status && zr()
                                    }
                                    ,
                                    e.onerror = function(e) {
                                        li((new Date).toLocaleTimeString() + " - Error removing member", "error")
                                    }
                                    ,
                                    e.open("GET", base_server + "/tourney/remove?s=" + (s || "") + "&u=" + t, !0),
                                    e.send(null)
                                }
                            }
                        }(e[o]))
                    }
                    n.appendChild(a)
                }
                if (t)
                    (i = document.createElement("div")).className = "bottom button",
                    i.innerHTML = "Generate invite link",
                    n.appendChild(i),
                    i.addEventListener("click", function() {
                        var t = new XMLHttpRequest;
                        t.onreadystatechange = function() {
                            if (4 == t.readyState && 200 == t.status) {
                                n.removeChild(i);
                                var e = document.createElement("div");
                                e.className = "bottom link",
                                e.innerHTML = "http://" + document.location.host + "?tourney-join&c=" + t.responseText,
                                n.appendChild(e)
                            }
                        }
                        ,
                        t.onerror = function(e) {
                            li((new Date).toLocaleTimeString() + " - Error changing invite code", "error")
                        }
                        ,
                        t.open("GET", base_server + "/tourney/changeInviteCode?s=" + (s || ""), !0),
                        t.send(null)
                    });
                document.body.appendChild(n)
            }
        }
        ,
        l.onerror = function(e) {
            li((new Date).toLocaleTimeString() + " - Error fetching team members", "error")
        }
        ,
        l.open("GET", base_server + "/tourney/members?s=" + (s || ""), !0),
        l.send(null)
    }
    function Ar() {
        var e = "none";
        E && E.view && (document.body.removeChild(E.view),
        e = E.view.style.display);
        PIXI.utils.isWebGLSupported(),
        (E = PIXI.autoDetectRenderer(256, 256, {
            antialias: !0,
            transparent: !1,
            resolution: Q * Yt
        })).plugins.interaction && (E.plugins.interaction.destroy(),
        E.plugins.interaction = null),
        E.view.addEventListener("touchstart", Ho, !0),
        E.view.addEventListener("touchmove", Ho, !0),
        E.view.addEventListener("touchend", Ho, !0),
        E.view.addEventListener("touchcancel", Ho, !0),
        E.view.addEventListener("mousedown", Oo, !0),
        E.view.tabindex = 1,
        E.backgroundColor = $e ? 0 : 15923199,
        E.view.style.position = "fixed",
        E.view.style.top = 0,
        E.view.style.left = 0,
        E.autoResize = !0,
        E.view.style.display = e,
        document.body.appendChild(E.view),
        ea(),
        E.view.addEventListener("webglcontextlost", function(e) {
            console.error("WebGL context lost", e),
            e.preventDefault(),
            MainLoop.stop(),
            setTimeout(function() {
                E.view.getContext("webgl").isContextLost() && (console.error("Context was not restored after 1 second, recreating"),
                Ar(),
                MainLoop.start())
            }, 1e3)
        }, !1),
        E.view.addEventListener("webglcontextrestored", function() {
            console.error("WebGL context restored, recreating"),
            Ar(),
            MainLoop.start()
        }, !1)
    }
    function Dr() {
        if ("https:" === window.location.protocol.toLowerCase())
            base_server = base_server.replace("http", "https");
        else {
            var e = document.getElementById("fb-login-button")
              , t = document.createElement("div");
            t.innerHTML = '<div>SSL is required <a class="button" style="color:white" href="' + window.location.href.replace("http", "https") + '">Reload with SSL</a></div>',
            e.parentNode.replaceChild(t, e)
        }
        "undefined" != typeof Raven && Raven.config && Raven.config(window.location.protocol + "//cac34828573e48f99770f28f2b29bd17@sentry.defly.io/7", {
            whitelistUrls: ["scripts.js", "game.js"]
        }).install();
        try {
            var n = localStorage.getItem("quality");
            n && save_game_quality(n)
        } catch (e) {
            console.error(e)
        }
        try {
            "undefined" != typeof Storage && (localStorage.getItem("username") && (document.getElementById("username").value = localStorage.getItem("username")),
            localStorage.getItem("sessionId") && (s = localStorage.getItem("sessionId")),
            localStorage.getItem("trackPadFriendlyMode") && (je = "1" == localStorage.getItem("trackPadFriendlyMode"),
            document.getElementById("controls-tpfm1").checked = !je,
            document.getElementById("controls-tpfm2").checked = je),
            localStorage.getItem("moveWithMouse") && (Ke = "1" == localStorage.getItem("moveWithMouse"),
            document.getElementById("controls-mwm").checked = Ke,
            Je = Ke),
            localStorage.getItem("colorBlindMode") && (nt = "1" == localStorage.getItem("colorBlindMode"),
            document.getElementById("controls-colorblind").checked = nt),
            localStorage.getItem("darkTheme") && ($e = "1" == localStorage.getItem("darkTheme"),
            document.getElementById("theme-radio1").checked = !$e,
            document.getElementById("theme-radio2").checked = $e),
            localStorage.getItem("gameMode") && (ue = parseInt(localStorage.getItem("gameMode")),
            xn()),
            localStorage.getItem("initialGameMode") ? lt = parseInt(localStorage.getItem("initialGameMode")) : localStorage.getItem("gameMode") || (lt = Math.random() < .5 ? 0 : 3,
            localStorage.setItem("initialGameMode", lt),
            localStorage.setItem("gameMode", lt),
            ue = lt,
            xn()))
        } catch (e) {
            console.error(e)
        }
        PIXI.ticker.shared.stop(),
        Ar(),
        window.addEventListener("resize", ea, !0),
        window.addEventListener("mousemove", Do, !0),
        window.addEventListener("mouseup", Yo, !0),
        window.addEventListener("wheel", $o, !0),
        window.addEventListener("keydown", Vo, !0),
        window.addEventListener("keyup", Ko, !0),
        window.oncontextmenu = function() {
            return !1
        }
        ,
        window.addEventListener("blur", function() {
            0 != J && (_o = [!1, !1, !1, !1],
            qo())
        }, !0),
        B = new PIXI.Container,
        M = new PIXI.Container,
        B.addChild(M),
        T = new PIXI.Container,
        B.addChild(T),
        O = new PIXI.Container,
        B.addChild(O),
        P = new PIXI.Container,
        B.addChild(P),
        C = new PIXI.Container,
        B.addChild(C),
        L = new PIXI.Container,
        B.addChild(L),
        S = new PIXI.Container,
        B.addChild(S),
        F = new PIXI.Container,
        B.addChild(F),
        X = new PIXI.Container,
        B.addChild(X),
        b = new PIXI.Container,
        W = new PIXI.Container,
        MainLoop.setBegin(na).setUpdate(ya).setDraw(Ba).setEnd(Pa),
        PIXI.loader.add("img/spritesheet8.json").add("img/spritesheet82.json").add("img/line1.png").add("gridpixel", "img/gridpixel.png").load(function(e, t) {
            for (var n in "?playEpicTourney" != window.location.search && "?streamEpicTourney" != window.location.search || (logged_in = !0,
            ue = 1,
            document.getElementById("gamemode-0").style.display = "none",
            document.getElementById("gamemode-2").style.display = "none",
            document.getElementById("gamemode-3").style.display = "none",
            document.getElementById("gamemode-1").classList.add("selected")),
            "?streamTourney" != window.location.search && "?streamEpicTourney" != window.location.search || (logged_in = ot = !0),
            yn(),
            t)
                if (t[n].error) {
                    console.error("error loading asset", t[n].error),
                    alert(Ot("Error loading game images, please reload the page. Clear your browser cache if this happens repeatedly.")),
                    dn("Error", "LoadingAssets", t[n].error);
                    break
                }
            for (var i in z = PIXI.loader.resources["img/spritesheet8.json"].textures,
            PIXI.loader.resources["img/spritesheet82.json"].textures)
                z[i] = PIXI.loader.resources["img/spritesheet82.json"].textures[i];
            var o;
            z.gridpixel = PIXI.loader.resources.gridpixel.texture,
            z.gridpixel.baseTexture.mipmap = !1,
            en && document.getElementById("youtube-live") && (document.getElementById("youtube-live").style.display = "none"),
            document.getElementById("homepage-loading").style.display = "none",
            document.getElementById("homepage-loaded").style.display = "block",
            join_via_link(),
            nr(),
            (c = new PIXI.Sprite(z.shoot)).visible = !1,
            c.tint = 0,
            c.alpha = .1,
            c.anchor.set(.5),
            (u = new PIXI.Sprite(z.shoot)).visible = !1,
            u.tint = 0,
            u.alpha = .3,
            u.anchor.set(.5),
            b.addChild(c),
            b.addChild(u),
            (m = new PIXI.Sprite(z.shoot)).visible = !1,
            m.tint = 0,
            m.alpha = .1,
            m.anchor.set(.5),
            (g = new PIXI.Sprite(z.shoot)).visible = !1,
            g.tint = 0,
            g.alpha = .3,
            g.anchor.set(.5),
            b.addChild(m),
            b.addChild(g),
            (p = new PIXI.Sprite(z.build)).visible = !1,
            p.anchor.set(.5),
            p.alpha = .5,
            b.addChild(p),
            Qe && PIXI.loader.resources.pumpkin && (z.dot1 = PIXI.loader.resources.dot1s.texture,
            z.debris = PIXI.loader.resources.debris.texture,
            z.shoot = PIXI.loader.resources.pumpkin.texture),
            "?skin-editor" == window.location.search && gr(),
            PIXI.loader.add("add-skins", "img/add-skins.js").load(function(e, t) {
                var n = JSON.parse(t["add-skins"].data)
                  , i = [];
                for (var o in n.images)
                    z[o] = PIXI.Texture.fromImage(n.images[o]);
                for (var a in n.specs)
                    Dn[parseInt(a)] = n.specs[a],
                    i.push(parseInt(a));
                setTimeout(function() {
                    for (var e in nr(!0),
                    Ee)
                        if (wt[e] && -1 !== i.indexOf(Ee[e])) {
                            var t = wt[e];
                            X.removeChild(t),
                            L.removeChild(t.usernameText),
                            t.shield && X.removeChild(t.shield),
                            t.badge && L.removeChild(t.badge),
                            _n(e),
                            wt[e].x = t.x,
                            wt[e].y = t.y,
                            wt[e].sx = t.sx,
                            wt[e].sy = t.sy
                        }
                })
            }),
            "?defuse-editor" == window.location.search && (ft = !(wr = !0),
            Lt = Ft,
            zt = At,
            _e = 210,
            Ne = 120,
            Ue = 1,
            Ye = .3,
            mt = .6763066483560869,
            gt = Oe = .6,
            dt = 7,
            ct = 96,
            ut = 48,
            2 * (Ue *= Ct),
            qe = 1e3,
            Ge = 70,
            We = 40,
            z["tower-kh"] = PIXI.Texture.fromImage("img/tower-kh.png"),
            A = {
                shooting: !1,
                moving: !1,
                aimDirection: 0,
                moveDirection: 0
            },
            (o = document.createElement("div")).setAttribute("id", "defuse-editor-help"),
            o.innerHTML = '<div style="text-align:center"><div id="defuse-help-hide" class="button" onclick="$(\'#defuse-help-content\').toggle();$(\'#defuse-help-hide\').toggle();$(\'#defuse-help-show\').toggle();">Hide menu</div><div style="display:none" id="defuse-help-show" class="button" onclick="$(\'#defuse-help-content\').toggle();$(\'#defuse-help-hide\').toggle();$(\'#defuse-help-show\').toggle();">Show menu</div></div><div id="defuse-help-content"><div>Key bindings:</div><ul><li> WASD: move</li><li>Right-Click/space: build a tower</li><li>Left-Click: remove tower/cancel wall</li><li>+/- and mouse wheel: zoom</li><li>=: Reset zoom</li><li>F: color grey enclosed area (grey areas appear on the minimap)</li><li>G: snap cursor to grid</li><li>X: view/hide helicopter</li><li>H: change map dimensions</li><li>Y: (DEFUSE) place bomb spot A</li><li>U: (DEFUSE) place bomb spot B</li><li>R: (DEFUSE) place blue spawn area</li><li>T: (DEFUSE) place red spawn area</li><li>O: download the map file</li><li>L: load a map file</li></ul><div onclick="defly.editor.mapDim();" class="button">Change map dimensions</div> <div onclick="defly.editor.kothBounds();" class="button">Edit KOTH Bounds</div></div>',
            document.body.appendChild(o),
            (o = document.createElement("div")).setAttribute("id", "defuse-editor-position"),
            document.body.appendChild(o),
            MainLoop.start(),
            document.getElementById("homepage").style.display = "none",
            E.view.style.display = "block",
            ue = 2,
            Et[kt = 1] = 1,
            _n(kt),
            wt[kt].visible = !1,
            wt[kt].position.set(_e / 2, Ne / 2),
            (He = new PIXI.Sprite(PIXI.loader.resources["img/line1.png"].texture)).anchor.set(.5),
            He.height = gt,
            He.alpha = .2,
            He.tint = Ht(kt),
            He.visible = !1,
            P.addChild(He),
            (Re = new PIXI.Sprite(z.dot1)).anchor.set(.5),
            Re.width = 2 * Oe,
            Re.height = 2 * Oe,
            Re.alpha = .2,
            Re.tint = Ht(kt),
            C.addChild(Re),
            pe = [128, 8, 8, 8, 2048, 8, 8],
            ea(),
            window.addEventListener("wheel", function(e) {
                e.deltaY < 0 && (Ge /= 1.1,
                We /= 1.1,
                ea()),
                0 < e.deltaY && (Ge *= 1.1,
                We *= 1.1,
                ea())
            }, !0),
            window.addEventListener("keydown", function(e) {
                if ("+" == e.key)
                    Ge /= 1.1,
                    We /= 1.1,
                    ea();
                else if ("-" == e.key)
                    Ge *= 1.1,
                    We *= 1.1,
                    ea();
                else if ("=" == e.key)
                    Ge = 70,
                    We = 40,
                    ea();
                else if ("g" == e.key)
                    ge = !ge;
                else if ("x" == e.key)
                    wt[kt].visible = !wt[kt].visible;
                else if ("y" == e.key)
                    Br(0, go((t = vo()).x), go(t.y));
                else if ("u" == e.key)
                    Br(1, go((t = vo()).x), go(t.y));
                else if ("r" == e.key)
                    Mr(1, go((t = vo()).x) - 6, go(t.y) - 6);
                else if ("t" == e.key)
                    Mr(2, go((t = vo()).x) - 6, go(t.y) - 6);
                else if ("f" == e.key) {
                    var t = vo()
                      , n = null
                      , i = Number.MAX_VALUE;
                    for (var o in It) {
                        var a = Tr((s = It[o]).dot1.position, s.dot2.position, t).dst2(t);
                        a < i && (i = a,
                        n = s)
                    }
                    if (n) {
                        var r, l = 0 <= ca(t, n.dot1.position, n.dot2.position);
                        if (l && 0 < n.leftZoneId)
                            return (r = new DataView(new ArrayBuffer(5))).setInt32(1, n.leftZoneId),
                            void io(r);
                        if (!l && 0 < n.rightZoneId)
                            return (r = new DataView(new ArrayBuffer(5))).setInt32(1, n.rightZoneId),
                            void io(r);
                        for (var s, d = [(s = n).dot1], c = s, u = s.dot1, m = s.dot2, g = !1; m != u; )
                            if (m != u) {
                                var h = d.indexOf(m);
                                if (-1 != h)
                                    for (; d.length > h; )
                                        d.splice(h, 1);
                                var p = Pr(m)
                                  , y = p.indexOf(c);
                                if (-1 === y)
                                    return void console.error("currentLine not found");
                                if (l)
                                    var f = p[(y - 1 + p.length) % p.length];
                                else
                                    f = p[(y + 1) % p.length];
                                if (d.push(m),
                                (m = (c = f).dot1 == m ? f.dot2 : f.dot1) == u && l == Lr(d)) {
                                    g = !0;
                                    break
                                }
                            }
                        m == u && 2 < d.length && g && Fr(d)
                    }
                } else if ("o" == e.key) {
                    var v = "MAP_WIDTH " + _e + "\nMAP_HEIGHT " + Ne + "\n";
                    et && (v += "KOTH " + tt.x1 + " " + tt.y1 + " " + tt.x2 + " " + tt.y2 + "\n");
                    for (var I = 0; I < xr.length; I++)
                        xr[I] && (v += "t " + I + " " + xr[I].x + " " + xr[I].y + "\n");
                    for (I = 0; I < Er.length; I++)
                        Er[I] && (v += "s " + I + " " + Er[I].x + " " + Er[I].y + "\n");
                    for (var o in vt)
                        v += "d " + o + " " + vt[o].x + " " + vt[o].y + "\n";
                    for (var o in It)
                        v += "l " + It[o].dot1.dotId + " " + It[o].dot2.dotId + "\n";
                    for (var o in bt) {
                        v += "z";
                        var b = bt[o].linePath
                          , w = b[b.length - 1];
                        for (I = 0; I < b.length; I++) {
                            var k = b[I];
                            v += " " + (k.dot1 == w.dot1 || k.dot1 == w.dot2 ? k.dot1 : k.dot2).dotId,
                            w = k
                        }
                        v += "\n"
                    }
                    var x = new Blob([v],{
                        type: "text/plain;charset=utf-8"
                    });
                    saveAs(x, (new Date).toISOString() + " defly.io defuse map.txt")
                } else if ("l" == e.key) {
                    var E = document.createElement("input");
                    E.setAttribute("type", "file"),
                    E.addEventListener("change", function() {
                        var l = new FileReader;
                        l.onload = function() {
                            var e = l.result.split(/\r?\n/);
                            C.removeChildren(),
                            P.removeChildren(),
                            O.removeChildren(),
                            P.addChild(He),
                            C.addChild(Re),
                            vt = {},
                            It = {},
                            bt = {},
                            aa = null,
                            Re.visible = !0,
                            He.visible = !1,
                            xr = [],
                            Er = [],
                            kr = 1;
                            for (var t = 0; t < e.length; t++) {
                                var n = e[t].split(" ");
                                switch (n[0]) {
                                case "MAP_WIDTH":
                                    _e = parseFloat(n[1]);
                                    break;
                                case "MAP_HEIGHT":
                                    Ne = parseFloat(n[1]);
                                    break;
                                case "KOTH":
                                    tt = {
                                        x1: parseFloat(n[1]),
                                        y1: parseFloat(n[2]),
                                        x2: parseFloat(n[3]),
                                        y2: parseFloat(n[4])
                                    },
                                    et = !0;
                                    break;
                                case "t":
                                    Br(parseInt(n[1]), parseFloat(n[2]), parseFloat(n[3]));
                                    break;
                                case "s":
                                    Mr(parseInt(n[1]), parseFloat(n[2]), parseFloat(n[3]));
                                    break;
                                case "d":
                                    (i = new DataView(new ArrayBuffer(27))).setInt32(1, parseInt(n[1])),
                                    i.setInt32(5, 1),
                                    i.setFloat32(9, parseFloat(n[2])),
                                    i.setFloat32(13, parseFloat(n[3])),
                                    i.setUint8(17, 1),
                                    i.setUint8(18, 1),
                                    i.setFloat32(19, 0),
                                    i.setInt32(23, 0),
                                    wi(i),
                                    kr = Math.max(kr, parseInt(n[1]) + 1);
                                    break;
                                case "l":
                                    var i;
                                    Sr(vt[parseInt(n[1])], vt[parseInt(n[2])]) || ((i = new DataView(new ArrayBuffer(25))).setInt32(1, kr++),
                                    i.setInt32(5, 1),
                                    i.setInt32(9, parseInt(n[1])),
                                    i.setInt32(13, parseInt(n[2])),
                                    i.setInt32(17, 0),
                                    i.setInt32(21, 0),
                                    xi(i));
                                    break;
                                case "z":
                                    for (var o = [], a = 1; a < n.length; a++) {
                                        var r = vt[parseInt(n[a])];
                                        o.push(r)
                                    }
                                    Fr(o)
                                }
                            }
                            wt[kt].position.set(_e / 2, Ne / 2),
                            ea()
                        }
                        ,
                        l.readAsText(E.files[0])
                    }),
                    setTimeout(function() {
                        E.click()
                    }, 200)
                }
            }, !0),
            window.defly.editor = {
                mapDim: function() {
                    _e = parseInt(prompt("Map Width?", _e)),
                    Ne = parseInt(prompt("Map Height?", Ne)),
                    wt[kt].x > _e && (wt[kt].x = _e),
                    wt[kt].y > Ne && (wt[kt].y = Ne),
                    ea()
                },
                kothBounds: function() {
                    var e = prompt("Lower-left X coordinate? (empty to remove KOTH bounds)", tt ? tt.x1 : "");
                    if (e) {
                        var t = prompt("Lower-left Y coordinate?", tt ? tt.y1 : "")
                          , n = prompt("Bottom-right X coordinate?", tt ? tt.x2 : "")
                          , i = prompt("Bottom-right Y coordinate?", tt ? tt.y2 : "");
                        tt = {
                            x1: parseFloat(e),
                            y1: parseFloat(t),
                            x2: parseFloat(n),
                            y2: parseFloat(i)
                        },
                        et = !0
                    } else
                        tt = null,
                        et = !1;
                    for (var o in vt) {
                        var a = vt[o]
                          , r = 15642415 == a.tint;
                        if (et && a.x >= tt.x1 && a.x <= tt.x2 && a.y >= tt.y1 && a.y <= tt.y2 ? (a.texture = z["tower-kh"],
                        a.tint = 15642415) : (a.texture = z.dot1,
                        a.tint = 5066061),
                        r ^ 15642415 == a.tint)
                            for (var l = 0; l < a.lines.length; l++)
                                a.lines[l].tint = a.tint
                    }
                }
            }),
            document.getElementById("preferred-server-block").getElementsByClassName("close")[0].addEventListener("click", function() {
                history.replaceState("", document.title, window.location.pathname + window.location.search),
                join_via_link()
            })
        }),
        $(function() {
            $("#server").selectmenu().data("ui-selectmenu")._renderItem = function(e, t) {
                var n = $("<li>")
                  , i = $("<div>", {
                    text: t.label
                });
                return t.element.attr("data-ping") && $("<span>", {
                    class: "ping",
                    text: "(ping: " + t.element.attr("data-ping") + ")"
                }).appendTo(i),
                n.append(i).appendTo(e)
            }
        });
        try {
            "undefined" != typeof Storage && (localStorage.getItem("gamesPlayed") && (de = localStorage.getItem("gamesPlayed")),
            localStorage.getItem("showTuto") && (Te = "true" == localStorage.getItem("showTuto")),
            localStorage.getItem("playerSkin") && (Be = parseInt(localStorage.getItem("playerSkin"))),
            localStorage.getItem("playerSkinColor") && (Me = parseInt(localStorage.getItem("playerSkinColor"))),
            localStorage.getItem("skinFacebookLiked") && (Na.skinFacebookLiked = "true" == localStorage.getItem("skinFacebookLiked")),
            localStorage.getItem("skinTwitterTweet") && (Na.skinTwitterTweet = "true" == localStorage.getItem("skinTwitterTweet")),
            localStorage.getItem("skinTwitterFollow") && (Na.skinTwitterFollow = "true" == localStorage.getItem("skinTwitterFollow")),
            localStorage.getItem("skinYoutubeSubscribe") && (Na.skinYoutubeSubscribe = "true" == localStorage.getItem("skinYoutubeSubscribe")),
            localStorage.getItem("skinFacebookShare") && (Na.skinFacebookShare = "true" == localStorage.getItem("skinFacebookShare")),
            localStorage.getItem("skinDiscordJoin") && (Na.skinDiscordJoin = "true" == localStorage.getItem("skinDiscordJoin")))
        } catch (e) {
            console.log(e)
        }
        dn("pv", "/", void 0, "ab=" + (Kt = function() {
            var e = !1
              , t = document.createElement("div");
            if (t.setAttribute("class", "pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links"),
            t.setAttribute("style", "width: 1px ! important; height: 1px !important; position: absolute !important; left: -10000px !important; top: -1000px !important;"),
            window.document.body.appendChild(t),
            null !== window.document.body.getAttribute("abp") || null === t.offsetParent || 0 == t.offsetHeight || 0 == t.offsetLeft || 0 == t.offsetTop || 0 == t.offsetWidth || 0 == t.clientHeight || 0 == t.clientWidth)
                e = !0;
            else if (void 0 !== window.getComputedStyle) {
                var n = window.getComputedStyle(t, null);
                !n || "none" != n.getPropertyValue("display") && "hidden" != n.getPropertyValue("visibility") || (e = !0)
            }
            return window.document.body.removeChild(t),
            e
        }())),
        document.getElementById("tuto-video").setAttribute("src", en ? "img/tutorial-mobile.mp4" : "img/tutorial.mp4"),
        Y = document.getElementById("minimap-canvas"),
        _ = document.getElementById("minimap-canvas").getContext("2d"),
        (on || an || ln || rn) && document.getElementById("portal-button") && (document.getElementById("portal-button").style.display = "none");
        try {
            (navigator.language.startsWith("ru") || navigator.language.startsWith("uk")) && (document.getElementById("portal-button").getElementsByTagName("a")[0].href = "http://vseigru.net",
            document.getElementById("portal-button").getElementsByTagName("a")[0].innerHTML = "More Games")
        } catch (e) {
            console.error(e)
        }
    }
    "loading" !== document.readyState ? Dr() : document.addEventListener("DOMContentLoaded", Dr, !1),
    window.addEventListener("beforeunload", function(e) {
        if (0 != J && !D && !Se || xo) {
            dn("Game", "Unload", void 0, void 0);
            var t = "Exit the game?";
            return e.returnValue = t
        }
    });
    var Hr = {
        selectMode: function(e) {
            logged_in || "none" !== document.getElementById("play-button").style.display && (ue = e,
            xn(),
            yn(),
            i && (history.replaceState("", document.title, window.location.pathname + window.location.search),
            join_via_link()))
        },
        clickPlay: function() {
            if (-1 == document.referrer.indexOf("deflyio.com") && -1 == document.referrer.indexOf("deflyio.net") && -1 == document.referrer.indexOf("deflyio.org") && -1 == document.referrer.indexOf("difly.io") && -1 == document.referrer.indexOf("defly-io.com") && -1 == document.referrer.indexOf("difly.io") || (window.top.location.href = "http://defly.io"),
            !ot && logged_in && !Ce && !Pe)
                return alert("You must sign-in to participate the tournament"),
                void Oa();
            Jt = function() {
                try {
                    if (-1 === (WebSocket + "").indexOf("native code"))
                        return !0;
                    if (-1 === (WebSocket.prototype.send + "").indexOf("native code"))
                        return !0
                } catch (e) {}
                return !1
            }(),
            dn("Click", Te ? "PlayShowTuto" : "Play", void 0, "gp=" + de + " tm=" + Jt + " dt=" + $e),
            Te ? (bn = !0,
            In(),
            "undefined" != typeof gtag && gtag("event", "PlayShowTuto", {
                event_category: "Click",
                gamesPlayed: de,
                initialGameMode: -1 == lt ? null : lt
            })) : (kn(),
            "undefined" != typeof gtag && gtag("event", "Play", {
                event_category: "Click",
                gamesPlayed: de,
                initialGameMode: -1 == lt ? null : lt
            }));
            try {
                localStorage.setItem("gameMode", ue)
            } catch (e) {
                console.error(e)
            }
        },
        backToHomepage: Cn,
        showTutorial: In,
        clickTutoButton: function() {
            if (document.getElementById("homepage").classList.remove("blurred"),
            document.getElementById("tuto-popup").style.display = "none",
            Te = !document.getElementById("tuto-checkbox").checked,
            "undefined" != typeof Storage)
                try {
                    localStorage.setItem("showTuto", Te)
                } catch (e) {
                    console.log(e)
                }
            bn && kn(),
            bn = !1,
            dn("Click", Te ? "CloseTutoShowAgain" : "CloseTutoDotNotShowAgain", void 0, void 0),
            "undefined" != typeof gtag && gtag("event", Te ? "CloseTutoShowAgain" : "CloseTutoDotNotShowAgain", {
                event_category: "Click"
            })
        },
        respawn: function() {
            En = 1,
            !logged_in && (600 < ce || 2 == de || 2 < de && (de - 2) % 2 == 0) && Mn() ? (dn("Click", "Respawn", "VideoPromo", "gp=" + de),
            "undefined" != typeof gtag && gtag("event", "Respawn", {
                event_category: "Click",
                event_label: "VideoAd"
            })) : (wo(),
            dn("Click", "Respawn", "NoVideoPromo", "gp=" + de),
            "undefined" != typeof gtag && gtag("event", "Respawn", {
                event_category: "Click",
                event_label: "NoVideoAd"
            })),
            Le = 0,
            document.getElementById("respawn-spinner").style.display = "inline-block",
            document.getElementById("respawn-button").style.display = "none",
            document.getElementById("xp-bar").style.display = "block"
        },
        spectate: function() {
            2 == ue ? 30 <= yt && ((En = 2) == de || 2 < de && (de - 2) % 2 == 0) && Mn() ? (dn("Click", "Spectate", "VideoPromo", "gp=" + de),
            "undefined" != typeof gtag && gtag("event", "Spectate", {
                event_category: "Click",
                event_label: "VideoAd"
            })) : ko() : document.getElementById("respawn").style.display = "none"
        },
        upgrade: bo,
        selectSuperpower: function(e) {
            document.getElementById("choose-superpower").style.display = "none";
            var t = new DataView(new ArrayBuffer(2));
            t.setUint8(0, 6),
            t.setUint8(1, e),
            is_connected.send(t.buffer),
            ve = e,
            Ie = 0,
            document.getElementById("superpower-fuel").style.display = "block",
            dn("Game", "SelectSuperpower", e),
            window.event && window.event.preventDefault()
        },
        promoComplete: Tn,
        setQuality: save_game_quality,
        chooseSkin: function() {
            document.getElementById("skin-popup").style.display = "block",
            document.getElementById("homepage").classList.add("blurred"),
            dn("Click", "SelectSkin", void 0, void 0),
            "undefined" != typeof gtag && gtag("event", "SelectSkin", {
                event_category: "Click"
            })
        },
        closeSkinSelector: function() {
            document.getElementById("skin-popup").style.display = "none",
            document.getElementById("homepage").classList.remove("blurred"),
            dn("Click", "CloseSkinPopup", void 0, "sm=" + Be + " sc=" + Me),
            "undefined" != typeof gtag && gtag("event", "CloseSkinPopup", {
                event_category: "Click",
                playerSkin: Be,
                playerSkinColor: Me
            })
        },
        changeSkinColor: or,
        changeSkinTab: er,
        sac: Eo,
        onGoogleSignIn: function(e) {
            if (!Pe) {
                var t = e.getBasicProfile();
                Ce = !0,
                Sa = e.getAuthResponse().id_token,
                Fa = t.getImageUrl(),
                Ra(),
                Xa = t.getEmail()
            }
        },
        googleSignOut: gmail_sign_out,
        onFacebookLoginStatus: login_via_facebook,
        logout: Ua,
        clickGoogleLogin: function() {
            document.getElementById("privacy-policy-checkbox").checked ? document.getElementsByClassName("g-signin2")[0].children[0].click() : alert("You must accept the privacy policy")
        },
        clickFacebookLogin: function() {
            document.getElementById("privacy-policy-checkbox").checked ? FB.login(login_via_facebook, {
                scope: "email"
            }) : alert("You must accept the privacy policy")
        },
        showMyStats: function() {
            var m = new XMLHttpRequest;
            m.onreadystatechange = function() {
                if (4 == m.readyState && 200 == m.status) {
                    for (var e = m.responseText.split("\n"), t = JSON.parse(e[0]), n = e[1], i = "<thead><th>GameMode<th>Start</th><th>Duration</th><th>Level reached/<br/>Rounds played</th><th>Towers destroyed</th><th>Players killed</th><th>Max Map %/<br/>Rounds win%</th><th>Max Score</th><th>Coins earnings</th><th>Kill reason</th></thead><tbody>", o = 0; o < t.length; o++) {
                        var a = t[o]
                          , r = 2 == a.game_mode ? 100 * a.max_area : 100 * a.max_area / (a.map_area ? a.map_area : Math.pow(3 == a.game_mode ? 500 : 800, 2));
                        r = Qi(r);
                        var l = "Disconnect";
                        switch (a.kill_reason) {
                        case 1:
                            l = "Bullet";
                            break;
                        case 2:
                            l = "Wall";
                            break;
                        case 3:
                            l = "Player collision";
                            break;
                        case 4:
                            l = "Victory";
                            break;
                        case 5:
                            l = "Grenade"
                        }
                        i += "<tr><td>" + br[a.game_mode] + "</td><td>" + new Date(a.start).toLocaleString() + "</td><td>" + (s = (a.end - a.start) / 1e3,
                        u = c = d = void 0,
                        d = Math.floor(s / 3600),
                        c = Math.floor((s - 3600 * d) / 60),
                        u = Math.floor(s - 3600 * d - 60 * c),
                        d < 10 && (d = "0" + d),
                        c < 10 && (c = "0" + c),
                        u < 10 && (u = "0" + u),
                        d + "h" + c + "m" + u + "s") + "</td><td>" + a.level + "</td><td>" + a.dot_kills + "</td><td>" + a.player_kills + "</td><td>" + r + "</td><td>" + Math.round(a.max_score) + "</td><td>" + Ir(a.game_mode, a.max_score, a.dot_kills, a.player_kills) + "</td><td>" + l + "</td></tr>"
                    }
                    i += "</tbody>",
                    document.getElementById("my-statistics-table").innerHTML = i,
                    document.getElementById("ms-coins").innerHTML = Math.floor(n),
                    document.getElementById("ma-coins").innerHTML = Math.floor(n),
                    document.getElementById("ms-player-name").innerHTML = document.getElementById("username").value,
                    document.getElementById("my-statistics").style.display = "block",
                    document.getElementById("my-stats-button").enabled = !0,
                    document.getElementById("my-stats-button").innerHTML = Ot("My Statistics")
                }
                var s, d, c, u
            }
            ,
            m.onerror = function(e) {
                li((new Date).toLocaleTimeString() + " - Error getting stats", "error"),
                console.log(e)
            }
            ,
            m.open("POST", base_server + "/mystats?s=" + s, !0),
            m.send(null),
            document.getElementById("my-stats-button").enabled = !1,
            document.getElementById("my-stats-button").innerHTML = Ot("Loading..."),
            dn("Click", "ShowMyStats")
        },
        showMyAccount: vr,
        selectTeam: Ki,
        buyGear: function(e) {
            var t = new DataView(new ArrayBuffer(3));
            t.setUint8(0, 11),
            t.setUint8(1, e),
            t.setUint8(2, 0),
            is_connected.send(t.buffer)
        },
        sellGear: function(e) {
            var t = new DataView(new ArrayBuffer(3));
            t.setUint8(0, 11),
            t.setUint8(1, e),
            t.setUint8(2, 1),
            is_connected.send(t.buffer)
        },
        changeControls: function() {
            je = document.getElementById("controls-tpfm2").checked,
            nt = document.getElementById("controls-colorblind").checked,
            Ke = document.getElementById("controls-mwm").checked,
            Je = Ke;
            try {
                localStorage.setItem("trackPadFriendlyMode", je ? 1 : 0),
                localStorage.setItem("moveWithMouse", Ke ? 1 : 0),
                localStorage.setItem("colorBlindMode", nt ? 1 : 0)
            } catch (e) {
                console.log(e)
            }
        },
        changeTheme: function() {
            $e = document.getElementById("theme-radio2").checked,
            E.backgroundColor = $e ? 0 : 15923199;
            try {
                localStorage.setItem("darkTheme", $e ? 1 : 0)
            } catch (e) {
                console.log(e)
            }
        },
        showLoginPopup: Oa,
        joinTourney: function() {
            if (!ot && !Ce && !Pe)
                return alert("Log-in first to participate the tournament"),
                void Oa();
            if (!I) {
                at = logged_in = I = !0,
                ue = 1;
                for (var e = 0; e <= 3; e++)
                    e == ue ? document.getElementById("gamemode-" + e).classList.add("selected") : document.getElementById("gamemode-" + e).style.display = "none";
                document.getElementById("server-block").style.display = "none",
                document.getElementById("play-button").style.display = "none",
                document.getElementById("play-spinner").style.display = "block",
                yn()
            }
        },
        buyPremium: function(e) {
            var t = 0 < Za ? Za : encodeURIComponent(Xa)
              , n = document.getElementById("ma-discord-id").value;
            if (0 < n.length && (t += " - " + encodeURIComponent(n.replace("#", "-"))),
            1 == e)
                var i = window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=serial@defly.io&item_name=Premium%20Account%20for%20Defly.io%20%28inside%20EU%29&item_number=" + t + "&currency_code=EUR&country=GB&lc=US&no_shipping=1&amount=5");
            else
                i = window.open("https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=serial@defly.io&item_name=Premium%20Account%20for%20Defly.io%20%28outside%20EU%29&item_number=" + t + "&currency_code=USD&country=US&lc=US&no_shipping=1&amount=5");
            console.log("window", i);
            var o = setInterval(function() {
                i.closed && (clearInterval(o),
                document.getElementById("after-buy-message").style.display = "block")
            }, 100)
        },
        updateReservedNickname: function() {
            var e = document.getElementById("reserved-nickname").value
              , t = document.getElementById("reserved-nickname-button");
            t.disabled = !0,
            t.innerHTML = "Updating...";
            var n = new XMLHttpRequest;
            n.onreadystatechange = function() {
                if (4 == n.readyState && 200 == n.status) {
                    t.disabled = !1,
                    t.innerHTML = "Update";
                    var e = n.responseText.split("\n");
                    "ERROR" == e[0] && alert(e[1])
                }
            }
            ,
            n.onerror = function(e) {
                t.disabled = !1,
                t.innerHTML = "Update",
                alert("Error updating reserved nickname"),
                console.log(e)
            }
            ,
            n.open("POST", base_server + "/account/updateReserved?s=" + s + "&n=" + encodeURIComponent(e), !0),
            n.send(null),
            dn("Click", "UpdateReservedNickName", e)
        },
        changeBadge: function() {
            var e = document.getElementById("account-badge").value;
            fr(e);
            var t = new XMLHttpRequest;
            t.onreadystatechange = function() {
                4 == t.readyState && t.status
            }
            ,
            t.onerror = function(e) {
                alert("Error updating badge"),
                console.log(e)
            }
            ,
            t.open("POST", base_server + "/account/updateBadge?s=" + s + "&b=" + e, !0),
            t.send(null),
            dn("Click", "UpdateBadge", e)
        },
        showChatInput: Jo,
        voteForMap: function(e) {
            document.getElementById("map-vote").style.display = "none";
            var t = new DataView(new ArrayBuffer(2));
            t.setUint8(0, 13),
            t.setUint8(1, pi[e].id),
            is_connected.send(t.buffer)
        },
        addStatsFilters: function() {
            $(".button.filters").hide(),
            $.getScript("tablefilter/tablefilter.js", function() {
                new TableFilter(document.querySelector("#my-statistics-table"),{
                    base_path: "./tablefilter/"
                },{
                    col_0: "select",
                    col_9: "select",
                    col_types: ["string", "date", "string", "number", "number", "number", {
                        type: "formatted-number",
                        decimal: "."
                    }, "number", "number", "string"],
                    extensions: [{
                        name: "sort"
                    }, {
                        name: "colOps",
                        id: ["dotkills-sum", "dotkills-mean", "kills-sum", "kills-mean", "maxarea-sum", "maxarea-mean", "maxscore-sum", "maxscore-mean"],
                        col: [4, 4, 5, 5, 6, 6, 7, 7],
                        operation: ["sum", "mean", "sum", "mean", "sum", "mean", "sum", "mean"],
                        decimal_precision: [0, 0, 0, 0, 2, 2, 0, 0]
                    }],
                    status_bar: !0,
                    rows_counter: {
                        text: "Games: "
                    },
                    alternate_rows: !0,
                    btn_reset: !0,
                    auto_filter: {
                        delay: 1e3
                    },
                    themes: [{
                        name: "default"
                    }]
                }).init(),
                $("#ms-sums").show()
            })
        },
        recreateRenderer: Ar
    };
    return Hr
}();
//# sourceMappingURL=game.js.map
