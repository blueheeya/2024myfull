const faker = require("faker");
const User = require("./src/models/User");
const {hash} = require("bcryptjs");
const { Blog } = require("./src/models/Blog");

const getFaker =  async(userCount,blogsCounter)=>{
    const users=[];
    const blogs=[];
    const password = await hash ("111111",10)
    for(let i=0; i <userCount;i++){
        users.push(
            new User({
                name:faker.internet.userName(),
                email:faker.internet.email(),
                password,
                role:0,
                createdAt:Date.now()
            })
        )
    }
    users.map((user)=>{
        for (let i=0; i<blogsCounter; i++){
            blogs.push(
                new Blog({
                    title:faker.lorem.words(),
                    content:faker.lorem.paragraphs(),
                    isLive:true,
                    user
                })
            )
        }  
    })
    console.log("faker data start")
    await User.insertMany(users)
    await Blog.insertMany(blogs)
    console.log(blogs)
    console.log("complete")

}
// async function getFaker (){} //함수일때만 async를 붙힐수 있다
getFaker();
module.exports = {getFaker}