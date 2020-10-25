jQuery(function () {
    console.log("JQuery is loaded!");

    let data = {
        "filters": [
            {
                "word": "Schüler*innen",
                "replacement": "Schüler"
            },
            {
                "word": "*innen",
                "replacement": "en"
            },
            {
                "word": ":innen",
                "replacement": "en"
            },
            {
                "word": "*e",
                "replacement": ""
            },
            {
                "word": "*in",
                "replacement": ""
            }
        ]
    };

    for (let i = 0; i < data.filters.length; i++) {
        let word = data.filters[i].word;
        let replacement = data.filters[i].replacement;

        $("*")
            .contents()
            .filter(function () {
                return this.nodeType == 3 && this.textContent.includes(word);
            })
            .replaceWith(function () {
                let tmp = this.textContent.replace(word, replacement);
                console.log("Replaced '" + this.textContent + "' with '" + tmp + "'")
                return tmp;
            });
    }
})