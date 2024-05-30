export const sidebarData = [
  {
    collapsed: true,
    items: [
      {
        text: 'Introduction',
        link: '/parts/introduction/',
      },
      {
        text: 'Endpoints',
        link: '/parts/endpoints/',
      },
      {
        text: 'Rate limiter',
        link: '/parts/rate-limiter/',
      },
      {
        text: 'Representation Formats',
        link: '/parts/representation-formats/',
      },
      {
        text: 'Responses',
        link: '/parts/responses/',
      },
      {
        text: 'Authentication',
        link: '/parts/authentication/',
      },
      {
        text: 'Sales Invoices',
        link: '/parts/sales-invoices/',
        collapsed: true,
        items: [
          {
            text: 'Get list of sales invoices',
            link: '/parts/sales-invoices/get-list-of-invoices/',
            collapsed: true,
            items: [
              {
                text: 'Example of Getting List [PHP]',
                link: '/parts/sales-invoices/get-list-of-invoices/example-of-getting-list-php.md',
              }
            ]
          },
          {
            text: 'Get sales invoice details',
            link: '/parts/sales-invoices/get-invoice-details/',
          },
          {
            text: 'Delete Invoice',
            link: '/parts/sales-invoices/delete-invoice/',
          },
          {
            text: 'Create Sales Invoice',
            link: '/parts/sales-invoices/create-sales-invoice/',
            collapsed: true,
            items: [
              {
                text: 'Example: Create Sales Invoice in PHP',
                link: '/parts/sales-invoices/create-sales-invoice/example-create-sales-invoice-in-php.md',
              },
              {
                text: 'Example: Create Sales Invoice',
                link: '/parts/sales-invoices/create-sales-invoice/example-create-sales-invoice.md',
              },
              {
                text: 'Example: Create Sales Invoice WITH PAYMENT',
                link: '/parts/sales-invoices/create-sales-invoice/example-create-sales-invoice-with-payment.md',
              },
              {
                text: 'Create Sales Invoice with multiple payments',
                link: '/parts/sales-invoices/create-sales-invoice/create-sales-invoice-with-multiple-payments.md',
              },
              {
                text: 'Create Sales Invoice of Estonian e-invoice standard 1.2',
                link: '/parts/sales-invoices/create-sales-invoice/create-sales-invoice-of-estonian-e-invoice-standard-1-2.md',
              },
              {
                text: 'Send Sales Invoice by e-mail',
                link: '/parts/sales-invoices/create-sales-invoice/send-invoice-by-e-mail.md',
              },
              {
                text: 'Send Sales Invoice as e-invoice',
                link: '/parts/sales-invoices/create-sales-invoice/send-sales-invoice-by-einvoice.md',
              },
              {
                text: 'Get Sales Invoice PDF',
                link: '/parts/sales-invoices/create-sales-invoice/get-sales-invoice-pdf/',
              }
            ]
          },
          {
            text: 'Create Credit Invoice',
            link: '/parts/sales-invoices/create-credit-invoice/',
          }
        ]
      },
      {
        text: 'Sales Offers',
        link: '/parts/sales-offers/',
        collapsed: true,
        items: [
          {
            text: 'Get List of Sales Offers',
            link: '/parts/sales-offers/get-list-of-sales-offers/',
          },
          {
            text: 'Create Sales Offer',
            link: '/parts/sales-offers/create-sales-offer/',
            collapsed: true,
            items: [
              {
                text: 'Example create sales offer',
                link: '/parts/sales-offers/create-sales-offer/example-sales-offer/',
              }
            ]
          },
          {
            text: 'Set Offer status',
            link: '/parts/sales-offers/set-offer-status/',
          },
          {
            text: 'Create Invoice from SalesOffer',
            link: '/parts/sales-offers/create-invoice-from-salesoffer/',
          }
        ]
      },
      {
        text: 'Recurring Invoices',
        link: '/parts/recurring-invoices/',
        collapsed: true,
        items: [
          {
            text: 'Create Recurring Invoice',
            link: '/parts/recurring-invoices/create-recurring-invoice/',
          },
          {
            text: 'Get Recurring Invoices clients address list',
            link: '/parts/recurring-invoices/get-recurring-invoices-clients-address-list/',
          },
          {
            text: 'Send Indication Values',
            link: '/parts/recurring-invoices/send-indication-values/',
          },
          {
            text: 'Get list of Recurring Invoices',
            link: '/parts/recurring-invoices/get-list-of-recurring-invoices/',
          },
          {
            text: 'Get Recurring Invoice details',
            link: '/parts/recurring-invoices/get-recurring-invoice-details/',
          }
        ]
      },
      {
        text: 'Purchase Invoices',
        link: '/parts/purchase-invoices/',
        collapsed: true,
        items: [
          {
            text: 'Get list of purchase invoices',
            link: '/parts/purchase-invoices/get-list-of-purchase-invoices/',
          },
          {
            text: 'Get purchase invoice details',
            link: '/parts/purchase-invoices/get-purchase-invoice-details/',
          },
          {
            text: 'Delete Purchase Invoice',
            link: '/parts/purchase-invoices/delete-purchase-invoice/',
          },
          {
            text: 'Create Purchase Invoice',
            link: '/parts/purchase-invoices/create-purchase-invoice/',
            collapsed: true,
            items: [
              {
                text: 'Example create purchase invoice',
                link: '/parts/purchase-invoices/create-purchase-invoice/example-create-purchase-invoice/',
              },
              {
                text: 'Example create purchase invoice with proportional VAT',
                link: '/parts/purchase-invoices/create-purchase-invoice/example-create-purchase-invoice-with-proportional-vat/',
              }
            ]
          },
          {
            text: 'Create Purchase Invoice Waiting Approval',
            link: '/parts/purchase-invoices/create-purchase-order/',
          },
          {
            text: 'Create Purchase Invoice Waiting Approval of Estonian e-invoice standard 1.2',
            link: '/parts/purchase-invoices/create-purchase-invoice-waiting-approval-of-estonian-e-invoice-standard-1-2/',
          }
        ]
      },
      {
        text: 'Inventory Movements',
        link: '/parts/inventory-movements/',
        collapsed: true,
        items: [
          {
            text: 'Get list of locations',
            link: '/parts/inventory-movements/get-list-of-locations/',
          },
          {
            text: 'Send Inventory Movements',
            link: '/parts/inventory-movements/send-inventory-movements/',
            collapsed: true,
          }
        ]
      },
      {
        text: 'Payments',
        link: '/parts/payments/',
        collapsed: true,
        items: [
          {
            text: 'List of Payments',
            link: '/parts/payments/list-of-payments/',
          },
          {
            text: 'List of Payment Types',
            link: '/parts/payments/list-of-payment-types/',
          },
          {
            text: 'Create Payment of sales invoice',
            link: '/parts/payments/create-payment/',
          },
          {
            text: 'Create Payment of purchase invoice',
            link: '/parts/payments/payment-of-purchase-invoice/',
          },
          {
            text: 'Create Payment of sales offer',
            link: '/parts/payments/create-payment-of-sales-offer/',
          },
          {
            text: 'Delete Payment',
            link: '/parts/payments/delete-payment/',
          }
        ]
      },
      {
        text: 'General Ledger Transactions',
        link: '/parts/general-ledger-transactions/',
        collapsed: true,
        items: [
          {
            text: ('Creating General Ledger Transactions'),
            link: '/parts/general-ledger-transactions/creating-general-ledger-transactions/',
          },
          {
            text: 'Get list of GL Transactions',
            link: '/parts/general-ledger-transactions/get-list-of-gl-transactions/',
          },
          {
            text: 'Getting GL Transaction Details',
            link: '/parts/general-ledger-transactions/getting-gl-transaction-details/',
          },
          {
            text: 'Getting GL Transactions Full Details',
            link: '/parts/general-ledger-transactions/getting-gl-transactions-full-details/',
          }
        ]
      },
      {
        text: 'Tax list',
        link: '/parts/tax-list/',
      },
      {
        text: 'Send Tax',
        link: '/parts/send-tax/',
      },
      {
        text: 'Customers',
        link: '/parts/customers/',
        collapsed: true,
        items: [
          {
            text: 'Get Customer List',
            link: '/parts/customers/get-customer-list/',
          },
          {
            text: 'Create Customer',
            link: '/parts/customers/create-customer/',
          },
          {
            text: 'Update Customer',
            link: '/parts/customers/update-customer/',
          }
        ]
      },
      {
        text: 'Vendors',
        link: '/parts/vendors/',
        collapsed: true,
        items: [
          {
            text: 'Get Vendor List',
            link: '/parts/vendors/get-vendor-list/',
          },
          {
            text: 'Create Vendor',
            link: '/parts/vendors/create-vendor/',
          },
          {
            text: 'Update Vendor',
            link: '/parts/vendors/update-vendor/',
          }
        ]
      },
      {
        text: 'Accounts List',
        link: '/parts/accounts-list/',
      },
      {
        text: 'Project List',
        link: '/parts/project-list/',
      },
      {
        text: 'Cost Centers List',
        link: '/parts/cost-centers-list/',
      },
      {
        text: 'Dimensions',
        link: '/parts/dimensions/',
        collapsed: true,
        items: [
          {
            text: 'Get Dimensions List',
            link: '/parts/dimensions/dimensionslist/',
          },
          {
            text: 'Add Dimensions',
            link: '/parts/dimensions/add-dimensions/',
          },
          {
            text: 'Add Dimensions Values',
            link: '/parts/dimensions/add-dimensions-values/',
          }
        ]
      },
      {
        text: 'Departments List',
        link: '/parts/departments-list/',
      },
      {
        text: 'Sales prices and discounts',
        link: '/parts/sales-prices-and-discounts/',
        collapsed: true,
        items: [
          {
            text: 'Send prices',
            link: '/parts/sales-prices-and-discounts/send-prices/',
          },
          {
            text: 'Send discounts',
            link: '/parts/sales-prices-and-discounts/send-discounts/',
          },
          {
            text: 'Get prices',
            link: '/parts/sales-prices-and-discounts/get-prices/',
          },
          {
            text: 'Get discounts',
            link: '/parts/sales-prices-and-discounts/get-discounts/',
          },
          {
            text: 'Get Price',
            link: '/parts/sales-prices-and-discounts/get-price/',
          }
        ]
      },
      {
        text: 'Units of Measure List',
        link: '/parts/units-of-measure-list/',
      },
      {
        text: 'Banks List',
        link: '/parts/banks-list/',
      },
      {
        text: 'Financial Years',
        link: '/parts/financial-years/',
      },
      {
        text: 'Items',
        link: '/parts/items/',
        collapsed: true,
        items: [
          {
            text: 'Items List',
            link: '/parts/items/items-list/',
          },
          {
            text: 'Item Groups',
            link: '/parts/items/get-item-groups/',
          },
          {
            text: 'Add Items',
            link: '/parts/items/add-items/',
          },
          {
            text: 'Add Item groups',
            link: '/parts/items/add-item-groups/',
          },
          {
            text: 'Update Item',
            link: '/parts/items/update-item/',
          }
        ]
      },
      {
        text: 'Reports',
        link: '/parts/reports/',
        collapsed: true,
        items: [
          {
            text: 'Customer Debts Report',
            link: '/parts/reports/customer-debts-report/',
          },
          {
            text: 'Customer Payment Report',
            link: '/parts/reports/customer-payment-report/',
          },
          {
            text: 'Statement of Profit or Loss',
            link: '/parts/reports/income-statement/',
          },
          {
            text: 'Statement of Financial Position',
            link: '/parts/reports/balance-sheet/',
          },
          {
            text: 'Get Inventory Report',
            link: '/parts/reports/get-inventory-report/',
          },
          {
            text: 'Sales Report',
            link: '/parts/reports/sales-report/',
          },
          {
            text: 'Purchase Report',
            link: '/parts/reports/purchase-report/',
          }
        ]
      }
    ]
  }
];