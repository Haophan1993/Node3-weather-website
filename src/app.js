const path=require('path')
const express = require('express')
const hbs=require('hbs')



const app = express()
const port= process.env.PORT || 3000
// Define paths for Express config
const publicDirectoryPath= path.join(__dirname, '../public')
const viewPath=path.join(__dirname, '../templates/views')
const partialsPath=path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views locations
app.set('view engine', 'hbs')
app.set('views', viewPath )
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))



app.get('', (req, res)=>{
    res.render('index', 
    {title:'Weather app', name:'Hao Phan'})
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About Page',
        name:'Hao Phan'
    })
})

app.get('/help', (req, res)=>{
    res.render('help',{
        title:'Help Page',
        name:'Hao Phan',
        helpText:'This is help text'
    })
})

app.get('/weather',(req, res)=>{

    if(!req.query.address)
    {return res.send({
        error:'You must privide an address'
    })}

    res.send({forecast:'It is snowing', location: 'acd', address: req.query.address})
})


app.get('/product', (req, res)=>
{

    if(!req.query.search){
        return res.send({error:'You must provide a search term'})
    }

    
    res.send({product:[]})
})



app.get('/help/*', (req, res)=>{
    res.render('404page',
        {
        title:'404 Page',
        name:'Hao Phan',
        errorMessage:'Help Article not found'
        }
    )
})

app.get('*', (req, res)=>{
    res.render('404page',
        {
        title:'404 Page',
        name:'Hao Phan',
        errorMessage:'Page not found'
        }
    )
})



app.listen(port, ()=>{
    console.log('Server is up on port' + port)
})