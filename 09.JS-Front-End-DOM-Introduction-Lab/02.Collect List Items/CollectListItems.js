function extractText() {
    const itemsElement = document.getElementsByTagName('li');
    const result = [];

    for (const iterator of Array.from(itemsElement)) {
        result.push(iterator.textContent)
    }

    const textAreaElement = document.getElementById("result");
    textAreaElement.textContent = result.join("\n")
}