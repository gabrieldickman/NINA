const veronicaConn = require("../services/veronicaConn");

module.exports = {

    async getChamadosConexao(req, res){

        const allChamadosConexao = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all 
        WHERE departamento="Departamento Suporte Técnico" 
        AND setor="Setor Suporte Técnico Externo - Conexão - Brasil Digital"
        AND status='AG'
        ORDER BY data_agenda DESC;`);

        return res.json(allChamadosConexao);
       
    }, 

    async getChamadosReincidencia(req, res){

        const allChamadosRein = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all
        WHERE departamento="Departamento Suporte Técnico"
        AND setor="Setor Suporte Técnico Externo - Reincidência - Brasil Digital"
        AND status='AG'
        ORDER BY data_agenda DESC
        `);

        return res.json(allChamadosRein);
    },

    async getChamadosPorTecnico(req, res){

        const nomeTecnico = req.params.id;

        const chamadosPorTecnico = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all 
        WHERE departamento="Departamento Suporte Técnico" 
        AND tecnico=${nomeTecnico}
        AND status="AG"
        ORDER BY data_agenda DESC;
        `);

        return res.json(chamadosPorTecnico);
    },

    async getChamadosPorCidade(req, res){

        const nomeCidade = req.params.id;

        const chamadosPorCidade = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all
        WHERE departamento="Departamento Suporte Técnico"
        AND localidade=${nomeCidade}
        AND status="AG"
        ORDER BY data_agenda DESC;
        `);

        return res.json(chamadosPorCidade);

    },

    async getChamadosPorData(req, res){

        const data = req.params.id;

        const chamadosPorData = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all
        WHERE departamento="Departamento Suporte Técnico"
        AND data_agenda=${data}
        AND status="AG"
        OR status="A"
        OR status="F"
        ORDER BY data_agenda DESC;
        `);

        return res.json(chamadosPorData)
    }
}
