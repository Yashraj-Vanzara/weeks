// ! Axios

import axios,{AxiosResponse} from "axios";

interface Todo {   
    userId:number;
    id:number;
    title:string;
    completed:boolean;
}

// axios.get("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
//   console.log(response.data);
// })

async function fetchTodo(){
    try {
        const response:AxiosResponse<Todo> = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("Axios error message: ", error.message);            
    }

    if(error instanceof Error){
        console.log("Generic error message: ", error.message);
    }
    
}}


//  ! Using fetch API

async function fetchTodoWithFetchAPI(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data:Todo = await response.json();
    console.log(data);
}