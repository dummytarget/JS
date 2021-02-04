let en_in = new Map();

en_in.set('sleep', 'tidur').set('walk', 'jalan');

for(let dict of en_in){
    console.log(dict);
}

console.log(en_in.get('sleep'));

en_in.delete('sleep');

for(let dict of en_in){
    console.log(dict);
}
