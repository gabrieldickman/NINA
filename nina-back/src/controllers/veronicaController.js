const veronicaConn = require("../services/veronicaConn")

module.exports = {

    async getChamados(req, res){
        const all_uss_chamados = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all 
        WHERE departamento="Departamento Suporte Técnico" 
        AND setor="Setor Suporte Técnico Externo - Conexão - Brasil Digital" 
        AND status='AG'
        ORDER BY data_agenda DESC;` );

        return res.json(all_uss_chamados).then(veronicaConn.connection.sql.end())
    }, 
}
