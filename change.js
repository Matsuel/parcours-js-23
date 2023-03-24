function get(key){
    return sourceObject[key];
}

function set(key, value){
    sourceObject[key] = value;
    return get(key);
}

const sourceObject = {
    num: 42,
    bool: true,
    str: 'some text',
    log: console.log,
  }
