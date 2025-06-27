const usersList = [
    {userId: 1, userName: 'admin', password:'admin'},
    {userId: 2, userName: 'user', password:'user'},
]


export function authenticate(user) { 
    let matched = usersList.filter(
        c=>c.userName===user.userName && c.password===user.password
    ); 
    //console.log('db', matched);
    if(matched.length) //check whether the items exist
    {
        return matched[0];
    } else { 
        return null;
    }
}