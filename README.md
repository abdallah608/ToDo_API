# ToDo_API

https://todoapi-u5oz.onrender.com

handle user routers :

/user/signup (POST)  ==>{name-email-password-confirmPassword-age-mobileNumber}

/user /verify/:token  (GET) 

/user /signIn (POST) ===>{email-password}

/user /update  (PUT) ==> {_id,mobileNumber,name , token}

/user /delete  (Delete) ==>{_id,token}

/user /softDeleted  (Delete)==>{_id,token}

/user /changePassword (PUT) ==> {email-password,token}

/user /forgetPassword (POST) ==>{email} ==>{newPassword,code}

/user /resetPassword/:token (GET)

/user /logout (PUT) ==>{token,_id}

Handle ToDo routers :

/todo/add  (POST)====>{title,description,createdBy,token}

/todo/get  (GET)====>{token}

/todo/updateTodo   (PUT)====>{title,description,_id,token}

/todo/updateStatus  (PUT)====>{status,_id,token}


/todo/updateAllTodo  (PUT) ====> {status,createdBy,token}

/todo/deleteTodo  (DELETE) ====>{_id,token}

/todo/deleteAll  (DELETE) ====>{createdBy,token}

/todo/search (GET) ===>{title,token}
