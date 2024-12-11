import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.addVirtualFileSystem(pdfFonts);


function generateTenantStatement(tenantName, transactions) {
    const documentDefinition = {
        content: [
            { text: 'Tenant Statement', style: 'header' },
            { text: `Tenant: ${tenantName}`, style: 'subheader' },
            {
                style: 'tableExample',
                table: {
                    body: [
                        ['Date', 'Description', 'Amount'],
                        ...transactions.map(transaction => [
                            transaction.date,
                            transaction.description,
                            transaction.amount
                        ])
                    ]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 14,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            tableExample: {
                margin: [0, 5, 0, 15]
            }
        }
    };

    const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
    return pdfDocGenerator;

}
 
const createTenantStatement = (tenantName, transactions) => {
    const pdfDocGenerator = generateTenantStatement(tenantName, transactions);
    pdfDocGenerator.open();
};

export default createTenantStatement;
// Example usage
const tenantName = 'John Doe';
const transactions = [
    { date: '2023-01-01', description: 'Rent Payment', amount: '$1000' },
    { date: '2023-02-01', description: 'Rent Payment', amount: '$1000' },
    { date: '2023-03-01', description: 'Rent Payment', amount: '$1000' }
];

generateTenantStatement(tenantName, transactions);