# USE CASES

> ## Create Message Object

### ***Data***
```
Message Object Structure

{
    cpf_cnpj?: string,
    variables: {
        cpf_cnpj?: string,
        name?: string
    },
    number: string,
    scheduled_at: Date,
    smsmailing_id: number,
    client_id: number,
    smsbatch_id: number,
    account_id: number,
    type: string,
    message: string,
    core_status: number,
    bill_factor: number,
    created_at: Date,
    status: number,
    carrier_id: number,
    priority: number,
    priority_message: number,
    category_id: number,
    send_type_id: number,
    product_id: number,
    core_route: number,
    client_slug: string,
    flash: number,
    queue_status: number
}
```

### ***Primary Flow***
1. Get message data to build message 
2. Return valid message object (*vide* **Data**)
---
<br />

> ## Prepare 

### ***Data***
```
{
    batchStartDate: Date,
    batchEndDate: Date,
    batchEndDateOriginal: Date,
    quantity: number,
    equalizer: number,
    startToEndDiff: number,
    batchQuantity: number
}
```

### ***Primary Flow***
1. Get data to prepare (*vide* **Data**)
2. Return valid Date

> ## Get Message Variables

### ***Primary Flow***

1. Receive contact variables
2. Return message variables