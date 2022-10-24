import axios from 'axios';

async function getData(userId){

    const { data : user } = await (axios ('https://jsonplaceholder.typicode.com/users/' + userId));

    console.log(user);
    console.log('*************************************************************************************')
    const { data : post} = await (axios ('https://jsonplaceholder.typicode.com/posts?userId=' + userId));

    console.log(post);
}

export default getData;