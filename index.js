let receivesAFunction = (callback) => {
    return callback();
}

let returnsANamedFunction = () => {
    return (
        function fn(){}
    );
}

let returnsAnAnonymousFunction = () => {
    return(
        () => {}
    );
}