const login= (email,passwd, callback)=>{
  var err='';
  var bd_data='';// sumula la inf proveniente de bd
  if (email== "joe@doe.com"&& passwd== '1234') {
    //consultar en bd info faltante
    bd_data={
      'email'=email,
      'depto':'Ventas'
      'phone':'5544332211'
    }
  } else {
    err={'mensaje':"Credencuales incorrectas"}

  }
} //const login = function(){}
exports.login ) login;
