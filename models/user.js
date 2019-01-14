exports.count = function(req, res) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(5), 3000)
      });
}