//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

// criar o obejto que ira fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db



//utilizar o objeto de banco de dados, para nossas operacoes
/*INICIO COMENTARIO

db.serialize(() => {
    //1 criar uma tabela  com comando sql
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //2 inserir dados na tabela
    const query =`
            INSERT INTO places (
                image,
                name,
                address,
                address2,
                state,
                city,
                items
            ) VALUES (?,?,?,?,?,?,?);
    `

    const values =[
        "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1401&q=80",
        "Coletoria",
        "Guilherme Gemballa, Jardin America",
        "Numero 260",
        "Santa Catarina",
        "Rio do Sul",
        "Residuos Eletronicos, Lampadas"
    ]

    function afterInsertData(err) {
        if(err) {
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    //db.run(query, values, afterInsertData)
    //3 Consultar os dados da tabela
    db.all(`SELECT name FROM places`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        console.log("aqui estao seus registros")
        console.log(rows)
    })


    //4 Deletar um dado da tabela
//    db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//        if(err) {
//            return console.log(err)
//        }
//
//      console.log("Registro deletado com sucesso")
//    })


})

FIM COMENTARIO*/
