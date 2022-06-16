const axios = require('axios');


exports.homeRoutes = (req, res) => {
     // Make a get request to /api/users // exports this function so you can use it in other files
    axios.get('https://crud-app-sales.herokuapp.com/')
        .then(function(response){
            res.render('index', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_user = (req, res) =>{
    res.render('add_user');
}

// this returns all data from DB into the form for updating

exports.update_user = (req, res) =>{
    axios.get('https://crud-app-sales.herokuapp.com/', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_user", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}