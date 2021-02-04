const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
    }
};

function withBoxUnlocked(body) {
    console.log(box.locked);

    try {

        box.unlock();
        body();
        console.log(box.content);

    } catch (e) {

        console.log("Error raised: " + e);

    } finally {

        if (!this.locked) { box.lock(); }

    }

    console.log(box.locked);

}

withBoxUnlocked(function() {
    box.content.push("gold piece");
});

console.log();

try {
    withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
});
} catch (e) {
    console.log("Error raised: " + e);
}
