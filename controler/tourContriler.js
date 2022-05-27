const fs=require('fs')
var toues=JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))
exports.Check=(req,res,next)=>{
    console.log(req.body.price)
    console.log("hi")
    if(!req.body.name||!req.body.price)
        return  res.send("please provide valid details")
    next()
}

exports.getall=(req,res)=>{
    res.status(200).json(toues)
}
exports.addtoures=(req,res)=>{
   try{ const newid=toues[toues.length-1].id+1

    

    //IDS=JSON.parse(JSON.stringify(newid))
    newtour=Object.assign({id:newid},req.body)
    toues.push(newtour)

    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(toues),(req,res)=>{
        reslut="user is updated"
    })
    res.send("user is added")
}
catch(err)
{
    res.send("server Error")
}
}
exports.getone=(req,res)=>{
  try{  const id=req.params.id*1;

    const user=toues.find(u=>{ return u.id===id})

     
    res.status(200).json(user)
  }
  catch(err){
      res.send("server error")
  }
}

exports.delete=(req,res)=>{
    try{const id1=req.params.id*1;

    const toue=toues.filter(u=>{ return u.id!=id1})
    toues=toue
    res.send("user is deleted")
    }
    catch(err){
        res.send("serve error")
    }
}
exports.update=(req,res)=>{
   try{ const id1=req.params.id*1;
    const tempu=toues.filter(u=>{ return u.id!=id1})
    toues=tempu;
    newuser=Object.assign({id:id1},req.body)
    toues.push(newuser)
    fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`,JSON.stringify(toues),(req,res)=>{
        reslut="user is updated"
    })
    res.send("user is updated")}
    catch(err){
        res.send("server error")
    }
}
exports.ValidId=(req,res,next)=>{
    const id=req.params.id*1
    if(id>toues.length)
      return res.send("soryy incorrect id")
    next()

}
