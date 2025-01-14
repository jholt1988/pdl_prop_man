// Import PDFMake (ensure you have pdfmake installed)
const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");
pdfMake.vfs = pdfFonts.vfs;

// Function to generate the tenant ledger PDF
function generateTenantLedgerPdf(companyInfo, tenantInfo, ledgerEntries) {
    const documentDefinition = {
        content: [
            // Company Information
            {
                text: companyInfo.name,
                style: 'header'
            },
            {
                text: companyInfo.address,
                style: 'subheader'
            },
            {
                text: `Phone: ${companyInfo.phone} | Email: ${companyInfo.email}`,
                style: 'subheader',
                margin: [0, 0, 0, 20],
            },

            // Tenant Information
            {
                text: `Tenant: ${tenantInfo.name}`,
                style: 'tenantInfo'
            },
            {
                text: `Property Address: ${tenantInfo.propertyAddress}`,
                style: 'tenantInfo',
                margin: [0, 0, 0, 20],
            },

            // Ledger Entries Table
            {
                table: {
                    headerRows: 1,
                    widths: ['*', '*', '*', '*'],
                    body: [
                        // Table Header
                        [
                            { text: 'Date', style: 'tableHeader' },
                            { text: 'Description', style: 'tableHeader' },
                            { text: 'Debit', style: 'tableHeader' },
                            { text: 'Credit', style: 'tableHeader' }
                        ],
                        // Table Rows (Dynamic entries)
                        ...ledgerEntries.map(entry => [
                            entry.date,
                            entry.description,
                            { text: entry.debit ? `$${entry.debit.toFixed(2)}` : '-', alignment: 'right' },
                            { text: entry.credit ? `$${entry.credit.toFixed(2)}` : '-', alignment: 'right' }
                        ])
                    ]
                },
                layout: 'lightHorizontalLines'
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 10]
            },
            subheader: {
                fontSize: 12,
                alignment: 'center',
                margin: [0, 0, 0, 5]
            },
            tenantInfo: {
                fontSize: 12,
                bold: true
            },
            tableHeader: {
                bold: true,
                fontSize: 12,
                color: 'black'
            }
        }
    };

    // Create and open the PDF
    pdfMake.createPdf(documentDefinition).open();
}
export default generateTenantLedgerPdf;
// // Example Usage
// const companyInfo = {
//     name: "Second Chance Rentals",
//     address: "123 Opportunity Blvd, New Beginnings, NB 45678",
//     phone: "(123) 456-7890",
//     email: "info@secondchancerentals.com"
// };

// const tenantInfo = {
//     name: "John Doe",
//     propertyAddress: "456 Hope Street, Apt 12"
// };

// const ledgerEntries = [
//     { date: '2024-01-01', description: 'Rent Payment', debit: null, credit: 1200 },
//     { date: '2024-01-15', description: 'Late Fee', debit: 50, credit: null },
//     { date: '2024-02-01', description: 'Rent Payment', debit: null, credit: 1200 },
// ];

// // Generate the PDF
// generateTenantLedgerPdf(companyInfo, tenantInfo, ledgerEntries);
