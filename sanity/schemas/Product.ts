export default {
    name: 'Product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type:'string',
            title: 'Name of Product',
        },
    {
        name: 'image',
        type:'array',
        title: 'Product Image',
        of:[{type: 'image'}],
    },
    {
        name: 'description',
        type: 'text',
        title: 'Description of Product',
    },
    {
        name: 'slug',
        type: 'slug',
        title: 'Product slug',
        options:{
            source: 'name',
        }
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number',
    },
    {
        name: 'price_id',
        title: 'Stripe Price ID',
        type: 'string',
    },
    {
        name: 'category',
        title: 'Product Category',
        type:'reference',
        to: { type: 'category' },
    }
    ]
}