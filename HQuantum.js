(() => {
    const map = {
        "Ax1ඞ": "A", "Bx2ඞ": "B", "Cx3ඞ": "C", "Dx4ඞ": "D",
        "Ex5ඞ": "E", "Fx6ඞ": "F", "Gx7ඞ": "G", "Hx8ඞ": "H",
        "Ix9ඞ": "I", "Jx10ඞ": "J", "Kx11ඞ": "K", "Lx12ඞ": "L",
        "Mx13ඞ": "M", "Nx14ඞ": "N", "Ox15ඞ": "O", "Px16ඞ": "P",
        "Qx17ඞ": "Q", "Rx18ඞ": "R", "Sx19ඞ": "S", "Tx20ඞ": "T",
        "Ux21ඞ": "U", "Vx22ඞ": "V", "Wx23ඞ": "W", "Xx24ඞ": "X",
        "Yx25ඞ": "Y", "Zx26ඞ": "Z",

        "ax27ඞ": "a", "bx28ඞ": "b", "cx29ඞ": "c", "dx30ඞ": "d",
        "ex31ඞ": "e", "fx32ඞ": "f", "gx33ඞ": "g", "hx34ඞ": "h",
        "ix35ඞ": "i", "jx36ඞ": "j", "kx37ඞ": "k", "lx38ඞ": "l",
        "mx39ඞ": "m", "nx40ඞ": "n", "ox41ඞ": "o", "px42ඞ": "p",
        "qx43ඞ": "q", "rx44ඞ": "r", "sx45ඞ": "s", "tx46ඞ": "t",
        "ux47ඞ": "u", "vx48ඞ": "v", "wx49ඞ": "w", "xx50ඞ": "x",
        "yx51ඞ": "y", "zx52ඞ": "z",

        "0x53ඞ": "0", "1x54ඞ": "1", "2x55ඞ": "2", "3x56ඞ": "3",
        "4x57ඞ": "4", "5x58ඞ": "5", "6x59ඞ": "6", "7x60ඞ": "7",
        "8x61ඞ": "8", "9x62ඞ": "9"
    };

    window.decodeD = function(encoded) {
        return encoded.replace(
            /(?:[A-Za-z0-9]x\d+ඞ)/g,
            token => map[token] ?? token
        );
    };

    window.decodePage = function() {
        document.body.innerHTML = decodeD(document.body.innerHTML);
    };
})();
