

export default {
    name:'blog',
    title:'Blog',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Blog Title',
            type:'string',
        },
        {
            name:'slug',
            title:'Slug of blog article',
            type:'slug',
            options:{
                source:'title'
            },
        },
        {
            name:'titleImage',
            title:'Title Image',
            type:'image',
        },
        {
            name:'description',
            title:'Description',
            type:'text',
        },
        {
            name:'content',
            title:'Content',
            type:'array',
            of: [
                {
                    type:'block',
                },
            ],
        },
    ],
}