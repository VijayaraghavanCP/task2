const express=require('express');
const mysql=require('mysql');
const bodyparser=require('body-parser');
const encoder=bodyparser.urlencoded({extended:false});
let tn='';
let uname='',pu='',dp='';
function tnameglobal(tname)
{
    tn=tname;
};
function dataglobal(username,pickup,droppt)
{
uname=username;
pu=pickup;
dp=droppt;
}

const connection=mysql.createConnection(
    {
        host:"localhost",
        port:3306,
        user:"root",
        password:"password",
        database: "task2"

    }
);
connection.connect(function(error){

    if (error) throw error
    else
    {
        console.log('connected');
    }
    
});
const app=express();
app.set('view engine','ejs');
app.set('views','views');

const path=require('path');
    app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'pages','homepage.html'));
   
    });
    app.post('/create',encoder,(req,res)=>{
        console.log("working");
       let tname=req.body.tablename;
       tnameglobal(tname);
       let q=`CREATE TABLE ${tname} (name char(30),pickup char(12),droppt char(12))`;
  
       //let q='TRUNCATE TABLE buses;';
        
    //    let q='SELECT * FROM buses';
        connection.query(q,function(err,reslt){
            
                if(err) throw err
                else{
                

    
            console.log(reslt);}
        });
        res.redirect('/home');
            
    });
    app.post('/insert',encoder,(req,res)=>
    {
        // console.log('insert values');
        let username=req.body.user;
        let pickup=req.body.pickup;
        let droppt=req.body.droppt;
        dataglobal(username,pickup,droppt);

        
        let q2=`INSERT INTO ${tn} VALUES ('${username}','${pickup}','${droppt}')`;
        
        connection.query(q2,function(error,result){
            if(error) throw error
            else{
                console.log('succesfully inserted');
            }
        });
        res.redirect('/home');
        
    });
    app.post('/data',encoder,(req,res)=>{
        res.render('datapage',{tablename:tn,dataname:uname,pickup:pu,drop:dp});
    });
       
    

    
    


app.listen(3000);