emailValidator = email => {
    if (email.length < 5) {
        return false;
    }
    if (!email.includes("@")) {
        return false;
    } else {
        return true;
    }
};

orderCommentValidator = orderComment => {
    if (orderComment.length <= 5) {
        return false;
    } else {
        return true;
    }
};

module.exports = {
    emailValidator,
    orderCommentValidator
};