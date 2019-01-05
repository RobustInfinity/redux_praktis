

const LocalStorage = {
    save : function(data){
        var keys = Object.keys(data)
        keys.forEach((key)=>{
            // console.log(data[key])
            localStorage.setItem(key,JSON.stringify(data[key]))
        })
        
    },

    get : function(key){
        return JSON.parse(localStorage.getItem(key))
    },

    remove : function(key){
        localStorage.clear()
    },

    length : function(){
        return localStorage.length
    }
}


module.exports = LocalStorage