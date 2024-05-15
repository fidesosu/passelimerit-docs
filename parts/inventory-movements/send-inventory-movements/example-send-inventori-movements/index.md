# Example: Send Inventory Movements
```json
{     
  DocDate:"20200831",     
  DocNo:"LL-4",     
  Location1Code:"1",     
  Location2Code:"2",
  DepartmentCode:"Netti",     
  Type:3,     
  Rows: [     
    {       
      ArticleCode:"lamp",
      UOMName: "tk",
      ItemUnitCost: 1.50,       
      Quantity: 10     
    },     
    {       
    ArticleCode:"pirn60w",
    UOMName: "tk",
    ItemUnitCost: 2.00,       
    Quantity: 10     
    }    
  ] 
}
```