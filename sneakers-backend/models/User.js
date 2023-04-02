import mongoose from 'mongoose'
// import beautifyUnique from 'mo'

const userShema = new mongoose.Schema({
    name: { type: String, require: true },
    surname: { type: String, require: true,  },
    login: { type: String, require: true, unique: true },
    passwordHash: { type: String, require: true },
    cart: { type: Array, default: [] },
    bookmarks: { type: Array, default: [] },
    purchases: { type: Array, default: [] },
})

// userShema.plugin(beautifyUnique)
export default mongoose.model('User', userShema)
