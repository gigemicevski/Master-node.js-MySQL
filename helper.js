emailValidator = (email) => {
    if (email.length < 5) {
        return false;
    }
    if(!email.includes("@")){
        return false;
    }
    else {
        return true;
    }
};

orderCommentValidator = (orderComment) => {
    if(orderComment.length <= 5) {
        return false;
    }
    else {
        return true;
    }
}

absolute = (num) => {
    if (num >= 0) return num;
    return -num;
    
}


greet = (user) => {
    return "Welcome " + user ;
}

getCurrencies = () => {
    return ["USD","EUR","AUD"];
}




module.exports = {
    emailValidator,
    orderCommentValidator,
    absolute,
    greet,
    getCurrencies
}