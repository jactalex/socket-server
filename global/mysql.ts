import  mysql = require('mysql');

export default class Mysql  {
    private static _instance:Mysql;
    
    cnn: mysql.Connection;
    conectado : boolean = false;

    constructor() {
        this.cnn = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'web'
          });

        this.conectarBD();
        
    }
    
    public static get instance (){
        return this._instance || (this._instance = new this ());
    }

    static ejecutarQuery(query:string, callback: Function){
        this.instance.cnn.query(query, (err, results: Object [], fiels)=>{
            if(err){
                console.log(err);
                return  callback(err);
            }

            callback(null, results);
        });
    }

    private conectarBD(){
        this.cnn.connect((err: mysql.MysqlError)=>{
            if(err)
            {
                console.log(err.message)
                return
            }
            this.conectado = true;
            console.log('BD online');
        });
    }
} 