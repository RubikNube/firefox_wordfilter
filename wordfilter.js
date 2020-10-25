jQuery(function () {
    console.log("JQuery is loaded!");
    let re = "\*innen";

    $("*")
        .contents()
        .filter(function () {
            return this.nodeType == 3 && this.textContent.includes(re);
        })
        .replaceWith(function () {
            let tmp = this.textContent.replace(re, 'en');
            console.log("Replaced " + this.textContent + " with " + tmp)
            return tmp;
        });
})