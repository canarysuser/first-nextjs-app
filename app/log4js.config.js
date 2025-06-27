import log4js from "log4js"

log4js.configure({
    appenders: {
        console: {type:'console'},
        file:{type:'file', filename:'logs/app.log', maxLogSize:10485760, backups:3},
    },
    categories: {
        default: {appenders: ['console', 'file'], level: 'info'},
        api: {appenders: ['console','file'], level:'debug'}
    }
})

export default log4js;