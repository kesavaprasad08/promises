const posts = [
    {title :'Post one', body :'this is post one',createAt :new Date().getTime()},
    {title :'Post two', body :'this is post two',createAt :new Date().getTime() }
    ];
    let interval =0;


    function getPosts() {
        clearInterval(interval);
        interval = setInterval (() =>{
        let output ='';
        for(let i=0;i<posts.length;i++){
            output +=`<li>${posts[i].title}-last updated ${(new Date().getTime()-posts[i].createAt)/1000} seconds ago</li>`;
        };
        document.body.innerHTML=output;
    },1000)
    }


    function createPost(post3) {
        return new  Promise((resolve,reject) => {
            setTimeout ( () => {
                posts.push({...post3,createAt:new Date().getTime()});
                const err = false;
                if(!err){
                    resolve();
                }
                    else{
                        reject('error something went wrong');
                    }                   
            },1000);
        });        
    }

function deletePost(){
    return new Promise((resolve,reject) =>{
        setTimeout( () => {
            if(posts.length>0){
                posts.pop();
                resolve();
            }
            else {
                reject('array is empty now');
            }
            },1000);
    });
}


    createPost({ title :'Post three', body :'this is post three'})
    .then(() => {
        getPosts()
        deletePost().then (() =>{
            getPosts();
            deletePost().then(() => { 
                getPosts();
                deletePost().then(() => { 
                getPosts();
                deletePost().then(() => {})
                .catch((err) =>{
                    console.log('inside catch block',err)
                })
                .catch((err) =>{
                    console.log('inside catch block',err)
                })
                })
                .catch((err) =>{
                    console.log('inside catch block',err)
                })
            })
            .catch((err) =>{
                console.log('inside catch block',err)
            }) 
        })
        .catch((err) =>{
            console.log('inside catch block',err)
        })
    });

    function updateLastUserActivityTime() {
        return new Promise((resolve,reject)=>{
        setTimeout ( () => {
        console.log(`User last activity time is ${new Date()}`);
        const errr = false;
                if(!errr){
                    resolve();
                }
                    else{
                        reject('error something went wrong');
                    }  
        }, 1000);
    });
    };

function consoleLogPost(){
    setTimeout(() => {
        console.log(posts);
    }, 1000);
}




    // createPost({ title : 'post four',body :'this is post four'})
    // .then(() =>{
    //     getPosts();
    //     deletePost()
    // })
    // .catch((err) =>{
    //     console.log('inside catch block',err)
    // });

    getPosts();

    createPost({ title : 'post five',body :'this is post five'})
    .then(() =>{
        getPosts()
        consoleLogPost()
            updateLastUserActivityTime()    
            
                deletePost()
                .then(()=>
                consoleLogPost())
                .then(()=>
                updateLastUserActivityTime())
            
    })
    .catch((err) =>{
        console.log('inside catch block',err)
    });

    

//     Promise.all([createPost,deletePost])
    
//         .then(()=>{
//             setTimeout(() => {
                
            
//     updateLastUserActivityTime()    
// }, 1000);
// });