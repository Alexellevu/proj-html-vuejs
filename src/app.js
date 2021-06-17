const app = new Vue({
    el:'#app',
    data:{
        linkNav:['Home','About us','Feature','Testimonials','Contact US'],
        features:[
            {name:'Customized invoices',image:'_1'},
            {name:'Stock Management',image:'_2'},
            {name:'Receivable & Payables',image:'_3'},
            {name:'Manage Buying',image:'_4'},
            {name:'Powerful & Secure',image:'_5'},
            {name:'Fastest Returnig Filing',image:'_6'},
            {name:'Monthly Detailed',image:'_7'},
            {name:'Product Management',image:'_8'}
        ],
        
        posts:[
        {title:'Life Lack Meaning',text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit sapiente corporis nesciunt beatae optio reiciendis, porro fugiat laborum temporibus quia.', img:'_1',date:'June 15,2021'},
        {title:'Life Lack Meaning',text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit sapiente corporis nesciunt beatae optio reiciendis, porro fugiat laborum temporibus quia.', img:'_2',date:'June 17,2021'},
        {title:'Life Lack Meaning',text:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit sapiente corporis nesciunt beatae optio reiciendis, porro fugiat laborum temporibus quia.', img:'_3',date:'June 18,2021'}
    ]
        
    },

    

    methods:{
        
    }
})