let handler = m => m

handler.before = async function (m) {
    let user = db.data.users[m.sender]                              
    if (user.health > 200) {
            user.health = 200
        }
    if (user.health < 0) {
            user.health = 0
        }
    }

module.exports = handler