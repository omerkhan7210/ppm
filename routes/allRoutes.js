
const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.render("index",{title:"Home"});
})

//ABOUT
app.get("/about",(req,res)=>{
    res.render("about",{title:"About us"});
})
app.get("/about-us",(req,res)=>{
    res.redirect("/about");
})

//UPCOMING EVENTS
app.get("/upcoming-events",(req,res)=>{
    res.render("upcoming-event",{title:"Upcoming Events"});
})
app.get("/upcomingevents",(req,res)=>{
    res.redirect("/upcoming-events");
})

//PAST EVENTS
app.get("/past-events",(req,res)=>{
    res.render("past-events",{title:"Past-Events"});
})
app.get("/pastevents",(req,res)=>{
    res.redirect("/past-events");
})

//SERVICES
app.get("/services",(req,res)=>{
    res.render("services",{title:"Services"});
})
app.get("/service",(req,res)=>{
    res.redirect("/services");
})

//CONTACT
app.get("/contact",(req,res)=>{
    res.render("contact",{title:"Contact us"});
})
app.get("/contact-us",(req,res)=>{
    res.redirect("/contact");
})

//ARTICLES
app.get("/articles",(req,res)=>{
    res.render("article",{title:"Articles"});
})
app.get("/article",(req,res)=>{
    res.redirect("/articles");
})

//BOOKS
app.get("/books",(req,res)=>{
    res.render("books",{title:"Books"});
})
app.get("/book",(req,res)=>{
    res.redirect("/books");
})

module.exports = app;