export const getListParcelamento = (total) => {
    let list = [];
    for (let i = 1; i < 13; i++) {
        const taxa = (2*i) + 2;
        const totalTaxa = (total * taxa) / 100;
        const totalComTaxa = total + totalTaxa;
        const valorParcela = totalComTaxa/i;
        const pcl = i < 2 ? " Parcela" : " Parcelas";
        const desc = `R$${totalComTaxa.toFixed(0)} em ${i} ${pcl} de R$${valorParcela.toFixed(0)}`
        const nome = i + pcl;
        const obj = {
            titulo: nome,
            descricao: desc,
            valorString: `R$${totalComTaxa.toFixed(0)}`,
            valor: totalComTaxa,
            id: i,
            pos: i - 1,
            total: totalTaxa,
            totalString: 'R$' + totalTaxa.toFixed(0) + ',00'
        }
        list.push(obj);
    }
    return list;
};