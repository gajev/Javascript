function extract(content) {
    const text = document.getElementById("content").textContent;
    let pattern = /\([\w ]+\)/g;
    let result = text.match(pattern);


    return (result.join("; "))
}