# Delete Invoice

---
:::info How To Use:
To delete an invoice you only need the `SIHId` from the invoice and use it as the `Id`.<br>

Use [<!--@include: @/dist/md/api_url.md-->v1/getinvoices`](../get-list-of-invoices/) to get the `SIHId`
:::

## Endpoints
<!--@include: @/dist/md/api_url.md-->v1/deleteinvoice`

## Query Payload
```json
{ 
  Id: "xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx" 
}
```