const veronicaConn = require("../services/veronicaConn");

module.exports = {

    async getChamadosConexao(req, res){

        const [allChamadosConexao] = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all 
        WHERE departamento="Departamento Suporte Técnico" 
        AND setor="Setor Suporte Técnico Externo - Conexão - Brasil Digital"
        AND status='AG'
        ORDER BY data_agenda DESC;`);

        veronicaConn.connection.sql.releaseConnection()

        return res.json(allChamadosConexao);
    }, 

    async getChamadosReincidencia(req, res){

        const [allChamadosRein] = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all
        WHERE departamento="Departamento Suporte Técnico"
        AND setor="Setor Suporte Técnico Externo - Reincidência - Brasil Digital"
        AND status='AG'
        ORDER BY data_agenda DESC
        `);

        veronicaConn.connection.sql.releaseConnection()

        return res.json(allChamadosRein);
    },

    async getChamadosPorTecnico(req, res){

        const nomeTecnico = req.params.id;

        const [chamadosPorTecnico] = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all 
        WHERE departamento="Departamento Suporte Técnico" 
        AND tecnico=${nomeTecnico}
        AND status="AG"
        ORDER BY data_agenda DESC;
        `);

        veronicaConn.connection.sql.releaseConnection()

        return res.json(chamadosPorTecnico);
    },

    async getChamadosPorCidade(req, res){

        const nomeCidade = req.params.id;

        const [chamadosPorCidade] = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all
        WHERE departamento="Departamento Suporte Técnico"
        AND localidade=${nomeCidade}
        AND status="AG"
        ORDER BY data_agenda DESC;
        `);

        veronicaConn.connection.sql.releaseConnection()

        return res.json(chamadosPorCidade);

    },

    async getChamadosPorData(req, res){

        const data = req.params.id;

        const [chamadosPorData] = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all
        WHERE departamento="Departamento Suporte Técnico"
        AND data_agenda=${data}
        AND status="AG"
        ORDER BY data_agenda DESC;
        `);

        veronicaConn.connection.sql.releaseConnection()

        return res.json(chamadosPorData)
    },

    async getChamadosPorAssunto(req, res){

        const assunto = req.params.id;

        const [chamadosPorAssunto] = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all
        WHERE departamento="Departamento Suporte Técnico"
        AND assunto=${assunto}
        AND status="AG"
        ORDER BY data_agenda DESC;
        `);

        veronicaConn.connection.sql.releaseConnection()

        return res.json(chamadosPorAssunto);
    },
    async getChamadosParaReagendar(req, res){

        const status = req.params.id;

        const [chamadosParaReagendar] = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all
        WHERE departamento="Departamento Suporte Técnico"
        AND status=${status}
        ORDER BY data_abertura ASC;
        `);

        veronicaConn.connection.sql.releaseConnection()

        return res.json(chamadosParaReagendar)
    },
    async getChamadosPorPeriodo(req, res){

        const periodo = req.params.id;


        const [ChamadosPorPeriodo] = await veronicaConn.connection.sql.execute(`
        SELECT * FROM veronica.su_oss_chamados_all 
        WHERE departamento="Departamento Suporte Técnico"  
        AND melhor_horario_agenda=${periodo}
        AND status="AG"
        ORDER BY data_agenda DESC;
        `);

        veronicaConn.connection.sql.releaseConnection()

        return res.json(ChamadosPorPeriodo)
    }

}
